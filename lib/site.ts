import type { Metadata } from "next";

export const siteConfig = {
  name: "HVACS",
  tagline: "Engineering Clean & Compliant Environments",
  domain: "hvacs.in",
  url: "https://hvacs.in",
  email: "info@hvacs.in",
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210",
  location: "Ahmedabad, Gujarat, India",
  keywords: [
    "Pharma HVAC Consultant",
    "HVAC Validation Consultant",
    "Cleanroom HVAC Expert",
    "GMP Utility Consultant",
    "HVAC Qualification Services",
    "Utility Engineering Consultancy India",
    "Pharma HVAC Ahmedabad",
    "Cleanroom HVAC Consultancy",
    "Water System Consultancy",
    "Energy Optimization Services"
  ]
};

type PageMetadata = {
  title?: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path = "",
  keywords = []
}: PageMetadata): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | Pharma HVAC & Utility Engineering Experts`;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: url
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: "/images/hero-pharma-hvac.png",
          width: 1200,
          height: 675,
          alt: "HVACS pharma HVAC and utility engineering consultancy"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/images/hero-pharma-hvac.png"]
    }
  };
}
