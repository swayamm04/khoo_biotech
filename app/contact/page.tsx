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
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Let&apos;s grow together</h1>
          <p className="mt-3 text-muted-foreground">
            Questions about products, dealerships, or agronomy? Our team usually responds within one business day.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-5 md:px-6">
        <div className="space-y-6 md:col-span-2">
          {[
            { Icon: MapPin, title: "Office", body: "2078/2078/RC-23, Near JCB Showroom. Kalluru Mandli Industrial Area, Haiholeroad, Shivamogga - 577202, Karnataka, India" },
            { Icon: Mail, title: "Email", body: "kuhoobiotech@yahoo.com" },
            { Icon: Phone, title: "Phone", body: "+91 6360104990, +91 8275092436" },
          ].map(({ Icon, title, body }) => (
            <div key={title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
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
            const formData = new FormData(e.currentTarget);
            const name = formData.get("name");
            const email = formData.get("email");
            const subject = formData.get("subject");
            const message = formData.get("message");
            
            const text = `*New Website Inquiry*\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;
            const encodedText = encodeURIComponent(text);
            const whatsappUrl = `https://wa.me/916360104990?text=${encodedText}`;
            
            window.open(whatsappUrl, "_blank");
            setSent(true);
          }}
          className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium">Name</span>
              <input name="name" required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" suppressHydrationWarning />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Email</span>
              <input name="email" required type="email" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" suppressHydrationWarning />
            </label>
          </div>
          <label className="block">
            <span className="text-sm font-medium">Subject</span>
            <input name="subject" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" suppressHydrationWarning />
          </label>
          <label className="block">
            <span className="text-sm font-medium">Message</span>
            <textarea name="message" required rows={5} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
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

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.823673725422!2d75.54871777485901!3d13.909485386499098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbba990878f0439%3A0x16288d1623e03db2!2sKuhoo%20Biotech%20Private%20Limited!5e0!3m2!1sen!2sin!4v1776611532512!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
