"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Phase02() {
  const containerRef = useRef<HTMLDivElement>(null);
  const block1Ref = useRef<HTMLDivElement>(null);
  const block2Ref = useRef<HTMLDivElement>(null);
  const block3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const blocks = [
        { ref: block1Ref, y: 80 },
        { ref: block2Ref, y: 120 },
        { ref: block3Ref, y: 60 },
      ];

      blocks.forEach(({ ref, y }) => {
        if (!ref.current) return;

        gsap.fromTo(
          ref.current,
          { opacity: 0, y },
          {
            opacity: 1,
            y: 10,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 75%",
              end: "top 20%",
              scrub: 1.5,
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-full p-24">
      <div className="h-full">
        <div ref={block1Ref} className="flex justify-center">
          <p className="text-[80px] w-160 flex text-center mix-blend-difference ">
            The best material
          </p>
        </div>
        <div ref={block2Ref} className="flex flex-col mt-40 gap-4">
          <p className="text-[50px] w-150 mix-blend-difference ">
            Crafted from aerospace-grade aluminum and genuine leather
          </p>
          <p className="text-[30px] mix-blend-difference ">
            Designed to last, built to be felt.
          </p>
        </div>
        <div
          ref={block3Ref}
          className="flex flex-col mt-20 gap-4 w-full justify-end items-end"
        >
          <p className="text-[50px] text-end mix-blend-difference">
            Silent world, pure sound.
          </p>
          <p className="text-[30px] text-end w-140 mix-blend-difference">
            Active noise cancellation that lets you choose what you hear.
          </p>
        </div>
      </div>
    </div>
  );
}
