'use client';

import React, { useEffect, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { EventCard } from '@/components/events/EventCard';
import { Pagination } from '@/components/ui/Pagination';
import { Event, PaginatedResponse } from '@/types';

export default function EventsPage() {
  const [eventsData, setEventsData] = useState<PaginatedResponse<Event> | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/events?page=${currentPage}&pageSize=6&upcoming=true`);
        const data = await response.json();
        setEventsData(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-16 md:py-24 bg-gray-50 min-h-screen">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Community Events
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for support groups, workshops, wellness activities, and community gatherings. 
            All events are free and open to everyone.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-pulse"
              >
                <div className="h-48 bg-gray-200" />
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-32 mb-3" />
                  <div className="h-6 bg-gray-200 rounded mb-2" />
                  <div className="h-4 bg-gray-200 rounded mb-4" />
                  <div className="h-4 bg-gray-200 rounded w-48" />
                </div>
              </div>
            ))}
          </div>
        ) : eventsData?.data.length ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventsData.data.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={eventsData.pagination.totalPages}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No upcoming events found.</p>
          </div>
        )}
      </Container>
    </div>
  );
}

