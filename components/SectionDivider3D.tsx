"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type SectionDivider3DProps = {
  shape?: "icosahedron" | "octahedron" | "torus";
};

export function SectionDivider3D({ shape = "icosahedron" }: SectionDivider3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(80, 80);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    let geometry: THREE.BufferGeometry;
    if (shape === "octahedron") {
      geometry = new THREE.OctahedronGeometry(1, 0);
    } else if (shape === "torus") {
      geometry = new THREE.TorusGeometry(0.8, 0.25, 8, 16);
    } else {
      geometry = new THREE.IcosahedronGeometry(1, 0);
    }

    const material = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let animId = 0;
    let paused = false;
    const clock = new THREE.Clock();

    const observer = new IntersectionObserver(
      ([entry]) => {
        paused = !entry.isIntersecting;
      },
      { threshold: 0 },
    );
    observer.observe(container);

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (paused || prefersReduced) return;
      const t = clock.getElapsedTime();
      mesh.rotation.x = t * 0.5;
      mesh.rotation.y = t * 0.7;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [shape]);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center py-8"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} width={80} height={80} />
    </div>
  );
}
