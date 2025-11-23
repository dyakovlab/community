import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';
import { Card } from '@/components/ui/Card';

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <Card hover>
        <div className="relative h-48 w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="flex-1 text-sm">
              <p className="font-medium text-gray-900">{post.author.name}</p>
              <p className="text-gray-500 text-xs">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
                {' · '}
                {post.readTime}
              </p>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
        </div>
      </Card>
    </Link>
  );
};

