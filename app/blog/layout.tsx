import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest Creator Insights & Blog – Influze",
  description:
    "Creator economy insights, influencer marketing tactical playbooks, ROI analytics, and short-form video strategies from the Influze agency team.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
