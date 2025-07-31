import React from 'react';

const Avatar = ({ 
  src, 
  alt, 
  name,
  size = 'md',
  className = '',
  ...props 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-16 h-16 text-lg',
    xl: 'w-20 h-20 text-xl'
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div 
      className={`relative inline-flex items-center justify-center rounded-full bg-[#C6A27E] text-white font-medium ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={alt || name}
          className="w-full h-full object-cover rounded-full"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
      ) : null}
      <div className={`w-full h-full flex items-center justify-center rounded-full ${src ? 'hidden' : ''}`}>
        {name ? getInitials(name) : 'U'}
      </div>
    </div>
  );
};

export default Avatar; 