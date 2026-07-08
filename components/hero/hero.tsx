"use client";

import Scene3D from "@/components/object";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center overflow-hidden">
      <div className="z-10 flex flex-col gap-40 p-20">
        <div>
          <p className="w-250 text-[120px] text-base/30">
            everything is designed but few things are designed well.
          </p>
        </div>
        <div className="flex flex-row items-center gap-20">
          <div>
            <p className="text-[50px]">See how</p>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 h-full w-1/2">
        <Scene3D />
      </div>
    </section>
  );
}
