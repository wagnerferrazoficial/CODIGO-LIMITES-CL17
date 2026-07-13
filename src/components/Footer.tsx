import { Instagram, Youtube, Facebook, Phone } from "lucide-react";

export default function Footer() {
  const instagramUrl = "https://www.instagram.com/wagnerferrazoficial?igsh=MTNwdnFsYTZ1OHQxcA==";
  const youtubeUrl = "https://youtube.com/@wagnerferrazoficial?si=rzYUbv35eSbkWl89";
  const whatsappUrl = "https://wa.me/5569993022155?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20o%20C%C3%B3digo%20Limite.";

  return (
    <footer id="main-footer" className="w-full bg-neutral-950 text-neutral-400 py-12 px-5 sm:px-8 border-t border-neutral-900 select-none text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        
        {/* Social Network icons */}
        <div className="flex items-center gap-6">
          <a 
            href={instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-12 h-12 rounded-xl bg-neutral-900 border-2 border-white flex items-center justify-center text-neutral-300 hover:text-[#FFD700] hover:border-[#FFD700] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(255,215,0,1)] shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)] transition-all duration-150"
            title="Siga no Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>

          <a 
            href={instagramUrl} // Redirecting to Facebook as per user links instruction (they provided same insta link for both)
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-12 h-12 rounded-xl bg-neutral-900 border-2 border-white flex items-center justify-center text-neutral-300 hover:text-[#FFD700] hover:border-[#FFD700] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(255,215,0,1)] shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)] transition-all duration-150"
            title="Siga no Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>

          <a 
            href={youtubeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-12 h-12 rounded-xl bg-neutral-900 border-2 border-white flex items-center justify-center text-neutral-300 hover:text-[#FFD700] hover:border-[#FFD700] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(255,215,0,1)] shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)] transition-all duration-150"
            title="Inscreva-se no YouTube"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>

        {/* Footer Text as Requested */}
        <div className="flex flex-col items-center gap-2 mt-2">
          {/* Social handle clickable */}
          <a 
            href={instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-montserrat font-bold text-sm sm:text-base text-white hover:text-[#FFD700] transition-colors duration-200 uppercase tracking-widest"
          >
            REDES SOCIAIS: @wagnerferrazoficial
          </a>

          {/* WhatsApp formatted text in WhatsApp Green color */}
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-montserrat font-black text-sm sm:text-base md:text-lg text-[#25D366] hover:text-[#1ebd53] transition-colors duration-200 uppercase tracking-wider mt-1"
          >
            <Phone className="w-4 h-4 fill-[#25D366]" />
            WHATSAPP: +55 69 99302 2155
          </a>
        </div>

        {/* Legal Mentions */}
        <div className="text-[10px] sm:text-xs text-neutral-600 font-opensans mt-6 space-y-1.5 leading-relaxed max-w-2xl">
          <p>© {new Date().getFullYear()} LT Essencial & Código Limite. Todos os direitos reservados.</p>
          <p>Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Uma vez que você sai do Facebook, a responsabilidade não é deles e sim do nosso site.</p>
        </div>

      </div>
    </footer>
  );
}
