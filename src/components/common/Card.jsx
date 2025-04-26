// Card.jsx - Branch-style card component
import React from 'react';

export const Card = ({ 
  children, 
  title,
  subtitle,
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`
        bg-white rounded-lg shadow-md overflow-hidden
        ${className}
      `}
      {...props}
    >
      {(title || subtitle) && (
        <div className="px-4 py-5 border-b border-gray-200">
          {title && <h3 className="text-lg font-semibold text-gray-800">{title}</h3>}
          {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
        </div>
      )}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};