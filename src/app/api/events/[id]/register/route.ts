import { NextRequest, NextResponse } from 'next/server';
import { mockEvents } from '@/lib/mock-data';
import { EventRegistration } from '@/types';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const event = mockEvents.find(e => e.id === id);

  if (!event) {
    return NextResponse.json(
      { error: 'Event not found' },
      { status: 404 }
    );
  }

  const body: EventRegistration = await request.json();

  // Validate required fields
  if (!body.name || !body.email) {
    return NextResponse.json(
      { error: 'Name and email are required' },
      { status: 400 }
    );
  }

  // Check if event is full
  if (event.registered >= event.capacity) {
    return NextResponse.json(
      { error: 'Event is full' },
      { status: 400 }
    );
  }

  // In a real app, you would save this to a database
  // For now, we'll just return a success message
  return NextResponse.json({
    success: true,
    message: 'Successfully registered for the event',
    registration: {
      eventId: id,
      eventTitle: event.title,
      name: body.name,
      email: body.email,
    },
  });
}

