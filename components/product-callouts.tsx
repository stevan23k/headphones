"use client";

import { useState, useRef, type MutableRefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { Line, Html } from "@react-three/drei";

interface CalloutDef {
  from: [number, number, number];
  to: [number, number, number];
  label: string;
  description: string;
}

const CALLOUTS: CalloutDef[] = [
  {
    from: [4, 1, 3],
    to: [8, 2.8, 0],
    label: "Headband",
    description: "Lightweight aluminum",
  },
  {
    from: [-5, -1, 4],
    to: [-8, 0, 5],
    label: "Drivers",
    description: "High-fidelity audio",
  },
  {
    from: [5, -1, 3],
    to: [8, -0.8, 0.5],
    label: "Ear Cushions",
    description: "Memory foam leather",
  },
  {
    from: [-4, -3, 3],
    to: [-8, -5, 3],
    label: "memory",
    description: "Memory from music",
  },
];

export default function ProductCallouts({
  scrollProgressRef,
}: {
  scrollProgressRef: MutableRefObject<number>;
}) {
  const [opacity, setOpacity] = useState(0);
  const prevRef = useRef(-1);

  useFrame(() => {
    const next = getCalloutOpacity(scrollProgressRef.current);
    if (Math.abs(next - prevRef.current) > 0.01) {
      prevRef.current = next;
      setOpacity(next);
    }
  });

  if (opacity <= 0) return null;

  return (
    <group>
      {CALLOUTS.map((c, i) => (
        <CalloutItem key={i} def={c} opacity={opacity} />
      ))}
    </group>
  );
}

function CalloutItem({ def, opacity }: { def: CalloutDef; opacity: number }) {
  return (
    <group>
      <Line
        points={[def.from, def.to]}
        color="#999999"
        lineWidth={1}
        opacity={opacity}
        transparent
      />
      <Html
        position={def.to}
        center
        style={{
          opacity,
          transform: `translateY(${(1 - opacity) * 10}px)`,
          transition: "none",
        }}
      >
        <div className="flex flex-col gap-1 whitespace-nowrap mix-blend-normal">
          <span className="text-sm font-semibold tracking-wide text-neutral-800">
            {def.label}
          </span>
          <span className="text-xs text-neutral-500">{def.description}</span>
        </div>
      </Html>
    </group>
  );
}

function getCalloutOpacity(progress: number): number {
  const CALLOUTS_START = 0.3;
  const CALLOUTS_END = 0.42;

  if (progress < CALLOUTS_START) return 0;
  if (progress >= CALLOUTS_END) return 1;

  return (progress - CALLOUTS_START) / (CALLOUTS_END - CALLOUTS_START);
}
