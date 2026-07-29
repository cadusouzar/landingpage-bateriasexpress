import { LoopVideo } from "@/components/ui/LoopVideo";
import { MessageCircle, Timer, Wrench, Zap } from "lucide-react";

export function FastDelivery() {
  return (
    <section id="entrega" className="relative overflow-hidden bg-[#F6F8F5] py-20 lg:py-32 text-zinc-900">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <div className="max-w-xl relative z-10">
          <div className="mb-4 text-xs font-bold tracking-[0.25em] text-[#F56504] uppercase">
            Bateria Express
          </div>

          <h2 className="mb-6 text-4xl sm:text-5xl font-black tracking-tighter leading-[1.1]">
            Entrega Rápida e <br className="hidden sm:block" />
            <span className="text-[#F56504]">Instalação Gratuita</span>
          </h2>

          <p className="mb-10 text-lg leading-relaxed text-zinc-600 font-medium">
            Sabemos que imprevistos com a bateria não têm hora para acontecer. Por isso, nossa equipe está sempre de prontidão para salvar o seu dia o mais rápido possível.
          </p>

          <div className="relative">
            {/* Linha vertical da timeline */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-zinc-200" />

            <div className="space-y-8 relative z-10">
              {/* Passo 1 */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border-2 border-zinc-200 text-zinc-500 shadow-sm transition-colors duration-300 hover:border-[#F56504] hover:text-[#F56504]">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div className="pt-2.5">
                  <h3 className="text-xl font-bold mb-1 text-zinc-900">1. Contato Rápido</h3>
                  <p className="text-zinc-600 leading-relaxed">Basta chamar no WhatsApp. Identificamos o modelo exato para o seu carro na mesma hora.</p>
                </div>
              </div>

              {/* Passo 2 */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border-2 border-zinc-200 text-zinc-500 shadow-sm transition-colors duration-300 hover:border-[#F56504] hover:text-[#F56504]">
                  <Timer className="h-5 w-5" />
                </div>
                <div className="pt-2.5">
                  <h3 className="text-xl font-bold mb-1 text-zinc-900">2. Chegamos em até 60 minutos</h3>
                  <p className="text-zinc-600 leading-relaxed">Nossa equipe sai imediatamente para garantir a entrega em tempo recorde onde você estiver.</p>
                </div>
              </div>

              {/* Passo 3 */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border-2 border-zinc-200 text-zinc-500 shadow-sm transition-colors duration-300 hover:border-[#F56504] hover:text-[#F56504]">
                  <Wrench className="h-5 w-5" />
                </div>
                <div className="pt-2.5">
                  <h3 className="text-xl font-bold mb-1 text-zinc-900">3. Instalação Gratuita</h3>
                  <p className="text-zinc-600 leading-relaxed">Nossos especialistas realizam a troca de forma rápida, segura e sem nenhum custo adicional.</p>
                </div>
              </div>

              {/* Passo 4 */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F56504] text-white shadow-md shadow-[#F56504]/30 border-2 border-[#F56504]">
                  <Zap className="h-5 w-5 fill-current" />
                </div>
                <div className="pt-2.5">
                  <h3 className="text-xl font-bold mb-1 text-zinc-900">4. Pronto para rodar!</h3>
                  <p className="text-zinc-600 leading-relaxed">Testamos o sistema elétrico do seu veículo para garantir que você siga viagem com segurança.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visuals & Payments Column */}
        <div className="flex flex-col gap-4 w-full relative z-10 lg:mt-0">
          {/* Animation Card */}
          <div className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/3] flex items-center justify-center p-2 sm:p-8 group">
            <LoopVideo
              frameCount={140}
              framePrefix="/motoboy_frames/frame_"
              fps={30}
              pingPong={false}
              loopEnd={125}
              loopStart={60}
              className="w-[110%] sm:w-[120%] object-contain mix-blend-multiply relative z-10"
            />
          </div>

          {/* Payment Methods Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-zinc-200/60 flex flex-col xl:flex-row items-center justify-between gap-6">
            <div className="text-center xl:text-left">
              <h4 className="font-bold text-zinc-900 text-lg leading-tight">Pagamento Facilitado</h4>
              <p className="text-sm text-zinc-600 mt-1">Parcelamos em até <strong className="text-[#F56504]">6x sem juros</strong></p>
            </div>

            {/* Flags */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <div className="bg-[#1434CB] rounded px-3 py-1.5 flex items-center justify-center shadow-sm">
                <span className="text-white font-bold italic text-xs tracking-wider">VISA</span>
              </div>

              <div className="bg-zinc-900 rounded px-3 py-1.5 flex items-center justify-center shadow-sm">
                <div className="w-3.5 h-3.5 rounded-full bg-[#EB001B] -mr-1.5 z-10 opacity-90" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#F79E1B] z-0 opacity-90" />
              </div>

              <div className="bg-zinc-900 rounded px-3 py-1.5 flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-xs tracking-wider lowercase">elo</span>
              </div>

              <div className="bg-[#32BCAD]/10 rounded px-3 py-1.5 flex items-center justify-center border border-[#32BCAD]/20 shadow-sm">
                <span className="text-[#0E9B8D] font-bold text-xs">PIX</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
