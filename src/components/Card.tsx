
import React from 'react';
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
}

const Card = ({ 
  className, 
  children, 
  neonBorder = false,
  hoverEffect = true,
  style,
  glowColor = 'cyan',
  glassmorphism = true,
  tilt = false
}: CardProps) => {
  const glowColors = {
    cyan: '#00C4E6',
    violet: '#8B00FF',
    teal: '#00B7A8'
  };
  
  const selectedGlowColor = glowColors[glowColor];
  
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-lg",
        glassmorphism ? "backdrop-blur-xl bg-black/30 border border-white/10" : "bg-black/40",
        hoverEffect && [
          "transition-all duration-500",
          "hover:scale-105",
          "before:absolute before:inset-0",
          "before:bg-gradient-to-br before:from-white/10 before:to-transparent",
          "before:opacity-0 hover:before:opacity-100",
          "before:transition-opacity before:duration-500"
        ],
        tilt && "transform perspective-1000 hover:rotate-y-5 hover:rotate-x-5 transition-transform duration-300",
        neonBorder && [
          "after:absolute after:inset-[-1px]",
          "after:rounded-lg after:-z-10",
          "after:bg-gradient-to-br",
          `after:from-[${selectedGlowColor}] after:via-jungle-violet after:to-jungle-emerald`,
          "after:animate-pulse-slow"
        ],
        className
      )}
      style={{
        ...style,
        boxShadow: hoverEffect ? `0 0 20px 0 rgba(${selectedGlowColor}, 0.2)` : 'none'
      }}
    >
      {children}
    </div>
  );
};

export default Card;
