import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { Mission } from '@/components/home/Mission';
import { FeaturedPosts } from '@/components/home/FeaturedPosts';
import { UpcomingEvents } from '@/components/home/UpcomingEvents';
import { Contact } from '@/components/home/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Mission />
      <FeaturedPosts />
      <UpcomingEvents />
      <Contact />
    </>
  );
}
