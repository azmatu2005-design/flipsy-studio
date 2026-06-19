"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { FadeUp } from "@/components/FadeUp";
import { FormEvent, useState } from "react";

const faqs = [
  {
    question: "How do credits work in Flipsy Studio?",
    answer:
      "Each AI generation uses credits based on the feature you choose. Virtual shoots typically use 2 credits, while simpler features like background removal use 1 credit. Your plan includes a monthly credit allowance that refreshes each billing cycle.",
  },
  {
    question: "What image formats can I upload?",
    answer:
      "Flipsy Studio supports JPG, PNG, and WEBP formats. For best results, upload high-resolution product photos with good lighting and a clear view of your garment or accessory.",
  },
  {
    question: "How long does AI generation take?",
    answer:
      "Most generations complete within 15–30 seconds. Complex features like AI video may take up to 60 seconds. You'll receive a notification when your results are ready.",
  },
  {
    question: "Can I use generated images commercially?",
    answer:
      "Yes! All images generated on paid plans (Starter and above) are yours to use commercially without watermark. Free plan results include a watermark and are intended for evaluation purposes.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "Subscriptions are managed through the Apple App Store or Google Play Store. Go to your device's subscription settings to cancel anytime. Your credits remain available until the end of your billing period.",
  },
  {
    question: "Is my uploaded data secure?",
    answer:
      "Absolutely. Your images are encrypted during upload and processing. They are temporarily stored on secure CDN servers and automatically deleted after 30 days unless you save them to your gallery.",
  },
];

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    window.location.href = `mailto:studioflipsy@gmail.com?subject=Support Request from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-3xl px-6 pt-28 pb-20">
        <FadeUp>
          <h1 className="mb-4 text-4xl font-bold text-white">Support</h1>
          <p className="mb-2 text-grey">
            Need help? We&apos;re here for you.
          </p>
          <a
            href="mailto:studioflipsy@gmail.com"
            className="text-lg font-medium text-gold hover:underline"
          >
            studioflipsy@gmail.com
          </a>
        </FadeUp>

        <section className="mt-16">
          <FadeUp>
            <h2 className="mb-8 text-2xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </FadeUp>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeUp key={faq.question} delay={i * 60}>
                <details className="group rounded-2xl border border-white/10 bg-[#111111]">
                  <summary className="cursor-pointer list-none p-5 font-medium text-white [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-4">
                      {faq.question}
                      <span className="text-gold transition-transform group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="border-t border-white/5 px-5 pt-0 pb-5 text-sm leading-relaxed text-grey">
                    {faq.answer}
                  </p>
                </details>
              </FadeUp>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <FadeUp>
            <h2 className="mb-8 text-2xl font-bold text-white">Contact Us</h2>
          </FadeUp>

          <FadeUp delay={100}>
            {submitted ? (
              <div className="rounded-2xl border border-gold/30 bg-[#111111] p-8 text-center">
                <p className="text-white">
                  Your email client should open shortly. If it doesn&apos;t, email us
                  directly at{" "}
                  <a
                    href="mailto:studioflipsy@gmail.com"
                    className="text-gold hover:underline"
                  >
                    studioflipsy@gmail.com
                  </a>
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-white/10 bg-[#111111] p-6 md:p-8"
              >
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-grey">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition-colors focus:border-gold"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-grey">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition-colors focus:border-gold"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-grey">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition-colors focus:border-gold"
                    placeholder="How can we help?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gold py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90 md:w-auto md:px-10"
                >
                  Send
                </button>
              </form>
            )}
          </FadeUp>
        </section>
      </main>

      <Footer />
    </>
  );
}
