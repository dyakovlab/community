export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  image: string;
  date: string;
  readTime: string;
  featured: boolean;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
  capacity: number;
  registered: number;
  organizer: {
    name: string;
    avatar: string;
  };
}

export interface EventRegistration {
  eventId: string;
  name: string;
  email: string;
  phone?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    totalPages: number;
    totalItems: number;
  };
}

