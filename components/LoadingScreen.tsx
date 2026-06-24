"use client";

import { useEffect, useState } from "react";

const LETTERS = "FLIPSY STUDIO".split("");

export function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (sessionStorage.getItem("flipsy-loaded") || prefersReduced) {
      return;
    }

    const showId = requestAnimationFrame(() => {
      setVisible(true);
      document.body.style.overflow = "hidden";
    });

    const start = performance.now();
    const duration = 2000;

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setProgress(p * 100);
      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        setFadeOut(true);
        setTimeout(() => {
          setVisible(false);
          document.body.style.overflow = "";
          sessionStorage.setItem("flipsy-loaded", "1");
        }, 600);
      }
    };

    const animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(showId);
      cancelAnimationFrame(animId);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`loading-screen ${fadeOut ? "loading-screen-out" : ""}`}>
      <svg className="loading-monogram" viewBox="0 0 120 120" fill="none">
        <rect
          className="loading-stroke"
          x="10"
          y="10"
          width="100"
          height="100"
          rx="12"
          stroke="#D4AF37"
          strokeWidth="2"
        />
        <text
          x="60"
          y="72"
          textAnchor="middle"
          fill="#D4AF37"
          fontSize="36"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
        >
          FS
        </text>
      </svg>

      <div className="loading-letters">
        {LETTERS.map((letter, i) => (
          <span
            key={i}
            className="loading-letter"
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>

      <div className="loading-bar-track">
        <div
          className="loading-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
