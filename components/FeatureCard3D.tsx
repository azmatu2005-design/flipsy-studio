"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

type FeatureCard3DProps = {
  title: string;
  description: string;
  image: string;
  icon: ReactNode;
};

export function FeatureCard3D({
  title,
  description,
  image,
  icon,
}: FeatureCard3DProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const scene = sceneRef.current;
    const inner = innerRef.current;
    const shine = shineRef.current;
    if (!scene || !inner || !shine) return;

    const rect = scene.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const rotateY = x * 30;
    const rotateX = -y * 30;
    const depth = Math.abs(x) + Math.abs(y);

    inner.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    scene.style.boxShadow = `${-x * 20}px ${y * 20}px ${30 + depth * 40}px rgba(212, 175, 55, ${0.15 + depth * 0.2})`;

    shine.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(212,175,55,0.25) 0%, transparent 60%)`;
    shine.style.opacity = "1";
  };

  const handleLeave = () => {
    const scene = sceneRef.current;
    const inner = innerRef.current;
    const shine = shineRef.current;
    if (!inner || !scene || !shine) return;
    inner.style.transform = "rotateY(0deg) rotateX(0deg)";
    scene.style.boxShadow = "none";
    shine.style.opacity = "0";
  };

  return (
    <div
      ref={sceneRef}
      className="feature-card-scene h-[280px] w-full transition-shadow duration-300"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div ref={innerRef} className="feature-card-inner h-full w-full">
        <div className="feature-card-face feature-card-front rounded-2xl border border-white/5 bg-[#111111] p-6">
          <div ref={shineRef} className="feature-card-shine absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300" />
          <div className="relative z-10">
            <div className="mb-4 flex items-center gap-3 text-gold">{icon}</div>
            <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm leading-relaxed text-grey">{description}</p>
          </div>
        </div>
        <div className="feature-card-face feature-card-back overflow-hidden rounded-2xl border-2 border-gold/50">
          <img
            src={image}
            alt={title}
            loading="lazy"
            width={400}
            height={280}
            className="cursor-explore h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
