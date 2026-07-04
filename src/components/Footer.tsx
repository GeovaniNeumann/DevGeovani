import React from "react";
import { ArrowRight } from "lucide-react";

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative">
      {/* Final CTA Section */}
      <section className="final-cta py-32 bg-black text-center relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-8 relative z-10">
          <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white leading-tight mb-6 max-w-4xl mx-auto">
            Pronto para colocar o seu <br />
            negócio no <span className="text-red-brand">próximo nível?</span>
          </h2>
          <p className="text-ink-dim text-lg sm:text-xl max-w-lg mx-auto mb-10 leading-relaxed">
            Pare de perder clientes para a concorrência por causa de um site lento e ultrapassado. Vamos construir algo incrível juntos.
          </p>
          
          <button
            onClick={onOpenContact}
            className="btn-primary lg inline-flex items-center gap-2.5 bg-red-brand hover:bg-red-bright text-white px-10 py-5 rounded-md font-bold text-base tracking-wider shadow-xl hover:shadow-red-brand/40 group transition-all duration-300 cursor-pointer"
          >
            Falar com Geovani Neumann
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Ambient bottom red glow */}
        <div className="final-glow absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-red-brand/20 to-transparent blur-[80px] pointer-events-none" />
      </section>

      {/* Footer Section */}
      <footer className="bg-neutral-950 border-t border-line py-12 relative z-10">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="footer-inner flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-line/40">
            {/* Logo */}
            <a href="#top" className="font-display font-bold text-base text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-brand" />
              Geovani Neumann
            </a>

            {/* Footer Links */}
            <div className="footer-links flex flex-wrap justify-center gap-8 font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-ink-faint">
              <a href="#sobre" className="hover:text-ink transition-colors">SOBRE</a>
              <a href="#servicos" className="hover:text-ink transition-colors">SERVIÇOS</a>
              <a href="#processo" className="hover:text-ink transition-colors">PROCESSO</a>
              <a href="#precos" className="hover:text-ink transition-colors">INVESTIMENTO</a>
              <a href="#faq" className="hover:text-ink transition-colors">FAQ</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-center sm:text-left">
            <div className="footer-copy font-mono text-[10px] text-ink-faint">
              &copy; {currentYear} Geovani Neumann. Todos os direitos reservados.
            </div>
            <div className="font-mono text-[9px] text-ink-faint uppercase tracking-widest">
              CÓDIGO AUTORAL • DESENVOLVIDO EM NEXT.JS &amp; REACT
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
