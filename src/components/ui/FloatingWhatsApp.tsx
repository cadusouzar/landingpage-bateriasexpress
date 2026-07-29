"use client";

import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5513996945956?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Baterias%20Express%20e%20gostaria%20de%20saber%20o%20pre%C3%A7o%20de%20uma%20bateria%20para%20meu%20carro."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 sm:bottom-12 sm:right-12 z-[100] flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)]"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <WhatsAppIcon className="h-10 w-10 sm:h-12 sm:w-12" />
      {/* Ping/Glow effect */}
      <span className="absolute -z-10 inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-50 duration-1000"></span>
    </a>
  );
}
