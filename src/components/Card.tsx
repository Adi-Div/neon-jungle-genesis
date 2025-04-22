
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  neonBorder?: boolean;
  hoverEffect?: boolean;
  style?: React.CSSProperties;
}

const Card = ({ 
  className, 
  children, 
  neonBorder = false,
  hoverEffect = true,
  style
}: CardProps) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-lg p-6",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-0 before:transition-opacity",
        "after:absolute after:inset-0 after:-z-10 after:bg-black/30 after:backdrop-blur-xl",
        hoverEffect && "transition-all duration-500 hover:scale-105 hover:before:opacity-100",
        neonBorder && "neon-border",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
