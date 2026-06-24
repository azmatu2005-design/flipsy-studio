"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

type TiltSurfaceProps = {
  children: ReactNode;
  className?: string;
  maxDegrees?: number;
  hoverScale?: number;
  baseRotateY?: number;
  shine?: boolean;
};

export function TiltSurface({
  children,
  className = "",
  maxDegrees = 6,
  hoverScale = 1,
  baseRotateY = 0,
  shine = false,
}: TiltSurfaceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  const resetTransform = (rotateX = 0, rotateY = baseRotateY, scale = 1) => {
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
  };

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    const shineEl = shineRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = ((e.clientY - centerY) / rect.height) * maxDegrees;
    const rotateY =
      baseRotateY + (-(e.clientX - centerX) / rect.width) * maxDegrees;

    el.style.transform = resetTransform(rotateX, rotateY, hoverScale);

    if (shineEl) {
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      shineEl.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(212,175,55,0.3) 0%, transparent 55%)`;
      shineEl.style.opacity = "1";
    }
  };

  const handleLeave = () => {
    const el = ref.current;
    const shineEl = shineRef.current;
    if (!el) return;

    el.style.transform = resetTransform();

    if (shineEl) {
      shineEl.style.opacity = "0";
    }
  };

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
        transition: "transform 0.1s ease, box-shadow 0.3s ease",
        transform: resetTransform(),
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {shine && (
        <div
          ref={shineRef}
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-200"
          aria-hidden
        />
      )}
      {children}
    </div>
  );
}
