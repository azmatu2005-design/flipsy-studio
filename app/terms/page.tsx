import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Terms of Service - Flipsy Studio",
  description: "Terms of Service for Flipsy Studio mobile application",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-3xl px-6 pt-28 pb-20">
        <h1 className="mb-2 text-4xl font-bold text-white">Terms of Service</h1>
        <p className="mb-10 text-sm text-grey">Last updated: June 18, 2026</p>

        <div className="space-y-8 text-grey leading-relaxed">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of
            the Flipsy Studio mobile application and related services (collectively, the
            &ldquo;Service&rdquo;) operated by Flipsy Studio (&ldquo;we&rdquo;,
            &ldquo;our&rdquo;, or &ldquo;us&rdquo;). By creating an account or using the
            Service, you agree to these Terms.
          </p>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              1. Service Description
            </h2>
            <p>
              Flipsy Studio is an AI-powered creative platform for fashion brands,
              retailers, and creative professionals. The Service allows you to upload
              product images and generate professional photoshoots, flat lays, ghost
              mannequins, marketing assets, and related visual content using artificial
              intelligence. Features, credit limits, and availability may vary by
              subscription plan.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              2. User Responsibilities
            </h2>
            <p className="mb-3">You agree to:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>Provide accurate account information and keep your credentials secure</li>
              <li>
                Upload only content you own or have the right to use, including images of
                garments, accessories, and products
              </li>
              <li>
                Use the Service lawfully and not for infringing, harmful, deceptive, or
                abusive purposes
              </li>
              <li>
                Not attempt to reverse engineer, scrape, overload, or interfere with the
                Service or its AI providers
              </li>
              <li>Comply with all applicable laws, including intellectual property laws</li>
            </ul>
            <p className="mt-3">
              You are solely responsible for the content you upload and the outputs you
              publish or distribute.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              3. Payment and Refunds
            </h2>
            <p className="mb-3">
              Paid subscriptions and in-app purchases are processed through the Apple App
              Store or Google Play Store, as applicable. Pricing, billing cycles, and
              renewal terms are displayed at the time of purchase.
            </p>
            <p className="mb-3">
              Subscriptions renew automatically unless cancelled through your app store
              account settings before the renewal date. Credits and usage limits are
              allocated according to your active plan.
            </p>
            <p>
              Refunds are handled in accordance with the policies of the platform through
              which you purchased the subscription. We do not guarantee refunds for partial
              billing periods or unused credits except where required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              4. Intellectual Property
            </h2>
            <p className="mb-3">
              You retain ownership of the images and materials you upload. Subject to these
              Terms, you receive a license to use AI-generated outputs for your business
              and commercial purposes in accordance with your plan.
            </p>
            <p>
              The Flipsy Studio name, logo, software, interfaces, and underlying technology
              remain our property or that of our licensors. You may not copy, modify,
              distribute, or create derivative works of the Service except as expressly
              permitted.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              5. Limitation of Liability
            </h2>
            <p className="mb-3">
              The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
              basis. AI-generated results may vary in quality and may not always meet your
              expectations. We do not guarantee uninterrupted, error-free, or perfectly
              accurate outputs.
            </p>
            <p>
              To the maximum extent permitted by law, Flipsy Studio shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages, or
              any loss of profits, data, or goodwill arising from your use of the Service.
              Our total liability for any claim relating to the Service shall not exceed
              the amount you paid us in the twelve (12) months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              6. Account Termination
            </h2>
            <p>
              You may delete your account at any time from within the App. We may suspend
              or terminate access if you violate these Terms or use the Service in a way
              that creates risk or legal exposure for us or other users.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              7. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. Material changes will be
              communicated through the App or by email. Continued use of the Service after
              changes become effective constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">8. Contact</h2>
            <p className="mb-3">
              If you have questions about these Terms, please contact us:
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
            <p className="mt-2">
              See also our{" "}
              <Link href="/privacy" className="text-gold hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
