"use client";

import React from "react";
import Link from "next/link";
import { Check, Flame } from "lucide-react";
import { PricingPlan } from "@/data/pricing";
import { BlackPillButton, WhitePillButton } from "./Buttons";

interface PricingCardProps {
  plan: PricingPlan;
  className?: string;
}

export function PricingCard({ plan, className = "" }: PricingCardProps) {
  const isGrowth = plan.isPopular;

  return (
    <div
      className={`rounded-[28px] p-7 sm:p-9 transition-all duration-300 ease-out flex flex-col justify-between hover:-translate-y-1 ${
        isGrowth
          ? "bg-neutral-950 text-white shadow-2xl ring-1 ring-neutral-800"
          : "bg-[#F6F7F9] text-neutral-950 border border-transparent hover:border-neutral-200/60 shadow-none hover:shadow-md"
      } ${className}`}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-6">
          <span
            className={`px-3.5 py-1.5 rounded-full text-xs font-normal uppercase tracking-wider font-tight ${
              isGrowth
                ? "bg-neutral-800 text-neutral-200"
                : "bg-white text-neutral-900 border border-neutral-200/50"
            }`}
          >
            {plan.name}
          </span>

          {isGrowth && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-normal text-neutral-200 border border-neutral-700 font-tight">
              <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Most Popular</span>
            </div>
          )}
        </div>

        <div className="flex items-baseline gap-1.5 mb-3 font-tight">
          <span className="text-4xl sm:text-5xl font-normal tracking-tight">
            {plan.price}
          </span>
          <span
            className={`text-sm font-normal ${
              isGrowth ? "text-neutral-400" : "text-[#444445]"
            }`}
          >
            {plan.period}
          </span>
        </div>

        <p
          className={`text-sm leading-relaxed mb-6 font-normal ${
            isGrowth ? "text-neutral-400" : "text-[#444445]"
          }`}
        >
          {plan.description}
        </p>

        <div
          className={`w-full h-px my-6 ${
            isGrowth ? "bg-neutral-800" : "bg-neutral-200"
          }`}
        />

        <div className="space-y-4 mb-8">
          <p
            className={`text-xs font-normal uppercase tracking-wider font-tight ${
              isGrowth ? "text-neutral-300" : "text-neutral-950"
            }`}
          >
            What&apos;s Included:
          </p>

          <ul className="space-y-3 font-tight">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm">
                <span
                  className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                    isGrowth
                      ? "border border-neutral-700 text-white"
                      : "border border-neutral-300 text-neutral-900"
                  }`}
                >
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span
                  className={isGrowth ? "text-neutral-200" : "text-[#444445]"}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-4">
        {isGrowth ? (
          <WhitePillButton href="/contact" showArrow={true} className="w-full justify-center">
            <span>{plan.ctaText || "Choose Plan"}</span>
          </WhitePillButton>
        ) : (
          <BlackPillButton href="/contact" showArrow={true} className="w-full justify-center">
            <span>{plan.ctaText || "Choose Plan"}</span>
          </BlackPillButton>
        )}
      </div>
    </div>
  );
}
