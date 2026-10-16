import React from "react";
import { WhitePillButton } from "./Buttons";
import { ArrowRight } from "lucide-react";

interface PageBannerProps {
  prefix: string;
  suffix: string;
  description?: string;
  nextPageHref?: string;
  nextPageLabel?: string;
  className?: string;
}

export function PageBanner({
  prefix,
  suffix,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  nextPageHref,
  nextPageLabel = "Next Page",
  className = "",
}: PageBannerProps) {
  return (
    <section className={`pt-20 pb-12 md:pt-24 md:pb-16 text-center px-4 sm:px-6 max-w-5xl mx-auto ${className}`}>
      <h1 className="font-tight text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal tracking-[-2px] text-neutral-950 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 leading-[1.08] capitalize">
        <span>{prefix}</span>

        <span className="inline-flex items-center -space-x-2.5 mx-1.5 align-middle">
          <span
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#FFFC00] flex items-center justify-center shadow-sm z-10 border-2 border-white"
            title="Snapchat"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c-3.3 0-5.4 2.2-5.4 5.3 0 .7.1 1.6.4 2.3-.6.2-1.3.5-1.5 1-.2.4 0 .9.4 1.1.2.1.6.2 1.1.2-.2.6-.5 1.1-.9 1.4-.4.3-.8.4-1.2.5-.4.1-.7.4-.7.8 0 .5.4.9 1.2 1.1 1.2.3 2.5-.2 3.4-.6.9.5 2 .8 3.1.8s2.2-.3 3.1-.8c.9.4 2.2.9 3.4.6.8-.2 1.2-.6 1.2-1.1 0-.4-.3-.7-.7-.8-.4-.1-.8-.2-1.2-.5-.4-.3-.7-.8-.9-1.4.5 0 .9-.1 1.1-.2.4-.2.6-.7.4-1.1-.2-.5-.9-.8-1.5-1 .3-.7.4-1.6.4-2.3 0-3.1-2.1-5.3-5.4-5.3z" />
            </svg>
          </span>

          <span
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shadow-sm z-20 border-2 border-white"
            style={{
              background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
            }}
            title="Instagram"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
            </svg>
          </span>

          <span
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-neutral-950 flex items-center justify-center shadow-sm z-30 border-2 border-white text-white"
            title="Arrow"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </span>
        </span>

        <span className="italic">{suffix}</span>
      </h1>

      <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#444445] max-w-xl mx-auto leading-relaxed font-normal">
        {description}
      </p>

      {nextPageHref && (
        <div className="mt-6 sm:mt-8 flex justify-center">
          <WhitePillButton href={nextPageHref} showArrow={true}>
            <span>{nextPageLabel}</span>
          </WhitePillButton>
        </div>
      )}
    </section>
  );
}
