// Progress.jsx - Branch-style progress component
import React from 'react';

export const Progress = ({
  value,
  max = 100,
  label,
  showValue = true,
  size = 'md',
  variant = 'primary',
  className = '',
}) => {
  const percentage = Math.round((value / max) * 100);
  
  const getVariantStyles = () => {
    switch(variant) {
      case 'primary':
        return 'bg-blue-600';
      case 'secondary':
        return 'bg-orange-500';
      case 'success':
        return 'bg-green-500';
      case 'danger':
        return 'bg-red-500';
      case 'warning':
        return 'bg-yellow-500';
      default:
        return 'bg-blue-600';
    }
  };
  
  const getSizeStyles = () => {
    switch(size) {
      case 'sm':
        return 'h-1';
      case 'md':
        return 'h-2';
      case 'lg':
        return 'h-3';
      default:
        return 'h-2';
    }
  };
  
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          {showValue && <span className="text-sm font-medium text-gray-500">{percentage}%</span>}
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${getSizeStyles()}`}>
        <div 
          className={`${getVariantStyles()} rounded-full ${getSizeStyles()}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};