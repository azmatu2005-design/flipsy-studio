"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { value: 50, suffix: "+", label: "AI Models" },
  { value: 52, suffix: "+", label: "Backgrounds" },
  { value: 10, suffix: "+", label: "Features" },
  { value: 1000, suffix: "+", label: "Brands" },
];

const STAT_3D_SHADOW =
  "1px 1px 0 #8B6914, 2px 2px 0 #8B6914, 3px 3px 0 #8B6914, 4px 4px 0 #8B6914, 5px 5px 0 #6B4F0E, 6px 6px 0 #6B4F0E, 7px 7px 0 #4A360A, 8px 8px 15px rgba(0,0,0,0.8)";

function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const numRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const num = numRef.current;
    const container = containerRef.current;
    if (!num || !container) return;

    const counter = { val: 0 };

    const tween = gsap.to(counter, {
      val: value,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        num.textContent = `${Math.floor(counter.val)}${suffix}`;
      },
    });

    return () => {
      tween.kill();
    };
  }, [value, suffix]);

  return (
    <div ref={containerRef} className="flex flex-1 flex-col items-center px-4 py-6 text-center">
      <span
        ref={numRef}
        className="block text-4xl font-bold text-gold md:text-5xl lg:text-6xl"
        style={{ textShadow: STAT_3D_SHADOW }}
      >
        0{suffix}
      </span>
      <p className="mt-2 text-sm text-white">{label}</p>
    </div>
  );
}

export function CounterSection() {
  return (
    <section className="bg-[#111111]">
      <div className="mx-auto flex max-w-7xl flex-col divide-y divide-gold/20 md:flex-row md:divide-x md:divide-y-0">
        {stats.map((stat) => (
          <StatItem
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}
