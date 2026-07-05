import React, { useState, useEffect, memo, useCallback } from "react";
import { X, Check, ArrowRight } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string | null;
}

const ContactModal = memo(({ isOpen, onClose, selectedPlan }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    tipoProjeto: "landing-page",
    detalhes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen && selectedPlan) {
      setFormData(prev => ({
        ...prev,
        detalhes: `Interesse no plano: ${selectedPlan}. `,
      }));
    }
  }, [isOpen, selectedPlan]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    setTimeout(() => {
      let text = `Olá Geovani! Solicitei um orçamento através do site:\n\n`;
      text += `*Nome:* ${formData.nome}\n`;
      text += `*E-mail:* ${formData.email}\n`;
      text += `*WhatsApp:* ${formData.whatsapp}\n`;
      text += `*Tipo:* ${formData.tipoProjeto}\n`;
      
      if (selectedPlan) {
        text += `*Plano de Interesse:* ${selectedPlan}\n`;
      }
      
      text += `*Detalhes:* ${formData.detalhes}`;
      
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/5541997552818?text=${encodedText}`;
      window.open(whatsappUrl, "_blank");
      
      onClose();
      setSubmitted(false);
      setFormData({
        nome: "",
        email: "",
        whatsapp: "",
        tipoProjeto: "landing-page",
        detalhes: "",
      });
    }, 1500);
  }, [formData, selectedPlan, onClose]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-400" />

        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold text-xl text-white">
                {selectedPlan ? `Plano ${selectedPlan}` : 'Solicitar Orçamento'}
              </h3>
              {selectedPlan && (
                <p className="text-sm text-gray-400 mt-1">
                  Você está solicitando um orçamento para o plano selecionado
                </p>
              )}
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/5 rounded-full"
            >
              <X size={20} />
            </button>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-red-500/10 border border-red-500/30 rounded-full flex items-center justify-center mb-4 text-red-400 animate-bounce">
                <Check size={32} />
              </div>
              <h4 className="font-bold text-lg text-white mb-2">Solicitação enviada!</h4>
              <p className="text-gray-400 text-sm max-w-sm mb-6">
                Estamos te direcionando para o WhatsApp do Geovani Neumann para concluir o atendimento.
              </p>
              <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  name="nome"
                  required
                  placeholder="Ex: João Silva"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 text-sm"
                  value={formData.nome}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="joao@empresa.com"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 text-sm"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    placeholder="(41) 99999-9999"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 text-sm"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1">
                  Tipo de Projeto
                </label>
                <select
                  name="tipoProjeto"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-red-500 text-sm cursor-pointer"
                  value={formData.tipoProjeto}
                  onChange={handleInputChange}
                >
                  <option value="landing-page">Landing Page Premium</option>
                  <option value="site-institucional">Site Institucional Completo</option>
                  <option value="sistema-customizado">Sistema Web / Plataforma SaaS</option>
                  <option value="outro">Outro Projeto Sob Medida</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1">
                  Conte um pouco sobre o projeto *
                </label>
                <textarea
                  name="detalhes"
                  rows={3}
                  required
                  placeholder="Qual é o seu negócio e qual o principal objetivo deste projeto?"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 text-sm resize-none"
                  value={formData.detalhes}
                  onChange={handleInputChange}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold text-sm transition-all shadow-lg hover:shadow-red-500/40 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  {selectedPlan ? `Contratar ${selectedPlan}` : 'Confirmar e Falar no WhatsApp'}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
});

ContactModal.displayName = 'ContactModal';

export default ContactModal;