"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ClipboardCheck, Download, Gauge, MessageCircle, ShieldCheck } from "lucide-react";

const heroChecks = ["DQ/IQ/OQ/PQ documentation", "Cleanroom pressure cascade", "Utility capacity and energy review"];

const heroStats = [
  { value: "15+", label: "Years" },
  { value: "50+", label: "Projects" },
  { value: "2000+", label: "TR" }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <Image
        src="/images/hero-pharma-hvac.png"
        alt="Pharma HVAC cleanroom utility engineering background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(39,185,214,0.18),transparent_28%),linear-gradient(90deg,#061426_0%,rgba(6,20,38,0.94)_43%,rgba(6,20,38,0.48)_100%)]" />
      <div className="industrial-grid absolute inset-0 opacity-35" />

      <div className="relative mx-auto grid min-h-[78svh] max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-20">
        <div className="max-w-4xl">
          <motion.p
            className="mb-5 inline-flex max-w-full items-center rounded-md border border-brand-cyan/40 bg-brand-cyan/10 px-3 py-2 text-xs font-black uppercase text-brand-cyan sm:text-sm"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            HVACS | Engineering Clean & Compliant Environments
          </motion.p>
          <motion.h1
            className="max-w-4xl text-4xl font-black leading-tight sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Pharma HVAC & Utility Engineering Experts
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            Specialized in HVAC Validation, GMP Consultancy, Utility Optimization and Cleanroom Engineering.
          </motion.p>
          <motion.div
            className="mt-7 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            <Link href="/contact#contact-form" className="btn-primary">
              Get Consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="btn-secondary">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Contact Us
            </Link>
            <a href="/HVACS-company-profile.pdf" download className="btn-secondary">
              <Download className="h-4 w-4" aria-hidden="true" />
              Company Profile
            </a>
          </motion.div>
          <motion.div
            className="mt-7 grid gap-3 text-sm text-slate-200 sm:grid-cols-3"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            {heroChecks.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-cyan" aria-hidden="true" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.aside
          className="hidden rounded-lg border border-white/15 bg-white/10 p-5 shadow-2xl shadow-slate-950/40 backdrop-blur-xl lg:block lg:justify-self-end"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.28 }}
          aria-label="HVACS validation readiness summary"
        >
          <div className="metal-line h-1 w-24 rounded-full" />
          <p className="mt-5 text-sm font-black uppercase text-brand-cyan">Consultancy Focus</p>
          <h2 className="mt-3 text-2xl font-black">Audit-ready engineering support for GMP facilities</h2>
          <div className="mt-6 grid gap-3">
            {[
              { icon: ShieldCheck, title: "GMP compliance lens", text: "Documentation and engineering decisions aligned to regulated facility expectations." },
              { icon: ClipboardCheck, title: "Field-ready deliverables", text: "Protocols, checksheets, observations and closeout reports built for execution." },
              { icon: Gauge, title: "Performance mindset", text: "Troubleshooting and optimization focused on stable operation and energy savings." }
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex gap-3 rounded-md border border-white/10 bg-slate-950/35 p-4">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-brand-cyan" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-xs font-bold uppercase text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
