import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-300 rounded-full opacity-20 blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
              Welcome to Hope Community
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            You Are Not Alone
            <span className="block text-emerald-600 mt-2">We Walk Together</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            A safe, supportive community where everyone belongs. Share your story, 
            find hope, and discover that healing happens together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events">
              <Button size="lg">
                Join Our Events
              </Button>
            </Link>
            <Link href="/posts">
              <Button variant="outline" size="lg">
                Read Stories
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Community Members</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Monthly Events</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Judgment-Free</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

