import React from 'react';

export const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const getVariantStyles = () => {
    switch(variant) {
      case 'primary':
        return 'bg-blue-100 text-blue-800';
      case 'secondary':
        return 'bg-orange-100 text-orange-800';
      case 'success':
        return 'bg-green-100 text-green-800';
      case 'danger':
        return 'bg-red-100 text-red-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      case 'info':
        return 'bg-sky-100 text-sky-800';
      case 'gray':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const getSizeStyles = () => {
    switch(size) {
      case 'sm':
        return 'text-xs px-2 py-0.5';
      case 'md':
        return 'text-xs px-2.5 py-1';
      case 'lg':
        return 'text-sm px-3 py-1.5';
      default:
        return 'text-xs px-2.5 py-1';
    }
  };

  return (
    <span
      className={`
        inline-flex items-center font-medium rounded-full
        ${getVariantStyles()}
        ${getSizeStyles()}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
};