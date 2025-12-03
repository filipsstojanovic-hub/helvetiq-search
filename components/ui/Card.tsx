import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`
        bg-alpine-white
        border-2 border-frost-silver
        p-8
        ${hover ? 'hover:shadow-lg hover:border-alpine-blue transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
