import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Our Manifesto - Hope Community',
  description: 'The Hope Community Manifesto: Our beliefs, values, and commitments to creating a supportive mental health community.',
};

export default function ManifestoPage() {
  return (
    <div className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                Our Manifesto
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The Hope Community
              <span className="block text-emerald-600 mt-2">Manifesto</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              These are the principles that guide us, the values we uphold, 
              and the commitments we make to each other.
            </p>
          </div>

          {/* Core Beliefs */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-2 h-10 bg-emerald-600 rounded-full"></span>
              We Believe
            </h2>
            
            <div className="space-y-8">
              <div className="pl-8 border-l-4 border-emerald-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Mental Health is Health
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  There is no health without mental health. We reject the stigma that surrounds 
                  mental illness and affirm that seeking support is a sign of strength, not weakness.
                </p>
              </div>

              <div className="pl-8 border-l-4 border-emerald-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  No One Should Walk Alone
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Isolation amplifies suffering. We believe in the transformative power of connection 
                  and the healing that happens when people support one another through difficult times.
                </p>
              </div>

              <div className="pl-8 border-l-4 border-emerald-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Everyone Has a Story Worth Sharing
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Your experiences matter. Whether you're struggling, recovering, or thriving, 
                  your story has the power to inspire hope and create understanding.
                </p>
              </div>

              <div className="pl-8 border-l-4 border-emerald-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Recovery is Possible
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  While the path isn't always linear, healing and growth are always possible. 
                  We believe in the resilience of the human spirit and the capacity for change.
                </p>
              </div>

              <div className="pl-8 border-l-4 border-emerald-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Community is Medicine
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Belonging to a supportive community has real, measurable benefits for mental health. 
                  Together, we create an environment where healing can flourish.
                </p>
              </div>
            </div>
          </section>

          {/* Our Commitments */}
          <section className="mb-16 bg-emerald-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-2 h-10 bg-emerald-600 rounded-full"></span>
              We Commit To
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
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
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Listen Without Judgment</h3>
                  <p className="text-gray-700">
                    Create safe spaces where people can share openly without fear of criticism.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
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
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Respect Confidentiality</h3>
                  <p className="text-gray-700">
                    Honor the privacy of community members and protect their stories.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
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
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Foster Inclusivity</h3>
                  <p className="text-gray-700">
                    Welcome people of all backgrounds, identities, and experiences.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
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
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Provide Resources</h3>
                  <p className="text-gray-700">
                    Share helpful information and connect people with professional support.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
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
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Celebrate Progress</h3>
                  <p className="text-gray-700">
                    Acknowledge every step forward, no matter how small it may seem.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
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
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Lead with Empathy</h3>
                  <p className="text-gray-700">
                    Approach every interaction with compassion and understanding.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
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
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Show Up Consistently</h3>
                  <p className="text-gray-700">
                    Be reliable and present for our community, especially in difficult times.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
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
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Advocate for Change</h3>
                  <p className="text-gray-700">
                    Work to reduce stigma and improve mental health awareness in society.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How We Show Up */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-2 h-10 bg-emerald-600 rounded-full"></span>
              How We Show Up
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-gray-900">In our events,</strong> we create welcoming spaces 
                where vulnerability is honored and authenticity is encouraged. We don't offer quick fixes 
                or unsolicited advice—we offer presence, understanding, and solidarity.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-gray-900">In our conversations,</strong> we speak with compassion 
                and listen with intention. We recognize that everyone's journey is unique, and we resist 
                the urge to compare or compete in suffering.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-gray-900">In our community,</strong> we acknowledge that mental 
                health is complex. We celebrate professional treatment, therapy, and medication as valid 
                and valuable tools. We are peer support, not a replacement for professional care.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-gray-900">In our impact,</strong> we measure success not in numbers, 
                but in moments of connection, in barriers broken, in hope rekindled, and in the knowledge 
                that one less person feels alone.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Join the Movement
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                This manifesto is more than words on a page. It's a living commitment that grows 
                with every person who joins our community. Will you be part of it?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/events">
                  <Button size="lg">
                    Attend an Event
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button variant="outline" size="lg">
                    Get Involved
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Signature */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 italic text-lg">
              "Hope is not the belief that everything will be okay. 
              <br className="hidden sm:block" />
              It's the belief that we can face whatever comes—together."
            </p>
            <p className="text-emerald-600 font-semibold mt-4 text-lg">
              — The Hope Community
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

