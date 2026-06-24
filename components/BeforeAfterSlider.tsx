"use client";

import { useCallback, useRef, useState } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPosition(x);
  }, []);

  const onPointerDown = () => {
    dragging.current = true;
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      className="before-after-slider relative mx-auto max-w-4xl select-none overflow-hidden rounded-2xl"
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <img
        src={afterSrc}
        alt="After AI photoshoot"
        loading="lazy"
        className="block h-auto w-full object-cover"
        draggable={false}
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={beforeSrc}
          alt="Before original product"
          loading="lazy"
          className="block h-full w-full object-cover"
          draggable={false}
        />
      </div>

      <span className="absolute bottom-4 left-4 rounded bg-black/70 px-3 py-1 text-xs font-bold tracking-widest text-gold">
        BEFORE
      </span>
      <span className="absolute right-4 bottom-4 rounded bg-black/70 px-3 py-1 text-xs font-bold tracking-widest text-gold">
        AFTER
      </span>

      <div
        className="absolute top-0 bottom-0 z-10 w-1 cursor-ew-resize bg-gold"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        onPointerDown={onPointerDown}
      >
        <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold bg-black shadow-[0_0_20px_rgba(212,175,55,0.5)]">
          <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4M8 15l4 4 4-4" transform="rotate(-90 12 12)" />
          </svg>
        </div>
      </div>
    </div>
  );
}
