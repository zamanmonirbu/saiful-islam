// src/components/shared/Avatar.jsx
import React from 'react';

const Avatar = ({ src, alt, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default Avatar;