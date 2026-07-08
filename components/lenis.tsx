"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, // Slower = smoother (0.0 to 1.0)
        duration: 1.2, // Scroll animation duration in seconds
        smoothWheel: true, // Enable smooth scrolling for mouse wheels
      }}
    >
      {children}
    </ReactLenis>
  );
}
