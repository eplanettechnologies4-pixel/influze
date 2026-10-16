"use client";

import React from "react";
import { PageBanner } from "@/components/ui/PageBanner";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { SectionPill } from "@/components/ui/SectionPill";
import { BlackPillButton } from "@/components/ui/Buttons";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SkewedMarquee } from "@/components/ui/SkewedMarquee";
import { TestimonialCards } from "@/components/ui/TestimonialCards";
import { servicesData } from "@/data/services";
import {
  FadeIn,
  FadeUp,
  SlideFromLeft,
  SlideFromRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { createFadeUpVariants } from "@/lib/motion";

export default function ServicesPage() {
  return (
    <div className="w-full overflow-hidden">
      <PageBanner
        prefix="Services We"
        suffix="Offer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        nextPageHref="/creators"
        nextPageLabel="Next Page"
      />

      <LogoStrip variant="gray" className="my-6" />

      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <FadeIn>
              <SectionPill label="OUR EXPERTISE" className="mb-4" />
            </FadeIn>
            <h2 className="font-tight text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-1px] text-neutral-950 leading-[1.15]">
              <SlideFromLeft delay={0} duration={0.9}>
                <span className="block">Strategic Services</span>
              </SlideFromLeft>
              <SlideFromLeft delay={0.1} duration={0.9}>
                <span className="block italic font-normal text-[#444445] mt-1">
                  For Modern Brands
                </span>
              </SlideFromLeft>
            </h2>
          </div>

          <FadeUp delay={0.2} duration={0.8} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:max-w-md">
            <p className="text-sm text-[#444445] leading-relaxed font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex-shrink-0">
              <BlackPillButton href="/contact" showArrow={true}>
                <span className="font-tight font-normal">learn more</span>
              </BlackPillButton>
            </div>
          </FadeUp>
        </div>

        <StaggerContainer stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <StaggerItem
              key={service.id}
              variants={createFadeUpVariants(40, 0.8, 0, false)}
            >
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <SkewedMarquee />

      <TestimonialCards />
    </div>
  );
}
