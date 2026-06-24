"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SafeImage } from "./SafeImage";

type BeforeAfterCompareProps = {
  beforeSrc: string;
  afterSrc: string;
};

export function BeforeAfterCompare({
  beforeSrc,
  afterSrc,
}: BeforeAfterCompareProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!section || !left || !right) return;

    gsap.set(left, {
      x: -100,
      opacity: 0,
      rotateY: 5,
      transformPerspective: 1200,
    });
    gsap.set(right, {
      x: 100,
      opacity: 0,
      rotateY: -5,
      transformPerspective: 1200,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        once: true,
      },
    });

    tl.to([left, right], {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="mx-auto max-w-6xl px-6"
      style={{ perspective: "1200px" }}
    >
      <div className="preserve-3d flex flex-col items-center gap-6 md:flex-row md:justify-center">
        <div ref={leftRef} className="preserve-3d w-full md:w-[45%]">
          <div className="relative overflow-hidden rounded-2xl">
            <SafeImage
              src={beforeSrc}
              alt="Before - original product photo"
              width={540}
              height={600}
              className="before-photo h-[400px] w-full object-cover object-center md:h-[600px]"
            />
            <span className="absolute top-4 left-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold tracking-widest text-gold">
              BEFORE
            </span>
          </div>
          <p className="mt-3 text-center text-sm text-grey">
            Original product photo
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-center justify-center py-4 md:py-0">
          <div className="hidden h-32 w-px bg-gold md:block" />
          <span className="my-2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-black text-xs font-bold text-gold">
            VS
          </span>
          <div className="h-px w-16 bg-gold md:hidden" />
        </div>

        <div ref={rightRef} className="preserve-3d w-full md:w-[45%]">
          <div className="after-glow relative overflow-hidden rounded-2xl">
            <SafeImage
              src={afterSrc}
              alt="After - AI generated professional shoot"
              width={540}
              height={600}
              className="h-[400px] w-full object-cover object-top md:h-[600px]"
            />
            <span className="absolute top-4 right-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold tracking-widest text-gold">
              AFTER
            </span>
          </div>
          <p className="mt-3 text-center text-sm text-grey">
            Flipsy Studio AI result
          </p>
        </div>
      </div>
    </div>
  );
}
