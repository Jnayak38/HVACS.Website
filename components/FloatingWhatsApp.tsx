import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsappNumber}`}
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-md bg-emerald-500 text-white shadow-2xl shadow-emerald-950/30 transition hover:-translate-y-1 hover:bg-emerald-600"
      target="_blank"
      rel="noreferrer"
      aria-label="Contact HVACS on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
