import React from 'react';

const Card = ({ children, className = '', hover = true }) => (
  <div className={`
    glass-effect rounded-xl p-6 
    ${hover ? 'hover:scale-105 hover:shadow-xl' : ''} 
    transition-all duration-300 
    ${className}
  `}>
    {children}
  </div>
);

export default Card;