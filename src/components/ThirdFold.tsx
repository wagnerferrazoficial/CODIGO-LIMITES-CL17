import { Book, CheckSquare, Gift, HelpCircle, Layers, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export default function ThirdFold() {
  const bonuses = [
    {
      title: "🎁 Código Âncora",
      desc: "Como moldar o comportamento correto em casa, na escola e na igreja.",
      icon: CheckSquare,
    },
    {
      title: "🎁 Código Norte",
      desc: "Direção clara para guiar o futuro e o propósito do seu filho.",
      icon: Layers,
    },
    {
      title: "🎁 Código Vínculo",
      desc: "Como estabelecer uma conexão emocional forte e indestrutível.",
      icon: MessageSquare,
    },
    {
      title: "🎁 Código Respeito",
      desc: "Técnicas para estabelecer paz dentro de casa sem gritaria ou estresse.",
      icon: Book,
    },
    {
      title: "🎁 Código Recomeço",
      desc: "Como resolver brigas rapidamente e restabelecer a conexão imediata.",
      icon: HelpCircle,
    },
    {
      title: "🎁 Código Valor",
      desc: "Como gerar menos reclamação diária e cultivar muito mais gratidão.",
      icon: Gift,
    },
  ];

  return (
    <section id="third-fold" className="w-full bg-white text-black py-14 px-5 sm:px-8 md:px-12 select-none border-b-4 border-black">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Title: Montserrat ExtraBold (Tipo A), Black, Only first letter capitalized, headline size */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-montserrat font-extrabold text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-center text-black leading-tight tracking-tight max-w-2xl"
        >
          O que você vai aprender no Treinamento Completo em Áudio e PDF:
        </motion.h2>

        {/* Description: Open Sans (Tipo B), size of subheadline, black, most important part underlined */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-opensans font-normal text-sm xs:text-base sm:text-lg md:text-xl text-gray-800 text-center mt-6 max-w-3xl leading-relaxed"
        >
          Você receberá acesso a um método simples de escuta ativa e mudança comportamental rápida, planejado de forma que você consiga <span className="underline decoration-[#FF0000] decoration-2 font-bold text-black">recuperar a autoridade dentro da sua própria casa sem precisar gritar</span> ou brigar.
        </motion.p>

        {/* Deliverables representation - styled with bold borders and hard offsets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-2xl mt-10">
          <div className="bg-white p-5 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-start gap-3">
            <span className="text-2xl">🎧</span>
            <div>
              <h4 className="font-montserrat font-extrabold text-sm sm:text-base text-gray-950 uppercase tracking-tight">Áudios simples</h4>
              <p className="font-opensans text-xs sm:text-sm text-gray-700 mt-1 font-medium">Feitos para ouvir direto no celular na correria do dia a dia.</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-start gap-3">
            <span className="text-2xl">📘</span>
            <div>
              <h4 className="font-montserrat font-extrabold text-sm sm:text-base text-gray-950 uppercase tracking-tight">PDF direto e prático</h4>
              <p className="font-opensans text-xs sm:text-sm text-gray-700 mt-1 font-medium">Mapas mentais e checklists para consulta rápida no WhatsApp.</p>
            </div>
          </div>
        </div>

        {/* Visual Header for the 6 bonuses */}
        <div className="w-full max-w-3xl mt-16 pt-10 border-t-3 border-black">
          <div className="text-center mb-10">
            <span className="bg-black text-[#FFD700] text-xs font-black px-4 py-2 border-2 border-black rounded-lg uppercase tracking-wider font-montserrat shadow-[3px_3px_0px_0px_rgba(255,0,0,1)]">
              PRESENTE EXCLUSIVO
            </span>
            <h3 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-black mt-4 uppercase">
              🎁 E MAIS 6 BÔNUS (ACESSO COMPLETO)
            </h3>
            <p className="font-opensans font-bold text-sm sm:text-base text-gray-700 mt-2">
              Você não recebe só o Código Limite. Você recebe o sistema completo:
            </p>
          </div>

          {/* Bonus List - stylized card with sharp borders and hard shadows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {bonuses.map((bonus, idx) => {
              const IconComp = bonus.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  className="bg-white p-5 rounded-xl border-2 border-black text-left shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FFD700] border-2 border-black flex items-center justify-center text-black mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <IconComp className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <h4 className="font-montserrat font-extrabold text-sm sm:text-base text-gray-950 uppercase tracking-tight">
                    {bonus.title}
                  </h4>
                  <p className="font-opensans font-semibold text-xs sm:text-sm text-gray-700 mt-2 leading-relaxed">
                    {bonus.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
