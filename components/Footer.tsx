import Link from "next/link";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { navigation, services } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.25fr_0.75fr_0.75fr_1fr] lg:px-8">
        <div>
          <Logo invert />
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
            Pharma HVAC validation documentation, utility engineering consultancy, cleanroom HVAC consultancy, water system consultancy and energy optimization services.
          </p>
          <a
            href="/HVACS-company-profile.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-brand-cyan hover:text-brand-cyan"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Profile
          </a>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase text-brand-cyan">Pages</h2>
          <div className="mt-4 grid gap-3">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase text-brand-cyan">Services</h2>
          <div className="mt-4 grid gap-3">
            {services.slice(0, 5).map((service) => (
              <Link key={service.title} href="/services" className="text-sm text-slate-300 transition hover:text-white">
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase text-brand-cyan">Contact</h2>
          <div className="mt-4 grid gap-4 text-sm text-slate-300">
            <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 transition hover:text-white">
              <Mail className="mt-0.5 h-4 w-4 text-brand-cyan" aria-hidden="true" />
              {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-start gap-3 transition hover:text-white">
              <Phone className="mt-0.5 h-4 w-4 text-brand-cyan" aria-hidden="true" />
              {siteConfig.phone}
            </a>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-brand-cyan" aria-hidden="true" />
              {siteConfig.location}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-5 text-center text-xs text-slate-400">
        Copyright {new Date().getFullYear()} HVACS. All rights reserved. {siteConfig.tagline}.
      </div>
    </footer>
  );
}
