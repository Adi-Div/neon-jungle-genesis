
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  neonBorder?: boolean;
  hoverEffect?: boolean;
  style?: React.CSSProperties;
  glowColor?: 'cyan' | 'violet' | 'teal';
  glassmorphism?: boolean;
  tilt?: boolean;
  pulseGlow?: boolean;
  particles?: boolean;
}

const Card = ({ 
  className, 
  children, 
  neonBorder = true,
  hoverEffect = true,
  style,
  glowColor = 'cyan',
  glassmorphism = true,
  tilt = true,
  pulseGlow = true,
  particles = true
}: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const glowColors = {
    cyan: '#00C4E6',
    violet: '#8B00FF',
    teal: '#00B7A8'
  };
  
  const secondaryGlowColors = {
    cyan: '#66D9FF',
    violet: '#9F45FF',
    teal: '#45E8D9'
  };
  
  const selectedGlowColor = glowColors[glowColor];
  const secondaryGlow = secondaryGlowColors[glowColor];
  
  // Handle mouse events for hover state
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-lg p-6 transition-all duration-300",
        glassmorphism ? "backdrop-blur-xl bg-black/40 border border-white/10" : "bg-black/60",
        hoverEffect && [
          "transition-all duration-500",
          "hover:scale-[1.02]",
          "before:absolute before:inset-0",
          "before:bg-gradient-to-br before:from-white/5 before:to-transparent",
          "before:opacity-0 hover:before:opacity-100",
          "before:transition-opacity before:duration-500"
        ],
        tilt && "transform perspective-1000 hover:rotate-y-2 hover:rotate-x-1 transition-transform duration-300",
        neonBorder && [
          "after:absolute after:inset-[-2px]",
          "after:rounded-lg after:-z-10",
          "after:bg-gradient-to-br",
          `after:from-[${selectedGlowColor}] after:via-transparent after:to-[${secondaryGlow}]`,
          pulseGlow && "after:animate-pulse-slow"
        ],
        className
      )}
      style={{
        ...style,
        boxShadow: `0 0 ${isHovered ? '20px' : '10px'} 0 ${selectedGlowColor}${isHovered ? '60' : '30'}`
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Particle Effect (visible on hover) */}
      {particles && isHovered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cyan-400/80 animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}
      
      {/* Holographic overlay effect (more visible on hover) */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-tr from-[#00C4E6]/5 via-[#8B00FF]/5 to-[#00B7A8]/5 opacity-0 transition-opacity duration-300 pointer-events-none",
          isHovered && "opacity-20"
        )}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;
