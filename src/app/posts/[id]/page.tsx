import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Post } from '@/types';

async function getPost(id: string): Promise<Post | null> {
  try {
    const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      return null;
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-16 md:py-24 bg-white">
      <Container>
        {/* Back Button */}
        <Link href="/posts" className="inline-block mb-8">
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
            Back to Posts
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="px-3 py-1 bg-emerald-600 text-white text-sm font-semibold rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={56}
              height={56}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-900">{post.author.name}</p>
              <p className="text-gray-600 text-sm">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
                {' · '}
                {post.readTime}
              </p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              // Handle headings
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

              // Handle list items
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

              // Handle numbered lists
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

              // Regular paragraphs
              return (
                <p key={index} className="text-gray-700 text-lg leading-relaxed mb-6">
                  {paragraph.replace(/\*\*(.*?)\*\*/g, '$1')}
                </p>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-16 p-8 bg-emerald-50 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Your Story Matters
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Every journey is unique, and your experience could help someone feel less alone. 
              Join our community and share your story of hope.
            </p>
            <Link href="/events">
              <Button size="lg">Join Our Community</Button>
            </Link>
          </div>
        </div>
      </Container>
    </article>
  );
}

