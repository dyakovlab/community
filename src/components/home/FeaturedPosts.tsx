'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { PostCard } from '@/components/posts/PostCard';
import { Post } from '@/types';

export const FeaturedPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts?featured=true&pageSize=5');
        const data = await response.json();
        setPosts(data.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, posts.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, posts.length - 2)) % Math.max(1, posts.length - 2));
  };

  if (posts.length === 0) {
    return null;
  }

  return (
    <Section background="gray">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Featured Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real stories of hope, resilience, and recovery from our community
            </p>
          </div>
          <Link href="/posts" className="hidden md:block">
            <Button variant="outline">View All Posts</Button>
          </Link>
        </div>

        {/* Desktop: Carousel */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3 + 2)}%)` }}
            >
              {posts.map((post) => (
                <div key={post.id} className="flex-shrink-0 w-1/3">
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          </div>

          {posts.length > 3 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-emerald-50 transition-colors z-10"
                aria-label="Previous posts"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-emerald-50 transition-colors z-10"
                aria-label="Next posts"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Mobile: Grid */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {posts.slice(0, 3).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/posts">
            <Button variant="outline">View All Posts</Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
};

