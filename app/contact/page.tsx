"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, useEffect } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Get in Touch</span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Let&apos;s grow together</h1>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Get in Touch</span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Let's grow together</h1>
          <p className="mt-3 text-muted-foreground">
            Questions about products, dealerships, or agronomy? Our team usually responds within one business day.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-5 md:px-6">
        <div className="space-y-6 md:col-span-2">
          {[
            { Icon: MapPin, title: "Office", body: "Bengaluru, Karnataka, India" },
            { Icon: Mail, title: "Email", body: "hello@khoobiotech.example" },
            { Icon: Phone, title: "Phone", body: "+91 00000 00000" },
          ].map(({ Icon, title, body }) => (
            <div key={title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">{title}</div>
                <div className="text-sm text-muted-foreground">{body}</div>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium">Name</span>
              <input required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" suppressHydrationWarning />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Email</span>
              <input required type="email" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" suppressHydrationWarning />
            </label>
          </div>
          <label className="block">
            <span className="text-sm font-medium">Subject</span>
            <input className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" suppressHydrationWarning />
          </label>
          <label className="block">
            <span className="text-sm font-medium">Message</span>
            <textarea required rows={5} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
          </label>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-[image:var(--gradient-primary)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02]"
            suppressHydrationWarning
          >
            <Send className="h-4 w-4" /> Send Message
          </button>
          {sent && (
            <p className="text-sm font-medium text-primary">Thanks! We&apos;ll be in touch shortly.</p>
          )}
        </form>
      </section>
    </>
  );
}
