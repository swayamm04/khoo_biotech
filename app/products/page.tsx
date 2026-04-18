"use client";

import { useState } from "react";
import Image from "next/image";
import { products, categories } from "@/data/products";

const filters = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

export default function ProductsPage() {
  const [active, setActive] = useState<string>("All");
  const list = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Catalog</span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Our Products</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Eco-friendly bio-products engineered for healthier soil, stronger crops, and better yields.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active === f
                  ? "bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-soft)]"
                  : "border border-border bg-card text-foreground hover:border-primary/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {list.map((p) => (
            <article
              key={p.slug}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="aspect-square overflow-hidden bg-secondary/40 relative">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">{p.category}</span>
                <h3 className="mt-0.5 text-sm font-bold line-clamp-1">{p.name}</h3>
                <p className="mt-1 line-clamp-2 text-[11px] leading-tight text-muted-foreground">{p.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold tracking-tight">Browse by Category</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <div key={c.slug} className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
