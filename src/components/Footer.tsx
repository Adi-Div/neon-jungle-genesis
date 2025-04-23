
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-6 overflow-hidden">
      {/* Glowing tree root effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-jungle-emerald to-transparent blur-sm"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-jungle-cyan to-transparent blur-sm"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Adidev. All rights reserved.
            </p>
            <p className="text-white/30 text-xs mt-1">
              Crafted with code and inspiration from nature
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="mailto:contact@adidev.dev" 
              className="text-white/60 hover:text-jungle-cyan transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-jungle-violet transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-jungle-emerald transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
