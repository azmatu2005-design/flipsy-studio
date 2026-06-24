"use client";

import { useRef, type MouseEvent } from "react";
import { SafeImage } from "./SafeImage";

type FeatureCardProps = {
  emoji: string;
  title: string;
  description: string;
  image: string;
};

export function FeatureCard({
  emoji,
  title,
  description,
  image,
}: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const shine = shineRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = ((e.clientY - centerY) / rect.height) * 20;
    const rotateY = (-(e.clientX - centerX) / rect.width) * 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

    if (shine) {
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      shine.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(212,175,55,0.35) 0%, transparent 55%)`;
      shine.style.opacity = "1";
    }
  };

  const handleLeave = () => {
    const card = cardRef.current;
    const shine = shineRef.current;
    if (card) {
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
    if (shine) {
      shine.style.opacity = "0";
    }
  };

  return (
    <div className="feature-tilt-scene h-full">
      <div
        ref={cardRef}
        className="feature-tilt-card relative flex h-full gap-4 overflow-hidden rounded-[20px] border-t-2 border-gold bg-[#111111] p-8 transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <div
          ref={shineRef}
          className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 transition-opacity duration-200"
          aria-hidden
        />
        <div className="relative z-[1] flex flex-1 flex-col">
          <span className="mb-4 text-[40px] leading-none">{emoji}</span>
          <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-grey">{description}</p>
        </div>
        <SafeImage
          src={image}
          alt={title}
          width={120}
          height={160}
          className="relative z-[1] h-[160px] w-[120px] shrink-0 rounded-xl object-cover"
        />
      </div>
    </div>
  );
}
