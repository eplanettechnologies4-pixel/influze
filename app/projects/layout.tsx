import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Latest Projects & Case Studies – Influze",
  description:
    "Explore measurable influencer campaign case studies that deliver real results across Fashion, Beauty, Travel, and Health.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
