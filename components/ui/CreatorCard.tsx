"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Creator } from "@/data/creators";

interface CreatorCardProps {
  creator: Creator;
  className?: string;
}

export function CreatorCard({ creator, className = "" }: CreatorCardProps) {
  return (
    <div
      className={`group relative rounded-[25px] bg-[#F6F7F9] p-3.5 sm:p-4 border border-transparent hover:border-neutral-200/60 transition-all duration-300 ease-out hover:-translate-y-1 ${className}`}
    >
      <Link href={`/creators/${creator.id}`} className="block">
        <div className="relative w-full aspect-[3/3.8] rounded-[20px] overflow-hidden bg-neutral-100 mb-4">
          <Image
            src={creator.image}
            alt={creator.name}
            fill
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>

        <div className="flex items-center justify-between gap-2 px-1 pb-1">
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-tight text-base sm:text-lg font-medium text-neutral-950 tracking-tight transition-colors">
                {creator.name}
              </h3>
              {creator.verified && (
                <span className="text-[#0084FF] flex-shrink-0" title="Verified Creator">
                  <CheckCircle2 className="w-4 h-4 fill-[#0084FF] text-white" />
                </span>
              )}
            </div>

            <p className="font-tight text-xs sm:text-sm text-[#444445] mt-0.5 font-normal">
              - {creator.role}
            </p>
          </div>

          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-out bg-neutral-950 text-white group-hover:bg-[#444445]">
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
