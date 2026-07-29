"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Zap, Clock, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { ScrollVideo } from "@/components/ui/ScrollVideo";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: elem, offsetY: 112 },
        ease: "power3.inOut"
      });
    }
  };

  return (
    <section id="inicio" ref={containerRef} className="relative h-[200vh] bg-white">
      {/* top-28 offsets the 112px header, h-[calc(100dvh-112px)] prevents overflow */}
      <div className="sticky top-28 h-[calc(100dvh-112px)] w-full overflow-hidden flex items-center">

        {/* Background Animation Layer - Stacked bottom on mobile, right on desktop */}
        <div className="absolute right-[-25%] sm:right-0 top-auto bottom-[2%] sm:bottom-auto sm:top-[45%] lg:top-[40%] z-0 translate-y-0 sm:-translate-y-1/2 w-[150%] sm:w-full lg:w-[70%] lg:max-w-[1000px] aspect-video flex items-center justify-end pointer-events-none">
          <ScrollVideo
            triggerRef={containerRef}
            className="h-full w-full object-contain mix-blend-darken opacity-90 lg:opacity-100"
          />
        </div>

        {/* Foreground Content Layer - Snapped top on mobile, centered on desktop */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pointer-events-none self-start sm:self-auto mt-6 sm:mt-0 lg:-mt-32">
          <div className="max-w-xl lg:max-w-3xl pointer-events-auto py-4 sm:py-12 lg:py-0">

            {/* Eyebrow */}
            <div className="mb-4 text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase">
              Atendimento Express
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-5xl font-black tracking-tighter text-zinc-900 sm:text-6xl lg:text-[6.5rem] leading-[0.95]">
              Bateria arriou?
              <br /> Nós resolvemos.
            </h1>

            {/* Subtext */}
            <p className="mb-10 max-w-[42ch] text-lg leading-relaxed text-zinc-600 font-medium">
              Atendimento ágil e inteligente. Instalação profissional de baterias automotivas onde você estiver. Construído para salvar o seu dia.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://wa.me/5513996945956?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Baterias%20Express%20e%20gostaria%20de%20saber%20o%20pre%C3%A7o%20de%20uma%20bateria%20para%20meu%20carro."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#00355E] px-10 py-4 text-sm font-bold text-white transition-transform hover:-translate-y-1 shadow-[0_8px_30px_rgba(0,53,94,0.3)]"
              >
                Solicitação imediata
              </a>

              <a
                href="#baterias"
                onClick={handleScroll}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#F56504] px-10 py-4 text-sm font-bold text-white transition-transform hover:-translate-y-1 shadow-[0_8px_30px_rgba(245,101,4,0.3)]"
              >
                Ver Modelos Disponíveis
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
