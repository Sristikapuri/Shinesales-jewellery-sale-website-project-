import React from 'react';

const Card = ({ 
  children, 
  title, 
  subtitle,
  variant = 'default',
  className = '',
  ...props 
}) => {
  const variantClasses = {
    default: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-lg border border-gray-200',
    outlined: 'bg-transparent border-2 border-[#C6A27E]',
    primary: 'bg-[#C6A27E] text-white',
    secondary: 'bg-[#B89D79] text-white'
  };

  return (
    <div 
      className={`rounded-lg p-6 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-lg font-semibold text-[#3E2C28] mb-1">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-600">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card; 