"use client";

import { setConsoleFunction } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSyncExternalStore, useRef, type MutableRefObject } from "react";
import { type Group } from "three";
import ModeloObj from "./headphone";
import ProductCallouts from "./product-callouts";

setConsoleFunction((type, message, ...args) => {
  if (type === "warn" && message.includes("Clock:")) return;
  console[type](message, ...args);
});

function ModelScene({
  scrollProgressRef,
}: {
  scrollProgressRef: MutableRefObject<number>;
}) {
  const groupRef = useRef<Group>(null);

  const START_X = 10;
  const PHASE_1_END = 0.2;

  useFrame(() => {
    if (!groupRef.current) return;

    const progress = scrollProgressRef.current;

    if (progress < PHASE_1_END) {
      groupRef.current.position.x = START_X;
      groupRef.current.rotation.y = 0;
    } else {
      const t = (progress - PHASE_1_END) / (1 - PHASE_1_END);
      groupRef.current.position.x = START_X * (1 - t);
      groupRef.current.rotation.y = t * Math.PI * 2;
    }
  });

  return (
    <group ref={groupRef}>
      <ModeloObj />
      <ProductCallouts scrollProgressRef={scrollProgressRef} />
    </group>
  );
}

export default function Scene3D({
  scrollProgressRef,
}: {
  scrollProgressRef: { current: number };
}) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

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
      <ModelScene scrollProgressRef={scrollProgressRef} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
