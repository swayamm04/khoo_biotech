import type { Metadata } from "next";
import Image from "next/image";
import { Microscope, Globe2, HeartHandshake, FlaskConical } from "lucide-react";
import labImg from "@/assets/lab.jpg";

export const metadata: Metadata = {
  title: "About — Kuhoo Biotech",
  description: "Since 2022, Kuhoo Biotech has built sustainable bio-products through research-driven innovation.",
};

const values = [
  { icon: Microscope, title: "Science First", body: "Every formulation backed by peer-reviewed agricultural research." },
  { icon: Globe2, title: "Planet Positive", body: "Reducing carbon footprint and chemical load on soil and water." },
  { icon: HeartHandshake, title: "Farmer Focused", body: "Practical, affordable products designed with farmer outcomes in mind." },
  { icon: FlaskConical, title: "Continuous Innovation", body: "An R&D pipeline that keeps expanding what bio can do." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Our Story</span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Cultivating a healthier planet, one harvest at a time
          </h1>
          <p className="mt-5 text-lg text-muted-foreground text-balance mx-auto max-w-3xl">
            Kuhoo Biotech Private Limited was established in 2022 with a mission to provide cutting-edge organic agricultural inputs. 
            The company addresses crucial issues faced by Indian farmers—such as declining soil fertility, low crop yield, weed infestation, 
            and pest attacks—by delivering sustainable, organic solutions that enhance crop health and productivity. Headquartered in Karnataka, 
            Kuhoo Biotech is on a mission to empower farmers across India with innovative, natural farming inputs that reduce dependency on synthetic chemicals.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:px-6">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
          <Image
            src={labImg}
            alt="Laboratory"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Mission &amp; Vision</h2>
          <p className="mt-4 text-muted-foreground">
            <strong>Mission:</strong> To empower farmers with eco-friendly agricultural inputs that improve soil fertility, control pests and weeds organically, and increase crop yield—all while ensuring affordability and quality.
          </p>
          <p className="mt-4 text-muted-foreground">
            <strong>Vision:</strong> To revolutionize agriculture by making organic farming more accessible, cost-effective, and productive through innovative technologies and indigenous techniques.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> 50+ proprietary microbial strains in our library.</li>
            <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> Trusted by farmers across 12 states.</li>
            <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> Manufacturing certified for quality and biosafety.</li>
          </ul>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">Our Values</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
