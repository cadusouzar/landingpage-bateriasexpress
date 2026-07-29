"use client";

import { useRef } from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const batteries = [
  {
    title: "Convencional (SLI)",
    tech: "Chumbo-ácido padrão",
    vehicles: ["Carros Populares", "Motos Tradicionais"],
    focus: "Alta corrente para a partida do motor e manutenção de acessórios básicos.",
    image: "/bateria-convencional.webp",
    cardBg: "bg-[#002D5C]",
    accent: "text-[#F56504]",
  },
  {
    title: "EFB (Enhanced Flooded)",
    tech: "Líquida Aprimorada",
    vehicles: ["Start-Stop Básico", "Táxis e Aplicativos"],
    focus: "Múltiplos ciclos de carga diários e recarga mais rápida.",
    image: "/bateria-efb.webp",
    cardBg: "bg-[#002D5C]",
    accent: "text-[#F56504]",
  },
  {
    title: "AGM (Absorbent Glass Mat)",
    tech: "Fibra de Vidro Selada",
    vehicles: ["Start-Stop Avançado", "Caminhões Pesados", "Alta Cilindrada"],
    focus: "Máxima resistência a vibrações e suporte para altíssima demanda eletrônica. Não vaza.",
    image: "/bateria-agm.webp",
    cardBg: "bg-[#002D5C]",
    accent: "text-[#F56504]",
  }
];

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function BatteryTypes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Premium entrance stagger animation
    gsap.from(cardsRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%", // Starts before section hits the middle
      },
      y: 60,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out",
      clearProps: "all"
    });

  }, { scope: containerRef });

  return (
    <section id="baterias" className="w-full bg-zinc-50 py-24 sm:py-32" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
            A bateria exata para o <br className="hidden sm:block" />seu veículo.
          </h2>
          <p className="text-lg text-zinc-500 font-medium max-w-2xl mx-auto">
            Trabalhamos apenas com linhas originais de montadora. Escolha a tecnologia adequada para garantir a máxima durabilidade do seu sistema elétrico.
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {batteries.map((battery, idx) => (
            <div
              key={battery.title}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              className={`group relative flex flex-col rounded-[2rem] ${battery.cardBg} shadow-xl shadow-[#002D5C]/5 overflow-hidden transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(245,101,4,0.15)] border border-white/10`}
            >
              {/* Image Container with Hover Scale */}
              <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-white/10 to-transparent flex items-center justify-center p-8 overflow-hidden">
                <Image
                  src={battery.image}
                  alt={battery.title}
                  fill
                  priority
                  className="object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-110 drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-grow p-8 sm:p-10 z-10 bg-[#002D5C]">
                {/* Eyebrow Tech */}
                <div className={`text-xs font-black tracking-widest uppercase mb-3 ${battery.accent}`}>
                  {battery.tech}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-6 leading-tight">
                  {battery.title}
                </h3>

                {/* Separator */}
                <div className="w-full h-px bg-white/10 mb-8"></div>

                {/* Focus / Description */}
                <p className="text-zinc-300 text-sm leading-relaxed font-medium mb-8 flex-grow">
                  {battery.focus}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-10">
                  <h4 className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-4">Recomendado para</h4>
                  {battery.vehicles.map((v, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center`}>
                        <Check className={`w-3 h-3 ${battery.accent}`} />
                      </div>
                      <span className="text-sm font-semibold text-white/90 tracking-wide">{v}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/5513996945956?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Baterias%20Express%20e%20gostaria%20de%20saber%20o%20pre%C3%A7o%20de%20uma%20bateria%20para%20meu%20carro."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#F56504] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#F56504] shadow-[0_8px_20px_rgba(245,101,4,0.2)] hover:shadow-[0_8px_25px_rgba(255,255,255,0.4)]"
                >
                  Solicitar Agora
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
