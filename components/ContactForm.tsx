"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

type ContactFormProps = {
  compact?: boolean;
  defaultService?: string;
};

const serviceOptions = [
  "HVAC Validation",
  "Cleanroom Consultancy",
  "Utility Engineering",
  "Energy Optimization",
  "Water System Consultancy",
  "HVAC Troubleshooting"
];

export function ContactForm({ compact = false, defaultService = "HVAC Validation" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: defaultService,
    message: ""
  });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: defaultService,
        message: ""
      });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" id="contact-form">
      <div className={compact ? "grid gap-4 md:grid-cols-2" : "grid gap-4 sm:grid-cols-2"}>
        <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          Name
          <input
            className="form-field"
            required
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          Email
          <input
            className="form-field"
            type="email"
            required
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            placeholder="you@company.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          Phone
          <input
            className="form-field"
            required
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
            placeholder="+91"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          Company
          <input
            className="form-field"
            value={form.company}
            onChange={(event) => setForm({ ...form, company: event.target.value })}
            placeholder="Company name"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
        Requirement
        <select
          className="form-field"
          value={form.service}
          onChange={(event) => setForm({ ...form, service: event.target.value })}
        >
          {serviceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
        Project Details
        <textarea
          className="form-field min-h-32 resize-y"
          required
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          placeholder="Share plant type, area, utility or validation scope..."
        />
      </label>
      <button type="submit" className="btn-primary w-full sm:w-fit" disabled={status === "loading"}>
        <Send className="h-4 w-4" aria-hidden="true" />
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>
      {status === "success" ? (
        <p className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-200">
          Thank you. Your inquiry has been received.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800 dark:border-red-900 dark:bg-red-950 dark:text-red-200">
          Something went wrong. Please email info@hvacs.in or use WhatsApp.
        </p>
      ) : null}
    </form>
  );
}
