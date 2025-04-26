import React from 'react';

export const Alert = ({
  children,
  title,
  variant = 'info',
  onClose,
  className = '',
  ...props
}) => {
  const getVariantStyles = () => {
    switch(variant) {
      case 'info':
        return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'success':
        return 'bg-green-50 text-green-800 border-green-200';
      case 'warning':
        return 'bg-yellow-50 text-yellow-800 border-yellow-200';
      case 'danger':
        return 'bg-red-50 text-red-800 border-red-200';
      default:
        return 'bg-blue-50 text-blue-800 border-blue-200';
    }
  };

  return (
    <div
      className={`
        border-l-4 p-4 rounded-r-md
        ${getVariantStyles()}
        ${className}
      `}
      role="alert"
      {...props}
    >
      {title && (
        <h3 className="font-medium mb-1">{title}</h3>
      )}
      <div className="text-sm">
        {children}
      </div>
      {onClose && (
        <button
          type="button"
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          onClick={onClose}
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};