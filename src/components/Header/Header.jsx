import React from 'react';
import { Download } from 'lucide-react';
import Button from '../UI/Button';
import { personalInfo } from '../../data/personal';

const Header = () => {
  return (
    <header className="text-center mb-12">
      <div className="mb-8">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-xl">
          {personalInfo.name.split(' ').map(n => n[0]).join('')}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
          {personalInfo.name}
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-600 mb-2">
          {personalInfo.title}
        </h2>
        
        <p className="text-lg text-blue-600 mb-4">
          {personalInfo.position}
        </p>
        
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          {personalInfo.tagline}
        </p>
        
        <Button 
          href={personalInfo.resumeUrl}
          variant="primary"
          size="lg"
          icon={Download}
        >
          Download Resume
        </Button>
      </div>
    </header>
  );
};

export default Header;