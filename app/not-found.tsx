import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { SectionPill } from "@/components/ui/SectionPill";
import { BlackPillButton, WhitePillButton } from "@/components/ui/Buttons";

export const metadata = {
  title: "404 – Page Not Found | Influze",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 max-w-3xl mx-auto">
      <SectionPill label="ERROR 404" className="mb-6" />

      <h1 className="font-tight text-8xl sm:text-9xl font-bold tracking-tighter text-neutral-950 select-none">
        404
      </h1>

      <h2 className="font-tight text-2xl sm:text-3xl lg:text-[40px] font-normal tracking-[-1px] text-neutral-950 mt-4 leading-tight">
        <span>Oops! Page</span>{" "}
        <span className="italic font-normal text-[#444445]">Not Found</span>
      </h2>

      <p className="font-tight mt-4 text-sm sm:text-base text-[#444445] max-w-md mx-auto leading-relaxed font-normal">
        The link you followed may be broken, or the page may have been removed. Let&apos;s get you back to discovering great creator campaigns.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <BlackPillButton href="/">
          Return To Home
        </BlackPillButton>
        <WhitePillButton href="/creators" showArrow={true}>
          Explore Talents
        </WhitePillButton>
      </div>
    </div>
  );
}
