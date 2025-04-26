import React, { useEffect } from 'react';

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  className = '',
  ...props
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getSizeStyles = () => {
    switch(size) {
      case 'sm':
        return 'max-w-md';
      case 'md':
        return 'max-w-lg';
      case 'lg':
        return 'max-w-2xl';
      case 'xl':
        return 'max-w-4xl';
      case 'full':
        return 'max-w-full m-4';
      default:
        return 'max-w-lg';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div 
          className={`
            relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full
            ${getSizeStyles()}
            ${className}
          `}
          {...props}
        >
          {title && (
            <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
            </div>
          )}
          
          <div className="bg-white p-6">
            {children}
          </div>
          
          {footer && (
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 border-t border-gray-200">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};