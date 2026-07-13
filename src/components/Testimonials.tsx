import { motion } from "motion/react";
import { 
  Heart, 
  ThumbsUp, 
  Check, 
  CheckCheck, 
  MoreVertical, 
  Phone, 
  Video, 
  ArrowLeft,
  Smile,
  Paperclip,
  Mic,
  Camera,
  MessageCircle,
  Bookmark,
  Send,
  UserCheck
} from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-[#FAF9F6] text-black py-16 px-5 sm:px-8 md:px-12 border-b-4 border-black select-none overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header tailored for Cold Traffic Direct Response */}
        <div className="text-center mb-12">
          <span className="bg-[#FF0000] text-white text-xs font-black uppercase tracking-widest font-montserrat px-3.5 py-1.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            PROVA SOCIAL REAL
          </span>
          <h2 className="font-montserrat font-extrabold text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-black mt-6 leading-tight tracking-tight max-w-3xl mx-auto uppercase">
            Famílias restauradas por todo o Brasil
          </h2>
          <p className="font-opensans font-bold text-sm sm:text-base md:text-lg text-gray-700 mt-4 max-w-2xl mx-auto leading-relaxed">
            Veja os prints reais de conversas e comentários de pais que cansaram de gritar e aplicaram o <span className="underline decoration-[#FF0000] decoration-2 font-black text-black">Código Limite</span> em suas casas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. WHATSAPP CONVERSATION - Carlos Eduardo (SP) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col border-4 border-black bg-[#E5DDD5] rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] h-[440px] md:h-[460px]"
          >
            {/* WhatsApp Header */}
            <div className="bg-[#075E54] text-white px-3.5 py-2.5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4 text-white stroke-[2.5]" />
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" 
                    alt="Carlos Eduardo" 
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 rounded-full object-cover border border-white"
                  />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] rounded-full border border-white"></div>
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight">Carlos Eduardo (SP)</h4>
                  <span className="text-[10px] text-emerald-100 font-semibold block">online</span>
                </div>
              </div>
              <div className="flex items-center gap-3.5 text-white/90">
                <Video className="w-4.5 h-4.5 fill-current" />
                <Phone className="w-4 h-4 fill-current" />
                <MoreVertical className="w-4 h-4" />
              </div>
            </div>

            {/* WhatsApp Chat Body */}
            <div className="flex-1 p-3.5 overflow-y-auto space-y-3.5 flex flex-col justify-end bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
              
              {/* Message from Carlos */}
              <div className="bg-white text-black p-3 rounded-lg rounded-tl-none max-w-[85%] self-start shadow-sm border border-neutral-200 text-xs sm:text-[13px] relative leading-relaxed font-medium">
                <p className="text-gray-800">
                  Pastor Wagner, de verdade... apliquei o Código Limite ontem à noite. Meu filho de 14 anos limpou a louça e arrumou o quarto sem eu precisar dar um único grito. 
                </p>
                <p className="mt-1 text-gray-800">
                  Parecia até mentira! Estávamos em guerra aqui em casa todos os dias. O treinamento em áudio abriu minha mente. Valeu cada centavo investido.
                </p>
                <div className="text-right text-[9px] text-gray-400 mt-1 font-bold">19:42</div>
              </div>

              {/* Reply message from Admin / Wagner */}
              <div className="bg-[#DCF8C6] text-black p-3 rounded-lg rounded-tr-none max-w-[85%] self-end shadow-sm border border-[#cbe4b7] text-xs sm:text-[13px] relative leading-relaxed font-medium">
                <p className="text-gray-800">
                  Que benção, Carlos! Fico extremamente feliz. O Código Limite funciona exatamente por isso: mexe com o respeito e autoridade, não com punição. Continua firme! 🙌
                </p>
                <div className="text-right text-[9px] text-gray-500 mt-1 font-bold flex items-center justify-end gap-0.5">
                  19:45 <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1]" />
                </div>
              </div>

            </div>

            {/* WhatsApp Footer */}
            <div className="bg-[#f0f0f0] p-2.5 flex items-center gap-2 border-t border-neutral-200 shrink-0">
              <Smile className="w-5 h-5 text-gray-500" />
              <div className="flex-1 bg-white rounded-full px-3 py-1.5 flex items-center justify-between border border-neutral-300">
                <span className="text-xs text-gray-400 font-semibold">Mensagem</span>
                <Paperclip className="w-4 h-4 text-gray-400" />
              </div>
              <div className="w-9 h-9 rounded-full bg-[#075E54] flex items-center justify-center text-white shrink-0 shadow-sm">
                <Mic className="w-4.5 h-4.5" />
              </div>
            </div>
          </motion.div>

          {/* 2. INSTAGRAM DIRECT MESSAGE - Mariana Santos (MG) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col border-4 border-black bg-white rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] h-[440px] md:h-[460px]"
          >
            {/* Instagram DM Header */}
            <div className="bg-white border-b border-neutral-100 px-3.5 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <ArrowLeft className="w-5 h-5 text-black stroke-[2.5]" />
                <div className="relative w-8.5 h-8.5 rounded-full p-[1.5px] bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" 
                    alt="Mariana Santos" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full rounded-full object-cover border border-white"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-xs leading-tight text-neutral-900 flex items-center gap-0.5">
                    mariana_santos_ <span className="w-3 h-3 bg-sky-500 rounded-full inline-flex items-center justify-center text-[7px] text-white font-bold">✓</span>
                  </h4>
                  <span className="text-[10px] text-gray-400 font-semibold block">Mariana Santos • MG</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-neutral-800">
                <Phone className="w-4.5 h-4.5" />
                <Video className="w-5 h-5" />
              </div>
            </div>

            {/* Instagram DM Chat Body */}
            <div className="flex-1 p-3.5 overflow-y-auto space-y-4 flex flex-col justify-end bg-neutral-50">
              
              {/* Text from Mariana */}
              <div className="flex items-start gap-2 max-w-[85%] self-start">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" 
                  alt="Mariana" 
                  referrerPolicy="no-referrer"
                  className="w-6.5 h-6.5 rounded-full object-cover mt-1 shrink-0"
                />
                <div className="bg-[#EFEFEF] text-black p-3 rounded-2xl rounded-tl-none text-xs sm:text-[13px] leading-relaxed font-semibold">
                  Sargento Wagner, preciso te dar esse testemunho! Meu filho de 12 anos simplesmente andava me respondendo muito mal, batendo portas e não me ouvia de jeito nenhum. Parecia que eu não tinha autoridade nenhuma.
                </div>
              </div>

              {/* Second consecutive bubble from Mariana */}
              <div className="bg-[#EFEFEF] text-black p-3 rounded-2xl max-w-[85%] self-start ml-8.5 text-xs sm:text-[13px] leading-relaxed font-semibold">
                Estudei o PDF ontem à tarde e apliquei as técnicas de alinhamento de honra hoje cedo. Ele veio, me pediu desculpas espontaneamente por ter gritado na semana passada e me abraçou. Estou chorando de alívio. Esse treinamento salvou nossa paz! 🙏😭
              </div>

              {/* Reply message from Wagner */}
              <div className="bg-[#3797F0] text-white p-3 rounded-2xl rounded-tr-none max-w-[85%] self-end text-xs sm:text-[13px] leading-relaxed font-bold">
                Glória a Deus, Mariana! O coração de um filho é terra fértil quando sabemos ativar o gatilho da honra. Parabéns pelo seu posicionamento como mãe!
              </div>

            </div>

            {/* Instagram Footer */}
            <div className="bg-white p-3 border-t border-neutral-100 flex items-center justify-between shrink-0">
              <div className="flex-1 flex items-center gap-2 bg-neutral-100 rounded-full px-3.5 py-2 border border-neutral-200">
                <Camera className="w-4.5 h-4.5 text-neutral-600" />
                <span className="text-xs text-neutral-400 font-semibold flex-1">Enviar mensagem...</span>
                <Mic className="w-4 h-4 text-neutral-600" />
              </div>
            </div>
          </motion.div>

          {/* 3. WHATSAPP MENTORSHIP GROUP PRINT - Ana Paula (CE) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col border-4 border-black bg-[#E5DDD5] rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] h-[440px] md:h-[460px]"
          >
            {/* WhatsApp Group Header */}
            <div className="bg-[#075E54] text-white px-3.5 py-2.5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4 text-white stroke-[2.5]" />
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-emerald-800 border border-white flex items-center justify-center text-xs font-black font-montserrat">
                    CL 🛡️
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-xs leading-tight">Grupo Código Limite #04</h4>
                  <span className="text-[9px] text-emerald-100 font-bold block truncate max-w-[160px]">Ana, Wagner, Katia, Roberto...</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/95">
                <Video className="w-4.5 h-4.5 fill-current" />
                <Phone className="w-4.5 h-4.5 fill-current" />
              </div>
            </div>

            {/* WhatsApp Chat Body */}
            <div className="flex-1 p-3 overflow-y-auto space-y-3 flex flex-col justify-end bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
              
              {/* Message from another participant */}
              <div className="bg-white text-black p-2.5 rounded-lg max-w-[85%] self-start shadow-sm border border-neutral-200 text-xs relative leading-normal font-medium">
                <span className="text-[10px] font-black text-rose-500 block mb-0.5">Roberto Souza (PR)</span>
                <p className="text-gray-800">Isso é pura verdade, gente. O respeito mudou completamente.</p>
              </div>

              {/* Main Testimonial message from Ana Paula (CE) */}
              <div className="bg-white text-black p-3 rounded-lg rounded-tl-none max-w-[85%] self-start shadow-sm border border-neutral-200 text-xs sm:text-[13px] relative leading-relaxed font-medium">
                <span className="text-[10px] font-black text-emerald-600 block mb-1">Ana Paula Costa (CE)</span>
                <p className="text-gray-800">
                  Gente, confesso que comprei o Código Limite meio desconfiada por ser tão barato (R$ 17 reais achei que seria enrolação). 
                </p>
                <p className="mt-1.5 text-gray-800">
                  Fui muito surpreendida! O PDF é direto ao ponto e os áudios parecem uma conversa cara a cara com a gente. Mudou completamente a dinâmica com meus dois filhos adolescentes aqui no Ceará. Não temos mais gritaria e discussões infinitas. Eles agora compreendem o respeito à autoridade.
                </p>
                <div className="text-right text-[9px] text-gray-400 mt-1 font-bold">14:11</div>
              </div>

              {/* Admin response */}
              <div className="bg-[#DCF8C6] text-black p-2.5 rounded-lg rounded-tr-none max-w-[85%] self-end shadow-sm border border-[#cbe4b7] text-xs relative leading-normal font-medium">
                <span className="text-[10px] font-black text-emerald-700 block mb-0.5">Pra. Katia Ferraz</span>
                <p className="text-gray-800">Amém, Ana Paula! Que vitória maravilhosa! Glória ao Senhor por esse testemunho. 🔥🙏</p>
                <div className="text-right text-[9px] text-gray-500 mt-0.5 font-bold flex items-center justify-end gap-0.5">
                  14:14 <CheckCheck className="w-3 h-3 text-[#34B7F1]" />
                </div>
              </div>

            </div>

            {/* WhatsApp Footer */}
            <div className="bg-[#f0f0f0] p-2 flex items-center gap-1.5 border-t border-neutral-200 shrink-0">
              <Smile className="w-5 h-5 text-gray-500" />
              <div className="flex-1 bg-white rounded-full px-3 py-1 flex items-center justify-between border border-neutral-300">
                <span className="text-xs text-gray-400 font-bold">Mensagem</span>
              </div>
              <div className="w-8.5 h-8.5 rounded-full bg-[#075E54] flex items-center justify-center text-white shrink-0">
                <Mic className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          {/* 4. YOUTUBE COMMENT - Júlio César (RS) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col border-4 border-black bg-white rounded-2xl p-4.5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] h-[440px] md:h-[460px] justify-between"
          >
            {/* YouTube Comment Style Layout */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-neutral-100 pb-3">
                <div className="w-5.5 h-4 bg-red-600 rounded flex items-center justify-center text-[8px] text-white font-black">▶</div>
                <h4 className="font-montserrat font-extrabold text-xs text-neutral-800 uppercase tracking-wider">Depoimento no YouTube</h4>
              </div>

              <div className="flex gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" 
                  alt="Júlio César" 
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                />
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-xs text-neutral-900">Júlio César (RS)</span>
                    <span className="text-[10px] text-gray-500 font-semibold">há 2 dias</span>
                  </div>
                  
                  <p className="text-xs sm:text-[13px] font-semibold text-neutral-700 leading-relaxed">
                    Sou militar aqui no Rio Grande do Sul e por muito tempo achei que bastava impor regras duras para impor disciplina dentro de casa. Mas o cansaço era gigante, o clima vivia tenso e meu filho me evitava o tempo todo. 
                  </p>
                  <p className="text-xs sm:text-[13px] font-semibold text-neutral-700 leading-relaxed">
                    Assisti ao vídeo do Sargento Wagner e decidi pagar os R$ 17 para ler o PDF e ouvir os áudios. Impressionante como mudei de postura e, consequentemente, meu filho também mudou o respeito. Excelente abordagem sem rodeios, direta, de sargento para pais. Indico de olhos fechados.
                  </p>

                  <div className="flex items-center gap-4 pt-1 text-gray-500">
                    <button className="flex items-center gap-1 hover:text-black">
                      <ThumbsUp className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
                      <span className="text-[10px] font-bold">54</span>
                    </button>
                    <span className="text-[11px] font-bold hover:text-black cursor-pointer">Responder</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Heart response badge from Wagner */}
            <div className="bg-neutral-50 p-2.5 rounded-xl border border-neutral-100 flex items-center gap-2.5">
              <div className="w-6.5 h-6.5 rounded-full bg-red-600 flex items-center justify-center text-[10px] font-black text-white shrink-0">W</div>
              <p className="text-[11px] font-bold text-neutral-600">
                Marcado com coração por <span className="text-neutral-900 font-black">Wagner Ferraz</span>
              </p>
            </div>
          </motion.div>

          {/* 5. INSTAGRAM POST COMMENT - Fernanda Lima (BA) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-col border-4 border-black bg-white rounded-2xl p-4.5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] h-[440px] md:h-[460px] justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-sm"></div>
                  <h4 className="font-montserrat font-extrabold text-xs text-neutral-800 uppercase tracking-wider">Instagram Feed</h4>
                </div>
                <MoreVertical className="w-4 h-4 text-gray-500" />
              </div>

              <div className="flex gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&q=80" 
                  alt="Fernanda Lima" 
                  referrerPolicy="no-referrer"
                  className="w-9 h-9 rounded-full object-cover shrink-0"
                />
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-xs text-neutral-900">fernanda.lima_ba</span>
                    <span className="text-[10px] text-gray-400 font-bold">1d</span>
                  </div>
                  
                  <p className="text-xs sm:text-[13px] font-semibold text-neutral-700 leading-relaxed">
                    Minha gente, que alívio! Melhor investimento de R$ 17,00 que já fiz na minha vida toda. Sou de Salvador, tenho uma filha de 11 anos que andava rebelde demais, tudo batia de frente comigo. 
                  </p>
                  <p className="text-xs sm:text-[13px] font-semibold text-neutral-700 leading-relaxed">
                    Apliquei as chaves práticas do treinamento sobre quebra de barreira e comunicação de honra. Parece milagre como eles entendem quando mudamos o tom e a estratégia certa. Ela agora me escuta, me ajuda e o clima em casa é outro!
                  </p>

                  <div className="flex items-center gap-4 pt-1 text-gray-400 text-[11px] font-bold">
                    <span>Curtir</span>
                    <span>Responder</span>
                    <span>Ver tradução</span>
                  </div>
                </div>
                <Heart className="w-3.5 h-3.5 text-neutral-400 mt-1 hover:text-red-500 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Simulated Instagram comment engagement bar */}
            <div className="border-t border-neutral-100 pt-3 flex items-center justify-between text-xs text-neutral-500 font-bold">
              <span>Há 22 horas</span>
              <span className="text-neutral-800 hover:underline cursor-pointer">Ver todas as 3 respostas</span>
            </div>
          </motion.div>

          {/* 6. LIVE CHAT / INTERACTIVE STREAM PRINT - Roberto Souza (PR) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col border-4 border-black bg-neutral-950 rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] h-[440px] md:h-[460px] text-white"
          >
            {/* Live Chat Top Panel */}
            <div className="bg-neutral-900 px-3.5 py-3 flex items-center justify-between shrink-0 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-wider font-montserrat">Live do Código</span>
              </div>
              <div className="bg-red-600 text-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                AO VIVO
              </div>
            </div>

            {/* Live Chat Comment Stream */}
            <div className="flex-1 p-3.5 overflow-y-auto space-y-4 flex flex-col justify-end bg-gradient-to-b from-neutral-950 to-neutral-900">
              
              {/* Floating Comment 1 */}
              <div className="flex items-start gap-2 bg-white/5 p-2 rounded-lg">
                <div className="w-6.5 h-6.5 rounded-full bg-indigo-500 text-[10px] flex items-center justify-center font-bold">M</div>
                <div className="text-xs">
                  <span className="font-bold text-neutral-300 block">Marcos Vinícius</span>
                  <span className="text-neutral-400">É isso mesmo! Mudei minha postura de pai.</span>
                </div>
              </div>

              {/* Floating Comment 2 - Roberto Souza (PR) Highlighted */}
              <div className="flex items-start gap-2 bg-[#FFD700]/10 border border-[#FFD700]/30 p-2.5 rounded-lg shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80" 
                  alt="Roberto Souza" 
                  referrerPolicy="no-referrer"
                  className="w-7 h-7 rounded-full object-cover shrink-0 border border-[#FFD700]"
                />
                <div className="text-xs space-y-0.5">
                  <span className="font-black text-[#FFD700] flex items-center gap-1">
                    Roberto Souza (Curitiba - PR)
                    <span className="bg-[#FFD700] text-black text-[7px] px-1 py-0.1 rounded font-black uppercase">Aluno</span>
                  </span>
                  <p className="text-neutral-200 font-semibold leading-relaxed">
                    Sargento Wagner, estou na metade dos áudios e já vejo diferença aqui em casa. O comportamento do meu caçula mudou 100%! Nem me lembro de quando foi o último grito. Vale cada centavo!
                  </p>
                </div>
              </div>

              {/* Floating Comment 3 */}
              <div className="flex items-start gap-2 bg-white/5 p-2 rounded-lg">
                <div className="w-6.5 h-6.5 rounded-full bg-[#25D366] text-[10px] flex items-center justify-center font-bold text-black">C</div>
                <div className="text-xs">
                  <span className="font-bold text-neutral-300 block">Carla Mendes</span>
                  <span className="text-neutral-400">Gente, vale super a pena. O método é muito prático e direto!</span>
                </div>
              </div>

            </div>

            {/* Live Chat Input mockup */}
            <div className="bg-neutral-900 p-3 border-t border-neutral-800 flex items-center justify-between shrink-0">
              <span className="text-xs text-neutral-500 font-semibold">Comente como Roberto Souza...</span>
              <div className="flex items-center gap-3 text-neutral-400">
                <Smile className="w-4.5 h-4.5" />
                <Send className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Dynamic Authority Booster footer beneath the social proof */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 bg-white p-5 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-2xl mx-auto">
          <UserCheck className="w-8 h-8 text-[#FF0000] shrink-0" />
          <p className="font-opensans font-bold text-xs sm:text-sm text-gray-800 text-center sm:text-left leading-relaxed">
            Seja você também o próximo caso de sucesso. O <span className="font-extrabold text-black uppercase">Código Limite</span> é a decisão inteligente de pais comprometidos com o futuro de seus filhos.
          </p>
        </div>

      </div>
    </section>
  );
}
