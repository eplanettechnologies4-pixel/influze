"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { DEFAULT_EASE, DEFAULT_VIEWPORT } from "@/lib/motion";

interface LogoStripProps {
  variant?: "black" | "gray";
  className?: string;
}

export function LogoStrip({ variant = "black", className = "" }: LogoStripProps) {
  const isBlack = variant === "black";
  const shouldReduceMotion = useReducedMotion();

  // 5 distinct agency partner logos from the reference (ordered exactly as reference image)
  const logos = [
    {
      name: "LIIIIIN",
      svg: (
        <div className="flex items-center gap-1.5">
          <div className="flex items-center -skew-x-12 space-x-1">
            <span className="w-1.5 h-6 bg-current rounded-xs" />
            <span className="w-1.5 h-6 bg-current rounded-xs" />
            <span className="w-1.5 h-6 bg-current rounded-xs" />
            <span className="w-1.5 h-6 bg-current rounded-xs" />
          </div>
          <span className="font-tight font-black text-xl tracking-wider ml-1">LIIIIIN</span>
        </div>
      ),
    },
    {
      name: "IPSUM",
      svg: (
        <span className="font-tight font-black text-2xl tracking-[0.25em]">
          IPSUM
        </span>
      ),
    },
    {
      name: "LOGO-Box",
      svg: (
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 border-[3px] border-current flex items-center justify-center rounded-sm">
            <div className="w-2.5 h-2.5 bg-current" />
          </div>
          <span className="font-tight font-black text-2xl tracking-tight">LOGO</span>
        </div>
      ),
    },
    {
      name: "LOGO-Flower",
      svg: (
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 2L18.5 10.5L27 8L21.5 15L29 19L20.5 21L23 29.5L16 24L9 29.5L11.5 21L3 19L10.5 15L5 8L13.5 10.5L16 2Z" />
          </svg>
          <span className="font-tight font-black text-2xl tracking-tight">LOGO</span>
        </div>
      ),
    },
    {
      name: "LOQO",
      svg: (
        <span className="font-tight font-extrabold text-2xl tracking-[0.2em]">
          LOQO
        </span>
      ),
    },
  ];

  // Gray variant for Home page with staggered fade-in
  if (!isBlack) {
    return (
      <div
        className={`w-full overflow-hidden select-none py-10 md:py-14 bg-transparent text-neutral-300 ${className}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={DEFAULT_VIEWPORT}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="flex flex-wrap items-center justify-between gap-8 md:gap-12"
          >
            {logos.map((logo, idx) => (
              <motion.div
                key={`gray-logo-${idx}`}
                variants={{
                  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: DEFAULT_EASE },
                  },
                }}
                whileHover={{ scale: 1.05, color: "#171717", transition: { duration: 0.2 } }}
                className="flex items-center text-neutral-300 hover:text-neutral-700 transition-colors duration-300 cursor-pointer"
              >
                {logo.svg}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }

  // Black marquee variant
  return (
    <div
      className={`w-full overflow-hidden select-none py-8 md:py-10 bg-neutral-950 text-white ${className}`}
    >
      <div className="flex w-max animate-marquee space-x-12 sm:space-x-20 md:space-x-28 items-center">
        {[1, 2, 3, 4].map((setIndex) => (
          <React.Fragment key={`set-${setIndex}`}>
            {logos.map((logo, idx) => (
              <div
                key={`logo-${setIndex}-${idx}`}
                className="flex items-center opacity-85 hover:opacity-100 transition-opacity duration-300"
              >
                {logo.svg}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
