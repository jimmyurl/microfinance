// TextField.jsx - Branch-style text input component
import React from 'react';

export const TextField = ({
  label,
  value,
  onChange,
  placeholder,
  helper,
  error,
  type = 'text',
  fullWidth = true,
  className = '',
  ...props
}) => {
  return (
    <div className={`mb-4 ${fullWidth ? 'w-full' : ''} ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          block w-full px-3 py-2 border rounded-md shadow-sm
          text-gray-800 placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition-all duration-200
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
        {...props}
      />
      {helper && !error && (
        <p className="mt-1 text-sm text-gray-500">{helper}</p>
      )}
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};