"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className = "" }: ServiceCardProps) {
  return (
    <div
      className={`group rounded-[30px] bg-[#F6F7F9] p-3.5 sm:p-4 border border-transparent hover:border-neutral-200/60 transition-all duration-300 ease-out hover:-translate-y-1 ${className}`}
    >
      <Link href="/services" className="block">
        <div className="relative w-full aspect-[16/11] rounded-[22px] overflow-hidden bg-neutral-100 mb-4 sm:mb-5">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="flex items-center justify-between gap-3 mb-3.5 px-1">
          <h3 className="font-tight text-lg sm:text-[22px] font-normal uppercase tracking-tight text-neutral-950 transition-colors">
            {service.title}
          </h3>
          <div className="flex-shrink-0 w-11 h-11 rounded-full bg-neutral-950 text-white flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-[#444445]">
            <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 px-1 pb-1">
          {service.tags.map((tag, idx) => (
            <span
              key={idx}
              className="inline-block px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-normal bg-white text-neutral-900 border border-neutral-200/50 shadow-[0_1px_2px_rgba(0,0,0,0.03)] font-tight"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
}
