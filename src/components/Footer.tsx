import React, { memo, useCallback } from "react";
import { ArrowRight } from "lucide-react";

interface FooterProps {
  onOpenContact: () => void;
}

const Footer = memo(({ onOpenContact }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const handleContact = useCallback(() => {
    onOpenContact();
  }, [onOpenContact]);

  return (
    <div className="relative">
      <section className="py-32 bg-black text-center relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-8 relative z-10">
          <h2 className="font-bold text-3xl sm:text-5xl md:text-6xl text-white leading-tight mb-6 max-w-4xl mx-auto">
            Pronto para colocar o seu <br />
            negócio no <span className="text-red-500">próximo nível?</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-lg mx-auto mb-10 leading-relaxed">
            Pare de perder clientes para a concorrência por causa de um site lento e ultrapassado. Vamos construir algo incrível juntos.
          </p>
          
          <button
            onClick={handleContact}
            className="inline-flex items-center gap-2.5 bg-red-500 hover:bg-red-600 text-white px-10 py-5 rounded-md font-bold text-base tracking-wider shadow-xl hover:shadow-red-500/40 group transition-all duration-300 cursor-pointer"
          >
            Falar com Geovani Neumann
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-red-500/20 to-transparent blur-[80px] pointer-events-none" />
      </section>

      <footer className="bg-neutral-950 border-t border-white/10 py-12 relative z-10">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-white/10">
            <a href="#top" className="font-bold text-base text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Geovani Neumann
            </a>

            <div className="flex flex-wrap justify-center gap-8 font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-gray-500">
              <a href="#sobre" className="hover:text-white transition-colors">SOBRE</a>
              <a href="#servicos" className="hover:text-white transition-colors">SERVIÇOS</a>
              <a href="#processo" className="hover:text-white transition-colors">PROCESSO</a>
              <a href="#precos" className="hover:text-white transition-colors">INVESTIMENTO</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-center sm:text-left">
            <div className="font-mono text-[10px] text-gray-500">
              &copy; {currentYear} Geovani Neumann. Todos os direitos reservados.
            </div>
            <div className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">
              CÓDIGO AUTORAL • DESENVOLVIDO EM NEXT.JS &amp; REACT
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
});

Footer.displayName = 'Footer';

export default Footer;