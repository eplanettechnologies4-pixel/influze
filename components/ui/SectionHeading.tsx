import React from "react";
import { SectionPill } from "./SectionPill";

interface SectionHeadingProps {
  pill?: string;
  titleRegular: React.ReactNode;
  titleItalic?: React.ReactNode;
  description?: string;
  rightAction?: React.ReactNode;
  align?: "left" | "center";
  variant?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  pill,
  titleRegular,
  titleItalic,
  description,
  rightAction,
  align = "left",
  variant = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = variant === "dark";
  const isCenter = align === "center";

  return (
    <div className={`w-full mb-10 md:mb-14 ${className}`}>
      {pill && (
        <div className={`mb-4 ${isCenter ? "flex justify-center" : ""}`}>
          <SectionPill label={pill} variant={variant} />
        </div>
      )}

      <div
        className={`flex flex-col ${
          isCenter
            ? "items-center text-center"
            : "lg:flex-row lg:items-end lg:justify-between gap-6"
        }`}
      >
        <div className={isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"}>
          <h2
            className={`font-tight text-3xl sm:text-4xl lg:text-[52px] font-normal leading-[1.15] tracking-[-1px] ${
              isDark ? "text-white" : "text-neutral-950"
            }`}
          >
            <span className="block">{titleRegular}</span>
            {titleItalic && (
              <span
                className={`block italic font-normal tracking-[-1px] mt-1 ${
                  isDark ? "text-[#B3B3B3]" : "text-[#444445]"
                }`}
              >
                {titleItalic}
              </span>
            )}
          </h2>
        </div>

        {(description || rightAction) && (
          <div
            className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 ${
              isCenter ? "justify-center mt-4" : "lg:max-w-md lg:justify-end"
            }`}
          >
            {description && (
              <p
                className={`text-sm sm:text-base leading-relaxed font-normal ${
                  isDark ? "text-neutral-400" : "text-[#444445]"
                } ${isCenter ? "text-center" : ""}`}
              >
                {description}
              </p>
            )}
            {rightAction && <div className="flex-shrink-0">{rightAction}</div>}
          </div>
        )}
      </div>
    </div>
  );
}
