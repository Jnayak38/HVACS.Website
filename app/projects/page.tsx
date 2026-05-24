import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ConversionBand } from "@/components/ConversionBand";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/content";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description:
    "Explore HVACS project capabilities across HVAC validation, utility engineering, cleanroom HVAC consultancy and energy optimization cases.",
  path: "/projects"
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Project showcase for HVAC, utilities, validation and energy optimization"
        description="Representative project categories for pharma HVAC validation consultancy and utility engineering assignments."
      />

      <section className="section-pad bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Project Capabilities"
              title="From technical diagnosis to GMP-ready deliverables"
              description="HVACS project work is organized around clear scope definition, site observations, engineering review and documentation-ready outputs."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.05}>
                <article className="group overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-industrial dark:border-slate-800 dark:bg-slate-900">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-black text-slate-950 dark:text-white">{project.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.scope.map((item) => (
                        <span key={item} className="rounded-md bg-blue-50 px-3 py-2 text-xs font-black uppercase text-brand-blue dark:bg-blue-950/40 dark:text-brand-cyan">
                          {item}
                        </span>
                      ))}
                    </div>
                    <a href="/contact#contact-form" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-blue dark:text-brand-cyan">
                      Discuss Similar Project
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ConversionBand
        title="Have a similar HVAC, utility or validation project?"
        description="Share your plant type, system details and project stage. HVACS can support scoping, technical review, documentation and implementation follow-up."
      />
    </>
  );
}
