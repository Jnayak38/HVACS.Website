"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const Icon = theme === "dark" ? Sun : Moon;

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 transition hover:border-brand-blue hover:text-brand-blue dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
