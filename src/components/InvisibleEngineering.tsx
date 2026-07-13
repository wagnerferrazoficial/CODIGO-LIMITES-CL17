import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Eye, 
  HelpCircle, 
  BookOpen, 
  Sparkles, 
  Target, 
  Layers, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  Check, 
  Terminal, 
  Heart,
  TrendingUp,
  ShieldAlert
} from "lucide-react";

export default function InvisibleEngineering() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"engineering" | "full-copy" | "neuro-design">("engineering");
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopyText = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const sectionsCopy = [
    {
      id: "urgency",
      title: "1. Banner de Urgência (CountdownTimer)",
      copy: `⚠️ ATENÇÃO: Desconto de 72% ativo por tempo limitado. Garanta seu acesso antes que o preço retorne para R$ 97,00.\n\n[CRONÔMETRO REGRESSIVO DINÂMICO: 11m 47s]`,
      engineering: "Urgência real & FOMO (Fear Of Missing Out). O cérebro humano procrastina decisões quando sente que tem tempo infinito. O cronômetro regressivo atrela o desconto a uma janela de tempo estreita, forçando a decisão por impulso emocional rápido e diminuindo a janela de arrependimento antes do checkout.",
      triggers: ["Escassez Temporal", "Aversão à Perda", "Recompensa Imediata"]
    },
    {
      id: "headline",
      title: "2. Headline Principal (FirstFold)",
      copy: `Seu filho NÃO ESTÁ DESOBEDECENDO você por acaso. Existe um padrão que faz muitos pais PERDEREM O RESPEITO DENTRO DE CASA sem perceberem.`,
      engineering: "Quebra de Padrão (Pattern Interrupt) + Terceirização de Culpa Segura. O pai cansado espera ser criticado ou ouvir que seu filho é mal-educado. Ao dizer 'não está desobedecendo por acaso' e culpar 'um padrão invisível', retiramos o peso da culpa direta das costas do pai, gerando alívio imediato e estabelecendo uma lacuna de curiosidade (Curiosity Gap): 'Qual padrão é esse?'",
      triggers: ["Curiosidade", "Alívio de Culpa", "Identificação de Inimigo Comum"]
    },
    {
      id: "subheadline",
      title: "3. Subheadline & Dor Profunda (FirstFold)",
      copy: `Broncas, conversas e punições não estão funcionando porque o problema não é a falta de disciplina - é outra coisa mais profunda que quase nenhum pai entende.\n\n4.8/5 | Mais de 1.247 pais transformaram a relação com seus filhos`,
      engineering: "Validação Empática + Prova Social Quantitativa. Mostra que conhecemos a rotina exaustiva do cliente (ele já gritou, castigou, conversou e nada funcionou). Isso cria o sentimento de 'este cara me entende'. Em seguida, a prova social com número exato (1.247 pais) fornece amparo de rebanho: o método já foi testado e aprovado em massa.",
      triggers: ["Empatia Empírica", "Prova Social", "Consenso Coletivo"]
    },
    {
      id: "presentation",
      title: "4. Apresentação do Método (SecondFold)",
      copy: `🧠 CÓDIGO LIMITE - Método Exclusivo.\nUm treinamento prático para pais que querem reduzir conflitos, parar de repetir tudo várias vezes e construir uma rotina com mais cooperação dentro de casa.\nAprenda estratégias simples para aplicar no dia a dia e fortalecer sua autoridade como pai ou mãe sem precisar recorrer aos gritos.`,
      engineering: "Mapeamento de Solução por Substituição. Apresenta 'Código Limite' como um sistema estruturado, e não apenas conselhos vazios. Reduz o custo de energia associando a mudança a termos fáceis: 'sem gritar, sem brigar'. Utiliza gatilhos de identidade ao prometer restabelecer o respeito e limites com conexão.",
      triggers: ["Substituição de Esforço", "Gatilho de Identidade", "Simplicidade Sistêmica"]
    },
    {
      id: "pricing",
      title: "5. Ancoragem de Preço & Oferta Irrecusável (SecondFold)",
      copy: `Acesso vitalício ao Treinamento Código Limite + PDF Completo + MP3 Áudios práticos.\nDe R$ 67,00 por apenas R$ 17,00.\n🔒 Compra 100% segura e garantida.`,
      engineering: "Ancoragem Extrema & Fricção Zero (No-Brainer Offer). Ao comparar R$ 67,00 com R$ 17,00, o cliente sente que está ganhando um desconto maciço imediato. R$ 17,00 é um preço de impulso (abaixo do custo de um lanche), o que remove a barreira lógica de aprovação do cônjuge ou análise financeira. O formato em áudio resolve a objeção de falta de tempo.",
      triggers: ["Ancoragem de Valor", "Preço de Impulso", "Quebra de Objeção de Tempo"]
    },
    {
      id: "testimonials",
      title: "6. Prova Social Situacional (Testimonials)",
      copy: `Depoimentos reais em formato de chat (WhatsApp/Telegram) de pais de diferentes estados (SP, RJ, RO, etc.) relatando que os filhos começaram a obedecer sem necessidade de gritos logo na primeira semana.`,
      engineering: "Prova de Semelhança (Peer Influence). O cérebro humano rejeita promessas feitas apenas pelo vendedor, mas aceita facilmente o testemunho de pares ('pais normais como eu'). A variedade regional e de idade das crianças gera identificação instantânea e derruba a objeção de que 'para a minha família isso não funciona'.",
      triggers: ["Aprovação Social", "Identificação por Semelhança", "Remoção de Ceticismo"]
    },
    {
      id: "biography",
      title: "7. Biografia de Autoridade (Biography)",
      copy: `Apresentação de Wagner Ferraz como pai, mentor e terapeuta familiar focado em restaurar famílias.\nSua missão é ajudar pais comuns a resgatar o respeito e a harmonia no lar.`,
      engineering: "Autoridade Humanizada. Uma biografia que equilibra 'Pai comum de família' (empatia e similaridade) com 'Terapeuta Familiar e Mentor' (autoridade técnica e conhecimento profundo). Isso cria uma ponte de confiança inabalável: ele não é só um teórico, ele vive a dor do cliente e já a resolveu.",
      triggers: ["Autoridade por Associação", "Similaridade de Dor", "Missão de Propósito"]
    },
    {
      id: "valuestack",
      title: "8. Empilhamento de Valor & 6 Bônus (ThirdFold)",
      copy: `🎁 E mais 6 bônus inclusos: Código Âncora (comportamento), Código Norte (propósito), Código Vínculo (conexão), Código Respeito (paz sem estresse), Código Recomeço (reconexão pós-briga), Código Valor (menos reclamação).`,
      engineering: "Empilhamento Psicológico de Valor (Value Stacking). Dividir o método em sub-produtos com nomes fortes de peso simbólico ('Código Âncora', 'Código Respeito') faz o cliente sentir que está adquirindo uma enciclopédia completa por apenas R$ 17,00. Isso transforma a transação em uma vitória unilateral do cliente.",
      triggers: ["Empilhamento de Valor", "Sensação de Lucro Extremo", "Sub-especialização de Dores"]
    }
  ];

  return (
    <section className="w-full bg-neutral-950 text-white py-12 px-5 sm:px-8 md:px-12 border-t-8 border-[#FFD700] relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#FF0000]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Toggle Button / Header */}
        <div className="text-center mb-8 w-full">
          <span className="bg-[#FF0000] text-white text-[10px] sm:text-xs font-black uppercase tracking-widest font-montserrat px-3.5 py-1.5 border border-black shadow-[2px_2px_0px_0px_rgba(255,215,0,1)] inline-flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" /> ENGENHARIA REVELADA
          </span>
          <h2 className="font-montserrat font-black text-2xl sm:text-3xl md:text-4xl mt-4 tracking-tight text-[#FFD700] uppercase text-center leading-tight">
            🧠 Engenharia Invisível de Copywriting
          </h2>
          <p className="font-opensans font-bold text-xs sm:text-sm text-neutral-400 mt-2 max-w-xl mx-auto uppercase tracking-wide">
            Clique no botão abaixo para explorar os gatilhos mentais estruturados, a psicologia oculta e a copy literal de cada seção desta página.
          </p>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mt-6 inline-flex items-center gap-3.5 bg-white hover:bg-neutral-100 text-black font-montserrat font-black text-xs sm:text-sm py-3.5 px-6 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(255,215,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_rgba(255,215,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(255,215,0,1)] transition-all duration-150 cursor-pointer uppercase"
          >
            {isOpen ? (
              <>
                <span>Ocultar Painel de Engenharia</span>
                <ChevronUp className="w-4 h-4 stroke-[3]" />
              </>
            ) : (
              <>
                <span>Explorar Cópia & Psicologia Oculta</span>
                <Eye className="w-4 h-4 stroke-[3]" />
              </>
            )}
          </button>
        </div>

        {/* Expandable Dashboard Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full bg-neutral-900 border-3 border-neutral-800 rounded-2xl p-5 sm:p-8 overflow-hidden"
            >
              {/* Tab Selection */}
              <div className="flex flex-wrap gap-2 mb-8 border-b border-neutral-800 pb-5 justify-center sm:justify-start">
                <button
                  onClick={() => setActiveTab("engineering")}
                  className={`px-4 py-2 rounded-lg font-montserrat font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-150 flex items-center gap-1.5 ${
                    activeTab === "engineering"
                      ? "bg-[#FFD700] text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
                      : "bg-black text-neutral-400 hover:text-white border border-neutral-800"
                  }`}
                >
                  <Target className="w-4 h-4" />
                  Gatilhos e Psicologia
                </button>
                <button
                  onClick={() => setActiveTab("full-copy")}
                  className={`px-4 py-2 rounded-lg font-montserrat font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-150 flex items-center gap-1.5 ${
                    activeTab === "full-copy"
                      ? "bg-[#FFD700] text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
                      : "bg-black text-neutral-400 hover:text-white border border-neutral-800"
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  Copy Literal Completa
                </button>
                <button
                  onClick={() => setActiveTab("neuro-design")}
                  className={`px-4 py-2 rounded-lg font-montserrat font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-150 flex items-center gap-1.5 ${
                    activeTab === "neuro-design"
                      ? "bg-[#FFD700] text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
                      : "bg-black text-neutral-400 hover:text-white border border-neutral-800"
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  Engenharia de Design
                </button>
              </div>

              {/* TAB 1: ENGINEERING & TRIGGERS */}
              {activeTab === "engineering" && (
                <div className="space-y-6">
                  <div className="bg-black p-4 rounded-xl border border-[#FFD700]/30 mb-4">
                    <p className="font-montserrat font-black text-xs text-[#FFD700] uppercase tracking-wider mb-1">
                      🎯 RESUMO EXECUTIVO DA ENGENHARIA INVISÍVEL
                    </p>
                    <p className="font-opensans text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      Esta página de vendas foi projetada utilizando a metodologia de <strong>Fricção Reversa Controlada</strong>. Como o público-alvo (pais e mães estressados com a desobediência dos filhos) está em um estado de alta reatividade e cansaço mental, o texto e o fluxo da página evitam termos técnicos complexos de pedagogia. Em vez disso, focam em <strong>escuta ativa imediata, validação de sentimentos, e quebra de objeções baseadas em falta de tempo</strong>. O valor de R$ 17,00 funciona como uma oferta irresistível (No-Brainer), onde o custo percebido é praticamente nulo em comparação com o valor agregado.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {sectionsCopy.map((section) => (
                      <div key={section.id} className="bg-neutral-950 p-5 rounded-xl border border-neutral-800">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                          <h4 className="font-montserrat font-black text-xs sm:text-sm text-white uppercase tracking-wider">
                            {section.title}
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {section.triggers.map((trigger, i) => (
                              <span key={i} className="bg-neutral-800 text-[#FFD700] text-[9px] font-bold px-2 py-0.5 rounded border border-neutral-700 font-mono">
                                #{trigger}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="font-opensans text-xs sm:text-sm text-neutral-300 leading-relaxed">
                          <strong>Engenharia Psicológica:</strong> {section.engineering}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 2: LITERAL FULL COPY */}
              {activeTab === "full-copy" && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center bg-black px-4 py-2 rounded-lg border border-neutral-800">
                    <span className="font-mono text-[10px] text-neutral-400 uppercase">Use este painel para copiar as copies textuais para anúncios e criativos</span>
                    <span className="text-xs text-[#25D366] font-bold font-mono">Pronto para Copiar</span>
                  </div>

                  <div className="space-y-5">
                    {sectionsCopy.map((section) => (
                      <div key={section.id} className="bg-neutral-950 rounded-xl border-2 border-neutral-800 overflow-hidden">
                        <div className="bg-neutral-900 px-4 py-2.5 flex justify-between items-center border-b border-neutral-800">
                          <span className="font-montserrat font-black text-xs text-[#FFD700] uppercase tracking-wider">
                            {section.title}
                          </span>
                          <button
                            onClick={() => handleCopyText(section.copy, section.id)}
                            className="text-neutral-400 hover:text-white transition-colors duration-150 flex items-center gap-1 text-xs font-mono font-bold uppercase"
                          >
                            {copiedSection === section.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-[#25D366]" />
                                <span className="text-[#25D366]">Copiado!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copiar</span>
                              </>
                            )}
                          </button>
                        </div>
                        <div className="p-4 sm:p-5 bg-black font-mono text-[11px] sm:text-xs text-neutral-300 whitespace-pre-line leading-relaxed">
                          {section.copy}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: NEURO-DESIGN PRINCIPLES */}
              {activeTab === "neuro-design" && (
                <div className="space-y-6 font-opensans text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    
                    <div className="bg-neutral-950 p-5 rounded-xl border border-neutral-800">
                      <div className="flex items-center gap-2 mb-3">
                        <Heart className="w-5 h-5 text-[#FF0000] shrink-0" />
                        <h4 className="font-montserrat font-black text-sm text-white uppercase tracking-wider">
                          Urgência Vermelha (Attention Grab)
                        </h4>
                      </div>
                      <p>
                        A cor vermelha intensa (Hex <span className="font-mono text-[#FF0000]">#FF0000</span>) é estrategicamente reservada para os pontos de estresse agudo, lembretes de escassez e cronômetros. Funciona como um sinalizador subconsciente de sobrevivência que força o olho a priorizar a leitura imediata desse elemento em frações de segundo.
                      </p>
                    </div>

                    <div className="bg-neutral-950 p-5 rounded-xl border border-neutral-800">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-5 h-5 text-[#FFD700] shrink-0" />
                        <h4 className="font-montserrat font-black text-sm text-white uppercase tracking-wider">
                          Amarelo Contraste (Ação Desejada)
                        </h4>
                      </div>
                      <p>
                        O Amarelo Ouro (Hex <span className="font-mono text-[#FFD700]">#FFD700</span>) atrai sentimentos de prestígio, energia ativa e valor premium. É usado exclusivamente nas bordas de destaque, botões principais de Call-to-Action (CTA) e títulos de benefícios para guiar a navegação mecânica do dedo/cursor.
                      </p>
                    </div>

                    <div className="bg-neutral-950 p-5 rounded-xl border border-neutral-800">
                      <div className="flex items-center gap-2 mb-3">
                        <Terminal className="w-5 h-5 text-[#25D366] shrink-0" />
                        <h4 className="font-montserrat font-black text-sm text-white uppercase tracking-wider">
                          Tipografia de Impacto Rítmico
                        </h4>
                      </div>
                      <p>
                        A combinação de <strong>Montserrat Black</strong> para chamadas de peso (estimulando o córtex de atenção de forma assertiva) emparelhado com <strong>Open Sans</strong> para parágrafos garante que o cérebro leia as informações cruciais sem fadiga cognitiva (cognitive strain).
                      </p>
                    </div>

                    <div className="bg-neutral-950 p-5 rounded-xl border border-neutral-800">
                      <div className="flex items-center gap-2 mb-3">
                        <ShieldAlert className="w-5 h-5 text-[#25D366] shrink-0" />
                        <h4 className="font-montserrat font-black text-sm text-white uppercase tracking-wider">
                          Estilo Neo-Brutalista (Alta Conversão)
                        </h4>
                      </div>
                      <p>
                        Bordas pretas espessas de 3px/4px com sombras sólidas sem gradientes (sharp offsets) transmitem segurança, firmeza, clareza e transparência. Diferente de gradientes flutuantes modernos que podem dar a sensação de "promessas vazias", o design neo-brutalista se conecta com integridade e realidade prática.
                      </p>
                    </div>

                  </div>
                </div>
              )}

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
