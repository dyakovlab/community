import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'emerald';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  background = 'white' 
}) => {
  const bgStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    emerald: 'bg-emerald-50',
  };

  return (
    <section className={`py-16 md:py-24 ${bgStyles[background]} ${className}`}>
      {children}
    </section>
  );
};

