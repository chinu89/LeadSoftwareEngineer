import React from 'react';
import Section from '../../Layout/Section';
import SkillCategory from './SkillCategory';
import { skillCategories } from '../../../data/skills';

const Skills = () => {
  return (
    <Section>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(category => (
            <SkillCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;