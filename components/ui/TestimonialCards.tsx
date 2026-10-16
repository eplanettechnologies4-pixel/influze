"use client";

import React from "react";
import Image from "next/image";
import { Star, Play, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionPill } from "./SectionPill";
import {
  FadeIn,
  FadeUp,
  SlideFromLeft,
  SlideFromRight,
} from "@/components/animations";
import { DEFAULT_EASE, DEFAULT_VIEWPORT } from "@/lib/motion";

interface TestimonialCardsProps {
  className?: string;
}

export function TestimonialCards({ className = "" }: TestimonialCardsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={`py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
      <div className="mb-14 sm:mb-16">
        <FadeIn>
          <SectionPill label="SUCCESS STORIES" className="mb-4" />
        </FadeIn>
        <SlideFromLeft delay={0.1} duration={0.9}>
          <h2 className="font-tight text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-1px] text-neutral-950 leading-[1.15]">
            <span>Trusted By Brands</span>{" "}
            <span className="block italic font-normal text-[#444445] mt-1">
              And Creators
            </span>
          </h2>
        </SlideFromLeft>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-3">
          <SlideFromLeft delay={0.15} duration={0.9} className="space-y-4">
            <div className="flex -space-x-3 overflow-hidden">
              <div className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-neutral-200">
                <Image src="/images/creator-ethan.jpg" alt="Client 1" fill className="object-cover" />
              </div>
              <div className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-neutral-200">
                <Image src="/images/creator-sophia.jpg" alt="Client 2" fill className="object-cover" />
              </div>
              <div className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-neutral-200">
                <Image src="/images/creator-naomi.jpg" alt="Client 3" fill className="object-cover" />
              </div>
              <div className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-neutral-200">
                <Image src="/images/creator-ava.jpg" alt="Client 4" fill className="object-cover" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1 text-[#FFBB43] mb-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFBB43] text-[#FFBB43]" />
                ))}
                <span className="font-tight text-xl font-medium text-neutral-950 ml-1.5">4.8/5.0</span>
              </div>
              <p className="font-tight text-sm font-medium text-[#444445]">
                trusted by 10K+ brands worldwide
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#444445] italic leading-relaxed pt-2">
              &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.&rdquo;
            </p>
          </SlideFromLeft>
        </div>

        <div className="lg:col-span-5">
          <FadeUp delay={0.2} duration={0.8}>
            <div className="group relative rounded-[25px] overflow-hidden bg-[#F6F7F9] p-3.5 border border-transparent shadow-none hover:shadow-md transition-all">
              <div className="relative w-full aspect-[4/3.1] rounded-[20px] overflow-hidden bg-neutral-900">
                <Image
                  src="/images/testimonial-video.jpg"
                  alt="Sarah Johnson Video Story"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    aria-label="Play Creator Story"
                    className="w-14 h-14 rounded-full bg-neutral-950 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#444445] transition-all duration-300 cursor-pointer"
                  >
                    <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                  </button>
                </div>
              </div>

              <div className="p-3 pt-4">
                <p className="text-xs sm:text-sm text-[#444445] italic mb-4 leading-relaxed">
                  &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.&rdquo;
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-neutral-200/60">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-tight text-base font-medium text-neutral-950">Sarah Johnson</span>
                      <CheckCircle2 className="w-4 h-4 fill-[#0084FF] text-white" />
                    </div>
                    <p className="text-xs text-neutral-500 mt-0.5">- Founder, FitFuel</p>
                  </div>
                  <div className="flex items-center gap-1 text-[#FFBB43] text-sm font-normal">
                    <span className="font-tight text-2xl font-normal text-neutral-950 mr-1">5.0</span>
                    <Star className="w-4 h-4 fill-[#FFBB43] text-[#FFBB43]" />
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        <div className="lg:col-span-4 space-y-5">
          {[1, 2].map((idx) => (
            <SlideFromRight
              key={idx}
              delay={0.2 + idx * 0.15}
              duration={0.9}
            >
              <div className="rounded-[25px] bg-[#F6F7F9] p-7 border border-transparent shadow-none hover:shadow-md transition-all">
                <div className="flex items-center gap-1 text-[#FFBB43] mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFBB43] text-[#FFBB43]" />
                  ))}
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-200 flex-shrink-0">
                    <Image
                      src={idx === 1 ? "/images/creator-lucas.jpg" : "/images/creator-mia.jpg"}
                      alt="John Doe"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-tight text-[15px] font-medium text-neutral-950">John Doe</h4>
                    <p className="text-xs text-neutral-500 font-normal">Designation</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#3A3A3A] leading-relaxed italic">
                  &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&rdquo;
                </p>
              </div>
            </SlideFromRight>
          ))}
        </div>
      </div>
    </section>
  );
}
