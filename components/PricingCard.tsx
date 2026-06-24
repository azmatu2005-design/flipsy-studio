"use client";

import type { ReactNode } from "react";
import { TiltSurface } from "./TiltSurface";

type PricingCardProps = {
  children: ReactNode;
  popular?: boolean;
  className?: string;
};

export function PricingCard({
  children,
  popular = false,
  className = "",
}: PricingCardProps) {
  return (
    <TiltSurface
      maxDegrees={6}
      hoverScale={1}
      baseRotateY={popular ? -2 : 0}
      className={`pricing-card pricing-card-hover flex h-full flex-col rounded-2xl bg-[#111111] p-6 ${className}`}
    >
      {children}
    </TiltSurface>
  );
}
