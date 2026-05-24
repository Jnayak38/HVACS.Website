import type { Metadata } from "next";
import { ArrowRight, Droplets, FileCheck2, Gauge, ListChecks, Snowflake, Wrench } from "lucide-react";
import Link from "next/link";
import { ConversionBand } from "@/components/ConversionBand";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/content";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "HVACS services include HVAC validation documentation, utility engineering consultancy, HVAC design consultancy, energy audit and optimization, water systems and troubleshooting.",
  path: "/services",
  keywords: ["HVAC Qualification Services", "GMP Utility Consultant", "Utility Engineering Consultancy India"]
});

const icons = [FileCheck2, Droplets, Snowflake, Gauge, Wrench, ListChecks];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Specialized pharma HVAC, utility and cleanroom consultancy"
        description="From validation protocols to utility optimization, HVACS delivers focused engineering support for GMP facilities and controlled environments."
      />

      <section className="section-pad bg-white dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[index] ?? FileCheck2;

            return (
              <Reveal key={service.title} delay={index * 0.04}>
                <article className="h-full rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-industrial dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex items-start gap-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-blue-50 text-brand-blue dark:bg-blue-950/50 dark:text-brand-cyan">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="text-2xl font-black text-slate-950 dark:text-white">{service.title}</h2>
                      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.summary}</p>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.bullets.map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">
                        <span className="h-2 w-2 rounded-full bg-brand-cyan" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-md border border-brand-blue/15 bg-blue-50 p-4 dark:border-brand-cyan/20 dark:bg-blue-950/20">
                    <p className="text-xs font-black uppercase text-brand-blue dark:text-brand-cyan">Expected Output</p>
                    <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-200">{service.outcome}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-pad bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-black uppercase text-brand-blue dark:text-brand-cyan">Engagement Model</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white">
              Consultancy that can plug into design, execution or validation stages
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              HVACS can support a new project, an audit readiness gap, a troubleshooting assignment or an energy saving study. The deliverables are scoped so plant, quality and project teams can act on them.
            </p>
          </Reveal>
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Design Review", "Site Diagnosis", "Validation Closeout"].map((item) => (
                <div key={item} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                  <FileCheck2 className="h-7 w-7 text-brand-blue dark:text-brand-cyan" aria-hidden="true" />
                  <h3 className="mt-4 font-black text-slate-950 dark:text-white">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    Structured engineering inputs with clear records, recommendations and next actions.
                  </p>
                </div>
              ))}
            </div>
            <Link href="/contact#contact-form" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-blue dark:text-brand-cyan">
              Request Service Scope
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <ConversionBand
        title="Looking for HVAC qualification or utility consultancy support?"
        description="Send the area, system, project stage and compliance requirement. HVACS will help define the right validation or engineering scope."
      />
    </>
  );
}
