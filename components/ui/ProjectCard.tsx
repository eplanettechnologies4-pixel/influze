"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Eye, Heart } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className = "" }: ProjectCardProps) {
  return (
    <div
      className={`group rounded-[28px] bg-[#F6F7F9] p-3.5 sm:p-4 border border-transparent hover:border-neutral-200/60 transition-all duration-300 ease-out hover:-translate-y-1 ${className}`}
    >
      <Link href="/projects" className="block">
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-[22px] overflow-hidden bg-neutral-900 mb-4">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 50vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/25 to-transparent pointer-events-none" />

          <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2 z-10">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-normal uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20 font-tight"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 z-10">
            <div>
              <h3 className="font-tight text-base sm:text-lg md:text-xl font-normal uppercase tracking-tight text-white leading-tight">
                {project.title}
              </h3>
              <p className="font-tight text-xs sm:text-sm text-neutral-300 mt-0.5 font-normal">
                {project.subtitle}
              </p>
            </div>

            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-neutral-950 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-[#444445] group-hover:text-white shadow-md">
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-2 py-1">
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-neutral-200 flex-shrink-0">
              <Image
                src={project.creatorAvatar}
                alt={project.creatorName}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-tight text-sm font-medium text-neutral-950">
                {project.creatorName}
              </span>
              {project.creatorVerified && (
                <CheckCircle2 className="w-3.5 h-3.5 fill-[#0084FF] text-white" />
              )}
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-normal uppercase tracking-wider text-[#444445] font-tight">
            <div className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-neutral-400" />
              <span>Reach:</span>
              <span className="font-medium text-neutral-950">{project.reach}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-neutral-400" />
              <span>Engagement:</span>
              <span className="font-medium text-neutral-950">{project.engagement}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
