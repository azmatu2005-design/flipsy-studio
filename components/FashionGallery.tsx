"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SafeImage } from "./SafeImage";

const items = [
  {
    src: "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1782230479/brian-wangenheim-Y4pcueOx8nE-unsplash_t27wxc.jpg",
    alt: "Western fashion editorial",
    width: 480,
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1782230497/apolo-photographer-g7Fdj8EDJng-unsplash_t8fqs7.jpg",
    alt: "Studio fashion reference",
    width: 480,
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1782230508/imana-IEakboWH0hk-unsplash_ofhn6o.jpg",
    alt: "Fashion campaign",
    width: 480,
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1782230522/senya-mitin-av3F4yuiQ-U-unsplash_a0i3xe.jpg",
    alt: "Luxury aesthetic",
    width: 480,
    height: 600,
  },
];

export function FashionGallery() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll(".fashion-card");
    gsap.set(cards, { opacity: 0, scale: 0.9 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: grid,
        start: "top 75%",
        once: true,
      },
    });

    tl.to(cards, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="mx-auto grid max-w-[1000px] grid-cols-1 gap-4 px-6 sm:grid-cols-2"
    >
      {items.map((item) => (
        <div
          key={item.src}
          className="fashion-card group relative overflow-hidden rounded-2xl border-2 border-transparent bg-[#111111] transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-gold"
          style={{ aspectRatio: "4 / 5" }}
        >
          <SafeImage
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            className="block h-full w-full object-cover object-[center_top]"
          />
          <div
            className="absolute right-0 bottom-0 left-0 px-4 pt-6 pb-4"
            style={{
              background:
                "linear-gradient(transparent, rgba(0,0,0,0.8))",
            }}
          >
            <span className="text-sm font-semibold text-gold">
              AI Enhanced →
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
