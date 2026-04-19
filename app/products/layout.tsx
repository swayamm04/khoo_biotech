import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — Kuhoo Biotech",
  description: "Explore our complete catalog of bio-fertilizers, bio-pesticides, bio-enhancers and organic manures from Kuhoo Biotech.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
