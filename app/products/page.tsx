"use client";

import { useState } from "react";
import Image from "next/image";
import { products, categories, Product } from "@/data/products";
import { 
  Sprout, 
  Target, 
  ShieldAlert, 
  Bug, 
  Shovel, 
  Droplets,
  X,
  Info,
  CheckCircle2,
  FlaskConical,
  Trees
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const categoryIcons: Record<string, any> = {
  "biostimulant": Sprout,
  "crop-specific": Target,
  "disease-control": ShieldAlert,
  "bio-pesticide": Bug,
  "soil-conditioner": Shovel,
  "adjuvant": Droplets,
};

const filters = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

export default function ProductsPage() {
  const [active, setActive] = useState<string>("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const list = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6 md:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Catalog</span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl text-balance">Our Products</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground text-pretty">
            Eco-friendly bio-products engineered for healthier soil, stronger crops, and better yields.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
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

        <div className="mt-10 grid gap-6 grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {list.map((p) => (
            <article
              key={p.slug}
              onClick={() => setSelectedProduct(p)}
              className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/40"
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
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">{p.category}</span>
                  {p.volume && <span className="text-[9px] font-medium text-muted-foreground">{p.volume}</span>}
                </div>
                <h3 className="mt-0.5 text-sm font-bold line-clamp-1 group-hover:text-primary transition-colors">{p.name}</h3>
                <p className="mt-1 line-clamp-2 text-[11px] leading-tight text-muted-foreground">{p.description}</p>
                {/* Price/Form hidden as requested */}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24">
          <div className="text-center md:text-left mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Explore by Type</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Browse Categories</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => {
              const Icon = categoryIcons[c.slug] || Sprout;
              return (
                <div 
                  key={c.slug} 
                  className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:border-primary/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-[image:var(--gradient-primary)] group-hover:text-primary-foreground mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden border-none shadow-[0_0_50px_rgba(0,0,0,0.15)] rounded-3xl">
          {selectedProduct && (
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto bg-secondary/20">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-10 max-h-[80vh] overflow-y-auto custom-scrollbar bg-card">
                <DialogHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                      {selectedProduct.category}
                    </span>
                    {selectedProduct.volume && (
                      <span className="text-xs font-medium text-muted-foreground bg-secondary px-2.5 py-0.5 rounded-full">
                        {selectedProduct.volume}
                      </span>
                    )}
                  </div>
                  <DialogTitle className="text-3xl font-bold tracking-tight">{selectedProduct.name}</DialogTitle>
                </DialogHeader>

                <div className="mt-6 space-y-8">
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
                      <Info className="h-4 w-4 text-primary" /> Overview
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedProduct.description}</p>
                  </div>

                  {selectedProduct.benefits && (
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
                        <CheckCircle2 className="h-4 w-4 text-primary" /> Key Benefits
                      </h4>
                      <ul className="grid gap-3">
                        {selectedProduct.benefits.map((b, i) => (
                          <li key={i} className="flex gap-3 text-sm text-balance">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    {selectedProduct.composition && (
                      <div>
                        <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
                          <FlaskConical className="h-4 w-4 text-primary" /> Composition
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct.composition.map((c, i) => (
                            <span key={i} className="text-xs bg-secondary/50 px-2 py-1 rounded-md text-muted-foreground">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedProduct.crop && (
                      <div>
                        <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
                          <Trees className="h-4 w-4 text-primary" /> Recommended Crop
                        </h4>
                        <span className="text-sm font-semibold">{selectedProduct.crop}</span>
                      </div>
                    )}
                  </div>

                  {selectedProduct.usage && (
                    <div className="rounded-2xl bg-primary/5 p-5 border border-primary/10">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">How to Use</h4>
                      <p className="text-sm text-primary/80 font-medium">{selectedProduct.usage}</p>
                    </div>
                  )}
                  
                  {/* Price hidden in modal as well per "hide this" broad request */}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
