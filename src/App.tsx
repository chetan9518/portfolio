import React from 'react';
import './index.css';
import HeroSection from './sections/HeroSection';
import TechStackSection from './sections/TechStackSection';
import ProjectsSection from './sections/ProjectsSection';
import OpenSourceSection from './sections/OpenSourceSection';
import AchievementsSection from './sections/AchievementsSection';
import AboutMeSection from './sections/AboutMeSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
      <OpenSourceSection />
      <AchievementsSection />
      <AboutMeSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
