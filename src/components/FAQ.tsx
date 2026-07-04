import React, { useState } from "react";
import { faqItems } from "../data";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-surface-dark border-t border-line" id="faq">
      <div className="max-w-[1240px] mx-auto px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          <div className="section-head max-w-sm mb-0">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-red-bright uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-bright" />
              Perguntas Frequentes
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink leading-tight mb-4">
              Dúvidas comuns antes de iniciar
            </h2>
            <p className="text-ink-dim text-base mb-6">
              Tem alguma dúvida sobre prazos, tecnologias ou formas de pagamento? Confira as respostas rápidas ao lado.
            </p>
            <div className="p-4 bg-black/40 border border-line rounded-lg flex items-start gap-4">
              <HelpCircle size={24} className="text-red-bright flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-ink text-sm">Não achou sua resposta?</h4>
                <p className="text-ink-dim text-xs mt-1 leading-relaxed">
                  Não se preocupe! Fale comigo no WhatsApp que tiro qualquer dúvida sua sem compromisso.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-list flex flex-col divide-y divide-line">
            {faqItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="faq-item py-4 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="faq-q w-full flex justify-between items-center py-5 font-display font-medium text-left text-ink hover:text-white transition-colors cursor-pointer group"
                  >
                    <span className="text-base sm:text-lg pr-4 group-hover:translate-x-1 transition-transform duration-200">
                      {item.question}
                    </span>
                    <div className="plus flex-shrink-0 w-8 h-8 rounded-full border border-line flex items-center justify-center text-ink-dim group-hover:border-red-bright group-hover:text-red-bright transition-colors">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>
                  
                  <div 
                    className={`faq-a overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[300px] opacity-100 pb-5" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-ink-dim text-sm sm:text-base leading-relaxed pl-1 max-w-3xl">
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
}
