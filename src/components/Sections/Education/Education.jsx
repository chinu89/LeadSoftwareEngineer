import React from 'react';
import Section from '../../Layout/Section';
import EducationCard from './EducationCard';
import { education } from '../../../data/education';

const Education = () => {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Education
        </h2>
        <div className="space-y-6">
          {education.map(edu => (
            <EducationCard key={edu.id} education={edu} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;