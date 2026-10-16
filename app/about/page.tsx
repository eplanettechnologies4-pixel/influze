"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionPill } from "@/components/ui/SectionPill";
import {
  BlackPillButton,
  RoundArrowButton,
} from "@/components/ui/Buttons";
import { PageBanner } from "@/components/ui/PageBanner";
import { SkewedMarquee } from "@/components/ui/SkewedMarquee";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { StatsCounter } from "@/components/ui/StatsCounter";
import { WhyChooseUs } from "@/components/ui/WhyChooseUs";
import { CreatorCard } from "@/components/ui/CreatorCard";
import {
  FadeIn,
  FadeUp,
  SlideFromLeft,
  SlideFromRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { createFadeUpVariants } from "@/lib/motion";
import { creatorsData } from "@/data/creators";

export default function AboutPage() {
  return (
    <div className="w-full overflow-x-clip">
      <PageBanner
        prefix="About Our"
        suffix="Agency"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        nextPageHref="/services"
        nextPageLabel="Next Page"
      />

      <LogoStrip variant="gray" className="my-6" />

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12 sm:mb-16">
          <div className="lg:col-span-4 flex flex-col items-start space-y-6">
            <FadeIn>
              <SectionPill label="ABOUT OUR AGENCY" />
            </FadeIn>
            <FadeUp delay={0.15} duration={0.8}>
              <RoundArrowButton href="/about" direction="right" variant="black" />
            </FadeUp>
          </div>

          <div className="lg:col-span-8">
            <SlideFromRight delay={0.1} duration={0.9}>
              <h2 className="font-tight text-2xl sm:text-3xl lg:text-[42px] font-normal tracking-[-2px] leading-[1.15]">
                <span className="font-tight italic font-normal text-neutral-950 block mb-2">
                  We create influencer campaigns –
                </span>
                <span className="font-tight font-normal text-[#444445]">
                  For brands that value authenticity over vanity metrics, believing that meaningful connections drive lasting impact.
                </span>
              </h2>
            </SlideFromRight>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-4">
            <FadeUp delay={0.2} duration={0.8}>
              <StatsCounter layout="vertical" />
            </FadeUp>
          </div>

          <div className="lg:col-span-8">
            <FadeUp delay={0.25} duration={0.9}>
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-[30px] overflow-hidden bg-neutral-900 shadow-2xl border border-neutral-200/80 group">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/images/about-vlog-studio.jpg"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                  <source src="/videos/creator-demo.mp4" type="video/mp4" />
                  <source src="/videos/about.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-neutral-950/10 pointer-events-none" />

                <div className="absolute top-5 right-5 z-20">
                  <RoundArrowButton href="/about" direction="right" variant="black" />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <SkewedMarquee />

      <WhyChooseUs variant="dark" />

      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <FadeIn>
              <SectionPill label="OUR TALENTS" className="mb-4" />
            </FadeIn>
            <h2 className="font-tight text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-1px] text-neutral-950 leading-[1.15]">
              <SlideFromLeft delay={0} duration={0.9}>
                <span className="block">Discover Exceptional</span>
              </SlideFromLeft>
              <SlideFromLeft delay={0.1} duration={0.9}>
                <span className="block italic font-normal text-[#444445] mt-1">
                  Digital Creators
                </span>
              </SlideFromLeft>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:max-w-md">
            <p className="text-sm text-[#444445] leading-relaxed font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex-shrink-0">
              <BlackPillButton href="/creators" showArrow={true}>
                <span className="font-tight font-normal">view more</span>
              </BlackPillButton>
            </div>
          </div>
        </div>

        <StaggerContainer stagger={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {creatorsData.slice(0, 4).map((creator) => (
            <StaggerItem
              key={creator.id}
              variants={createFadeUpVariants(40, 0.8, 0, false)}
            >
              <CreatorCard creator={creator} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
