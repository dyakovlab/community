'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Event } from '@/types';

export default function EventDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`/api/events/${params.id}`);
        if (!response.ok) {
          router.push('/events');
          return;
        }
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error('Error fetching event:', error);
        router.push('/events');
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [params.id, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(`/api/events/${params.id}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventId: params.id,
          ...formData,
        }),
      });

      if (response.ok) {
        setRegistered(true);
        setShowRegistrationForm(false);
      } else {
        const error = await response.json();
        alert(error.error || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error registering:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (loading) {
    return (
      <div className="py-16 md:py-24 bg-white min-h-screen">
        <Container>
          <div className="max-w-4xl mx-auto animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-24 mb-8" />
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-6" />
            <div className="h-96 bg-gray-200 rounded-2xl mb-8" />
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          </div>
        </Container>
      </div>
    );
  }

  if (!event) {
    return null;
  }

  const spotsLeft = event.capacity - event.registered;
  const isFull = spotsLeft <= 0;

  return (
    <article className="py-16 md:py-24 bg-white">
      <Container>
        {/* Back Button */}
        <Link href="/events" className="inline-block mb-8">
          <Button variant="ghost" size="sm">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Back to Events
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="px-3 py-1 bg-emerald-600 text-white text-sm font-semibold rounded-full">
                {event.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {event.title}
            </h1>

            {/* Event Info */}
            <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2 text-gray-700">
                <svg
                  className="w-5 h-5 text-emerald-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">
                  {new Date(event.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-700">
                <svg
                  className="w-5 h-5 text-emerald-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">{event.time}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700">
                <svg
                  className="w-5 h-5 text-emerald-600"
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
                <span className="font-medium">{event.location}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-8">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {event.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-bold text-gray-900 mt-8 mb-4"
                    >
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }

                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n');
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 my-4">
                      {items.map((item, i) => (
                        <li key={i} className="text-gray-700">
                          {item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '$1')}
                        </li>
                      ))}
                    </ul>
                  );
                }

                if (/^\d+\./.test(paragraph)) {
                  const items = paragraph.split('\n');
                  return (
                    <ol key={index} className="list-decimal list-inside space-y-2 my-4">
                      {items.map((item, i) => (
                        <li key={i} className="text-gray-700">
                          {item.replace(/^\d+\.\s/, '')}
                        </li>
                      ))}
                    </ol>
                  );
                }

                return (
                  <p key={index} className="text-gray-700 text-lg leading-relaxed mb-6">
                    {paragraph.replace(/\*\*(.*?)\*\*/g, '$1')}
                  </p>
                );
              })}
            </div>

            {/* Organizer */}
            <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Organized By</h3>
              <div className="flex items-center gap-4">
                <Image
                  src={event.organizer.avatar}
                  alt={event.organizer.name}
                  width={56}
                  height={56}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">{event.organizer.name}</p>
                  <p className="text-sm text-gray-600">Event Organizer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {registered ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-6">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                    You're Registered!
                  </h3>
                  <p className="text-gray-700 text-center text-sm">
                    Check your email for event details and reminders.
                  </p>
                </div>
              ) : (
                <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Capacity</span>
                      <span className="font-semibold text-gray-900">
                        {event.registered} / {event.capacity}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-emerald-600 h-2 rounded-full transition-all"
                        style={{
                          width: `${(event.registered / event.capacity) * 100}%`,
                        }}
                      />
                    </div>
                    {!isFull && spotsLeft <= 10 && (
                      <p className="text-orange-600 text-sm mt-2">
                        Only {spotsLeft} spots left!
                      </p>
                    )}
                  </div>

                  {isFull ? (
                    <div className="text-center py-4">
                      <p className="text-gray-600 font-medium">This event is full</p>
                    </div>
                  ) : showRegistrationForm ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone (optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={submitting}
                      >
                        {submitting ? 'Registering...' : 'Complete Registration'}
                      </Button>

                      <button
                        type="button"
                        onClick={() => setShowRegistrationForm(false)}
                        className="w-full text-sm text-gray-600 hover:text-gray-900"
                      >
                        Cancel
                      </button>
                    </form>
                  ) : (
                    <Button
                      className="w-full"
                      size="lg"
                      onClick={() => setShowRegistrationForm(true)}
                    >
                      Register for Event
                    </Button>
                  )}
                </div>
              )}

              {/* Event Details Card */}
              <div className="bg-emerald-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Event Details</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-600 mb-1">Cost</dt>
                    <dd className="font-medium text-gray-900">Free</dd>
                  </div>
                  <div>
                    <dt className="text-gray-600 mb-1">Type</dt>
                    <dd className="font-medium text-gray-900">{event.category}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-600 mb-1">Accessibility</dt>
                    <dd className="font-medium text-gray-900">Wheelchair accessible</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}

