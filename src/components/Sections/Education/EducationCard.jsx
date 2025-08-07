import React from 'react';
import { Calendar } from 'lucide-react';
import Card from '../../UI/Card';
import Badge from '../../UI/Badge';

const EducationCard = ({ education }) => (
  <Card>
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          🎓
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {education.degree}
        </h3>
        <p className="text-blue-600 font-medium mb-1">
          {education.institution}
        </p>
        {education.university && (
          <p className="text-gray-600 mb-2">
            {education.university}
          </p>
        )}
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{education.duration || education.year}</span>
          {education.grade && (
            <>
              <span className="mx-2">•</span>
              <Badge variant="success">{education.grade}</Badge>
            </>
          )}
        </div>
        {education.coursework && (
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-2">
              Key Coursework:
            </h4>
            <div className="flex flex-wrap gap-1">
              {education.coursework.map((course, index) => (
                <Badge key={index} variant="default" className="text-xs">
                  {course}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </Card>
);

export default EducationCard;