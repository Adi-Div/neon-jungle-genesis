
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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
      if (ctaRef.current) {
        ctaRef.current.classList.add('opacity-100', 'translate-y-0');
      }
    }, 1200);

    setTimeout(() => {
      if (scrollIndicatorRef.current) {
        scrollIndicatorRef.current.classList.add('opacity-100');
      }
    }, 1500);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-[#8B00FF]/20 via-[#00C4E6]/10 to-transparent opacity-30"></div>
      <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-10"></div>
      
      {/* Particle effect (fireflies) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, index) => (
          <div 
            key={index}
            className="absolute w-1 h-1 rounded-full bg-[#00C4E6] animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.7,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 7}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 
            ref={titleRef}
            className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out font-orbitron tracking-wider"
          >
            <span className="bg-gradient-to-r from-[#00C4E6] via-[#8B00FF] to-[#00B7A8] bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
              Adidev
            </span>
          </h1>
          
          <div 
            ref={subtitleRef}
            className="space-y-4 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out delay-300"
          >
            <p className="text-xl md:text-2xl text-white/90 font-inter tracking-wide">
              Architect of Tomorrow's Digital Realms
            </p>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl">
              Kerala's young innovator, crafting immersive tech experiences
            </p>
          </div>
          
          <div
            ref={ctaRef}
            className="mt-8 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out delay-500"
          >
            <a 
              href="#about" 
              className="inline-block px-6 py-3 rounded-md bg-black/40 backdrop-blur-lg border-2 border-[#00C4E6] text-white hover:bg-gradient-to-r hover:from-[#00C4E6]/20 hover:to-[#8B00FF]/20 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(0,196,230,0.5)]"
            >
              Dive Into My Universe
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-1000"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/70 text-sm font-inter">Scroll Down</span>
          <ArrowDown className="text-[#00C4E6] animate-pulse" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
