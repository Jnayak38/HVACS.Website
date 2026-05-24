import Link from "next/link";
import { ArrowRight, Download, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

type ConversionBandProps = {
  title?: string;
  description?: string;
};

export function ConversionBand({
  title = "Need support for a pharma HVAC or utility project?",
  description = "Share your validation, cleanroom, water system, troubleshooting or energy optimization requirement and get a practical consultation response."
}: ConversionBandProps) {
  return (
    <section className="bg-slate-950 px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-lg border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/20 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase text-brand-cyan">Lead Consultation</p>
          <h2 className="mt-3 text-3xl font-black">{title}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <Link href="/contact#contact-form" className="btn-primary">
            Get Consultation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
          <a href="/HVACS-company-profile.pdf" download className="btn-secondary">
            <Download className="h-4 w-4" aria-hidden="true" />
            Profile
          </a>
        </div>
      </div>
    </section>
  );
}
