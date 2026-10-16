import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions & Help Center – Influze",
  description:
    "Find answers to common questions about influencer campaign matching, pricing, creator deliverables, contracting, and analytics reporting.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
