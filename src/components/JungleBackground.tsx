import React, { useEffect, useRef } from 'react';

const JungleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initialize canvas size
    setCanvasDimensions();
    
    // Handle window resize
    window.addEventListener('resize', setCanvasDimensions);
    
    // Firefly particles
    const particles: { x: number; y: number; size: number; color: string; speedX: number; speedY: number; life: number; maxLife: number }[] = [];
    
    // Create particles
    const createParticles = () => {
      // Make sure we don't exceed 100 particles for performance
      if (particles.length < 100) {
        // Colors: cyan, violet, teal
        const colors = ['#00C4E6', '#8B00FF', '#00B7A8'];
        
        // Create a new particle
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 1 + Math.random() * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: Math.random() * 0.6 - 0.3,
          speedY: Math.random() * 0.6 - 0.3,
          life: 0,
          maxLife: 100 + Math.random() * 100
        });
      }
    };
    
    // Vines
    const vines: { x: number; y: number; height: number; width: number; targetHeight: number; growSpeed: number; color: string; opacity: number }[] = [];
    
    // Create vines
    const createVines = () => {
      // Limit to 50 vines for performance
      if (vines.length < 50) {
        // Colors: cyan, violet, teal
        const colors = ['#00C4E6', '#8B00FF', '#00B7A8'];
        
        // Create a new vine
        vines.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          height: 0,
          width: 3,
          targetHeight: 100 + Math.random() * 200,
          growSpeed: 0.5 + Math.random() * 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: 0.2 + Math.random() * 0.3
        });
      }
    };
    
    // Initialize particles and vines
    for (let i = 0; i < 50; i++) {
      createParticles();
    }
    
    for (let i = 0; i < 20; i++) {
      createVines();
    }
    
    // Animation loop
    const animate = () => {
      // Clear canvas with a semi-transparent black fill to create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Create misty fog effect
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      );
      gradient.addColorStop(0, 'rgba(0, 196, 230, 0.01)');
      gradient.addColorStop(0.5, 'rgba(139, 0, 255, 0.005)');
      gradient.addColorStop(1, 'rgba(0, 183, 168, 0.01)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw vines
      for (let i = 0; i < vines.length; i++) {
        const vine = vines[i];
        
        // Grow vine
        if (vine.height < vine.targetHeight) {
          vine.height += vine.growSpeed;
        }
        
        // Draw vine
        ctx.beginPath();
        const gradient = ctx.createLinearGradient(0, vine.y, 0, vine.y + vine.height);
        gradient.addColorStop(0, vine.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = vine.width;
        ctx.globalAlpha = vine.opacity;
        ctx.moveTo(vine.x, vine.y);
        ctx.lineTo(vine.x, vine.y + vine.height);
        ctx.stroke();
        ctx.globalAlpha = 1;
        
        // If vine has reached target height, replace it
        if (vine.height >= vine.targetHeight) {
          vines.splice(i, 1);
          createVines();
        }
      }
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Update life
        particle.life++;
        
        // Calculate opacity based on life
        const opacity = 1 - (particle.life / particle.maxLife);
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = opacity * 0.5; // Reduce opacity for more subtle effect
        ctx.fill();
        ctx.globalAlpha = 1;
        
        // If particle is dead or out of bounds, replace it
        if (
          particle.life >= particle.maxLife ||
          particle.x < 0 ||
          particle.x > canvas.width ||
          particle.y < 0 ||
          particle.y > canvas.height
        ) {
          particles.splice(i, 1);
          createParticles();
        }
      }
      
      // Create new particles randomly
      if (Math.random() < 0.1) {
        createParticles();
      }
      
      // Create new vines randomly
      if (Math.random() < 0.01) {
        createVines();
      }
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/jungle-bg.webm" type="video/webm" />
          <img src="/jungle-bg.webp" alt="Jungle Background" className="w-full h-full object-cover" />
        </video>
        
        <canvas
          ref={canvasRef}
          className="fixed inset-0 -z-5 w-full h-full opacity-40 pointer-events-none"
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-jungle-cyan/10 via-jungle-violet/10 to-jungle-emerald/10 opacity-50"></div>
        
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
    </>
  );
};

export default JungleBackground;
