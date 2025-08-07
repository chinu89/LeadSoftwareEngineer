import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Container from './components/Layout/Container';
import Experience from './components/Sections/Experience';
import Skills from './components/Sections/Skills';
import Certifications from './components/Sections/Certifications';
import Education from './components/Sections/Education';
import Contact from './components/Sections/Contact';
import ThemeToggle from './components/UI/ThemeToggle';

function App() {
  const { darkMode, toggleDarkMode } = useTheme();
  const { activeSection, setActiveSection } = useActiveSection();

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'experience': return <Experience />;
      case 'skills': return <Skills />;
      case 'certifications': return <Certifications />;
      case 'education': return <Education />;
      case 'contact': return <Contact />;
      default: return <Experience />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <Container>
        <Header />
        <Navigation 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
        />
        <div className="animate-fade-in">
          {renderActiveSection()}
        </div>
      </Container>
    </div>
  );
}

export default App;