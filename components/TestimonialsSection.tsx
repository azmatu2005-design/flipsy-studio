"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TiltSurface } from "./TiltSurface";

const testimonials = [
  {
    quote:
      "Flipsy Studio saved us 80% on photography costs. Results are incredible!",
    author: "Fashion Brand, Karachi",
  },
  {
    quote:
      "Our Instagram engagement doubled after switching to AI photoshoots!",
    author: "Clothing Studio, Lahore",
  },
  {
    quote:
      "Ghost mannequin feature is perfect for our catalog. So professional and fast!",
    author: "Boutique Owner, Islamabad",
  },
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    const stars = section.querySelectorAll(".star-animate");
    gsap.set(stars, { opacity: 0, scale: 0 });

    gsap.to(stars, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      stagger: 0.08,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        once: true,
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0a0a0a] py-24">
      <div className="mx-auto mb-12 max-w-7xl px-6 text-center">
        <h2 className="section-headline">Loved by Fashion Brands</h2>
        <p className="mt-3 text-grey">
          Join 1000+ brands already using Flipsy Studio
        </p>
      </div>

      <div className="testimonial-track mx-auto max-w-7xl snap-x snap-mandatory">
        {testimonials.map((t) => (
          <TiltSurface
            key={t.author}
            maxDegrees={8}
            hoverScale={1.02}
            className="testimonial-card snap-center rounded-2xl border border-gold/30 bg-[#111111] p-6 hover:shadow-[0_16px_48px_rgba(212,175,55,0.15)]"
          >
            <p className="mb-4 leading-relaxed text-white">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="text-sm text-grey">{t.author}</p>
            <p className="mt-2 text-gold">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className="star-animate inline-block">
                  ★
                </span>
              ))}
            </p>
          </TiltSurface>
        ))}
      </div>
    </section>
  );
}
