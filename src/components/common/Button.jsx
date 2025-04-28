
import React from 'react';


export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  fullWidth = false,
  disabled = false,
  onClick,
  className = '',
  ...props 
}) => {
  const getVariantStyles = () => {
    switch(variant) {
      case 'primary':
        return 'bg-blue-600 hover:bg-blue-700 text-white';
      case 'secondary':
        return 'bg-orange-500 hover:bg-orange-600 text-white';
      case 'outline':
        return 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50';
      case 'ghost':
        return 'bg-transparent text-blue-600 hover:bg-blue-50';
      case 'success':
        return 'bg-green-500 hover:bg-green-600 text-white';
      case 'danger':
        return 'bg-red-500 hover:bg-red-600 text-white';
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white';
    }
  };

  const getSizeStyles = () => {
    switch(size) {
      case 'sm':
        return 'text-sm py-1 px-3';
      case 'md':
        return 'text-base py-2 px-4';
      case 'lg':
        return 'text-lg py-3 px-6';
      default:
        return 'text-base py-2 px-4';
    }
  };

  return (
    <button
      className={`
        font-medium rounded-md transition-all duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
        ${getVariantStyles()}
        ${getSizeStyles()}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};