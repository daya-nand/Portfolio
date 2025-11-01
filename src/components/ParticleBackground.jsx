// ParticleBackground.jsx
import React, { useRef, useEffect } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const numParticles = 50;
  const speed = 0.5; // overall speed control (0.1 slow, 1 fast)

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];

    const random = (min, max) => Math.random() * (max - min) + min;

    // particle setup
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: random(0, width),
        y: random(0, height),
        r: random(1, 3),
        dx: random(-1, 1) * speed, // random direction
        dy: random(-1, 1) * speed, // random direction
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "white";
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        // move
        p.x += p.dx;
        p.y += p.dy;

        // wrap around
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;
      });
      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
    />
  );
};

export default ParticleBackground;
