import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Choose Your Plan – Influze",
  description:
    "Transparent influencer campaign pricing plans: Starter, Growth (Most Popular), and Premium packages tailored to scale your brand with top-tier creators.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
