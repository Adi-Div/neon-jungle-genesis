
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
        "relative overflow-hidden rounded-lg",
        "bg-black/30 backdrop-blur-xl",
        "border border-white/10",
        hoverEffect && [
          "transition-all duration-500",
          "hover:scale-105",
          "before:absolute before:inset-0",
          "before:bg-gradient-to-br before:from-white/10 before:to-transparent",
          "before:opacity-0 hover:before:opacity-100",
          "before:transition-opacity before:duration-500"
        ],
        neonBorder && [
          "after:absolute after:inset-[-1px]",
          "after:rounded-lg after:-z-10",
          "after:bg-gradient-to-br",
          "after:from-jungle-cyan after:via-jungle-violet after:to-jungle-emerald",
          "after:animate-pulse-slow"
        ],
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
