"use client";

import { setConsoleFunction } from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import ModeloObj from "./headphone";

setConsoleFunction((type, message, ...args) => {
  if (type === "warn" && message.includes("Clock:")) return;
  console[type](message, ...args);
});

export default function Scene3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Canvas
      camera={{ position: [0, 3, 40], fov: 35 }}
      className="h-full w-full"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 20, 10]} intensity={3} />
      <directionalLight position={[-10, 5, -10]} intensity={1.5} />
      <directionalLight position={[0, -10, 0]} intensity={0.5} />
      <ModeloObj />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
    </Canvas>
  );
}
