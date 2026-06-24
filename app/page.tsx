"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BeforeAfterCompare } from "@/components/BeforeAfterCompare";
import { CounterSection } from "@/components/CounterSection";
import { FashionGallery } from "@/components/FashionGallery";
import { FeatureCard } from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";
import { HeroScene } from "@/components/HeroScene";
import { HowItWorks } from "@/components/HowItWorks";
import { MagneticButton } from "@/components/MagneticButton";
import { Navbar } from "@/components/Navbar";
import { PricingCard } from "@/components/PricingCard";
import { ScrollReveal, StaggerReveal } from "@/components/ScrollReveal";
import { ScrollingGallery } from "@/components/ScrollingGallery";
import { TestimonialsSection } from "@/components/TestimonialsSection";

const features = [
  {
    emoji: "🎯",
    title: "Virtual Shoot",
    description: "AI models in luxury settings",
    image:
      "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549961/ChatGPT_Image_Jun_15_2026_11_48_42_PM_zihev4.png",
  },
  {
    emoji: "👻",
    title: "Ghost Mannequin",
    description: "Invisible mannequin photography",
    image:
      "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549955/ChatGPT_Image_Jun_15_2026_11_50_27_PM_tr4pd2.png",
  },
  {
    emoji: "🎨",
    title: "AI Poster",
    description: "Stunning marketing posters",
    image:
      "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549969/ChatGPT_Image_Jun_15_2026_11_56_49_PM_apd1xp.png",
  },
  {
    emoji: "💍",
    title: "Accessory Try-On",
    description: "Jewelry in professional scenes",
    image:
      "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781889672/bkheaga3urzyappdbztz.jpg",
  },
  {
    emoji: "🎬",
    title: "AI Video",
    description: "Cinematic product videos",
    image:
      "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549969/ChatGPT_Image_Jun_15_2026_11_58_11_PM_caduln.png",
  },
  {
    emoji: "✂️",
    title: "Background Remover",
    description: "Remove backgrounds instantly",
    image:
      "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549959/ChatGPT_Image_Jun_15_2026_11_51_34_PM_pkwrgt.png",
  },
];

const plans = [
  {
    name: "Free",
    price: "PKR 0",
    credits: "30 credits",
    shoots: "Up to 15 shoots",
    features: ["Basic features", "Watermark on results"],
    popular: false,
  },
  {
    name: "Starter",
    price: "PKR 1,500",
    credits: "200 credits",
    shoots: "Up to 100 shoots",
    features: ["No watermark"],
    popular: false,
  },
  {
    name: "Pro",
    price: "PKR 3,500",
    credits: "600 credits",
    shoots: "Up to 300 shoots",
    features: ["Video + 4K"],
    popular: true,
  },
  {
    name: "Business",
    price: "PKR 7,500",
    credits: "1,500 credits",
    shoots: "Up to 750 shoots",
    features: ["WhatsApp support"],
    popular: false,
  },
  {
    name: "Agency",
    price: "PKR 15,000",
    credits: "4,000 credits",
    shoots: "Up to 2,000 shoots",
    features: ["Priority support"],
    popular: false,
  },
  {
    name: "Enterprise",
    price: "PKR 35,000",
    credits: "12,000 credits",
    shoots: "Up to 6,000 shoots",
    features: ["White label"],
    popular: false,
  },
];

function CheckIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-gold" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const hero = heroRef.current;
      if (hero) {
        gsap.set(hero.querySelector(".hero-tag"), { opacity: 0 });
        gsap.set(hero.querySelector(".hero-line1"), { opacity: 0, y: 40 });
        gsap.set(hero.querySelector(".hero-line2"), { opacity: 0, y: 40 });
        gsap.set(hero.querySelector(".hero-sub"), { opacity: 0 });
        gsap.set(hero.querySelector(".hero-btns"), { opacity: 0 });

        const tl = gsap.timeline({ delay: 0.2 });
        tl.to(".hero-tag", { opacity: 1, duration: 0.8, ease: "power2.out" })
          .to(".hero-line1", { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 0.2)
          .to(".hero-line2", { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 0.4)
          .to(".hero-sub", { opacity: 1, duration: 0.8, ease: "power2.out" }, 0.6)
          .to(".hero-btns", { opacity: 1, duration: 0.8, ease: "power2.out" }, 0.8);
      }

      if (pricingRef.current) {
        gsap.fromTo(
          pricingRef.current.querySelectorAll(".pricing-card"),
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: pricingRef.current,
              start: "top 80%",
              once: true,
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />

      {/* SECTION 1 — HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-20">
        <HeroScene />
        <div
          ref={heroRef}
          className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center"
        >
          <p className="hero-tag section-label mb-4 tracking-[0.35em]">
            Your Complete
          </p>
          <h1 className="mb-4">
            <span className="hero-line1 block text-5xl font-bold text-white md:text-7xl lg:text-[80px] lg:leading-none">
              AI CREATIVE
            </span>
            <span className="hero-line2 text-shimmer mt-2 block text-5xl font-bold md:text-7xl lg:text-[80px] lg:leading-none">
              STUDIO
            </span>
          </h1>
          <p className="hero-sub mx-auto mb-10 max-w-xl text-lg text-white">
            Transform products into professional AI photography
          </p>
          <div className="hero-btns flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="#download" variant="filled">
              Download Free
            </MagneticButton>
            <MagneticButton href="#results" variant="outlined">
              View Results
            </MagneticButton>
          </div>
        </div>

        <div className="scroll-indicator absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* SECTION 2 — STATS */}
      <CounterSection />

      {/* SECTION 3 — RESULTS GALLERY */}
      <section id="results" className="bg-black py-24">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-7xl px-6 text-center">
            <p className="section-label mb-4">Real Results</p>
            <h2 className="section-headline">See what Flipsy Studio creates</h2>
          </div>
        </ScrollReveal>
        <ScrollingGallery />
      </section>

      {/* SECTION 4 — BEFORE/AFTER */}
      <section className="bg-[#0a0a0a] py-24">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-7xl px-6 text-center">
            <p className="section-label mb-4">The Difference</p>
            <h2 className="section-headline">Before vs After AI</h2>
          </div>
        </ScrollReveal>
        <BeforeAfterCompare
          beforeSrc="https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549953/ChatGPT_Image_Jun_15_2026_11_46_52_PM_kwkfuj.png"
          afterSrc="https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549961/ChatGPT_Image_Jun_15_2026_11_48_42_PM_zihev4.png"
        />
      </section>

      {/* SECTION 5 — FEATURES */}
      <section id="features" className="bg-black py-24">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-7xl px-6 text-center">
            <p className="section-label mb-4">AI Tools</p>
            <h2 className="section-headline">Everything you need</h2>
          </div>
        </ScrollReveal>
        <StaggerReveal
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2"
          stagger={0.1}
        >
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </StaggerReveal>
      </section>

      {/* SECTION 6 — HOW IT WORKS */}
      <section id="how-it-works" className="bg-[#0a0a0a] py-24">
        <ScrollReveal>
          <div className="mx-auto mb-16 max-w-7xl px-6 text-center">
            <p className="section-label mb-4">How It Works</p>
            <h2 className="section-headline">Simple. Fast. Professional.</h2>
          </div>
        </ScrollReveal>
        <HowItWorks />
      </section>

      {/* SECTION 7 — FASHION GALLERY */}
      <section className="bg-black py-24">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-7xl px-6 text-center">
            <p className="section-label mb-4">Fashion Meets AI</p>
            <h2 className="section-headline">Real brands. Real results.</h2>
          </div>
        </ScrollReveal>
        <FashionGallery />
      </section>

      {/* SECTION 8 — PRICING */}
      <section id="pricing" ref={pricingRef} className="bg-black py-24">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-7xl px-6 text-center">
            <h2 className="section-headline">Choose Your Plan</h2>
            <p className="mt-3 text-grey">Start free, scale as you grow</p>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              popular={plan.popular}
              className={
                plan.popular
                  ? "pro-glow-border border border-gold"
                  : "border border-white/5"
              }
            >
              {plan.popular && (
                <span className="mb-4 inline-block w-fit rounded-full bg-gold px-4 py-1 text-xs font-bold tracking-wide text-black">
                  MOST POPULAR
                </span>
              )}

              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <p className="mt-2 text-2xl font-bold text-gold">
                {plan.price}
                <span className="text-sm font-normal text-grey">/mo</span>
              </p>
              <p className="mt-1 text-sm text-grey">{plan.credits}</p>
              <p className="text-sm text-grey">{plan.shoots}</p>

              <ul className="mt-6 flex flex-1 flex-col gap-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                {plan.name === "Free" ? (
                  <a
                    href="#download"
                    className="block rounded-full border-2 border-gold py-2.5 text-center text-sm font-semibold text-white transition-all hover:bg-gold/10"
                  >
                    Download Free
                  </a>
                ) : plan.popular ? (
                  <>
                    <a
                      href="#download"
                      className="block rounded-full bg-gold py-2.5 text-center text-sm font-semibold text-black transition-opacity hover:opacity-90"
                    >
                      Get Started — Most Popular
                    </a>
                    <p className="mt-2 text-center text-xs text-grey">
                      Subscribe inside the app
                    </p>
                  </>
                ) : (
                  <>
                    <a
                      href="#download"
                      className="block rounded-full border-2 border-gold py-2.5 text-center text-sm font-semibold text-white transition-all hover:bg-gold/10"
                    >
                      Get Started
                    </a>
                    <p className="mt-2 text-center text-xs text-grey">
                      Subscribe inside the app
                    </p>
                  </>
                )}
              </div>
            </PricingCard>
          ))}
        </div>
      </section>

      {/* SECTION 9 — TESTIMONIALS */}
      <TestimonialsSection />

      {/* SECTION 10 — CTA */}
      <section id="download" className="cta-gradient py-28">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Start Creating Today
            </h2>
            <p className="mt-6 text-lg text-gold">
              Get 30 free credits — no credit card required
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton href="#download" variant="outlined">
                App Store
              </MagneticButton>
              <MagneticButton href="#download" variant="outlined">
                Google Play
              </MagneticButton>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 11 — FOOTER */}
      <Footer />
    </>
  );
}
