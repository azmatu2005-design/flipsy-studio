"use client";

import { useEffect, useRef } from "react";
import { SafeImage } from "./SafeImage";

const cards = [
  {
    src: "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549961/ChatGPT_Image_Jun_15_2026_11_48_42_PM_zihev4.png",
    alt: "AI fashion result",
    position: "translate(-50%, -50%) translateX(280px)",
    transform: "rotateY(25deg) rotateX(-5deg) translateZ(-100px)",
    floatClass: "hero-float-1",
  },
  {
    src: "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549955/ChatGPT_Image_Jun_15_2026_11_50_27_PM_tr4pd2.png",
    alt: "AI ghost mannequin result",
    position: "translate(-50%, -50%)",
    transform: "rotateY(0deg) translateZ(50px)",
    floatClass: "hero-float-2",
  },
  {
    src: "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781889672/bkheaga3urzyappdbztz.jpg",
    alt: "AI accessory try-on result",
    position: "translate(-50%, -50%) translateX(-280px)",
    transform: "rotateY(-25deg) rotateX(-5deg) translateZ(-100px)",
    floatClass: "hero-float-3",
  },
];

export function Hero3DCards() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      scene.style.transform = `rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[5] hidden md:block"
      style={{
        perspective: "1200px",
        perspectiveOrigin: "center center",
      }}
    >
      <div
        ref={sceneRef}
        className="preserve-3d relative h-full w-full transition-transform duration-300 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        {cards.map((card) => (
          <div
            key={card.src}
            className={`hero-3d-card-wrap absolute left-1/2 top-[42%] ${card.floatClass}`}
            style={{ transform: card.position }}
          >
            <div
              className="preserve-3d overflow-hidden rounded-2xl border border-gold/60 shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(212,175,55,0.15)]"
              style={{ transform: card.transform }}
            >
              <SafeImage
                src={card.src}
                alt={card.alt}
                width={180}
                height={240}
                className="h-[240px] w-[180px] object-cover"
                loading="eager"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
