"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    number: 1,
    title: "Upload",
    description: "Upload your product photo",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Choose",
    description: "Select model, pose, background",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Download",
    description: "Get professional results",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const line = lineRef.current;
    const stepsEl = stepsRef.current;
    if (!section || !line || !stepsEl) return;

    gsap.set(line, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(stepsEl.children, { opacity: 0, y: 40 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        once: true,
      },
    });

    tl.to(line, { scaleX: 1, duration: 0.8, ease: "power2.inOut" }).to(
      stepsEl.children,
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" },
      "-=0.3",
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative mx-auto max-w-4xl px-6">
      <div
        ref={lineRef}
        className="absolute top-8 right-[16%] left-[16%] hidden h-0.5 bg-gold md:block"
      />
      <div ref={stepsRef} className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.title} className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-lg font-bold text-black">
              {step.number}
            </div>
            <div className="mb-3 text-gold">{step.icon}</div>
            <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
            <p className="text-sm text-grey">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
