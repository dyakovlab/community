'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { EventCard } from '@/components/events/EventCard';
import { Event } from '@/types';

export const UpcomingEvents: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events?upcoming=true&pageSize=4');
        const data = await response.json();
        setEvents(data.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  if (events.length === 0) {
    return null;
  }

  return (
    <Section background="white">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600">
              Join us for support groups, workshops, and community gatherings
            </p>
          </div>
          <Link href="/events" className="hidden md:block">
            <Button variant="outline">View All Events</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.slice(0, 4).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/events">
            <Button variant="outline">View All Events</Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
};

