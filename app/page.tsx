import Link from "next/link";
import Image from "next/image";
import { Leaf, Sprout, Droplets, Award, ArrowRight } from "lucide-react";
import heroField from "@/assets/hero-field.jpg";
import labImg from "@/assets/lab.jpg";
import { products, categories } from "@/data/products";

const highlights = [
  { icon: Leaf, title: "Eco-Friendly Solutions", body: "Built around environmental sustainability — healthy soil, less chemical dependency." },
  { icon: Sprout, title: "Increased Crop Yield", body: "Bio-products that boost productivity while preserving ecological balance." },
  { icon: Droplets, title: "Water Conservation", body: "Improved soil water retention reduces irrigation needs." },
  { icon: Award, title: "Award-Winning Research", body: "Recognized with multiple awards for sustainable agricultural innovation." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src={heroField}
          alt="Lush green agricultural field under blue sky"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="mx-auto max-w-7xl px-4 py-28 md:px-6 md:py-40">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-block rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
              Pioneering Sustainable Agriculture
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Innovative <span className="text-accent">Eco-Friendly</span> Agricultural Solutions
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/90 md:text-xl">
              Khoo Biotech Lab develops sustainable products that enhance crop yields while
              protecting our planet&apos;s precious resources.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
              >
                Explore Our Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-md border border-primary-foreground/40 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Our Impact</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Key Highlights</h2>
          <p className="mt-4 text-muted-foreground">
            What makes Khoo Biotech a leader in sustainable agricultural innovation.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-[image:var(--gradient-primary)] group-hover:text-primary-foreground">
                <h.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div className="relative">
            <Image
              src={labImg}
              alt="Khoo Biotech laboratory with microscope and plant samples"
              className="relative rounded-3xl shadow-[var(--shadow-soft)]"
              width={1280}
              height={896}
            />
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-[image:var(--gradient-primary)] px-5 py-3 text-primary-foreground shadow-[var(--shadow-soft)]">
              <div className="text-2xl font-bold leading-none">Est. 2010</div>
              <div className="text-xs uppercase tracking-widest opacity-90">Innovation since</div>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">About Us</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Leading sustainable agriculture innovation
            </h2>
            <p className="mt-4 text-muted-foreground">
              Khoo Biotech Lab develops eco-friendly solutions for modern farming challenges,
              enhancing productivity while preserving ecological balance.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <h4 className="font-semibold">Research-Driven Approach</h4>
                <p className="text-sm text-muted-foreground">Cutting-edge agricultural research powers every product we ship.</p>
              </div>
              <div>
                <h4 className="font-semibold">Environmental Sustainability</h4>
                <p className="text-sm text-muted-foreground">Designed to reduce the carbon footprint of agriculture.</p>
              </div>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[image:var(--gradient-primary)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)]"
            >
              Learn More About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Our Range</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Featured Products</h2>
          </div>
          <Link href="/products" className="text-sm font-semibold text-primary hover:underline">
            View all →
          </Link>
        </div>
        <div className="mt-10 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {products.slice(0, 10).map((p) => (
            <article
              key={p.slug}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="aspect-square overflow-hidden bg-secondary/40 relative">
                <Image
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fill
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
      </section>

      {/* Categories */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Explore Our Solutions</h2>
            <p className="mt-3 text-muted-foreground">
              Comprehensive eco-friendly agricultural solutions for sustainable farming.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <div
                key={c.slug}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:border-primary/50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
                  <Leaf className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{c.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.desc}</p>
                <Link href="/products" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                  Discover Products <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="overflow-hidden rounded-3xl bg-[image:var(--gradient-primary)] p-10 text-center text-primary-foreground shadow-[var(--shadow-soft)] md:p-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Grow more, sustainably.</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">
            Talk to our agronomists about the right bio-solution for your crop.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-background px-6 py-3 text-sm font-semibold text-primary shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
