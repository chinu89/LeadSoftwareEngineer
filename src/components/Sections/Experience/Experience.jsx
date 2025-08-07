import React from 'react';
import Section from '../../Layout/Section';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../../../data/experience';

const Experience = () => {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Professional Experience
        </h2>
        <div className="space-y-6">
          {experiences.map(experience => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;