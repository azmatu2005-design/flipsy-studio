"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 2000;
const SPHERE_RADIUS = 6;
const GOLD = 0xd4af37;

function fibonacciSphere(count: number, radius: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / Math.max(count - 1, 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = goldenAngle * i;
    points.push(
      new THREE.Vector3(
        Math.cos(theta) * r * radius,
        y * radius,
        Math.sin(theta) * r * radius,
      ),
    );
  }

  return points;
}

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let animId = 0;
    let paused = false;
    const mouse = { x: 0, y: 0 };
    const lookTarget = new THREE.Vector3(0, 0, 0);
    const desiredLook = new THREE.Vector3(0, 0, 0);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.035);

    const sceneGroup = new THREE.Group();
    scene.add(sceneGroup);

    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);

    const goldLightA = new THREE.PointLight(GOLD, 2, 80);
    goldLightA.position.set(5, 5, 5);
    scene.add(goldLightA);

    const goldLightB = new THREE.PointLight(GOLD, 1, 80);
    goldLightB.position.set(-5, -5, -5);
    scene.add(goldLightB);

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      100,
    );
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1);

    const coreSphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.5, 32, 32),
      new THREE.MeshPhongMaterial({
        color: GOLD,
        transparent: true,
        opacity: 0.15,
        wireframe: false,
      }),
    );
    sceneGroup.add(coreSphere);

    const coreWireframe = new THREE.Mesh(
      new THREE.SphereGeometry(1.52, 24, 24),
      new THREE.MeshBasicMaterial({
        color: GOLD,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      }),
    );
    sceneGroup.add(coreWireframe);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: GOLD,
      transparent: true,
      opacity: 0.4,
    });

    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(3, 0.02, 8, 100),
      ringMaterial,
    );
    ring1.rotation.x = Math.PI / 2;
    sceneGroup.add(ring1);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(3.5, 0.02, 8, 100),
      ringMaterial.clone(),
    );
    ring2.rotation.x = Math.PI / 4;
    sceneGroup.add(ring2);

    const ring3 = new THREE.Mesh(
      new THREE.TorusGeometry(4, 0.02, 8, 100),
      ringMaterial.clone(),
    );
    ring3.rotation.z = Math.PI / 4;
    sceneGroup.add(ring3);

    const particleGeo = new THREE.SphereGeometry(0.02, 6, 6);
    const particleMat = new THREE.MeshBasicMaterial({
      color: GOLD,
      transparent: true,
      opacity: 0.55,
    });
    const particleCloud = new THREE.InstancedMesh(
      particleGeo,
      particleMat,
      PARTICLE_COUNT,
    );
    const dummy = new THREE.Object3D();
    const spherePoints = fibonacciSphere(PARTICLE_COUNT, SPHERE_RADIUS);

    spherePoints.forEach((point, i) => {
      dummy.position.copy(point);
      dummy.updateMatrix();
      particleCloud.setMatrixAt(i, dummy.matrix);
    });
    particleCloud.instanceMatrix.needsUpdate = true;
    sceneGroup.add(particleCloud);

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        paused = !entry.isIntersecting;
      },
      { threshold: 0.05 },
    );
    observer.observe(container);

    const timer = new THREE.Timer();
    let elapsed = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (paused || prefersReduced) return;

      timer.update();
      const delta = timer.getDelta();
      elapsed += delta;

      desiredLook.set(mouse.x * 1.2, mouse.y * 0.8, 0);
      lookTarget.lerp(desiredLook, 0.05);

      const maxTilt = (5 * Math.PI) / 180;
      sceneGroup.rotation.x = mouse.y * maxTilt;
      sceneGroup.rotation.y = mouse.x * maxTilt;

      coreSphere.rotation.y += delta * 0.25;
      coreWireframe.rotation.y += delta * 0.25;

      ring1.rotation.z += delta * 0.18;
      ring2.rotation.y += delta * 0.12;
      ring3.rotation.x += delta * 0.1;

      particleCloud.rotation.y += delta * 0.08;

      const orbitAngle = elapsed * 0.08;
      camera.position.x = Math.sin(orbitAngle) * 1.5;
      camera.position.y = 0;
      camera.position.z = 10 + Math.cos(orbitAngle) * 0.4;
      camera.lookAt(lookTarget);

      renderer.render(scene, camera);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);
    animate();

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      coreSphere.geometry.dispose();
      (coreSphere.material as THREE.Material).dispose();
      coreWireframe.geometry.dispose();
      (coreWireframe.material as THREE.Material).dispose();
      ring1.geometry.dispose();
      ring2.geometry.dispose();
      ring3.geometry.dispose();
      ringMaterial.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 h-full w-full">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
