"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <footer className="mt-24 border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Khoo Biotech Logo"
                width={180}
                height={48}
                className="h-12 w-auto"
              />
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Khoo Biotech Logo"
              width={180}
              height={48}
              className="h-12 w-auto"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            We Serve Humanity through sustainable agriculture and science-driven bio-products.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><Link href="/about" className="hover:text-primary">About</Link></li>
            <li><Link href="/products" className="hover:text-primary">Products</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">Categories</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Bio-Fertilizers</li>
            <li>Bio-Pesticides</li>
            <li>Bio-Enhancers</li>
            <li>Organic Manures</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> Bengaluru, Karnataka, India</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@greenlife.example</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 00000 00000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground" suppressHydrationWarning>
        © {new Date().getFullYear()} Khoo Biotech. All rights reserved.
      </div>
    </footer>
  );
}

