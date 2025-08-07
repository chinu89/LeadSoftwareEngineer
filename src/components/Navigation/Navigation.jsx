import React from 'react';
import { Briefcase, Code, Award, GraduationCap, Mail } from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection }) => {
  const navigationTabs = [
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <nav className="mb-12">
      <div className="flex flex-wrap justify-center gap-2 p-2 glass-effect rounded-full max-w-4xl mx-auto">
        {navigationTabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveSection(id)}
            className={`
              flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeSection === id
                ? 'bg-blue-500 text-white shadow-lg scale-105'
                : 'text-gray-700 hover:bg-white/20 hover:scale-105'
              }
            `}
          >
            <Icon className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;