"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart2, Handshake, Lightbulb, CheckCircle2, Eye, Heart, Send } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionPill } from "./SectionPill";
import { WhitePillButton } from "./Buttons";
import {
  FadeIn,
  FadeUp,
  SlideFromLeft,
  SlideFromRight,
  ScaleIn,
  TextFadeFromGray,
} from "@/components/animations";
import { DEFAULT_EASE, DEFAULT_VIEWPORT } from "@/lib/motion";

interface WhyChooseUsProps {
  variant?: "dark" | "light";
  className?: string;
}

export function WhyChooseUs({ variant = "dark", className = "" }: WhyChooseUsProps) {
  const isDark = variant === "dark";
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className={`py-20 sm:py-28 px-4 sm:px-6 lg:px-8 transition-colors ${
        isDark ? "bg-neutral-950 text-white" : "bg-[#F4F5F7] text-neutral-950"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <FadeIn>
            <SectionPill
              label="WHY CHOOSE US"
              variant={isDark ? "dark" : "light"}
              className="mb-4"
            />
          </FadeIn>
          <TextFadeFromGray duration={0.9}>
            <h2 className="font-tight text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-1px] leading-[1.15]">
              <span>Driving Results Through</span>{" "}
              <span
                className={`block italic font-normal mt-1 ${
                  isDark ? "text-[#B3B3B3]" : "text-[#444445]"
                }`}
              >
                Real Influence
              </span>
            </h2>
          </TextFadeFromGray>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-center">
          <div className="space-y-8 sm:space-y-10">
            <SlideFromLeft delay={0} duration={0.9}>
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isDark ? "bg-neutral-900 border border-neutral-800 text-white" : "bg-white shadow-sm text-neutral-950"
                  }`}
                >
                  <BarChart2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-tight text-lg sm:text-xl font-normal tracking-tight uppercase mb-2 text-white">
                    STRATEGIC CAMPAIGN PLANNING
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-neutral-400" : "text-neutral-600"
                    }`}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                  </p>
                  <Link
                    href="/services"
                    className={`inline-flex items-center gap-1.5 text-xs font-normal uppercase tracking-wider mt-3 underline underline-offset-4 ${
                      isDark ? "text-white hover:text-neutral-300" : "text-neutral-950 hover:text-neutral-700"
                    }`}
                  >
                    <span>get started</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </SlideFromLeft>

            <SlideFromLeft delay={0.15} duration={0.9}>
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isDark ? "bg-neutral-900 border border-neutral-800 text-white" : "bg-white shadow-sm text-neutral-950"
                  }`}
                >
                  <Handshake className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-tight text-lg sm:text-xl font-normal tracking-tight uppercase mb-2 text-white">
                    ENGAGING CONTENT CREATION
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-neutral-400" : "text-neutral-600"
                    }`}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                  </p>
                  <Link
                    href="/services"
                    className={`inline-flex items-center gap-1.5 text-xs font-normal uppercase tracking-wider mt-3 underline underline-offset-4 ${
                      isDark ? "text-white hover:text-neutral-300" : "text-neutral-950 hover:text-neutral-700"
                    }`}
                  >
                    <span>get started</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </SlideFromLeft>
          </div>

          <div className="flex justify-center">
            <ScaleIn scale={0.96} duration={0.8} delay={0.2} className="w-full max-w-sm">
              <div className="relative w-full min-h-[500px] sm:min-h-[536px] rounded-[25px] overflow-hidden bg-neutral-900 shadow-2xl border border-neutral-800 p-5 flex flex-col justify-between">
                <Image
                  src="/images/why-center.jpg"
                  alt="Sarah Johnson"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-neutral-950 shadow-md">
                    <span className="font-tight text-xs sm:text-[13px] font-medium">Sarah Johnson</span>
                    <CheckCircle2 className="w-3.5 h-3.5 fill-[#0084FF] text-white" />
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-neutral-950 text-xs font-medium shadow-md">
                    <Eye className="w-3.5 h-3.5 text-neutral-800" />
                    <span>43.4k</span>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="border border-white/80 bg-black/40 backdrop-blur-md rounded-full px-4 py-3 flex items-center justify-between text-white text-xs sm:text-sm font-light w-full">
                    <span className="text-white/90">send message...</span>
                    <div className="flex items-center gap-2.5 text-white/90">
                      <Heart className="w-4 h-4 hover:fill-white cursor-pointer transition-colors" />
                      <Send className="w-4 h-4 hover:translate-x-0.5 cursor-pointer transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </ScaleIn>
          </div>

          <div className="space-y-6">
            <SlideFromRight delay={0.25} duration={0.9}>
              <div className="rounded-[30px] p-7 sm:p-8 bg-[#F6F7F9] text-neutral-950 shadow-xl">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-neutral-950 mb-5 shadow-xs">
                  <Lightbulb className="w-6 h-6 text-neutral-900" />
                </div>
                <h3 className="font-tight text-lg sm:text-xl font-normal uppercase tracking-tight mb-3 text-neutral-950">
                  EXPERT INDUSTRY INSIGHTS
                </h3>
                <p className="text-sm leading-relaxed mb-6 text-[#444445]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </p>

                <div className="relative pt-4">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={DEFAULT_VIEWPORT}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: DEFAULT_EASE,
                    }}
                    className="h-[1px] w-full origin-left mb-4 bg-neutral-200"
                  />
                  <FadeUp delay={0.4} duration={0.6}>
                    <div className="flex items-center justify-between">
                      <Link
                        href="/services"
                        className="text-xs font-normal uppercase tracking-wider underline underline-offset-4 flex items-center gap-1 font-tight text-neutral-950 hover:text-[#444445]"
                      >
                        <span>get started</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </FadeUp>
                </div>
              </div>
            </SlideFromRight>

            <FadeUp delay={0.4} className="flex items-center justify-between pt-2">
              <span className="font-tight text-lg font-normal text-white capitalize">
                Let&apos;s Connect :
              </span>
              <WhitePillButton href="/contact" showArrow={false}>
                <span>Book A Call</span>
              </WhitePillButton>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
