"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      gsap.set(el, { opacity: 1, y: 0, rotateX: 0, scale: 1 });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    gsap.set(el, {
      opacity: 0,
      y: 60,
      rotateX: 5,
      scale: 0.95,
      transformPerspective: 1000,
      transformOrigin: "center top",
    });

    const tween = gsap.to(el, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.8,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });

    return () => {
      tween.kill();
    };
  }, [delay]);

  return (
    <div ref={ref} className={className} style={{ transformStyle: "preserve-3d" }}>
      {children}
    </div>
  );
}

export function StaggerReveal({
  children,
  className = "",
  stagger = 0.1,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);
    const items = el.children;
    gsap.set(items, {
      opacity: 0,
      y: 60,
      rotateX: 5,
      scale: 0.95,
      transformPerspective: 1000,
      transformOrigin: "center top",
    });

    const tween = gsap.to(items, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.8,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        once: true,
      },
    });

    return () => {
      tween.kill();
    };
  }, [stagger]);

  return (
    <div ref={ref} className={className} style={{ perspective: "1000px" }}>
      {children}
    </div>
  );
}
