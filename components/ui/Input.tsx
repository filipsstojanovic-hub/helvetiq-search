import React from 'react';

interface InputProps {
  label?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  className?: string;
  id?: string;
}

export default function Input({
  label,
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  className = '',
  id,
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-swiss-graphite"
        >
          {label}
          {required && <span className="text-accent-red ml-1">*</span>}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`
          px-4 py-3
          border-2 rounded-none
          font-sans text-base
          transition-all duration-200
          ${
            error
              ? 'border-accent-red focus:border-accent-red'
              : 'border-frost-silver focus:border-alpine-blue'
          }
          focus:outline-none
          placeholder:text-gray-400
        `}
      />
      {error && <span className="text-sm text-accent-red">{error}</span>}
    </div>
  );
}
