import { useState } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('experience');

  return { activeSection, setActiveSection };
};