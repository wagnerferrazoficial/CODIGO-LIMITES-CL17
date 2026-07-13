import { User, Users, HeartHandshake } from "lucide-react";
import { motion } from "motion/react";

export default function FifthFold() {
  const targets = [
    {
      icon: Users,
      text: "Para pais de crianças e adolescentes que sentem que perderam a liderança e o controle da rotina do lar."
    },
    {
      icon: User,
      text: "Para homens que querem ser a maior referência de honra e caráter para seus filhos e filhas."
    },
    {
      icon: HeartHandshake,
      text: "Para famílias que vivem em constante conflito e querem restabelecer a paz, o respeito e o amor."
    }
  ];

  return (
    <section id="fifth-fold" className="w-full bg-white text-black py-14 px-5 sm:px-8 md:px-12 select-none border-b-4 border-black">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Title: Montserrat ExtraBold (Tipo A), Bold, size of headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-montserrat font-extrabold text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-center text-black leading-tight tracking-tight max-w-2xl mb-12 uppercase"
        >
          Este Treinamento Código Limite é perfeito para...
        </motion.h2>

        {/* 3 boxes with gray borders, white backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {targets.map((target, idx) => {
            const IconComp = target.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white border-3 border-black rounded-xl p-6 sm:p-8 flex flex-col items-start shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150"
              >
                {/* Yellow People Icon with bold border */}
                <div className="w-12 h-12 rounded-lg bg-[#FFD700] flex items-center justify-center text-black mb-5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <IconComp className="w-6 h-6 stroke-[2.5]" />
                </div>

                {/* Text: Tipo B (Open Sans) in black, with highlighted bold sections */}
                <p className="font-opensans font-semibold text-sm sm:text-base text-gray-800 text-left leading-relaxed">
                  {target.text.startsWith("Para ") ? (
                    <>
                      <strong className="text-black font-black underline decoration-[#FF0000] decoration-2">
                        {target.text.split(" que ")[0]}
                      </strong>
                      {" que " + target.text.split(" que ")[1]}
                    </>
                  ) : (
                    target.text
                  )}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
