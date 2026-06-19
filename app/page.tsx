import { FadeUp } from "@/components/FadeUp";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { HeroParticles } from "@/components/HeroParticles";
import { Navbar } from "@/components/Navbar";
import { StatsBar } from "@/components/StatsBar";
import { StoreButtons } from "@/components/StoreButtons";

const features = [
  {
    title: "Virtual Shoot",
    description: "AI models wearing your exact garment in luxury settings",
    image:
      "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549961/ChatGPT_Image_Jun_15_2026_11_48_42_PM_zihev4.png",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
  },
  {
    title: "Ghost Mannequin",
    description: "Invisible mannequin for professional product listings",
    image:
      "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549955/ChatGPT_Image_Jun_15_2026_11_50_27_PM_tr4pd2.png",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    title: "AI Poster",
    description: "Stunning marketing posters ready to share",
    image:
      "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549969/ChatGPT_Image_Jun_15_2026_11_56_49_PM_apd1xp.png",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-2.21-1.79-4-4-4S4.5 13.672 4.5 15.877c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Accessory Try-On",
    description: "Rings, watches, bags in professional scenes",
    image:
      "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781889672/bkheaga3urzyappdbztz.jpg",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "AI Video",
    description: "Cinematic product videos that amaze customers",
    image:
      "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549969/ChatGPT_Image_Jun_15_2026_11_58_11_PM_caduln.png",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
      </svg>
    ),
  },
  {
    title: "Background Remover",
    description: "Remove and replace backgrounds instantly",
    image:
      "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549959/ChatGPT_Image_Jun_15_2026_11_51_34_PM_pkwrgt.png",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536 1.536M7.848 8.25A3 3 0 106 5.25a3 3 0 003.848 3M7.848 8.25H9m-1.152 0H9m0 0v.018M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

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
    description: "Select model, pose, background and style",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Download",
    description: "Get professional results in seconds",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
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
    paid: false,
  },
  {
    name: "Starter",
    price: "PKR 1,500",
    credits: "200 credits",
    shoots: "Up to 100 shoots",
    features: ["No watermark"],
    popular: false,
    paid: true,
  },
  {
    name: "Pro",
    price: "PKR 3,500",
    credits: "600 credits",
    shoots: "Up to 300 shoots",
    features: ["Video + 4K"],
    popular: true,
    paid: true,
  },
  {
    name: "Business",
    price: "PKR 7,500",
    credits: "1,500 credits",
    shoots: "Up to 750 shoots",
    features: ["WhatsApp support"],
    popular: false,
    paid: true,
  },
  {
    name: "Agency",
    price: "PKR 15,000",
    credits: "4,000 credits",
    shoots: "Up to 2,000 shoots",
    features: ["Priority support"],
    popular: false,
    paid: true,
  },
  {
    name: "Enterprise",
    price: "PKR 35,000",
    credits: "12,000 credits",
    shoots: "Up to 6,000 shoots",
    features: ["White label"],
    popular: false,
    paid: true,
  },
];

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
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <HeroParticles />
        <div className="hero-glow absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
          <FadeUp>
            <p className="mb-4 text-sm font-medium tracking-widest text-gold uppercase">
              Your Complete AI Creative Studio
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-4xl leading-tight font-bold tracking-tight md:text-6xl lg:text-7xl">
              <span className="text-white">Professional AI Photoshoots</span>
              <br />
              <span className="gold-shimmer">In Seconds</span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-grey md:text-xl">
              Transform ordinary product photos into stunning professional shoots
              with AI. Used by 1000+ fashion brands in Pakistan and beyond.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <StoreButtons className="mt-10" />
            <p className="mt-4 text-sm text-grey">
              30 credits free • No credit card required
            </p>
          </FadeUp>
        </div>
      </section>

      <StatsBar />

      <FadeUp>
        <Gallery />
      </FadeUp>

      {/* Before / After */}
      <section className="py-20">
        <FadeUp>
          <div className="mx-auto mb-12 max-w-7xl px-6 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              The Flipsy Studio Difference
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={100}>
          <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-0 px-6 md:flex-row">
            <div className="relative flex-1">
              <img
                src="https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549953/ChatGPT_Image_Jun_15_2026_11_46_52_PM_kwkfuj.png"
                alt="Before - original product photo"
                className="h-auto w-full rounded-t-2xl object-cover md:rounded-none md:rounded-l-2xl"
              />
              <span className="absolute bottom-4 left-4 rounded bg-black/60 px-3 py-1 text-sm font-semibold tracking-wider text-gold">
                BEFORE
              </span>
            </div>

            <div className="hidden w-px shrink-0 bg-gold md:block" />
            <div className="my-4 h-px w-full bg-gold md:hidden" />

            <div className="relative flex-1">
              <img
                src="https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549961/ChatGPT_Image_Jun_15_2026_11_48_42_PM_zihev4.png"
                alt="After - AI generated professional shoot"
                className="h-auto w-full rounded-b-2xl object-cover md:rounded-none md:rounded-r-2xl"
              />
              <span className="absolute right-4 bottom-4 rounded bg-black/60 px-3 py-1 text-sm font-semibold tracking-wider text-gold">
                AFTER
              </span>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={200}>
          <p className="mt-10 text-center text-xl italic text-gold">
            One upload. Infinite possibilities.
          </p>
        </FadeUp>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <FadeUp>
          <div className="mx-auto mb-12 max-w-7xl px-6 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Everything You Need
            </h2>
            <p className="mt-3 text-grey">
              Professional AI tools for every need
            </p>
          </div>
        </FadeUp>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
          {features.map((feature, i) => (
            <FadeUp key={feature.title} delay={i * 80}>
              <div className="card-hover overflow-hidden rounded-2xl border-t-2 border-gold bg-[#111111]">
                <div className="relative h-48 w-full">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3 text-gold">
                    {feature.icon}
                    <h3 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-grey">
                    {feature.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <FadeUp>
          <div className="mx-auto mb-16 max-w-7xl px-6 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Simple. Fast. Professional.
            </h2>
          </div>
        </FadeUp>

        <div className="relative mx-auto max-w-4xl px-6">
          <div className="absolute top-12 right-[16.67%] left-[16.67%] hidden h-0.5 border-t-2 border-dotted border-gold md:block" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {steps.map((step, i) => (
              <FadeUp key={step.title} delay={i * 150}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold text-xl font-bold text-black">
                    {step.number}
                  </div>
                  <div className="mb-3 text-gold">{step.icon}</div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-grey">{step.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <FadeUp>
          <div className="mx-auto mb-12 max-w-7xl px-6 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Choose Your Plan
            </h2>
            <p className="mt-3 text-grey">Start free, scale as you grow</p>
          </div>
        </FadeUp>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <FadeUp key={plan.name} delay={i * 60}>
              <div
                className={`card-hover relative flex h-full flex-col rounded-2xl bg-[#111111] p-6 ${
                  plan.popular ? "pricing-popular" : "border border-white/5"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold tracking-wide text-black">
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
                        className="block rounded-full bg-gold py-2.5 text-center text-sm font-semibold text-black shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-opacity hover:opacity-90"
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
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <FadeUp>
          <div className="mx-auto mb-12 max-w-7xl px-6 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Loved by Fashion Brands
            </h2>
            <p className="mt-3 text-grey">
              Join 1000+ brands already using Flipsy Studio
            </p>
          </div>
        </FadeUp>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeUp key={t.author} delay={i * 100}>
              <div className="card-hover rounded-2xl border border-gold/40 bg-[#111111] p-6">
                <p className="mb-4 leading-relaxed text-white">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm text-grey">{t.author}</p>
                <p className="mt-2 text-gold">★★★★★</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section id="download" className="cta-gradient py-20">
        <FadeUp>
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Start Creating Professional Shoots Today
            </h2>
            <p className="mt-4 text-grey">
              Download free and get 30 credits instantly — no credit card
              required
            </p>
            <StoreButtons className="mt-8" />
          </div>
        </FadeUp>
      </section>

      <Footer />
    </>
  );
}
