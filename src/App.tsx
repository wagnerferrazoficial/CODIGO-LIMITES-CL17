import { useState } from "react";
import CountdownTimer from "./components/CountdownTimer";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";
import Testimonials from "./components/Testimonials";
import Biography from "./components/Biography";
import ThirdFold from "./components/ThirdFold";
import FourthFold from "./components/FourthFold";
import FifthFold from "./components/FifthFold";
import SixthFold from "./components/SixthFold";
import SeventhFold from "./components/SeventhFold";
import Footer from "./components/Footer";
import { CheckCircle2, ShieldCheck, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);

  const scrollToCheckout = () => {
    const element = document.getElementById("checkout-fold");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      setIsCheckoutOpen(true);
    }
  };

  const handleFinalCheckout = () => {
    window.open("https://pay.cakto.com.br/5v2jyhd", "_blank");
    // Track custom Meta Pixel event if fbq is defined
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "InitiateCheckout", {
        value: 17.0,
        currency: "BRL",
      });
    }
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText(
      "00020101021126580014br.gov.bcb.pix0136cursoswagnerferraz@gmail.com520400005303986540517.005802BR5913Wagner Ferraz6008Rondonia62070503***6304"
    );
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);

    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Purchase", {
        value: 17.0,
        currency: "BRL",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-opensans antialiased select-none selection:bg-[#FFD700] selection:text-black">
      
      {/* 1. URGENT RED COUNTDOWN BANNER */}
      <CountdownTimer />

      {/* 2. FIRST FOLD (Headline, subheadline, pain points list, etc.) */}
      <FirstFold />

      {/* 3. SECOND FOLD (O CÓDIGO DA HONRA presentation, WhatsApp green pricing & Yellow CTA) */}
      <SecondFold onCtaClick={scrollToCheckout} />

      {/* NEW: TESTIMONIALS SECTION (6 parents from different states, realistic prints layout) */}
      <Testimonials />

      {/* 4. BIOGRAPHY (Between 2nd and 3rd fold, 35% image width mobile, standard text) */}
      <Biography />

      {/* 5. THIRD FOLD (O que você vai aprender) */}
      <ThirdFold />

      {/* 6. FOURTH FOLD (Ao concluir o Treinamento você vai saber, yellow checkmarks, gray line separators) */}
      <FourthFold />

      {/* 7. FIFTH FOLD (Para quem é?, 3 boxes with gray borders) */}
      <FifthFold />

      {/* 8. SIXTH FOLD (Benefícios da metodologia, 3 boxes with thumbs-up emojis) */}
      <SixthFold />

      {/* 9. SEVENTH FOLD (Checkout area, yellow bg, nested black card with green price & CTA button) */}
      <SeventhFold onCtaClick={handleFinalCheckout} />

      {/* 10. FOOTER (@wagnerferrazoficial & WhatsApp with proper redirects) */}
      <Footer />

      {/* HIGH CONVERTING CHECKOUT DIALOG / POPUP */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg bg-neutral-950 border-4 border-[#FFD700] rounded-2xl p-6 sm:p-8 text-white shadow-[8px_8px_0px_0px_rgba(255,215,0,0.35)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsCheckoutOpen(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-[#FFD700] transition-colors duration-200"
              >
                <X className="w-6 h-6 stroke-[3]" />
              </button>

              {/* Header */}
              <div className="text-center mb-6">
                <span className="bg-[#FF0000] text-white text-xs font-black uppercase tracking-widest font-montserrat px-3.5 py-1.5 border border-black shadow-[2px_2px_0px_0px_rgba(255,215,0,1)]">
                  PAGAMENTO SEGURO
                </span>
                <h3 className="font-montserrat font-black text-2xl mt-4 text-[#FFD700] uppercase tracking-tight">
                  Conclua sua Inscrição
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-bold mt-1.5 uppercase tracking-wide">
                  Acesso imediato ao Código Limite por R$ 17,00
                </p>
              </div>

              {/* Steps or Information */}
              <div className="space-y-4 font-opensans">
                <div className="bg-black p-4 rounded-xl border-2 border-neutral-800">
                  <p className="text-xs font-black text-[#FFD700] uppercase tracking-wider mb-2">
                    🔑 COMO FAZER O PAGAMENTO:
                  </p>
                  <ol className="text-xs sm:text-sm text-neutral-300 space-y-2 list-decimal list-inside font-semibold">
                    <li>Copie a chave Pix (e-mail do Wagner) abaixo;</li>
                    <li>Abra o aplicativo do seu banco preferido;</li>
                    <li>Vá na área Pix copia e cola ou Pix por e-mail;</li>
                    <li>Envie o valor exato de <strong className="text-white font-black underline decoration-[#25D366] decoration-2">R$ 17,00</strong>;</li>
                    <li>Seu acesso será liberado no seu e-mail cadastrado de imediato.</li>
                  </ol>
                </div>

                {/* Pix copy option */}
                <div className="flex flex-col items-center gap-2">
                  <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Chave Pix (E-mail de cadastro):</p>
                  <div className="w-full bg-black border-2 border-[#25D366]/40 rounded-xl px-4 py-3 font-mono text-center text-xs text-[#25D366] font-black select-all break-all shadow-[2px_2px_0px_0px_rgba(37,211,102,0.1)]">
                    cursoswagnerferraz@gmail.com
                  </div>
                  
                  <button
                    onClick={handleCopyPix}
                    className="w-full bg-[#25D366] hover:bg-[#1ebd53] text-black font-montserrat font-black text-sm py-3.5 px-6 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 cursor-pointer uppercase mt-2"
                  >
                    {copiedPix ? "✓ PIX COPIADO COM SUCESSO!" : "COPIAR CHAVE PIX"}
                  </button>
                  {copiedPix && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs text-[#25D366] font-black mt-2 uppercase tracking-wide"
                    >
                      🎉 Chave copiada! Agora pague no app do seu banco.
                    </motion.p>
                  )}
                </div>

                {/* WhatsApp Help support link */}
                <div className="pt-4 border-t-2 border-neutral-800 text-center">
                  <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider mb-2">Prefere pagar via cartão ou boleto?</p>
                  <a
                    href="https://wa.me/5569993022155?text=Ol%C3%A1%21%20Gostaria%20de%20receber%20o%20link%20de%20pagamento%20no%20cart%C3%A3o%20ou%20boleto%20para%20o%20C%C3%B3digo%20Limite."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black text-[#FFD700] hover:underline uppercase tracking-wider"
                  >
                    Fale com nosso Suporte no WhatsApp →
                  </a>
                </div>

                {/* Security and Trust Badges */}
                <div className="flex items-center justify-center gap-4 pt-2 text-neutral-500 text-[11px] font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#25D366] stroke-[2.5]" />
                    <span>Ambiente 100% Criptografado</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
