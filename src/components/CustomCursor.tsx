
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const updatePosition = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    
    // Show cursor once we have real positions
    if (isHidden && e.clientX !== 0 && e.clientY !== 0) {
      setIsHidden(false);
    }
  };

  const updateHoverState = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isHoverable = target.closest('a') || 
                        target.closest('button') || 
                        target.closest('[role="button"]') ||
                        target.closest('input') ||
                        target.closest('textarea') ||
                        target.closest('.hoverable');
    
    setIsHovering(!!isHoverable);
  };

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      updatePosition(e);
      updateHoverState(e);
    });

    // Hide cursor when leaving the window
    window.addEventListener('mouseout', (e) => {
      if (e.relatedTarget === null) {
        setIsHidden(true);
      }
    });

    // Show cursor when entering the window
    window.addEventListener('mouseover', () => {
      setIsHidden(false);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseout', () => setIsHidden(true));
      window.removeEventListener('mouseover', () => setIsHidden(false));
    };
  }, []);

  if (isHidden) return null;

  return (
    <div 
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    />
  );
};

export default CustomCursor;
