import { ThumbsUp } from "lucide-react";
import { motion } from "motion/react";

export default function SixthFold() {
  const benefits = [
    {
      title: "Você pode falar menos e ter mais obediência",
      desc: "Seu filho vai respeitar as regras da casa logo no primeiro comando, eliminando a repetição exaustiva de ordens."
    },
    {
      title: "Você pode agir com firmeza e ter mais conexão",
      desc: "Aprenda a estabelecer limites claros sem precisar gritar ou afastar emocionalmente seu filho de você."
    },
    {
      title: "Você pode liderar seu lar e ter mais paz de espírito",
      desc: "Recupere o controle da atmosfera familiar e veja o conflito diário dar lugar a um lar estruturado e tranquilo."
    }
  ];

  return (
    <section id="sixth-fold" className="w-full bg-white text-black py-14 px-5 sm:px-8 md:px-12 select-none border-b-4 border-black">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Title: Tipo A (Montserrat ExtraBold), bold, headline size */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-montserrat font-extrabold text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-center text-black leading-tight tracking-tight max-w-2xl mb-12 uppercase"
        >
          3 Grandes Benefícios deste Método...
        </motion.h2>

        {/* 3 boxes: gray border, white background */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white border-3 border-black rounded-xl p-6 sm:p-8 flex flex-col items-center text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150"
            >
              {/* Yellow thumbs up (joia/like) emoji / icon with bold border */}
              <div className="w-12 h-12 rounded-lg bg-[#FFD700] border-2 border-black flex items-center justify-center text-black mb-5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
                <ThumbsUp className="w-6 h-6 fill-black text-black" />
              </div>

              {/* Title: Bold, Black, Tipo B (Open Sans) - Você pode... e ter... */}
              <h4 className="font-opensans font-extrabold text-sm sm:text-base md:text-lg text-black leading-tight mb-4 uppercase tracking-tight">
                {benefit.title}
              </h4>

              {/* Description: Clear and objective phrase, Black, Tipo C (Montserrat Bold) */}
              <p className="font-montserrat font-bold text-xs sm:text-sm text-gray-700 leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
