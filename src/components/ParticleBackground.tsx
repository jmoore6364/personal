"use client";

import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
}

interface MousePosition {
  x: number;
  y: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<MousePosition>({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Responsive configuration based on device capabilities
  const config = {
    particleCount: typeof window !== 'undefined' && window.innerWidth < 768 ? 25 : 50, // Fewer particles on mobile
    maxParticleSize: 3,
    minParticleSize: 1,
    speed: 0.5,
    mouseInfluence: 100,
    connectionDistance: 120,
    opacity: 0.6,
    colors: ['#60a5fa', '#a78bfa', '#34d399', '#fbbf24'], // Blue, purple, green, yellow
    maxFPS: 60,
    enableConnections: typeof window !== 'undefined' && window.innerWidth >= 768, // Disable connections on mobile for performance
  };

  // Initialize particles
  const initParticles = () => {
    const particles: Particle[] = [];
    for (let i = 0; i < config.particleCount; i++) {
      particles.push(createParticle());
    }
    particlesRef.current = particles;
  };

  // Create a single particle
  const createParticle = (): Particle => {
    const maxLife = Math.random() * 300 + 200;
    return {
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      vx: (Math.random() - 0.5) * config.speed,
      vy: (Math.random() - 0.5) * config.speed,
      size: Math.random() * (config.maxParticleSize - config.minParticleSize) + config.minParticleSize,
      opacity: Math.random() * config.opacity,
      life: maxLife,
      maxLife: maxLife
    };
  };

  // Update particle position and properties
  const updateParticle = (particle: Particle) => {
    // Apply mouse influence
    const dx = mouseRef.current.x - particle.x;
    const dy = mouseRef.current.y - particle.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < config.mouseInfluence) {
      const force = (config.mouseInfluence - distance) / config.mouseInfluence;
      const angle = Math.atan2(dy, dx);
      particle.vx += Math.cos(angle) * force * 0.01;
      particle.vy += Math.sin(angle) * force * 0.01;
    }

    // Update position
    particle.x += particle.vx;
    particle.y += particle.vy;

    // Apply friction
    particle.vx *= 0.99;
    particle.vy *= 0.99;

    // Boundary collision with soft bounce
    if (particle.x < 0 || particle.x > dimensions.width) {
      particle.vx *= -0.5;
      particle.x = Math.max(0, Math.min(dimensions.width, particle.x));
    }
    if (particle.y < 0 || particle.y > dimensions.height) {
      particle.vy *= -0.5;
      particle.y = Math.max(0, Math.min(dimensions.height, particle.y));
    }

    // Update life and opacity
    particle.life--;
    particle.opacity = (particle.life / particle.maxLife) * config.opacity;

    // Respawn particle if it dies
    if (particle.life <= 0) {
      Object.assign(particle, createParticle());
    }
  };

  // Draw connections between nearby particles (with performance optimization)
  const drawConnections = (ctx: CanvasRenderingContext2D) => {
    if (!config.enableConnections) return; // Skip on mobile devices

    const particles = particlesRef.current;

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < config.connectionDistance) {
          const opacity = (1 - distance / config.connectionDistance) * 0.3;
          ctx.strokeStyle = `rgba(96, 165, 250, ${opacity})`; // Blue color
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  };

  // Draw particles
  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    const particles = particlesRef.current;

    particles.forEach((particle, index) => {
      // Create gradient for particle
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size
      );

      const color = config.colors[index % config.colors.length];
      gradient.addColorStop(0, color.replace(')', `, ${particle.opacity})`).replace('rgb', 'rgba'));
      gradient.addColorStop(1, color.replace(')', ', 0)').replace('rgb', 'rgba'));

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();

      // Add subtle glow effect
      ctx.shadowBlur = particle.size * 2;
      ctx.shadowColor = color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    });
  };

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, dimensions.width, dimensions.height);

    // Update particles
    particlesRef.current.forEach(updateParticle);

    // Draw connections first (behind particles)
    drawConnections(ctx);

    // Draw particles
    drawParticles(ctx);

    animationRef.current = requestAnimationFrame(animate);
  };

  // Handle mouse movement
  const handleMouseMove = (event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  };

  // Handle window resize
  const updateDimensions = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  // Setup and cleanup
  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Initialize particles when dimensions change
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      initParticles();
      animate();
    }

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: 'transparent',
      }}
    />
  );
};

export default ParticleBackground;