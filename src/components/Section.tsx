
import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const Section = ({ id, className, children, title, subtitle }: SectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Parallax effect on scroll
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        'py-16 md:py-32 min-h-screen flex flex-col justify-center relative',
        className
      )}
    >
      {/* Parallax background layers */}
      <div 
        className="absolute inset-0 bg-jungle-overlay opacity-10 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>
      
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        {/* Firefly particles */}
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-jungle-cyan/50 animate-floating"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 6}s`,
              opacity: 0.3 + Math.random() * 0.5,
              transform: `scale(${0.5 + Math.random() * 0.5})`
            }}
          />
        ))}
      </div>
      
      {/* Digital vines */}
      <div 
        className={cn(
          "absolute left-0 top-1/2 h-0 digital-vine -translate-y-1/2",
          isVisible ? "opacity-30" : "opacity-0"
        )}
        style={{ "--index": "1" } as React.CSSProperties}
      ></div>
      <div 
        className={cn(
          "absolute right-0 top-1/3 h-0 digital-vine -translate-y-1/2",
          isVisible ? "opacity-30" : "opacity-0"
        )}
        style={{ "--index": "2" } as React.CSSProperties}
      ></div>

      <div className="container mx-auto px-6 md:px-8 z-10">
        {(title || subtitle) && (
          <div className={cn(
            "mb-16 transform transition-all duration-1000 ease-out",
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          )}>
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="neon-text">{title}</span>
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-white/80 max-w-2xl">{subtitle}</p>
            )}
          </div>
        )}
        
        <div className={cn(
          "transition-all duration-1000 ease-out",
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-20"
        )}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
