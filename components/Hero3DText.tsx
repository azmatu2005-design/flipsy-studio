"use client";

import { useEffect, useRef } from "react";

export function Hero3DText() {
  const textRef = useRef<HTMLSpanElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
      el.style.transform = `rotateY(${mouse.current.x * 8}deg) rotateX(${-mouse.current.y * 5}deg)`;
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <span
      ref={textRef}
      className="hero-3d-text inline-block text-5xl font-black tracking-tighter md:text-7xl lg:text-8xl"
      style={{ transformStyle: "preserve-3d" }}
    >
      FLIPSY
    </span>
  );
}
