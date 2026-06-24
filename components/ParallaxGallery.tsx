"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const galleryItems = [
  {
    src: "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1782230479/brian-wangenheim-Y4pcueOx8nE-unsplash_t27wxc.jpg",
    caption: "Western Editorial",
    span: "md:col-span-7 md:row-span-2",
    speed: 0.15,
    height: "h-[500px]",
  },
  {
    src: "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549961/ChatGPT_Image_Jun_15_2026_11_48_42_PM_zihev4.png",
    caption: "AI Virtual Shoot",
    span: "md:col-span-5",
    speed: 0.25,
    height: "h-[400px]",
  },
  {
    src: "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1782230497/apolo-photographer-g7Fdj8EDJng-unsplash_t8fqs7.jpg",
    caption: "Studio Reference",
    span: "md:col-span-5",
    speed: 0.2,
    height: "h-[400px]",
  },
  {
    src: "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549955/ChatGPT_Image_Jun_15_2026_11_50_27_PM_tr4pd2.png",
    caption: "Ghost Mannequin",
    span: "md:col-span-7",
    speed: 0.3,
    height: "h-[450px]",
  },
  {
    src: "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1782230508/imana-IEakboWH0hk-unsplash_ofhn6o.jpg",
    caption: "Fashion Campaign",
    span: "md:col-span-6",
    speed: 0.18,
    height: "h-[400px]",
  },
  {
    src: "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1782230522/senya-mitin-av3F4yuiQ-U-unsplash_a0i3xe.jpg",
    caption: "Luxury Aesthetic",
    span: "md:col-span-6",
    speed: 0.22,
    height: "h-[400px]",
  },
];

export function ParallaxGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const items = sectionRef.current?.querySelectorAll(".parallax-item");
    if (!items) return;

    const triggers: ScrollTrigger[] = [];

    items.forEach((item) => {
      const speed = parseFloat(
        (item as HTMLElement).dataset.speed || "0.2",
      );

      const st = gsap.to(item, {
        y: speed * -60,
        ease: "none",
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      if (st.scrollTrigger) triggers.push(st.scrollTrigger);
    });

    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <div
      ref={sectionRef}
      className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 md:grid-cols-12"
    >
      {galleryItems.map((item, i) => (
        <div
          key={i}
          data-speed={item.speed}
          className={`parallax-item group relative overflow-hidden rounded-2xl ${item.span} ${item.height} max-h-[500px]`}
        >
          <img
            src={item.src}
            alt={item.caption}
            loading="lazy"
            width={800}
            height={500}
            className="cursor-explore h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="parallax-overlay absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-0" />
          <div className="absolute inset-0 border-2 border-transparent transition-all duration-500 group-hover:border-gold" />
          <div className="absolute right-0 bottom-0 left-0 translate-y-full bg-gradient-to-t from-black/90 to-transparent p-6 transition-transform duration-500 group-hover:translate-y-0">
            <p className="text-sm font-medium tracking-widest text-gold uppercase">
              {item.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
