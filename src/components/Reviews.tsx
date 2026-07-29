"use client";

import { useEffect, useRef } from "react";

export function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    // Prevent injecting multiple times during re-renders or React Strict Mode
    if (containerRef.current.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = "https://cdn.trustindex.io/loader.js?5ef912e77905983a8616a9d825a";
    script.async = true;
    script.defer = true;
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <section id="avaliacoes" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-zinc-500 font-medium max-w-2xl mx-auto">
            A satisfação e a confiança de quem já precisou da Baterias Express.
          </p>
        </div>

        {/* Trustindex Widget Container */}
        <div className="w-full relative min-h-[400px] flex items-center justify-center" ref={containerRef}>
          {/* The Trustindex script will be injected here automatically */}
        </div>
        
      </div>
    </section>
  );
}
