import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-gold/30 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <Link href="/">
          <Logo size="sm" />
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-grey md:gap-6">
          <Link href="/privacy" className="transition-colors hover:text-white">
            Privacy Policy
          </Link>
          <span className="hidden text-white/20 md:inline">|</span>
          <Link href="/support" className="transition-colors hover:text-white">
            Support
          </Link>
          <span className="hidden text-white/20 md:inline">|</span>
          <a
            href="mailto:studioflipsy@gmail.com"
            className="transition-colors hover:text-white"
          >
            Contact
          </a>
        </div>

        <a
          href="mailto:studioflipsy@gmail.com"
          className="text-sm text-gold transition-opacity hover:opacity-80"
        >
          studioflipsy@gmail.com
        </a>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-sm text-grey">
        © 2026 Flipsy Studio. All rights reserved.
      </div>
    </footer>
  );
}
