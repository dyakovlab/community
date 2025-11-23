import { NextRequest, NextResponse } from 'next/server';
import { mockEvents } from '@/lib/mock-data';
import { PaginatedResponse, Event } from '@/types';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get('page') || '1');
  const pageSize = parseInt(searchParams.get('pageSize') || '6');
  const upcoming = searchParams.get('upcoming') === 'true';

  let filteredEvents = [...mockEvents];

  if (upcoming) {
    const now = new Date();
    filteredEvents = filteredEvents.filter(event => new Date(event.date) >= now);
  }

  // Sort by date (soonest first)
  filteredEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Pagination
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedEvents = filteredEvents.slice(startIndex, endIndex);

  const response: PaginatedResponse<Event> = {
    data: paginatedEvents,
    pagination: {
      page,
      pageSize,
      totalPages: Math.ceil(filteredEvents.length / pageSize),
      totalItems: filteredEvents.length,
    },
  };

  return NextResponse.json(response);
}

