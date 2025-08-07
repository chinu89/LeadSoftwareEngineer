import React from 'react';
import { Building, Calendar, CheckCircle, Star } from 'lucide-react';
import Card from '../../UI/Card';

const ExperienceCard = ({ experience }) => (
  <Card className="mb-6">
    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-1">
          {experience.role}
        </h3>
        <div className="flex items-center text-blue-600 mb-2">
          <Building className="w-4 h-4 mr-2" />
          <span className="font-semibold">{experience.company}</span>
          {experience.client && (
            <span className="text-gray-500 ml-2">
              • Client: {experience.client}
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center text-gray-600">
        <Calendar className="w-4 h-4 mr-2" />
        <span>{experience.duration}</span>
      </div>
    </div>
    
    <div className="space-y-2">
      {experience.highlights.map((highlight, index) => (
        <div key={index} className="flex items-start">
          <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
          <p className="text-gray-700 text-sm leading-relaxed">
            {highlight}
          </p>
        </div>
      ))}
    </div>
    
    {experience.projects && (
      <div className="mt-4 pt-4 border-t border-gray-200">
        <h4 className="text-sm font-semibold text-gray-800 mb-2">
          Key Projects:
        </h4>
        <div className="space-y-1">
          {experience.projects.map((project, index) => (
            <div key={index} className="flex items-start">
              <Star className="w-3 h-3 mr-2 mt-1 text-yellow-500 flex-shrink-0" />
              <p className="text-gray-600 text-sm">
                {project}
              </p>
            </div>
          ))}
        </div>
      </div>
    )}
  </Card>
);

export default ExperienceCard;