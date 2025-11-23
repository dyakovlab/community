import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export const Mission: React.FC = () => {
  return (
    <Section background="emerald">
      <Container>
        <div id="mission" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            To create a world where mental health support is accessible, 
            stigma-free, and rooted in genuine human connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Build Community</h3>
            <p className="text-gray-600 leading-relaxed">
              Create meaningful connections between people who understand the journey 
              of mental health challenges. Together, we're stronger.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Provide Resources</h3>
            <p className="text-gray-600 leading-relaxed">
              Share valuable information, coping strategies, and professional resources 
              to empower individuals on their healing journey.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Raise Awareness</h3>
            <p className="text-gray-600 leading-relaxed">
              Break the stigma surrounding mental health by sharing stories, 
              educating others, and fostering open conversations.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-md max-w-2xl">
            <p className="text-lg text-gray-700 italic leading-relaxed">
              "Hope is being able to see that there is light despite all of the darkness. 
              In this community, we hold the light for each other when things feel dark."
            </p>
            <p className="text-emerald-600 font-semibold mt-4 mb-6">— Hope Community Values</p>
            <Link href="/manifest">
              <Button variant="outline" size="md">
                Read Our Full Manifesto
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

