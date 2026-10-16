"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { PageBanner } from "@/components/ui/PageBanner";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { SectionPill } from "@/components/ui/SectionPill";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { homeFaqs, helpCenterFaqs } from "@/data/faqs";
import {
  FadeIn,
  FadeUp,
  SlideFromLeft,
  SlideFromRight,
} from "@/components/animations";

export default function FAQPage() {
  return (
    <div className="w-full overflow-hidden">
      <PageBanner
        prefix="Need More"
        suffix="Answers"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        nextPageHref="/contact"
        nextPageLabel="Next Page"
      />

      <LogoStrip variant="black" className="my-6" />

      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F6F7F9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <FadeIn>
                <SectionPill label="HELP CENTER" className="mb-4" />
              </FadeIn>
              <h2 className="font-tight text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-1px] text-neutral-950 leading-[1.15]">
                <SlideFromLeft delay={0} duration={0.9}>
                  <span className="block">Your Questions,</span>
                </SlideFromLeft>
                <SlideFromLeft delay={0.1} duration={0.9}>
                  <span className="block italic font-normal text-[#444445] mt-1">
                    Clearly Answered
                  </span>
                </SlideFromLeft>
              </h2>
            </div>

            <SlideFromLeft delay={0.2} duration={0.9}>
              <div className="relative rounded-[28px] overflow-hidden bg-neutral-900 aspect-[4/3.8] shadow-xl border border-neutral-200/80 group">
                <Image
                  src="/images/why-center.jpg"
                  alt="Any Questions?"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-6 shadow-xl text-neutral-950">
                  <p className="font-tight text-xs font-normal uppercase tracking-wider text-neutral-500 mb-1">
                    STILL HAVE QUESTION?
                  </p>
                  <p className="font-tight text-sm font-normal text-neutral-900 mb-4 leading-snug">
                    Can&apos;t find what you&apos;re looking for? Reach out directly to our campaign directors.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-normal uppercase tracking-wider bg-neutral-950 text-white hover:bg-[#444445] transition-colors w-full font-tight"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </SlideFromLeft>
          </div>

          <div className="lg:col-span-7 pt-4">
            <SlideFromRight delay={0.15} duration={0.9}>
              <FAQAccordion items={helpCenterFaqs} defaultOpenIndex={0} />
            </SlideFromRight>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F6F7F9] border-t border-neutral-200/60">
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

          <FAQAccordion items={homeFaqs} defaultOpenIndex={0} />
        </div>
      </section>
    </div>
  );
}
