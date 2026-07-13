import { CheckCircle2, ShieldCheck, CreditCard } from "lucide-react";
import { motion } from "motion/react";

interface SeventhFoldProps {
  onCtaClick: () => void;
}

export default function SeventhFold({ onCtaClick }: SeventhFoldProps) {
  return (
    <section id="checkout-fold" className="w-full bg-[#FFD700] text-black py-16 px-5 sm:px-8 md:px-12 select-none border-b-4 border-black">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Title: Black, Tipo B (Open Sans) in bold, augmented by 20% */}
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-opensans font-black text-xl sm:text-2xl md:text-3xl text-black uppercase tracking-wider text-center mb-8"
        >
          GARANTA A MELHOR OFERTA PARA VOCÊ
        </motion.h2>

        {/* Black Card stacked on top of the yellow background */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl bg-black text-white rounded-2xl p-6 sm:p-10 flex flex-col items-center shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] border-4 border-black"
        >
          {/* Sub-block yellow with black letters, bold, Tipo A (Montserrat ExtraBold) */}
          <div className="bg-[#FFD700] text-black font-montserrat font-black text-[12px] xxs:text-[14px] xs:text-[15px] sm:text-lg px-5 py-2.5 rounded-xl border-3 border-black uppercase tracking-wider whitespace-nowrap mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            ACESSO IMEDIATO
          </div>

          {/* O QUE ESTÁ INCLUÍDO: yellow color, Tipo B (Open Sans) */}
          <h3 className="font-opensans font-extrabold text-base sm:text-lg md:text-xl text-[#FFD700] uppercase tracking-wide mb-6">
            O QUE ESTÁ INCLUÍDO:
          </h3>

          {/* WhatsApp green ticket items, white text, Tipo C (Montserrat Bold) */}
          <div className="w-full max-w-md bg-neutral-950 p-5 rounded-xl border-2 border-neutral-800 mb-8 flex flex-col gap-4">
            <div className="flex items-start gap-3.5 text-left">
              {/* WhatsApp green color ticket checkmark */}
              <CheckCircle2 className="text-[#25D366] w-5 h-5 shrink-0 mt-0.5 stroke-[3]" />
              <span className="font-montserrat font-bold text-xs sm:text-sm md:text-base text-white">
                Acesso vitalício ao Treinamento Código Limite
              </span>
            </div>
            
            <div className="flex items-start gap-3.5 text-left">
              <CheckCircle2 className="text-[#25D366] w-5 h-5 shrink-0 mt-0.5 stroke-[3]" />
              <span className="font-montserrat font-bold text-xs sm:text-sm md:text-base text-white">
                Treinamento em áudio para ouvir no seu ritmo
              </span>
            </div>

            <div className="flex items-start gap-3.5 text-left">
              <CheckCircle2 className="text-[#25D366] w-5 h-5 shrink-0 mt-0.5 stroke-[3]" />
              <span className="font-montserrat font-bold text-xs sm:text-sm md:text-base text-white">
                PDF completo com passo a passo prático
              </span>
            </div>

            <div className="flex items-start gap-3.5 text-left">
              <CheckCircle2 className="text-[#25D366] w-5 h-5 shrink-0 mt-0.5 stroke-[3]" />
              <span className="font-montserrat font-bold text-xs sm:text-sm md:text-base text-white">
                Estratégias para melhorar a comunicação
              </span>
            </div>
          </div>

          {/* Value comparison */}
          <div className="text-center mb-2">
            <span className="font-opensans text-neutral-500 line-through text-xs sm:text-sm font-bold">
              De R$ 67,00
            </span>
          </div>

          {/* POR R$ 17,00 in WhatsApp Green, bold, Tipo A, massive size (+50% size increase) */}
          <div className="text-center mb-8">
            <span className="font-opensans font-black text-xs sm:text-sm text-neutral-400 block tracking-widest uppercase">
              HOJE APENAS
            </span>
            <span className="font-montserrat font-black text-5xl xxs:text-6xl sm:text-7xl md:text-8xl text-[#25D366] tracking-tight block mt-1 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
              R$ 17,00
            </span>
            <span className="font-opensans font-extrabold text-xs sm:text-sm text-[#FFD700] mt-2 block uppercase tracking-wider">
              Pagamento único • Sem mensalidades
            </span>
          </div>

          {/* Yellow Rectangle Button: CLIQUE AQUI PARA LIBERAR SEU ACESSO, Tipo B (Open Sans) */}
          <button
            onClick={onCtaClick}
            id="cta-button-seventh"
            className="w-full bg-[#FFD700] hover:bg-[#FFE033] text-black font-opensans font-extrabold text-[14px] xs:text-[16px] sm:text-[18px] md:text-xl py-4.5 px-6 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 cursor-pointer uppercase"
          >
            {/* Exactly two lines on mobile, single line or two on desktop */}
            <span className="block sm:hidden leading-tight">
              CLIQUE AQUI<br />PARA LIBERAR SEU ACESSO
            </span>
            <span className="hidden sm:block">
              CLIQUE AQUI PARA LIBERAR SEU ACESSO
            </span>
          </button>

          {/* Payment badges & details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-neutral-400 text-xs font-opensans font-bold">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#25D366]" />
              <span>Garantia de 7 Dias Incondicional</span>
            </div>
            <div className="hidden sm:block text-neutral-700">•</div>
            <div className="flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-[#FFD700]" />
              <span>Acesso Imediato Liberado</span>
            </div>
          </div>

        </motion.div>

        {/* Double Guarantee section under checkout card */}
        <div className="w-full max-w-xl bg-white border-4 border-black rounded-xl p-6 sm:p-8 mt-10 text-left shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h4 className="font-montserrat font-black text-base sm:text-lg md:text-xl text-black uppercase tracking-tight mb-4 flex items-center gap-2">
            🛡️ GARANTIA DUPLA DE SATISFAÇÃO
          </h4>
          <div className="space-y-4 font-opensans text-sm sm:text-base text-gray-800">
            <p className="leading-relaxed">
              <strong>✔ 7 dias incondicional:</strong> Se por qualquer motivo você não gostar do conteúdo ou achar que não é para você, basta nos enviar um e-mail em até 7 dias e devolveremos 100% do seu dinheiro. Sem perguntas.
            </p>
            <p className="leading-relaxed">
              <strong>✔ 90 dias condicional:</strong> Se você aplicar o método passo a passo durante 90 dias e não ver nenhuma mudança prática no respeito do seu filho dentro de casa, basta falar conosco. Nós devolvemos todo o seu valor investido. O risco é todo nosso.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
