"use client";

import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Registra o plugin apenas no client-side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

export function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      // Usa o GSAP para forçar uma animação de deslize suave que nenhum navegador pode ignorar
      gsap.to(window, {
        duration: 1.2, // 1.2 segundos de animação
        scrollTo: { y: elem, offsetY: 112 },
        ease: "power3.inOut"
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 h-28 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Baterias Express"
            width={350}
            height={95}
            className="h-20 sm:h-24 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="flex items-center gap-6 lg:gap-8">
          <div className="hidden md:flex items-center gap-5 lg:gap-8 text-sm font-bold text-zinc-500 uppercase tracking-wide">
            <a href="#inicio" onClick={handleScroll} className="hover:text-[#F56504] transition-colors">Início</a>
            <a href="#entrega" onClick={handleScroll} className="hover:text-[#F56504] transition-colors">Entrega</a>
            <a href="#baterias" onClick={handleScroll} className="hover:text-[#F56504] transition-colors">Modelos</a>
            <a href="#avaliacoes" onClick={handleScroll} className="hover:text-[#F56504] transition-colors">Avaliações</a>
            <a href="#contato" onClick={handleScroll} className="hover:text-[#F56504] transition-colors">Localização</a>
          </div>
          <a
            href="https://wa.me/5513996945956?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Baterias%20Express%20e%20gostaria%20de%20saber%20o%20pre%C3%A7o%20de%20uma%20bateria%20para%20meu%20carro."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-base font-bold text-white shadow-md transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
          >
            <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            Fale Conosco
          </a>
        </nav>
      </div>
    </header>
  );
}
