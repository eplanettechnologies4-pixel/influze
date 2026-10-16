"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionPill } from "@/components/ui/SectionPill";
import { BlackPillButton, WhitePillButton, RoundArrowButton } from "@/components/ui/Buttons";
import { SkewedMarquee } from "@/components/ui/SkewedMarquee";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { WhyChooseUs } from "@/components/ui/WhyChooseUs";
import { TestimonialCards } from "@/components/ui/TestimonialCards";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { BlogCard } from "@/components/ui/BlogCard";
import { StatsCounter } from "@/components/ui/StatsCounter";
import {
  FadeIn,
  FadeUp,
  SlideFromLeft,
  SlideFromRight,
  StaggerContainer,
  StaggerItem,
  TextFadeFromGray,
} from "@/components/animations";
import { DEFAULT_EASE, createFadeUpVariants } from "@/lib/motion";
import { servicesData } from "@/data/services";
import { homeFaqs } from "@/data/faqs";
import { blogPosts } from "@/data/blog";

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full overflow-x-clip">

      <section className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          <div className="hidden lg:flex lg:col-span-3 justify-center xl:justify-start">
            <motion.div
              initial={{ x: shouldReduceMotion ? 0 : -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.9, ease: DEFAULT_EASE }}
              className="relative w-full max-w-[280px] xl:max-w-[300px] h-[440px] xl:h-[470px] rounded-[25px] overflow-hidden bg-neutral-100 shadow-xl border border-neutral-200/80 select-none"
            >
              <Image
                src="/images/hero-creator-left.jpg"
                alt="Ken"
                fill
                priority
                sizes="(max-width: 1280px) 280px, 300px"
                className="object-cover"
              />
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5, ease: DEFAULT_EASE }}
                className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-full flex items-center justify-between shadow-lg border border-neutral-100/90 z-20"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-neutral-900 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span className="font-tight text-xs sm:text-[13px] font-medium text-neutral-900 capitalize">Ken 6M+ Followers</span>
                </div>
                <CheckCircle2 className="w-4 h-4 fill-[#0084FF] text-white flex-shrink-0" />
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 text-center max-w-2xl mx-auto flex flex-col items-center">
            <FadeIn delay={0.2} duration={0.6} trigger="load">
              <SectionPill label="LIMITED CLIENT SPOTS AVAILABLE" className="mb-6" />
            </FadeIn>

            <h1 className="font-tight text-4xl sm:text-5xl md:text-[58px] lg:text-[67px] font-normal tracking-[-2.5px] text-neutral-950 leading-[1.04] mb-6">
              <motion.span
                initial={{ opacity: 0.25 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.9, ease: DEFAULT_EASE }}
                className="block"
              >
                Turn Creators Into
              </motion.span>

              <span className="flex items-center justify-center flex-wrap gap-2.5 my-2">
                <motion.span
                  initial={{ scale: shouldReduceMotion ? 1 : 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 1.0, ease: DEFAULT_EASE }}
                  className="inline-flex items-center -space-x-2 align-middle origin-center"
                >
                  <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FFFC00] flex items-center justify-center shadow-sm z-10 border-2 border-white">
                    <svg className="w-4 h-4 text-black fill-current" viewBox="0 0 24 24">
                      <path d="M12 2c-3.3 0-5.4 2.2-5.4 5.3 0 .7.1 1.6.4 2.3-.6.2-1.3.5-1.5 1-.2.4 0 .9.4 1.1.2.1.6.2 1.1.2-.2.6-.5 1.1-.9 1.4-.4.3-.8.4-1.2.5-.4.1-.7.4-.7.8 0 .5.4.9 1.2 1.1 1.2.3 2.5-.2 3.4-.6.9.5 2 .8 3.1.8s2.2-.3 3.1-.8c.9.4 2.2.9 3.4.6.8-.2 1.2-.6 1.2-1.1 0-.4-.3-.7-.7-.8-.4-.1-.8-.2-1.2-.5-.4-.3-.7-.8-.9-1.4.5 0 .9-.1 1.1-.2.4-.2.6-.7.4-1.1-.2-.5-.9-.8-1.5-1 .3-.7.4-1.6.4-2.3 0-3.1-2.1-5.3-5.4-5.3z" />
                    </svg>
                  </span>

                  <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black flex items-center justify-center shadow-sm z-20 border-2 border-white">
                    <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3.1 15.68a6.34 6.34 0 0 0 10.82 4.48c1.64-1.64 2.1-3.95 2.1-6.19V8.69a8.18 8.18 0 0 0 3.57 1.48V6.69z" />
                    </svg>
                  </span>

                  <span
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shadow-sm z-30 border-2 border-white"
                    style={{
                      background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                    }}
                  >
                    <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                    </svg>
                  </span>

                  <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FF0000] flex items-center justify-center shadow-sm z-40 border-2 border-white">
                    <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </span>
                </motion.span>

                <motion.span
                  initial={{ x: shouldReduceMotion ? 0 : 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 1.0, ease: DEFAULT_EASE }}
                  className="font-tight font-normal text-neutral-950"
                >
                  Your Brand&apos;s
                </motion.span>
              </span>

              <motion.span
                initial={{ opacity: 0.25 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.9, ease: DEFAULT_EASE }}
                className="block font-tight font-normal"
              >
                Biggest Advantage.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: DEFAULT_EASE }}
              className="text-sm sm:text-base text-[#444445] max-w-xl mx-auto leading-relaxed mb-8 font-normal"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0.25, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease: DEFAULT_EASE }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <BlackPillButton href="/contact">
                <span className="inline-flex items-center gap-2 font-tight font-normal">
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Work With Us</span>
                </span>
              </BlackPillButton>
              <WhitePillButton href="/services" showArrow={false}>
                <span className="font-tight font-normal">Our Services</span>
              </WhitePillButton>
            </motion.div>
          </div>

          <div className="hidden lg:flex lg:col-span-3 justify-center xl:justify-end">
            <motion.div
              initial={{ x: shouldReduceMotion ? 0 : 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.9, ease: DEFAULT_EASE }}
              className="relative w-full max-w-[280px] xl:max-w-[300px] h-[440px] xl:h-[470px] rounded-[25px] overflow-hidden bg-neutral-100 shadow-xl border border-neutral-200/80 select-none"
            >
              <Image
                src="/images/hero-creator-right.jpg"
                alt="Sani"
                fill
                priority
                sizes="(max-width: 1280px) 280px, 300px"
                className="object-cover"
              />
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5, ease: DEFAULT_EASE }}
                className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-full flex items-center justify-between shadow-lg border border-neutral-100/90 z-20"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-neutral-900 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span className="font-tight text-xs sm:text-[13px] font-medium text-neutral-900 capitalize">Sani 8M+ Followers</span>
                </div>
                <CheckCircle2 className="w-4 h-4 fill-[#0084FF] text-white flex-shrink-0" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <SkewedMarquee />

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

      <LogoStrip variant="gray" className="my-8" />

      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
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
              <BlackPillButton href="/services" showArrow={true}>
                <span className="font-tight font-normal">learn more</span>
              </BlackPillButton>
            </div>
          </FadeUp>
        </div>

        <StaggerContainer stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.slice(0, 3).map((service) => (
            <StaggerItem
              key={service.id}
              variants={createFadeUpVariants(40, 0.8, 0, Boolean(shouldReduceMotion))}
            >
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <WhyChooseUs variant="dark" />

      <TestimonialCards />

      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F6F7F9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <FadeIn>
              <SectionPill label="SUPPORT CENTER" className="mb-4" />
            </FadeIn>
            <FadeUp delay={0.1} duration={0.9}>
              <TextFadeFromGray duration={0.9}>
                <h2 className="font-tight text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-1px] text-neutral-950 leading-[1.15]">
                  <span>Your Influencer Marketing</span>{" "}
                  <span className="block italic font-normal text-[#444445] mt-1">
                    Questions Answered
                  </span>
                </h2>
              </TextFadeFromGray>
            </FadeUp>
          </div>

          <FAQAccordion items={homeFaqs} />
        </div>
      </section>

      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200/80">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div>
            <FadeIn>
              <SectionPill label="LATEST INSIGHTS" className="mb-4" />
            </FadeIn>
            <TextFadeFromGray duration={0.9}>
              <h2 className="font-tight text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-1px] text-neutral-950 leading-[1.15]">
                <span>Latest Trends in</span>{" "}
                <span className="block italic font-normal text-[#444445] mt-1">
                  Creator Marketing
                </span>
              </h2>
            </TextFadeFromGray>
          </div>

          <FadeIn delay={0.2} className="flex-shrink-0">
            <BlackPillButton href="/blog" showArrow={true}>
              <span className="font-tight font-normal">view more</span>
            </BlackPillButton>
          </FadeIn>
        </div>

        <StaggerContainer stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <StaggerItem
              key={post.id}
              variants={createFadeUpVariants(40, 0.8, 0, Boolean(shouldReduceMotion))}
            >
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
