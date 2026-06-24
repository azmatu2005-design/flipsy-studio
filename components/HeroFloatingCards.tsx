"use client";

import { useEffect, useRef } from "react";

const CARDS = [
  {
    src: "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549961/ChatGPT_Image_Jun_15_2026_11_48_42_PM_zihev4.png",
    alt: "AI Virtual Shoot",
    depth: 80,
    x: "-28%",
    y: "15%",
    rotate: -12,
  },
  {
    src: "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549955/ChatGPT_Image_Jun_15_2026_11_50_27_PM_tr4pd2.png",
    alt: "Ghost Mannequin",
    depth: 120,
    x: "30%",
    y: "25%",
    rotate: 8,
  },
  {
    src: "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549969/ChatGPT_Image_Jun_15_2026_11_56_49_PM_apd1xp.png",
    alt: "AI Poster",
    depth: 60,
    x: "5%",
    y: "-10%",
    rotate: -5,
  },
];

export function HeroFloatingCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.current = {
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      };

      container.querySelectorAll<HTMLElement>(".hero-float-card").forEach((card) => {
        const depth = parseFloat(card.dataset.depth || "100");
        const factor = depth / 200;
        const rx = mouse.current.y * 8 * factor;
        const ry = mouse.current.x * -12 * factor;
        const baseRotate = parseFloat(card.dataset.rotate || "0");
        card.style.transform = `translate3d(${mouse.current.x * depth * 0.15}px, ${mouse.current.y * depth * 0.1}px, ${-depth}px) rotateY(${ry + baseRotate}deg) rotateX(${rx}deg)`;
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
      style={{ perspective: "1200px" }}
      aria-hidden="true"
    >
      {CARDS.map((card, i) => (
        <div
          key={i}
          data-depth={card.depth}
          data-rotate={card.rotate}
          className="hero-float-card absolute w-36 animate-float-card rounded-xl border border-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.25)]"
          style={{
            left: card.x,
            top: card.y,
            animationDelay: `${i * 0.8}s`,
            transform: `translateZ(${-card.depth}px) rotate(${card.rotate}deg)`,
          }}
        >
          <div className="img-frame h-48 w-full overflow-hidden rounded-xl">
            <img
              src={card.src}
              alt={card.alt}
              width={144}
              height={192}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
