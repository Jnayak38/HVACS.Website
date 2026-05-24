import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  Factory,
  FileCheck2,
  Gauge,
  Leaf,
  MessageCircle,
  Ruler,
  ShieldCheck,
  Snowflake,
  ThermometerSun,
  Wrench
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { ConversionBand } from "@/components/ConversionBand";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/content";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  description:
    "HVACS is a pharma HVAC consultant for validation documentation, GMP utility consultancy, cleanroom HVAC engineering, water systems and energy optimization across India.",
  keywords: ["Pharma HVAC Ahmedabad", "HVAC Validation Consultant", "Cleanroom HVAC Expert"]
});

const highlights = [
  { title: "HVAC Validation", icon: FileCheck2, text: "DQ/IQ/OQ/PQ, testing and GMP documentation." },
  { title: "Cleanroom Consultancy", icon: Snowflake, text: "Cleanroom HVAC planning, airflow and pressure cascade support." },
  { title: "Utility Engineering", icon: Factory, text: "Chilled water, steam, compressed air, PW and WFI systems." },
  { title: "Energy Optimization", icon: Gauge, text: "Chiller, pump and operating strategy improvements." },
  { title: "Water System Consultancy", icon: Droplets, text: "Pharma water system design review and validation support." },
  { title: "HVAC Troubleshooting", icon: Wrench, text: "AHU, humidity, temperature and pressure issue resolution." }
];

const counters = [
  { value: "15+", label: "Years Experience" },
  { value: "2000+", label: "TR Managed" },
  { value: "50+", label: "Projects" },
  { value: "GMP", label: "Compliance Expertise" }
];

const processSteps = [
  {
    title: "Scope & Data Review",
    text: "Collect layout, AHU schedule, utility data, drawings, room classification and project constraints.",
    icon: ClipboardCheck
  },
  {
    title: "Site Assessment",
    text: "Check HVAC performance, pressure cascade, temperature, humidity, airflow and utility operation at site.",
    icon: ThermometerSun
  },
  {
    title: "Engineering Analysis",
    text: "Review heat load, ducting, pipe sizing, chiller/pump operation, cleanroom zoning and control strategy.",
    icon: Ruler
  },
  {
    title: "Documentation & Closeout",
    text: "Prepare practical reports, qualification documents, observations, corrective actions and validation support.",
    icon: FileCheck2
  }
];

const advantages = [
  { title: "Pharma Expertise", icon: ShieldCheck },
  { title: "GMP Focus", icon: ClipboardCheck },
  { title: "Energy Saving Approach", icon: Leaf },
  { title: "Practical Engineering Solutions", icon: Wrench },
  { title: "Documentation Support", icon: FileCheck2 }
];

const testimonials = [
  {
    quote:
      "HVACS helped us close validation documentation gaps and stabilize critical cleanroom pressure performance before audit.",
    name: "Engineering Head",
    company: "Injectable Manufacturing Facility"
  },
  {
    quote:
      "Their approach connected GMP expectations with practical utility engineering, which made the project easier for our operations team.",
    name: "Project Manager",
    company: "Pharmaceutical Expansion Project"
  },
  {
    quote:
      "The energy review gave us clear actions for chiller sequencing and pump operation without interrupting production.",
    name: "Maintenance Lead",
    company: "Healthcare Manufacturing Site"
  }
];

const faqs = [
  {
    question: "Do you support HVAC validation documentation for GMP audits?",
    answer:
      "Yes. HVACS prepares and reviews DQ, IQ, OQ, PQ, SOPs, test records and summary reports for pharma HVAC qualification."
  },
  {
    question: "Can HVACS help with existing cleanroom pressure or humidity issues?",
    answer:
      "Yes. The troubleshooting scope can include AHU checks, airflow balance, pressure cascade review, heat load review and control strategy recommendations."
  },
  {
    question: "Which utilities are covered?",
    answer:
      "HVACS supports chilled water, purified water, WFI, compressed air, steam and connected HVAC utility performance reviews."
  },
  {
    question: "Do you work outside Ahmedabad?",
    answer:
      "Yes. HVACS supports pharma HVAC and utility engineering projects across India, with Ahmedabad as a key service location."
  }
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="bg-white px-4 py-8 dark:bg-slate-950 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {counters.map((counter, index) => (
            <Reveal key={counter.label} delay={index * 0.04}>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <p className="text-3xl font-black text-brand-blue dark:text-brand-cyan">{counter.value}</p>
                <p className="mt-2 text-xs font-black uppercase text-slate-500 dark:text-slate-400">{counter.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Core Expertise"
              title="Validation, utilities and cleanroom engineering under one roof"
              description="HVACS supports pharma teams from documentation and design review through troubleshooting and energy optimization, with a practical GMP-first approach."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <article className="h-full rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-industrial dark:border-slate-800 dark:bg-slate-900">
                    <Icon className="h-8 w-8 text-brand-blue dark:text-brand-cyan" aria-hidden="true" />
                    <h3 className="mt-5 text-lg font-black text-slate-950 dark:text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Engineering judgement shaped for regulated facilities"
              description="The work is built around audit readiness, operating practicality and measurable performance. HVACS keeps documentation, design intent and site realities connected."
            />
            <Link href="/services" className="btn-primary mt-8">
              Explore Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-blue-50 text-brand-blue dark:bg-blue-950/50 dark:text-brand-cyan">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-black text-slate-950 dark:text-white">{item.title}</h3>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="How We Work"
              title="A clear engineering workflow from inquiry to closeout"
              description="The process is designed for busy pharma engineering teams: quick scope clarity, measured site review, practical recommendations and documentation-ready outputs."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal key={step.title} delay={index * 0.05}>
                  <article className="relative h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                    <span className="absolute right-5 top-5 text-4xl font-black text-slate-100 dark:text-slate-800">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon className="h-8 w-8 text-brand-blue dark:text-brand-cyan" aria-hidden="true" />
                    <h3 className="mt-6 text-lg font-black text-slate-950 dark:text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{step.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Built for pharma HVAC validation and engineering projects"
              description="Each service is scoped for documentation clarity, engineering accuracy and smooth execution across regulated manufacturing environments."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <Reveal key={service.title} delay={index * 0.04}>
                <article className="h-full rounded-lg border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-brand-blue hover:shadow-industrial dark:border-slate-800 dark:bg-slate-900">
                  <CheckCircle2 className="h-7 w-7 text-brand-blue dark:text-brand-cyan" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-black text-slate-950 dark:text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.summary}</p>
                  <Link href="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-blue dark:text-brand-cyan">
                    View Details
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ConversionBand />

      <section className="section-pad bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Client Feedback"
              title="Trusted for practical GMP engineering support"
              description="HVACS is positioned for teams that need clear documentation, realistic engineering recommendations and responsive project support."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.06}>
                <figure className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                  <Award className="h-7 w-7 text-brand-blue dark:text-brand-cyan" aria-hidden="true" />
                  <blockquote className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    &quot;{item.quote}&quot;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-slate-200 pt-4 dark:border-slate-800">
                    <p className="font-black text-slate-950 dark:text-white">{item.name}</p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.company}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions before a consultation"
              description="Quick answers for pharma engineering, cleanroom HVAC and utility teams planning a validation or optimization scope."
            />
          </Reveal>
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.04}>
                <details className="group rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
                  <summary className="cursor-pointer list-none font-black text-slate-950 dark:text-white">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <p className="text-sm font-black uppercase text-brand-cyan">Client Inquiry</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Start your validation or engineering consultation</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Share your requirement for HVAC validation, utility engineering, cleanroom consultancy, water systems or energy optimization. The team will review the scope and respond with the next steps.
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-cyan">
              Contact page
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal>
            <div className="rounded-lg border border-white/10 bg-white p-6 shadow-2xl dark:bg-slate-900">
              <ContactForm compact />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
