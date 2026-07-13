import { Award } from "lucide-react";
import { motion } from "motion/react";

export default function Biography() {
  return (
    <section id="biography" className="w-full bg-black text-white py-14 px-5 sm:px-8 md:px-12 border-b-4 border-black select-none">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        
        {/* Intro statement (yellow, bold, standard caps, Open Sans Tipo B, authority booster) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-2 text-[#FFD700] mb-3">
            <Award className="w-5 h-5 shrink-0 stroke-[2.5]" />
            <span className="font-montserrat font-extrabold text-xs uppercase tracking-widest bg-red-600 text-white px-3 py-1 border border-black shadow-[2px_2px_0px_0px_rgba(255,215,0,1)]">AUTORIDADE E EXPERIÊNCIA</span>
          </div>
          <p className="font-opensans font-extrabold text-lg sm:text-xl md:text-2xl text-[#FFD700] leading-relaxed max-w-xl mx-auto uppercase tracking-tight">
            Aprenda agora com quem já transformou centenas de lares, através de um método prático que tem impactado famílias por todo o Brasil.
          </p>
        </motion.div>

        {/* Biography Photo (35% of page width on mobile, standard image, customized for beauty) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-[38%] sm:w-[32%] max-w-[240px] aspect-square rounded-2xl overflow-hidden border-4 border-[#FFD700] shadow-[6px_6px_0px_0px_rgba(255,255,255,0.25)] mb-8 shrink-0 relative"
        >
          <img 
            src="https://i.postimg.cc/Zq8Rp6nF/LAYTOUT-CRIATIVOS-FEED.png" 
            alt="Wagner & Katia Ferraz" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Biography Text (White text, black background, 3 paragraphs, 700-1000 characters, Tipo B Open Sans, specific bolds) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="space-y-6 text-left max-w-2xl font-opensans text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed border-t-2 border-neutral-800 pt-6"
        >
          {/* Paragraph 1 */}
          <p>
            <strong>Wagner Ferraz e Katia Ferraz são pastores, escritores e especialistas em formação familiar</strong>, dedicados há mais de duas décadas a restaurar, fortalecer e estruturar lares. Wagner é <strong>1º Sargento da Polícia Militar de Rondônia</strong>, evangelista e autor de <em>Paternidade com Propósito</em>, ensinando como homens devem assumir seu papel com <strong>liderança, disciplina e responsabilidade</strong> dentro do lar.
          </p>

          {/* Paragraph 2 */}
          <p>
            <strong>Katia Ferraz é pastora, mãe e autora de Mesa com Propósito</strong>, atuando no desenvolvimento emocional e espiritual de famílias, ensinando a transformar o ambiente do lar em um espaço de <strong>conexão, amor e alinhamento de valores</strong> eternos.
          </p>

          {/* Paragraph 3 */}
          <p>
            Pais de 3 filhos, vivem aquilo que comunicam. Já mentoraram centenas de casais e pais pelo Brasil. <strong>DESISTIR NÃO PODE SER A ÚNICA OPÇÃO DE UM PAI!</strong> É hora de construir um lar forte e blindado.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
