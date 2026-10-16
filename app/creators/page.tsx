"use client";

import React from "react";
import { PageBanner } from "@/components/ui/PageBanner";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { SectionPill } from "@/components/ui/SectionPill";
import { CreatorCard } from "@/components/ui/CreatorCard";
import { SkewedMarquee } from "@/components/ui/SkewedMarquee";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { creatorsData } from "@/data/creators";
import { homeFaqs } from "@/data/faqs";
import {
  FadeIn,
  FadeUp,
  SlideFromLeft,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { createFadeUpVariants } from "@/lib/motion";

export default function CreatorsPage() {
  return (
    <div className="w-full overflow-hidden">
      <PageBanner
        prefix="Trusted Creator"
        suffix="partners"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        nextPageHref="/projects"
        nextPageLabel="Next Page"
      />

      <LogoStrip variant="gray" className="my-6" />

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

          <FadeUp delay={0.2} duration={0.8} className="max-w-md sm:text-right">
            <p className="text-sm sm:text-base text-[#444445] leading-relaxed font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </FadeUp>
        </div>

        <StaggerContainer stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {creatorsData.map((creator) => (
            <StaggerItem
              key={creator.id}
              variants={createFadeUpVariants(35, 0.7, 0, false)}
            >
              <CreatorCard creator={creator} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <SkewedMarquee />

      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F6F7F9]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <FadeIn>
              <SectionPill label="SUPPORT CENTER" className="mb-4" />
            </FadeIn>
            <FadeUp delay={0.1} duration={0.9}>
              <h2 className="font-tight text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-1px] text-neutral-950 leading-[1.15]">
                <span>Your Influencer Marketing</span>{" "}
                <span className="block italic font-normal text-[#444445] mt-1">
                  Questions Answered
                </span>
              </h2>
            </FadeUp>
          </div>

          <FAQAccordion items={homeFaqs} />
        </div>
      </section>
    </div>
  );
}
