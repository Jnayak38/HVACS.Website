import type { Metadata, Viewport } from "next";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...createMetadata({
    description:
      "HVACS provides pharma HVAC validation documentation, GMP utility engineering consultancy, cleanroom HVAC consultancy, water system consultancy and energy optimization services in India."
  }),
  icons: {
    icon: "/favicon.svg"
  },
  manifest: "/site.webmanifest"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d6efd"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    slogan: siteConfig.tagline,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN"
    },
    areaServed: ["India", "Ahmedabad", "Gujarat"],
    serviceType: [
      "Pharma HVAC Consultant",
      "HVAC Validation Consultant",
      "Cleanroom HVAC Expert",
      "GMP Utility Consultant",
      "Utility Engineering Consultancy India"
    ]
  };

  const themeScript = `
    (function() {
      try {
        var stored = localStorage.getItem('hvacs-theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (stored === 'dark' || (!stored && prefersDark)) {
          document.documentElement.classList.add('dark');
        }
      } catch (error) {}
    })();
  `;

  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
