interface SectionPillProps {
  label: string;
  variant?: "light" | "dark";
  className?: string;
}

export function SectionPill({ label, variant = "light", className = "" }: SectionPillProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-normal tracking-wider uppercase select-none transition-colors ${
        isDark
          ? "bg-[#222222] text-neutral-200 border border-neutral-700/60 shadow-sm"
          : "bg-[#F6F7F9] text-neutral-900 border border-transparent"
      } ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isDark ? "bg-white" : "bg-neutral-950"}`} />
      <span className="font-tight tracking-wider">{label}</span>
    </div>
  );
}
