import { NextRequest, NextResponse } from 'next/server';
import { mockPosts } from '@/lib/mock-data';
import { PaginatedResponse, Post } from '@/types';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get('page') || '1');
  const pageSize = parseInt(searchParams.get('pageSize') || '6');
  const featured = searchParams.get('featured') === 'true';

  let filteredPosts = [...mockPosts];

  if (featured) {
    filteredPosts = filteredPosts.filter(post => post.featured);
  }

  // Sort by date (newest first)
  filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Pagination
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  const response: PaginatedResponse<Post> = {
    data: paginatedPosts,
    pagination: {
      page,
      pageSize,
      totalPages: Math.ceil(filteredPosts.length / pageSize),
      totalItems: filteredPosts.length,
    },
  };

  return NextResponse.json(response);
}

