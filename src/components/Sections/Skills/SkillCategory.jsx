import React from 'react';
import Card from '../../UI/Card';
import Badge from '../../UI/Badge';

const SkillCategory = ({ category }) => (
  <Card className="h-full">
    <div className="flex items-center mb-4">
      <span className="text-2xl mr-3">{category.icon}</span>
      <h3 className="text-lg font-semibold text-gray-800">
        {category.category}
      </h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {category.skills.map((skill, index) => (
        <div key={index} className="group relative">
          <Badge variant="default" className="hover:scale-105 transition-transform cursor-pointer">
            {skill.name || skill}
          </Badge>
          {skill.level && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {skill.level} • {skill.years}
            </div>
          )}
        </div>
      ))}
    </div>
  </Card>
);

export default SkillCategory;