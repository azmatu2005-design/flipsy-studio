import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Privacy Policy - Flipsy Studio",
  description: "Privacy Policy for Flipsy Studio mobile application",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-3xl px-6 pt-28 pb-20">
        <h1 className="mb-2 text-4xl font-bold text-white">Privacy Policy</h1>
        <p className="mb-10 text-sm text-grey">Last updated: June 18, 2026</p>

        <div className="space-y-8 text-grey leading-relaxed">
          <p>
            Flipsy Studio (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;)
            operates the Flipsy Studio mobile application (the &ldquo;App&rdquo;). This
            Privacy Policy explains how we collect, use, and protect your information
            when you use our App.
          </p>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              1. Information We Collect
            </h2>
            <p className="mb-3">
              <strong className="text-white">Images you upload:</strong> When you use
              Flipsy Studio, you may upload photos of garments, accessories, or other
              products. These images are temporarily processed by our AI systems to
              generate photoshoots and are not permanently stored on our servers beyond
              what is necessary for generation.
            </p>
            <p className="mb-3">
              <strong className="text-white">Account information:</strong> We collect
              your email address and basic profile information when you create an
              account.
            </p>
            <p className="mb-3">
              <strong className="text-white">Usage data:</strong> We collect information
              about how you use the App, including features used, generation history,
              and credit usage.
            </p>
            <p>
              <strong className="text-white">Device information:</strong> We collect
              basic device information such as device type, operating system, and app
              version for troubleshooting purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              2. How We Use Your Information
            </h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>Provide and improve our AI generation services</li>
              <li>Process your credits and manage your subscription</li>
              <li>Send you important updates about the App</li>
              <li>Provide customer support</li>
              <li>Ensure the security and integrity of our services</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              3. Image Processing and AI Generation
            </h2>
            <p>
              Images you upload are processed by third-party AI services including
              OpenAI and fal.ai to generate the requested content. These services
              process your images according to their own privacy policies. We recommend
              reviewing OpenAI&apos;s privacy policy at{" "}
              <Link
                href="https://openai.com/privacy"
                className="text-gold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                openai.com/privacy
              </Link>{" "}
              and fal.ai&apos;s privacy policy at{" "}
              <Link
                href="https://fal.ai/privacy"
                className="text-gold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                fal.ai/privacy
              </Link>
              .
            </p>
            <p className="mt-3">
              Generated images are stored temporarily on Cloudinary CDN servers to allow
              you to view and download your results. You may delete your generated
              images at any time from within the App.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              4. Data Sharing
            </h2>
            <p className="mb-3">
              We do not sell your personal information to third parties. We may share
              your information with:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong className="text-white">AI Service Providers:</strong> OpenAI and
                fal.ai for image generation processing
              </li>
              <li>
                <strong className="text-white">Cloud Storage:</strong> Cloudinary for
                temporary image storage
              </li>
              <li>
                <strong className="text-white">Database Services:</strong> Supabase for
                account and usage data storage
              </li>
              <li>
                <strong className="text-white">Payment Processors:</strong> Apple App
                Store and Google Play Store for subscription management
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              5. Children&apos;s Privacy
            </h2>
            <p>
              Flipsy Studio is designed for business use by fashion brands, clothing
              retailers, and creative professionals. While our App includes AI models of
              various ages for the purpose of showcasing children&apos;s clothing, the App
              itself is intended for use by adults (18+) and business owners only. We do
              not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              6. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect
              your information against unauthorized access, alteration, disclosure, or
              destruction. All data transmission is encrypted using SSL/TLS.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              7. Data Retention
            </h2>
            <p>
              We retain your account information for as long as your account is active.
              Uploaded images are processed and may be retained temporarily on CDN
              servers. You may request deletion of your account and associated data at
              any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              8. Your Rights
            </h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of non-essential communications</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:studioflipsy@gmail.com"
                className="text-gold hover:underline"
              >
                studioflipsy@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              9. Cookies and Tracking
            </h2>
            <p>
              Our mobile App does not use cookies. We may use analytics tools to
              understand App usage patterns and improve our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of
              any significant changes through the App or by email. Continued use of the
              App after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              11. Contact Us
            </h2>
            <p className="mb-3">
              If you have any questions about this Privacy Policy or our data practices,
              please contact us:
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:studioflipsy@gmail.com"
                className="text-gold hover:underline"
              >
                studioflipsy@gmail.com
              </a>
            </p>
            <p className="mt-2">App: Flipsy Studio</p>
            <p>Developer: Flipsy Studio</p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
