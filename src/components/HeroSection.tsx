
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.classList.add('opacity-100', 'translate-y-0');
      }
    }, 300);

    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.classList.add('opacity-100', 'translate-y-0');
      }
    }, 800);

    setTimeout(() => {
      if (scrollIndicatorRef.current) {
        scrollIndicatorRef.current.classList.add('opacity-100');
      }
    }, 1500);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-jungle-violet/20 via-transparent to-transparent opacity-30"></div>
      <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-10"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 
            ref={titleRef}
            className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out"
          >
            <span className="neon-text">Adidev</span>
          </h1>
          
          <div 
            ref={subtitleRef}
            className="space-y-4 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out delay-300"
          >
            <p className="text-xl md:text-2xl text-white/90">
              A 15-year-old full-stack developer & cyber-security specialist from Kerala
            </p>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl">
              Crafting tomorrow's web with nature's beauty & tech's precision
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-1000"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/70 text-sm">Scroll Down</span>
          <ArrowDown className="text-jungle-cyan animate-bounce" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
