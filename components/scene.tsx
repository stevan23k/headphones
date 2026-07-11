"use client";

import { useRef } from "react";
import { useLenis } from "lenis/react";
import Scene3D from "./object";

export default function Scene() {
  const scrollProgressRef = useRef(0);

  useLenis(({ progress }) => {
    scrollProgressRef.current = progress;
  });

  return (
    <div className="pointer-events-none fixed inset-0 -z-50">
      <Scene3D scrollProgressRef={scrollProgressRef} />
    </div>
  );
}
