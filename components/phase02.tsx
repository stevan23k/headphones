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
    <div ref={containerRef} className="h-screen w-full p-6 sm:p-12 md:p-16 lg:p-20 xl:p-24">
      <div className="h-full">
        <div ref={block1Ref} className="flex justify-center">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] w-full sm:w-80 md:w-100 lg:w-120 xl:w-160 flex text-center mix-blend-difference">
            The best material
          </p>
        </div>
        <div ref={block2Ref} className="flex flex-col mt-12 sm:mt-20 md:mt-32 lg:mt-40 gap-3 sm:gap-4">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[50px] w-full sm:w-80 md:w-100 lg:w-120 xl:w-150 mix-blend-difference">
            Crafted from aerospace-grade aluminum and genuine leather
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[30px] mix-blend-difference">
            Designed to last, built to be felt.
          </p>
        </div>
        <div
          ref={block3Ref}
          className="flex flex-col mt-8 sm:mt-12 md:mt-16 lg:mt-20 gap-3 sm:gap-4 w-full justify-end items-end"
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[50px] text-end mix-blend-difference">
            Silent world, pure sound.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[30px] text-end w-full sm:w-80 md:w-100 lg:w-120 xl:w-140 mix-blend-difference">
            Active noise cancellation that lets you choose what you hear.
          </p>
        </div>
      </div>
    </div>
  );
}
