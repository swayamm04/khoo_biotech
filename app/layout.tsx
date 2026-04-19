import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kuhoo Biotech — We Serve Humanity | Sustainable Agricultural Solutions",
  description: "Kuhoo Biotech develops eco-friendly bio-fertilizers, bio-pesticides, and bio-enhancers for sustainable, high-yield farming.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined') return;
                const methods = ['pushState', 'replaceState'];
                methods.forEach(method => {
                  const original = window.history[method];
                  if (typeof original !== 'function') return;
                  window.history[method] = function() {
                    try {
                      return original.apply(this, arguments);
                    } catch (err) {
                      if (err instanceof TypeError && err.message.includes('dispatchEvent')) {
                        console.warn('[History Shield] Silenced extension error in history.' + method, err);
                        return;
                      }
                      throw err;
                    }
                  };
                });
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground`} suppressHydrationWarning>
        <SiteHeader />
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
