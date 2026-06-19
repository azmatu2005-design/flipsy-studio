"use client";

function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  style: {
    left: `${(pseudoRandom(i + 1) * 100).toFixed(4)}%`,
    width: `${(pseudoRandom(i + 2) * 4 + 2).toFixed(5)}px`,
    height: `${(pseudoRandom(i + 2) * 4 + 2).toFixed(5)}px`,
    animationDelay: `${(pseudoRandom(i + 3) * 8).toFixed(5)}s`,
    animationDuration: `${(pseudoRandom(i + 4) * 10 + 8).toFixed(5)}s`,
    opacity: `${(pseudoRandom(i + 5) * 0.5 + 0.2).toFixed(5)}`,
  },
}));

export function HeroParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="floating-particle absolute rounded-full bg-gold"
          style={p.style}
        />
      ))}
    </div>
  );
}
