import React from 'react';
import Card from '../../UI/Card';
import Badge from '../../UI/Badge';

const CertificationCard = ({ certification }) => (
  <Card className="text-center">
    <div className="text-4xl mb-4">{certification.badge}</div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">
      {certification.name}
    </h3>
    <p className="text-blue-600 mb-1">
      {certification.issuer}
    </p>
    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-3">
      <span>{certification.year}</span>
      {certification.level && (
        <>
          <span>•</span>
          <Badge variant="purple" className="text-xs">
            {certification.level}
          </Badge>
        </>
      )}
    </div>
    {certification.validUntil && (
      <p className="text-xs text-gray-500">
        Valid until: {certification.validUntil}
      </p>
    )}
  </Card>
);

export default CertificationCard;