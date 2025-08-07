import React from 'react';
import Section from '../../Layout/Section';
import CertificationCard from './CertificationsCard';
import { certifications } from '../../../data/certifications';

const Certifications = () => {
  return (
    <Section>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map(cert => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Certifications;