"use client";

import { setConsoleFunction } from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useSyncExternalStore, useRef, type MutableRefObject, useEffect, useState } from "react";
import { type Group } from "three";
import ModeloObj from "./headphone";
import ProductCallouts from "./product-callouts";

setConsoleFunction((type, message, ...args) => {
  if (type === "warn" && message.includes("Clock:")) return;
  console[type](message, ...args);
});

function getResponsiveParams(aspect: number) {
  if (aspect < 0.6) return { scale: 0.45, startX: 1 };
  if (aspect < 0.8) return { scale: 0.55, startX: 2 };
  if (aspect < 1) return { scale: 0.65, startX: 4 };
  if (aspect < 1.4) return { scale: 0.8, startX: 7 };
  return { scale: 1, startX: 10 };
}

function ModelScene({
  scrollProgressRef,
}: {
  scrollProgressRef: MutableRefObject<number>;
}) {
  const { size } = useThree();
  const groupRef = useRef<Group>(null);
  const [params, setParams] = useState(() => getResponsiveParams(size.width / size.height));

  useEffect(() => {
    const handleResize = () => {
      setParams(getResponsiveParams(size.width / size.height));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  const { scale, startX } = params;

  const PHASE_1_END = 0.0;
  const PHASE_2_END = 0.36;
  const ANIMATION_END = 0.61;
  const CARD_SCALE = 0.4;
  const CARD_TILT = 0.15;
  const HIDE_AT = 0.61;

  useFrame(() => {
    if (!groupRef.current) return;

    const progress = scrollProgressRef.current;

    if (progress < PHASE_1_END) {
      groupRef.current.position.x = startX;
      groupRef.current.rotation.y = 0;
      groupRef.current.rotation.z = 0;
      groupRef.current.scale.set(scale, scale, scale);
    } else if (progress < PHASE_2_END) {
      const t = (progress - PHASE_1_END) / (PHASE_2_END - PHASE_1_END);
      groupRef.current.position.x = startX * (1 - t);
      groupRef.current.rotation.y = t * Math.PI * 2;
      groupRef.current.rotation.z = 0;
      groupRef.current.scale.set(scale, scale, scale);
    } else if (progress < ANIMATION_END) {
      const t = (progress - PHASE_2_END) / (ANIMATION_END - PHASE_2_END);
      const s = scale * (1 - t * (1 - CARD_SCALE));
      groupRef.current.position.x = 0;
      groupRef.current.rotation.y = Math.PI * 2 + t * Math.PI * 2;
      groupRef.current.rotation.z = t * CARD_TILT;
      groupRef.current.scale.set(s, s, s);
    } else if (progress < HIDE_AT) {
      groupRef.current.position.x = 0;
      groupRef.current.rotation.y = Math.PI * 4;
      groupRef.current.rotation.z = CARD_TILT;
      groupRef.current.scale.set(scale * CARD_SCALE, scale * CARD_SCALE, scale * CARD_SCALE);

    } else {
      groupRef.current.scale.set(0, 0, 0);
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