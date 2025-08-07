import React from 'react';

const Section = ({ children, className = '' }) => (
  <section className={`animate-slide-up ${className}`}>
    {children}
  </section>
);

export default Section;