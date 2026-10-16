"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SkewedMarqueeProps {
  className?: string;
}

export function SkewedMarquee({ className = "" }: SkewedMarqueeProps) {
  const shouldReduceMotion = useReducedMotion();
  const marqueeItems = [
    "Influencer Marketing",
    "Brand Campaigns",
    "Content Strategy",
    "Social Media Growth",
  ];

  return (
    <div className={`relative w-full overflow-hidden my-12 sm:my-20 py-10 sm:py-14 select-none ${className}`}>
      <div className="absolute inset-0 bg-neutral-950 pointer-events-none transform -rotate-2 scale-105 origin-center" />

      <div className="relative w-full py-4 sm:py-6 bg-white transform rotate-[2.5deg] scale-110 shadow-lg border-y border-neutral-950 overflow-hidden">
        <motion.div
          animate={shouldReduceMotion ? { x: 0 } : { x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex w-max items-center will-change-transform"
        >
          {[1, 2].map((setIndex) => (
            <div key={`set-${setIndex}`} className="flex items-center space-x-8 sm:space-x-12 pr-8 sm:pr-12">
              {marqueeItems.map((item, idx) => (
                <div key={`${setIndex}-${idx}`} className="flex items-center space-x-8 sm:space-x-12">
                  <span className="font-tight text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-normal tracking-tight text-neutral-950 whitespace-nowrap leading-none">
                    {item}
                  </span>
                  <span className="text-2xl sm:text-3xl text-[#444445] font-light select-none">•</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
