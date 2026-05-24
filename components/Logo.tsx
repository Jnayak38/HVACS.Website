import Link from "next/link";
import { Fan } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="HVACS home">
      <span className="grid h-11 w-11 place-items-center rounded-md border border-slate-200 bg-slate-950 text-white shadow-sm dark:border-slate-700">
        <Fan className="h-6 w-6 text-brand-cyan transition duration-500 group-hover:rotate-90" aria-hidden="true" />
      </span>
      <span className="leading-tight">
        <span className={`block text-lg font-black ${invert ? "text-white" : "text-slate-950 dark:text-white"}`}>
          HVACS
        </span>
        <span className={`block text-[11px] font-semibold uppercase ${invert ? "text-slate-300" : "text-brand-steel"}`}>
          {siteConfig.tagline}
        </span>
      </span>
    </Link>
  );
}
