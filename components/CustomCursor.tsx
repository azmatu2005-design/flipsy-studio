"use client";

import { useEffect, useRef } from "react";

type TrailParticle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
};

const MAX_PARTICLES = 20;

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<TrailParticle[]>([]);
  const mouse = useRef({ x: 0, y: 0, px: 0, py: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const raf = useRef(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const canvas = canvasRef.current;

    if (prefersReduced || isTouch || !canvas) return;

    document.body.classList.add("custom-cursor-active");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const spawnParticle = (x: number, y: number, vx: number, vy: number) => {
      if (particles.current.length >= MAX_PARTICLES) {
        particles.current.shift();
      }
      particles.current.push({
        x,
        y,
        vx: vx * 0.3,
        vy: vy * 0.3,
        life: 1,
        maxLife: 500,
      });
    };

    const onMove = (e: MouseEvent) => {
      const vx = e.clientX - mouse.current.x;
      const vy = e.clientY - mouse.current.y;
      mouse.current = { x: e.clientX, y: e.clientY, px: vx, py: vy };

      const speed = Math.sqrt(vx * vx + vy * vy);
      const count = Math.min(Math.floor(speed / 8) + 1, 4);
      for (let i = 0; i < count; i++) {
        spawnParticle(e.clientX, e.clientY, vx, vy);
      }

      const target = e.target as HTMLElement;
      const clickable = target.closest(
        "a, button, [role='button'], input, textarea, select, .cursor-explore",
      );
      const isImage = target.closest(".cursor-explore, img");

      if (ringRef.current) {
        ringRef.current.style.width = clickable ? "56px" : "32px";
        ringRef.current.style.height = clickable ? "56px" : "32px";
        ringRef.current.style.borderColor = clickable
          ? "rgba(212,175,55,0.9)"
          : "rgba(212,175,55,0.6)";
      }

      if (labelRef.current) {
        labelRef.current.style.opacity = isImage ? "1" : "0";
      }
    };

    let lastTime = performance.now();

    const animate = (now: number) => {
      const dt = now - lastTime;
      lastTime = now;

      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current.filter((p) => {
        p.life -= dt / p.maxLife;
        if (p.life <= 0) return false;
        p.x += p.vx * (dt / 16);
        p.y += p.vy * (dt / 16);
        p.vx *= 0.95;
        p.vy *= 0.95;

        const alpha = p.life * 0.8;
        const size = 2 + p.life * 3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${alpha})`;
        ctx.fill();
        return true;
      });

      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", resizeCanvas);
    raf.current = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[99998]"
        aria-hidden="true"
      />
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
        <div ref={ringRef} className="custom-cursor-ring" />
        <div className="custom-cursor-dot" />
        <span ref={labelRef} className="custom-cursor-label">
          EXPLORE
        </span>
      </div>
    </>
  );
}
