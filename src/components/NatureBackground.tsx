
import React, { useRef, useEffect } from "react";

// Blended cyber-jungle inspired animated background: mist, neon vines, glowing fireflies
const NatureBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Responsive
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    // Fireflies
    const fireflyCount = 60;
    const fireflies = Array.from({ length: fireflyCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 1.8 + Math.random() * 1.2,
      color: ["#00C4E6", "#8B00FF", "#00B7A8"][Math.floor(Math.random() * 3)],
      alpha: 0.3 + Math.random() * 0.45,
      flickerSeed: Math.random() * 1000,
      speedX: (Math.random() - 0.5) * 0.12,
      speedY: (Math.random() - 0.5) * 0.12
    }));

    // Vines
    const vineCount = 18;
    const vines = Array.from({ length: vineCount }).map((_, i) => {
      const startX = Math.random() * width;
      return ({
        x: startX,
        y: height * (0.05 + Math.random() * 0.4),
        length: height * (0.4 + Math.random() * 0.25),
        width: 2 + Math.random() * 2,
        color: i % 3 === 0 ? "#00C4E6" : i % 3 === 1 ? "#00B7A8" : "#8B00FF",
        phase: Math.random() * Math.PI * 2,
        sway: 25 + Math.random() * 18,
        opacity: 0.19 + Math.random() * 0.18,
        speed: 0.7 + Math.random() * 0.4
      });
    });

    // Misty parallax layers
    function drawMist(layer: number, strength: number) {
      ctx.save();
      ctx.globalAlpha = 0.18 * strength;
      ctx.filter = "blur(35px)";
      const grad = ctx.createLinearGradient(
        0, height * 0.7, width, height
      );
      grad.addColorStop(0, "#00C4E640");
      grad.addColorStop(0.45, "#8B00FF18");
      grad.addColorStop(1, "#00B7A840");
      ctx.fillStyle = grad;
      ctx.fillRect(
        0,
        height * (0.83 + Math.sin(Date.now() * 0.00007 * (1 + layer)) * 0.03 * (1 + layer)),
        width,
        height * (0.21 + Math.cos(Date.now() * 0.0001 * (1 + layer)) * 8)
      );
      ctx.restore();
      ctx.filter = "none";
    }

    // Overlay gradient for blending
    function overlayGradient() {
      ctx.save();
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#00C4E63a");
      gradient.addColorStop(0.55, "#8B00FF33");
      gradient.addColorStop(1, "#00B7A82a");
      ctx.globalAlpha = 0.22;
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
    }

    let running = true;
    function animate() {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      // Solid black base
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);

      // Mist (multiple parallax layers)
      drawMist(0, 1);
      drawMist(1, 0.7);

      // Vines (animated sway)
      for (let vine of vines) {
        const swayPhase = Math.sin(Date.now() * 0.001 * vine.speed + vine.phase) * vine.sway;
        ctx.save();
        ctx.globalAlpha = vine.opacity;
        ctx.shadowColor = vine.color;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.moveTo(vine.x, vine.y);
        // Gentle curves
        const ctrl1x = vine.x + swayPhase * 0.7;
        const ctrl1y = vine.y + vine.length * 0.32;
        const ctrl2x = vine.x - swayPhase * 0.65;
        const ctrl2y = vine.y + vine.length * 0.76;
        ctx.bezierCurveTo(
          ctrl1x, ctrl1y, ctrl2x, ctrl2y,
          vine.x + swayPhase * 0.18, vine.y + vine.length
        );
        ctx.strokeStyle = vine.color;
        ctx.lineWidth = vine.width;
        ctx.stroke();
        ctx.restore();
      }

      // Fireflies (drift/flicker)
      const now = Date.now();
      for (let i = 0; i < fireflies.length; i++) {
        const f = fireflies[i];
        f.x += f.speedX;
        f.y += f.speedY + Math.sin(now * 0.001 + i) * 0.06;

        // Bounce on edge
        if (f.x < 0) f.x = width;
        if (f.x > width) f.x = 0;
        if (f.y < 0) f.y = height;
        if (f.y > height) f.y = 0;
        // Flicker
        f.alpha = 0.33 + Math.abs(Math.sin(now * 0.0025 + f.flickerSeed)) * 0.35;

        ctx.save();
        ctx.globalAlpha = f.alpha;
        ctx.shadowColor = f.color;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
        ctx.fillStyle = f.color;
        ctx.fill();
        ctx.restore();
      }

      // Neon overlay blend
      overlayGradient();

      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      running = false;
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-20 w-full h-full bg-black pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-none"
        aria-label="Animated nature background"
        tabIndex={-1}
        role="presentation"
      />
    </div>
  );
};

export default NatureBackground;
