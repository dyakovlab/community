import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Event } from '@/types';
import { Card } from '@/components/ui/Card';

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const spotsLeft = event.capacity - event.registered;
  const isAlmostFull = spotsLeft <= 5;

  return (
    <Link href={`/events/${event.id}`}>
      <Card hover>
        <div className="relative h-48 w-full">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
              {event.category}
            </span>
          </div>
          {isAlmostFull && spotsLeft > 0 && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                {spotsLeft} spots left
              </span>
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
            <svg
              className="w-4 h-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>
              {new Date(event.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span>·</span>
            <span>{event.time}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {event.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg
              className="w-4 h-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="line-clamp-1">{event.location}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

