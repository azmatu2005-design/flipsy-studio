"use client";

import { useState, type CSSProperties } from "react";

type SafeImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: CSSProperties;
  loading?: "lazy" | "eager";
};

export function SafeImage({
  src,
  alt,
  width,
  height,
  className = "",
  style,
  loading = "lazy",
}: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-[#111111] text-xs text-grey ${className}`}
        style={{ width, height, ...style }}
        role="img"
        aria-label={alt}
      >
        Image unavailable
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={className}
      style={style}
      onError={() => setError(true)}
    />
  );
}
