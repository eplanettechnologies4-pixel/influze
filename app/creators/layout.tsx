import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trusted Creator Partners – Influze",
  description:
    "Discover exceptional digital creators across lifestyle, beauty, tech, fashion, travel, fitness, and food. Vetted influencer roster with verified audience reach.",
};

export default function CreatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
