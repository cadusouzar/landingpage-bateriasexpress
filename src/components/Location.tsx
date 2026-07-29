import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Location() {
  return (
    <section id="contato" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text & Contact Info */}
          <div>
            <div className="mb-12">
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
                Sempre perto de você.
              </h2>
              <p className="text-lg text-zinc-500 font-medium max-w-lg leading-relaxed">
                Nossa loja física está estrategicamente posicionada para atender toda a região com agilidade. Venha nos visitar ou solicite nossa entrega expressa.
              </p>
            </div>
            
            <div className="space-y-8 bg-white p-8 rounded-3xl shadow-xl shadow-black/5 border border-zinc-100">
              
              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#00355E]/5">
                  <MapPin className="h-6 w-6 text-[#00355E]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-widest text-zinc-400 uppercase mb-2">Endereço</h3>
                  <p className="text-zinc-900 font-semibold text-lg leading-snug">
                    R. Guimarães Rosa, 765 - Cidade Ocian<br />
                    <span className="text-zinc-500 text-base font-medium">Praia Grande - SP, 11704-160</span>
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/bHMyaxC1rr6Xw7JB7?g_st=ic" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-sm font-bold text-[#F56504] hover:text-[#00355E] transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    Abrir no Google Maps
                  </a>
                </div>
              </div>

              <div className="w-full h-px bg-zinc-100"></div>

              {/* Hours */}
              <div className="flex items-start gap-5">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#00355E]/5">
                  <Clock className="h-6 w-6 text-[#00355E]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-widest text-zinc-400 uppercase mb-2">Horários</h3>
                  <p className="text-zinc-900 font-semibold text-lg leading-snug">
                    Todos os dias:<br />
                    <span className="text-zinc-500 text-base font-medium">08:00 às 22:00</span>
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-zinc-100"></div>

              {/* Contact */}
              <div className="flex items-start gap-5">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#00355E]/5">
                  <Phone className="h-6 w-6 text-[#00355E]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-widest text-zinc-400 uppercase mb-2">Atendimento Imediato</h3>
                  <a 
                    href="https://wa.me/5513996945956?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Baterias%20Express%20e%20gostaria%20de%20saber%20o%20pre%C3%A7o%20de%20uma%20bateria%20para%20meu%20carro." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-1 text-2xl font-black tracking-tight text-[#00355E] hover:text-[#F56504] transition-colors"
                  >
                    <WhatsAppIcon className="h-7 w-7 text-[#25D366]" />
                    (13) 99694-5956
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Map */}
          <div className="relative w-full aspect-square sm:aspect-video lg:aspect-square bg-zinc-200 rounded-[2rem] overflow-hidden shadow-2xl border border-zinc-200/50">
            <iframe 
              src="https://maps.google.com/maps?q=Baterias%20Express%20R.%20Guimar%C3%A3es%20Rosa%2C%20765%20-%20Cidade%20Ocian%2C%20Praia%20Grande%20-%20SP%2C%2011704-160&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Baterias Express"
            ></iframe>
            
            {/* Optional subtle gradient overlay to blend edges */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-[2rem]"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
