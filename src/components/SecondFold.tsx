import { BookOpen, CheckCircle, Smartphone } from "lucide-react";
import { motion } from "motion/react";
// @ts-ignore
import mockupImg from "../assets/images/conteudo_mockup_1782921467506.jpg";

interface SecondFoldProps {
  onCtaClick: () => void;
}

export default function SecondFold({ onCtaClick }: SecondFoldProps) {
  return (
    <section id="second-fold" className="w-full bg-black text-white py-14 px-5 sm:px-8 md:px-12 select-none border-b-4 border-black">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* PRESENTATION OF THE METHOD (Apresentação do Método) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 max-w-2xl"
        >
          <span className="bg-[#FFD700] text-black text-xs font-black uppercase tracking-widest font-montserrat px-3 py-1.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
            MÉTODO EXCLUSIVO
          </span>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl mt-4 tracking-tight text-[#FFD700] uppercase">
            🧠 CÓDIGO LIMITE
          </h2>
          <p className="font-opensans font-bold text-base sm:text-lg md:text-xl text-neutral-300 mt-4 leading-relaxed">
            Um treinamento prático para pais que querem reduzir conflitos, parar de repetir tudo várias vezes e construir uma rotina com mais cooperação dentro de casa.
          </p>
          <p className="font-opensans font-extrabold text-sm sm:text-base md:text-lg text-white mt-4 uppercase tracking-wide bg-[#FF0000]/20 border border-red-600 py-2.5 px-4 rounded-xl">
            Aprenda estratégias simples para aplicar no dia a dia e fortalecer sua autoridade como pai ou mãe sem precisar recorrer aos gritos.
          </p>
        </motion.div>

        {/* Product Mockup Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="w-full max-w-xl mb-10 border-4 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(255,215,0,1)] bg-neutral-900"
        >
          <img 
            src={mockupImg} 
            alt="Código Limite - Mockup Oficial" 
            className="w-full h-auto object-cover select-none"
            referrerPolicy="no-referrer"
          />
          <div className="bg-neutral-950 p-3.5 border-t-2 border-black flex items-center justify-between text-xs font-montserrat">
            <span className="font-extrabold text-[#FFD700] uppercase tracking-wider flex items-center gap-1.5">
              🎧 TREINAMENTO EM ÁUDIO + 📘 PDF DIGITAL
            </span>
            <span className="bg-[#25D366] text-black font-black px-2 py-0.5 rounded text-[10px]">
              ACESSO IMEDIATO
            </span>
          </div>
        </motion.div>

        {/* PRICE BLOCK / CONTAINER (O Bloco com o preço do produto) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl bg-neutral-950 border-4 border-[#FFD700] rounded-2xl p-6 sm:p-8 flex flex-col items-center shadow-[8px_8px_0px_0px_rgba(255,215,0,0.3)] relative overflow-hidden"
        >
          {/* Yellow Badge: ACESSO IMEDIATO (Must be in exactly one line on mobile) */}
          <div className="bg-[#FFD700] text-black font-montserrat font-black text-[13px] xxs:text-[14px] xs:text-[15px] sm:text-lg px-4 py-2 border-3 border-black rounded-xl uppercase tracking-wider whitespace-nowrap mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            ACESSO IMEDIATO
          </div>

          {/* O QUE ESTÁ INCLUÍDO (In yellow, bold, Montserrat ExtraBold - Tipo A) */}
          <h4 className="font-montserrat font-black text-lg sm:text-xl md:text-2xl text-[#FFD700] uppercase tracking-wide mb-4">
            VOCÊ RECEBE:
          </h4>

          {/* Included item details: smaller size, white, regular Montserrat (Tipo C) */}
          <div className="flex flex-col gap-3.5 w-full max-w-md bg-black/80 p-5 rounded-xl border-2 border-neutral-800 mb-6">
            <div className="flex items-center gap-3 text-left">
              <CheckCircle className="text-[#FFD700] w-5 h-5 shrink-0 stroke-[2.5]" />
              <span className="font-montserrat font-bold text-[12px] sm:text-[14px] text-white leading-tight">
                Treinamento em áudio para ouvir no seu ritmo
              </span>
            </div>
            <div className="flex items-center gap-3 text-left">
              <CheckCircle className="text-[#FFD700] w-5 h-5 shrink-0 stroke-[2.5]" />
              <span className="font-montserrat font-bold text-[12px] sm:text-[14px] text-white leading-tight">
                PDF completo com passo a passo prático
              </span>
            </div>
            <div className="flex items-center gap-3 text-left">
              <CheckCircle className="text-[#FFD700] w-5 h-5 shrink-0 stroke-[2.5]" />
              <span className="font-montserrat font-bold text-[12px] sm:text-[14px] text-white leading-tight">
                Estratégias para melhorar a comunicação
              </span>
            </div>
            <div className="flex items-center gap-3 text-left">
              <CheckCircle className="text-[#FFD700] w-5 h-5 shrink-0 stroke-[2.5]" />
              <span className="font-montserrat font-bold text-[12px] sm:text-[14px] text-white leading-tight">
                Acesso imediato ao material completo
              </span>
            </div>
          </div>

          {/* Value comparison (Urgency pricing) */}
          <div className="text-center mb-3">
            <span className="font-opensans font-bold text-sm text-neutral-500 line-through mr-3">
              De R$ 67,00
            </span>
            <span className="font-opensans font-black text-xs sm:text-sm text-white bg-[#FF0000] px-3 py-1 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider">
              DESCONTO ESPECIAL HOJE
            </span>
          </div>

          {/* Price: WhatsApp Green, bold, Montserrat ExtraBold, 50% larger */}
          <div className="text-center mb-6">
            <p className="font-opensans font-black text-xs sm:text-sm text-neutral-400 uppercase tracking-widest">
              POR APENAS
            </p>
            <p className="font-montserrat font-black text-5xl xxs:text-6xl sm:text-7xl md:text-8xl text-[#25D366] tracking-tight mt-1 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
              R$ 17,00
            </p>
            <p className="font-opensans font-extrabold text-[11px] sm:text-xs text-[#FFD700] mt-1 uppercase tracking-widest">
              Acesso vitalício • Pagamento único
            </p>
          </div>

          {/* CTA Yellow Button: CLIQUE AQUI PARA LIBERAR SEU ACESSO */}
          <button
            onClick={onCtaClick}
            id="cta-button-second"
            className="w-full bg-[#FFD700] hover:bg-[#FFE033] text-black font-montserrat font-black text-[14px] xs:text-[16px] sm:text-[18px] md:text-xl py-4.5 px-6 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 cursor-pointer uppercase"
          >
            {/* Exactly two lines on mobile */}
            <span className="block sm:hidden leading-tight">
              CLIQUE AQUI<br />PARA LIBERAR SEU ACESSO
            </span>
            <span className="hidden sm:block">
              CLIQUE AQUI PARA LIBERAR SEU ACESSO
            </span>
          </button>
          
          <p className="text-[10px] sm:text-[11px] text-neutral-400 font-opensans mt-4 uppercase tracking-widest font-bold flex items-center gap-1.5">
            🔒 Compra 100% segura e garantida
          </p>

        </motion.div>

      </div>
    </section>
  );
}
