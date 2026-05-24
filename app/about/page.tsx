import type { Metadata } from "next";
import { ClipboardCheck, Compass, Factory, ShieldCheck, Target } from "lucide-react";
import { ConversionBand } from "@/components/ConversionBand";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about HVACS, a pharma HVAC and utility engineering consultancy focused on GMP compliance, validation documentation, utility optimization and project management.",
  path: "/about"
});

const strengths = [
  "Experience in pharmaceutical HVAC and utility systems",
  "GMP compliance and validation documentation knowledge",
  "Utility optimization for chilled water, water, steam and compressed air systems",
  "Project management support from design review to execution",
  "Troubleshooting mindset for site-specific engineering issues"
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About HVACS"
        title="Practical pharma engineering consultancy for clean and compliant environments"
        description="HVACS combines HVAC validation, utility engineering, cleanroom consultancy and optimization support for regulated manufacturing and healthcare facilities."
      />

      <section className="section-pad bg-white dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Company Profile"
              title="Focused on regulated facilities where documentation and performance both matter"
              description="HVACS supports pharmaceutical HVAC and utility systems with a clear understanding of GMP expectations, validation flow, commissioning needs, site operations and energy performance."
            />
          </Reveal>
          <Reveal>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
                The consultancy is built for project owners, engineering teams and quality teams that need reliable HVAC validation documentation, practical utility recommendations and cleanroom engineering support. HVACS works across pharma manufacturing, injectable plants, laboratories, healthcare, cleanrooms and food industries.
              </p>
              <div className="mt-6 grid gap-3">
                {strengths.map((item) => (
                  <div key={item} className="flex gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue dark:text-brand-cyan" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {[
            {
              title: "Mission",
              icon: Target,
              text: "To help regulated facilities achieve cleanroom compliance, reliable utilities and efficient HVAC operation through practical engineering and precise documentation."
            },
            {
              title: "Vision",
              icon: Compass,
              text: "To be a trusted pharma HVAC consultant in India for validation, GMP utility consultancy, cleanroom engineering and energy optimization."
            },
            {
              title: "Approach",
              icon: ClipboardCheck,
              text: "To connect site data, GMP expectations, engineering calculations and operating realities into recommendations that teams can implement."
            }
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                  <Icon className="h-8 w-8 text-brand-blue dark:text-brand-cyan" aria-hidden="true" />
                  <h2 className="mt-5 text-xl font-black text-slate-950 dark:text-white">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-pad bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="rounded-lg bg-slate-950 p-8 text-white lg:p-10">
              <Factory className="h-9 w-9 text-brand-cyan" aria-hidden="true" />
              <h2 className="mt-6 text-3xl font-black">Project support from design inputs to validation closeout</h2>
              <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300">
                HVACS can assist with heat load review, cleanroom design inputs, qualification strategy, pressure mapping, recovery tests, water system consultation, utility capacity review and energy saving analysis. The focus stays on clear scope, field practicality and GMP-aligned deliverables.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ConversionBand
        title="Bring HVACS into your next GMP engineering decision"
        description="Use HVACS for validation strategy, design review, utility assessment, troubleshooting or optimization support where cleanroom compliance and practical operation both matter."
      />
    </>
  );
}
