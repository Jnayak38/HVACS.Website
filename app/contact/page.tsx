import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description:
    "Contact HVACS for pharma HVAC validation consultancy, utility engineering, cleanroom HVAC consultancy, water systems and energy optimization services.",
  path: "/contact",
  keywords: ["Pharma HVAC Ahmedabad", "HVAC Validation Consultant India"]
});

const contactItems = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}`, icon: Phone },
  { label: "WhatsApp", value: "Message HVACS", href: `https://wa.me/${siteConfig.whatsappNumber}`, icon: MessageCircle },
  { label: "Location", value: siteConfig.location, href: "#map", icon: MapPin }
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Discuss your HVAC validation or pharma engineering requirement"
        description="Share your project details and get consultation support for validation documentation, cleanroom HVAC, utilities, water systems and optimization."
      />

      <section className="section-pad bg-white dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <div className="grid gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("https") ? "_blank" : undefined}
                    rel={item.href.startsWith("https") ? "noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-brand-blue hover:shadow-industrial dark:border-slate-800 dark:bg-slate-900"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-md bg-white text-brand-blue dark:bg-slate-950 dark:text-brand-cyan">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-black uppercase text-slate-500 dark:text-slate-400">{item.label}</span>
                      <span className="mt-1 block font-bold text-slate-950 dark:text-white">{item.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-2xl font-black text-slate-950 dark:text-white">Send Project Inquiry</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Include your plant type, area classification, utility system, validation scope or performance issue so the response can be specific.
              </p>
              <div className="mt-5 grid gap-3 rounded-md border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700 dark:border-blue-950 dark:bg-blue-950/30 dark:text-slate-200 sm:grid-cols-3">
                <div>
                  <p className="font-black text-brand-blue dark:text-brand-cyan">1</p>
                  <p className="mt-1 font-semibold">Share scope</p>
                </div>
                <div>
                  <p className="font-black text-brand-blue dark:text-brand-cyan">2</p>
                  <p className="mt-1 font-semibold">Technical review</p>
                </div>
                <div>
                  <p className="font-black text-brand-blue dark:text-brand-cyan">3</p>
                  <p className="mt-1 font-semibold">Consultation plan</p>
                </div>
              </div>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="map" className="section-pad bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="relative min-h-[390px] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-industrial dark:border-slate-800 dark:bg-slate-950">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,110,253,0.10)_1px,transparent_1px),linear-gradient(rgba(13,110,253,0.10)_1px,transparent_1px)] bg-[size:48px_48px]" />
              <div className="absolute left-[12%] top-[18%] h-24 w-56 rotate-[-12deg] rounded-md border border-slate-300/70 bg-slate-100/80 dark:border-slate-700 dark:bg-slate-900" />
              <div className="absolute right-[10%] top-[16%] h-20 w-72 rotate-[9deg] rounded-md border border-blue-200 bg-blue-50/80 dark:border-blue-900 dark:bg-blue-950/50" />
              <div className="absolute bottom-[18%] left-[22%] h-20 w-72 rotate-[7deg] rounded-md border border-slate-300/70 bg-slate-100/80 dark:border-slate-700 dark:bg-slate-900" />
              <div className="absolute bottom-[12%] right-[16%] h-24 w-52 rotate-[-10deg] rounded-md border border-blue-200 bg-blue-50/80 dark:border-blue-900 dark:bg-blue-950/50" />
              <div className="absolute left-0 right-0 top-1/2 h-3 -translate-y-1/2 bg-slate-300/70 dark:bg-slate-700" />
              <div className="absolute bottom-0 top-0 left-1/2 w-3 -translate-x-1/2 bg-slate-300/70 dark:bg-slate-700" />
              <div className="relative grid min-h-[390px] place-items-center p-8 text-center">
                <div className="rounded-lg border border-slate-200 bg-white/95 p-6 shadow-industrial backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
                  <MapPin className="mx-auto h-11 w-11 text-brand-blue dark:text-brand-cyan" aria-hidden="true" />
                  <h2 className="mt-4 text-3xl font-black text-slate-950 dark:text-white">HVACS Service Base</h2>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Ahmedabad, Gujarat, India. Consultancy support available for pharma HVAC and utility engineering projects across India.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
