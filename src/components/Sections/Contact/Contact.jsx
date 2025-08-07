import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Section from '../../Layout/Section';
import Card from '../../UI/Card';
import Button from '../../UI/Button';
import { personalInfo } from '../../../data/personal';

const Contact = () => {
  return (
    <Section>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Get In Touch
        </h2>
        
        <Card>
          <div className="space-y-6">
            <p className="text-gray-600 text-lg">
              I'm always interested in discussing new opportunities, innovative projects, 
              and ways to leverage technology for business transformation.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">
                  {personalInfo.location}
                </span>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {personalInfo.email}
                </a>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="text-blue-600 hover:underline"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-200">
              <Button
                href={`mailto:${personalInfo.email}`}
                variant="primary"
                size="lg"
                icon={Mail}
              >
                Send Message
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default Contact;