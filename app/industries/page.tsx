import type { Metadata } from "next";
import { Beaker, Building2, Factory, FlaskConical, Hospital, Pill, Snowflake } from "lucide-react";
import { ConversionBand } from "@/components/ConversionBand";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { industries } from "@/lib/content";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Industries",
  description:
    "HVACS serves pharmaceutical, injectable, healthcare, laboratory, food, API and cleanroom facilities with HVAC validation and utility consultancy.",
  path: "/industries"
});

const industryIcons = [Pill, Hospital, FlaskConical, Factory, Beaker, Snowflake];

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Engineering support for regulated and controlled environments"
        description="HVACS helps facilities where cleanliness, compliance, reliability and energy performance are mission-critical."
      />

      <section className="section-pad bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Industries Served"
              title="Built around pharma-grade expectations"
              description="Services are structured for facilities that need documentation confidence, precise HVAC performance and dependable utilities."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => {
              const Icon = industryIcons[index] ?? Building2;

              return (
                <Reveal key={industry} delay={index * 0.04}>
                  <article className="h-full rounded-lg border border-slate-200 bg-slate-50 p-7 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand-blue hover:shadow-industrial dark:border-slate-800 dark:bg-slate-900">
                    <span className="mx-auto grid h-14 w-14 place-items-center rounded-md bg-white text-brand-blue shadow-sm dark:bg-slate-950 dark:text-brand-cyan">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <h2 className="mt-5 text-xl font-black text-slate-950 dark:text-white">{industry}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      HVAC validation, cleanroom consultancy, utility review and energy optimization support tailored to operational requirements.
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ConversionBand
        title="Need pharma-grade HVAC support for your industry?"
        description="HVACS supports regulated manufacturing, cleanrooms, laboratories, healthcare and food facilities with practical HVAC and utility consultancy."
      />
    </>
  );
}
