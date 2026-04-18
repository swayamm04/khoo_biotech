import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — Khoo Biotech",
  description: "Explore our complete catalog of bio-fertilizers, bio-pesticides, bio-enhancers and organic manures from Khoo Biotech.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
