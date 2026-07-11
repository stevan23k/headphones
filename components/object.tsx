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
  const controlsRef = useRef<any>(null);

  const START_X = 10;
  const PHASE_1_END = 0.0;
  const PHASE_2_END = 0.36;
  const ANIMATION_END = 0.64;
  const CARD_SCALE = 0.4;
  const CARD_TILT = 0.15;
  const end = 0.65;
  const HIDE_AT = 0.65;

  useFrame(() => {
    if (!groupRef.current) return;

    const progress = scrollProgressRef.current;

    if (progress < PHASE_1_END) {
      groupRef.current.position.x = START_X;
      groupRef.current.rotation.y = 0;
      groupRef.current.rotation.z = 0;
      groupRef.current.scale.set(1, 1, 1);
    } else if (progress < PHASE_2_END) {
      const t = (progress - PHASE_1_END) / (PHASE_2_END - PHASE_1_END);
      groupRef.current.position.x = START_X * (1 - t);
      groupRef.current.rotation.y = t * Math.PI * 2;
      groupRef.current.rotation.z = 0;
      groupRef.current.scale.set(1, 1, 1);
    } else if (progress < ANIMATION_END) {
      const t = (progress - PHASE_2_END) / (ANIMATION_END - PHASE_2_END);
      const s = 1 - t * (1 - CARD_SCALE);
      groupRef.current.position.x = 0;
      groupRef.current.rotation.y = Math.PI * 2 + t * Math.PI * 2;
      groupRef.current.rotation.z = t * CARD_TILT;
      groupRef.current.scale.set(s, s, s);
    } else if (progress < HIDE_AT) {
      groupRef.current.position.x = 0;
      groupRef.current.rotation.y = Math.PI * 4;
      groupRef.current.rotation.z = CARD_TILT;
      groupRef.current.scale.set(CARD_SCALE, CARD_SCALE, CARD_SCALE);

      if (controlsRef.current?.enabled) {
        controlsRef.current.enabled = false;
      }
    } else {
      groupRef.current.scale.set(0, 0, 0);
    }
  });

  return (
    <>
      <group ref={groupRef}>
        <ModeloObj />
        <ProductCallouts scrollProgressRef={scrollProgressRef} />
      </group>
      <OrbitControls ref={controlsRef} enableZoom={false} />
    </>
  );
}

export default function Scene3D({
  scrollProgressRef,
}: {
  scrollProgressRef: { current: number };
}) {
  const mounted = useSyncExternalStore(
    () => () => { },
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
    </Canvas>
  );
}
