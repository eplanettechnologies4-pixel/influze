"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export function BlogCard({ post, className = "" }: BlogCardProps) {
  return (
    <article
      className={`group rounded-[25px] overflow-hidden bg-transparent flex flex-col h-full transition-all duration-300 ease-out hover:-translate-y-1 ${className}`}
    >
      <Link href={`/blog/${post.slug}`} className="block flex-1 flex flex-col">
        <div className="relative w-full h-[300px] sm:h-[340px] rounded-t-[25px] overflow-hidden bg-neutral-100 flex-shrink-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="bg-[#F6F7F9] rounded-b-[25px] p-7 sm:p-8 flex flex-col flex-1 justify-between">
          <div>
            <h3 className="font-tight text-xl sm:text-[22px] font-medium tracking-tight text-neutral-950 line-clamp-2 leading-snug group-hover:text-neutral-700 transition-colors">
              {post.title}
            </h3>

            <p className="mt-3 text-sm text-[#444445] line-clamp-3 leading-relaxed font-normal">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-6 flex items-center">
            <span className="font-tight inline-flex items-center gap-1.5 text-sm font-normal text-neutral-950 underline underline-offset-8 group-hover:text-[#444445] transition-colors pb-1">
              <span>Read More</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
