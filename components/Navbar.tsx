"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-blue-50 text-brand-blue dark:bg-blue-950/40 dark:text-brand-cyan"
                    : "text-slate-700 hover:bg-slate-100 hover:text-brand-blue dark:text-slate-300 dark:hover:bg-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href="/HVACS-company-profile.pdf"
            download
            className="inline-flex h-10 items-center gap-2 rounded-md border border-slate-200 px-3 text-sm font-semibold text-slate-700 transition hover:border-brand-blue hover:text-brand-blue dark:border-slate-700 dark:text-slate-200"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Profile
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            className="inline-flex h-10 items-center gap-2 rounded-md bg-brand-blue px-4 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-700"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-xl dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-3">
              <a
                href="/HVACS-company-profile.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 px-3 py-3 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Profile
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-blue px-3 py-3 text-sm font-bold text-white"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
