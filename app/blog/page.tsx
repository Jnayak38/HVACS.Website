import type { Metadata } from "next";
import { ArrowRight, BookOpen, CalendarDays } from "lucide-react";
import { ConversionBand } from "@/components/ConversionBand";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { blogPosts } from "@/lib/content";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Blog & Insights",
  description:
    "Technical insights from HVACS on GMP guidelines, HVAC validation, cleanroom engineering, energy saving and pharma utilities.",
  path: "/blog",
  keywords: ["GMP Guidelines", "HVAC Validation", "Cleanroom Engineering", "Pharma Utilities"]
});

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog / Insights"
        title="Technical insights for pharma HVAC and utilities"
        description="A professional blog layout for GMP guidelines, HVAC validation, cleanroom engineering, energy saving and pharma utility topics."
      />

      <section className="section-pad bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Insights"
              title="Knowledge built for engineering and quality teams"
              description="Use this section for technical articles that build trust, rank for SEO keywords and convert visitors into qualified consultancy inquiries."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Reveal key={post.title} delay={index * 0.04}>
                <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-industrial dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex items-center justify-between gap-4 text-xs font-black uppercase text-brand-blue dark:text-brand-cyan">
                    <span className="inline-flex items-center gap-2">
                      <BookOpen className="h-4 w-4" aria-hidden="true" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <CalendarDays className="h-4 w-4" aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mt-5 text-xl font-black text-slate-950 dark:text-white">{post.title}</h2>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
                  <a href="/contact#contact-form" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-blue dark:text-brand-cyan">
                    Ask About This Topic
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ConversionBand
        title="Turn a technical concern into a scoped engineering action"
        description="If an insight matches your current validation, HVAC, utility or energy issue, send the details and HVACS will help define the next technical step."
      />
    </>
  );
}
