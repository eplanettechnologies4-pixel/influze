import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Services We Offer – Influze",
  description:
    "Explore our full-funnel creator services: Influencer Marketing, Creator Partnerships, Content Creation, Talent Management, Campaign Strategy, and Analytics.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
