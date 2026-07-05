import React, { useState, useCallback, memo } from "react";
import { faqItems } from "../data";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQ = memo(() => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = useCallback((id: string) => {
    setOpenId(openId === id ? null : id);
  }, [openId]);

  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/10" id="faq">
      <div className="max-w-[1240px] mx-auto px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          <div className="max-w-sm mb-0">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-red-400 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              Perguntas Frequentes
            </div>
            <h2 className="font-bold text-3xl sm:text-4xl text-white leading-tight mb-4">
              Dúvidas comuns antes de iniciar
            </h2>
            <p className="text-gray-400 text-base mb-6">
              Tem alguma dúvida sobre prazos, tecnologias ou formas de pagamento? Confira as respostas rápidas ao lado.
            </p>
            <div className="p-4 bg-black/40 border border-white/10 rounded-lg flex items-start gap-4">
              <HelpCircle size={24} className="text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white text-sm">Não achou sua resposta?</h4>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                  Não se preocupe! Fale comigo no WhatsApp que tiro qualquer dúvida sua sem compromisso.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col divide-y divide-white/10">
            {faqItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="py-4 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full flex justify-between items-center py-5 font-medium text-left text-white hover:text-white transition-colors cursor-pointer group"
                  >
                    <span className="text-base sm:text-lg pr-4 group-hover:translate-x-1 transition-transform duration-200">
                      {item.question}
                    </span>
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:border-red-400 group-hover:text-red-400 transition-colors">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[300px] opacity-100 pb-5" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed pl-1 max-w-3xl">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
});

FAQ.displayName = 'FAQ';

export default FAQ;