
import React, { useRef, useEffect } from "react";

// Nature-inspired neon animated background for Neon Jungle Genesis
const JungleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Helper to generate random [min, max]
  const rand = (min: number, max: number) => Math.random() * (max - min) + min;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Responsive canvas
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    // Firefly particles (100)
    interface Firefly {
      x: number;
      y: number;
      size: number;
      color: string;
      alpha: number;
      flicker: number;
      speedX: number;
      speedY: number;
    }
    const fireflyColors = ["#00C4E6", "#8B00FF", "#00B7A8"];
    const fireflies: Firefly[] = [];
    for (let i = 0; i < 100; i++) {
      fireflies.push({
        x: rand(0, width),
        y: rand(0, height),
        size: rand(1, 2.5),
        color: fireflyColors[Math.floor(rand(0, fireflyColors.length))],
        alpha: rand(0.35, 0.6),
        flicker: rand(0.7, 1.3),
        speedX: rand(-0.15, 0.15),
        speedY: rand(-0.07, 0.07),
      });
    }

    // Vine objects (50, animated sway)
    interface Vine {
      x: number;
      y: number;
      length: number;
      width: number;
      color: string;
      phase: number;
      speed: number;
      opacity: number;
      sway: number;
    }
    const vineColors = ["#00C4E6", "#00B7A8"];
    const vines: Vine[] = [];
    for (let i = 0; i < 50; i++) {
      const color = vineColors[i % 2];
      vines.push({
        x: rand(20, width - 20),
        y: rand(0, height * 0.6),
        length: rand(height * 0.15, height * 0.33),
        width: 3,
        color,
        phase: rand(0, Math.PI * 2),
        speed: rand(0.4, 0.8),
        opacity: rand(0.18, 0.32),
        sway: rand(18, 42),
      });
    }

    // Misty parallax layers
    function drawMistyLayer(opacity: number, speed: number, offset: number) {
      // Parallax, gently swaying and sliding
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.filter = "blur(32px)";
      const grad = ctx.createLinearGradient(
        0,
        height * 0.7 + offset,
        width,
        height * 0.9 + offset
      );
      grad.addColorStop(0, "#00C4E611");
      grad.addColorStop(0.5, "#8B00FF18");
      grad.addColorStop(1, "#00B7A811");
      ctx.fillStyle = grad;
      ctx.fillRect(
        0,
        height * (0.75 + Math.sin(Date.now() * 0.00008 * speed) * 0.03),
        width,
        height * 0.22 + Math.cos(Date.now() * 0.00014 * speed + offset) * 8
      );
      ctx.restore();
      ctx.filter = "none";
    }

    // Render loop
    let running = true;
    function render() {
      if (!running) return;
      // Draw base black
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);

      // Parallax mist (behind)
      drawMistyLayer(0.19, 0.19, 0);

      // Draw glowing vines (animate sway)
      for (let i = 0; i < vines.length; i++) {
        const vine = vines[i];
        // Animate sway
        const swayPhase =
          Math.sin(Date.now() * 0.001 * vine.speed + vine.phase) * vine.sway;
        ctx.save();
        ctx.globalAlpha = vine.opacity;
        ctx.beginPath();
        ctx.moveTo(vine.x, vine.y);

        // Wavy parametric (bezier/curve) nature
        const control1x = vine.x + swayPhase * 0.6;
        const control1y = vine.y + vine.length * 0.33;
        const control2x = vine.x - swayPhase * 0.5;
        const control2y = vine.y + vine.length * 0.66;
        ctx.bezierCurveTo(
          control1x,
          control1y,
          control2x,
          control2y,
          vine.x + swayPhase * 0.2,
          vine.y + vine.length
        );
        ctx.strokeStyle = vine.color;
        ctx.shadowColor = vine.color;
        ctx.shadowBlur = 16;
        ctx.lineWidth = vine.width;
        ctx.stroke();
        ctx.restore();
      }

      // Fireflies (gentle drift & flicker)
      for (let i = 0; i < fireflies.length; i++) {
        const f = fireflies[i];
        f.x += f.speedX;
        f.y += f.speedY + Math.sin(Date.now() * 0.001 + i) * 0.02;
        if (f.x < 0) f.x = width;
        if (f.x > width) f.x = 0;
        if (f.y < 0) f.y = height;
        if (f.y > height) f.y = 0;
        // Flicker
        f.alpha = 0.35 + Math.abs(Math.sin(Date.now() * 0.002 + i)) * 0.3;
        ctx.save();
        ctx.globalAlpha = f.alpha * 0.9;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
        ctx.fillStyle = f.color;
        ctx.shadowColor = f.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }

      // Parallax mist (front, slightly faster)
      drawMistyLayer(0.18, 0.44, 40);

      // Neon overlay gradient (tied to theme, blending boxes with bg)
      ctx.save();
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#00C4E633");
      gradient.addColorStop(0.5, "#8B00FF33");
      gradient.addColorStop(1, "#00B7A833");
      ctx.globalAlpha = 0.22;
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      // Request next frame
      requestAnimationFrame(render);
    }
    render();

    // Cleanup
    return () => {
      running = false;
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // Fixed, full-screen custom animated BG
    <div className="fixed inset-0 -z-10 w-full h-full bg-black overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-none"
        aria-label="Animated futuristic neon jungle background for Neon Jungle"
        tabIndex={-1}
        role="presentation"
      />
    </div>
  );
};

export default JungleBackground;
