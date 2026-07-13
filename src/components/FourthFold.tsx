import { CheckSquare2 } from "lucide-react";
import { motion } from "motion/react";

export default function FourthFold() {
  const points = [
    {
      text: "Como se impor de forma firme e silenciosa, de modo que seu filho te escute ",
      underlined: "na primeira vez que você falar",
      suffix: "."
    },
    {
      text: "Como desarmar a pirraça, a ironia e a rebeldia sem precisar ",
      underlined: "gritar, brigar ou se desgastar emocionalmente",
      suffix: "."
    },
    {
      text: "O passo a passo prático para transformar a atmosfera do seu lar em um ambiente de ",
      underlined: "paz, honra e respeito mútuo",
      suffix: "."
    }
  ];

  return (
    <section id="fourth-fold" className="w-full bg-black text-white py-14 px-5 sm:px-8 md:px-12 select-none border-b-4 border-black">
      <div className="max-w-3xl mx-auto">
        
        {/* Title: Yellow, bold, subheadline size, Open Sans (Tipo B), Capitalize only first letter */}
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-opensans font-extrabold text-xl sm:text-2xl md:text-3xl text-center text-[#FFD700] mb-10 uppercase tracking-tight"
        >
          Ao concluir o Treinamento você vai saber:
        </motion.h3>

        {/* Tickets styled as distinct bordered boxes in neo-brutalist theme */}
        <div className="flex flex-col gap-5">
          {points.map((pt, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="w-full bg-neutral-950 border-3 border-[#FFD700] rounded-xl p-6 sm:p-8 shadow-[4px_4px_0px_0px_rgba(255,215,0,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(255,215,0,0.3)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-150"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                {/* Yellow Validated Ticket design */}
                <div className="text-[#FFD700] shrink-0 mt-0.5 bg-black p-1.5 border border-[#FFD700] rounded-lg">
                  <CheckSquare2 className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
                </div>

                {/* Description: White, Tipo C (Montserrat Bold) */}
                <div className="font-montserrat font-bold text-sm sm:text-base md:text-lg text-white leading-relaxed text-left">
                  {pt.text}
                  <span className="underline decoration-[#FFD700] decoration-2 font-black text-[#FFD700]">
                    {pt.underlined}
                  </span>
                  {pt.suffix}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
