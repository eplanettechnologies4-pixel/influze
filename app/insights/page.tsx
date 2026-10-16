"use client";

import React from "react";
import { PageBanner } from "@/components/ui/PageBanner";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { SectionPill } from "@/components/ui/SectionPill";
import { BlackPillButton } from "@/components/ui/Buttons";
import { BlogCard } from "@/components/ui/BlogCard";
import { blogPosts } from "@/data/blog";
import {
  FadeIn,
  FadeUp,
  SlideFromLeft,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { createFadeUpVariants } from "@/lib/motion";

export default function InsightsPage() {
  return (
    <div className="w-full overflow-hidden">
      <PageBanner
        prefix="Latest Creator"
        suffix="Insights"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        nextPageHref="/faq"
        nextPageLabel="Next Page"
      />

      <LogoStrip variant="black" className="my-6" />

      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <FadeIn>
              <SectionPill label="LATEST INSIGHTS" className="mb-4" />
            </FadeIn>
            <h2 className="font-tight text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-1px] text-neutral-950 leading-[1.15]">
              <SlideFromLeft delay={0} duration={0.9}>
                <span className="block">Latest Trends in</span>
              </SlideFromLeft>
              <SlideFromLeft delay={0.1} duration={0.9}>
                <span className="block italic font-normal text-[#444445] mt-1">
                  Creator Marketing
                </span>
              </SlideFromLeft>
            </h2>
          </div>

          <FadeUp delay={0.2} duration={0.8} className="flex-shrink-0">
            <BlackPillButton href="/contact" showArrow={true}>
              <span className="font-tight font-normal">view more</span>
            </BlackPillButton>
          </FadeUp>
        </div>

        <StaggerContainer stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post) => (
            <StaggerItem
              key={post.id}
              variants={createFadeUpVariants(35, 0.7, 0, false)}
            >
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
