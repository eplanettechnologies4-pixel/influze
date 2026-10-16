"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQItem } from "@/data/faqs";
import { DEFAULT_EASE } from "@/lib/motion";

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenIndex?: number;
  className?: string;
}

export function FAQAccordion({
  items,
  defaultOpenIndex = 0,
  className = "",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={`space-y-2 sm:space-y-3 max-w-4xl mx-auto ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={item.id || idx}
            className={`transition-all duration-300 rounded-[20px] overflow-hidden ${
              isOpen
                ? "bg-white shadow-[0_4px_25px_rgba(0,0,0,0.03)] p-6 sm:p-8"
                : "bg-transparent px-6 sm:px-8 py-4 sm:py-5 hover:bg-neutral-900/[0.02]"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(idx)}
              className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group cursor-pointer select-none"
              aria-expanded={isOpen}
            >
              <span className="font-tight text-base sm:text-[18px] font-medium text-neutral-950 tracking-tight transition-colors">
                {item.question}
              </span>

              <div className="flex-shrink-0 w-6 h-6 flex items-center justify-end text-neutral-900 transition-colors">
                {isOpen ? (
                  <Minus className="w-4 h-4 text-neutral-900 stroke-[1.8]" />
                ) : (
                  <Plus className="w-4 h-4 text-neutral-900 stroke-[1.8]" />
                )}
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: DEFAULT_EASE }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 sm:pt-5">
                    <p className="text-sm sm:text-[15px] text-[#444445] leading-relaxed font-normal font-tight">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
