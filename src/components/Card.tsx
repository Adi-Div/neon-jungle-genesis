
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
        "glass-card rounded-lg p-6",
        hoverEffect && "transition-all duration-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)]",
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
