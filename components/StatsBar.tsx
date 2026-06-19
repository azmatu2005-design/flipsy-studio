"use client";

import { useEffect, useRef, useState } from "react";
import { FadeUp } from "./FadeUp";

const stats = [
  { value: 50, suffix: "+", label: "AI Models" },
  { value: 52, suffix: "+", label: "Backgrounds" },
  { value: 10, suffix: "+", label: "AI Features" },
  { value: 1000, suffix: "+", label: "Brands" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };

          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="counter-animate text-4xl font-bold text-gold md:text-5xl">
      {count}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <section className="bg-[#111111] py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((stat, i) => (
          <FadeUp key={stat.label} delay={i * 100} className="text-center">
            <Counter target={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-sm text-grey">{stat.label}</p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
