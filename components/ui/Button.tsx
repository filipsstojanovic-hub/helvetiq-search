import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseStyles = 'font-sans font-bold transition-all duration-300 ease-out';

  const variants = {
    primary: 'bg-alpine-blue text-alpine-white hover:bg-opacity-90 active:scale-[0.98]',
    secondary: 'border-2 border-swiss-graphite text-swiss-graphite hover:bg-swiss-graphite hover:text-alpine-white',
    text: 'text-alpine-blue hover:text-opacity-80 underline-offset-4 hover:underline',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
