
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import StartupSection from '../components/StartupSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import NatureBackground from '../components/NatureBackground';

const Index = () => {
  useEffect(() => {
    document.title = 'Adidev | Full-Stack Developer & Cyber-Security Specialist';
    
    // Smooth scroll function
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleLinkClick);
    
    // Cleanup
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);
  
  return (
    <div className="relative bg-black min-h-screen w-full">
      {/* Background */}
      <NatureBackground />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main content - NO flex-col to avoid layout issues */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <StartupSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
