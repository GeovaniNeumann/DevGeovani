import React, { useState } from "react";
import { X, Check, ArrowRight } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    tipoProjeto: "landing-page",
    detalhes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setSubmitted(true);
    setTimeout(() => {
      // Create pre-filled WhatsApp message
      const text = `Olá Geovani! Solicitei um orçamento através do site:\n\n*Nome:* ${formData.nome}\n*E-mail:* ${formData.email}\n*WhatsApp:* ${formData.whatsapp}\n*Tipo:* ${formData.tipoProjeto}\n*Detalhes:* ${formData.detalhes}`;
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/5551999999999?text=${encodedText}`; // Mock developer WhatsApp
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
  };

  return (
    <div className="fixed inset-0 z-200 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-lg bg-surface-dark border border-line rounded-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Border glow */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-brand to-red-bright" />

        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-display font-bold text-xl text-ink">Solicitar Orçamento</h3>
            <button 
              onClick={onClose}
              className="text-ink-dim hover:text-ink transition-colors p-1 hover:bg-line rounded-full"
            >
              <X size={20} />
            </button>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-red-dim border border-red-brand/40 rounded-full flex items-center justify-center mb-4 text-red-bright animate-bounce">
                <Check size={32} />
              </div>
              <h4 className="font-display font-bold text-lg text-ink mb-2">Solicitação enviada!</h4>
              <p className="text-ink-dim text-sm max-w-sm mb-6">
                Estamos te direcionando para o WhatsApp do Geovani Neumann para concluir o atendimento.
              </p>
              <div className="w-8 h-8 border-2 border-red-brand border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs text-ink-dim uppercase tracking-wider mb-1">
                  Seu Nome
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: João Silva"
                  className="w-full bg-black/40 border border-line rounded px-3 py-2 text-ink placeholder-ink-faint focus:outline-none focus:border-red-bright text-sm"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-ink-dim uppercase tracking-wider mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="joao@empresa.com"
                    className="w-full bg-black/40 border border-line rounded px-3 py-2 text-ink placeholder-ink-faint focus:outline-none focus:border-red-bright text-sm"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-ink-dim uppercase tracking-wider mb-1">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(51) 99999-9999"
                    className="w-full bg-black/40 border border-line rounded px-3 py-2 text-ink placeholder-ink-faint focus:outline-none focus:border-red-bright text-sm"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-ink-dim uppercase tracking-wider mb-1">
                  Tipo de Projeto
                </label>
                <select
                  className="w-full bg-surface-2 border border-line rounded px-3 py-2 text-ink focus:outline-none focus:border-red-bright text-sm cursor-pointer"
                  value={formData.tipoProjeto}
                  onChange={(e) => setFormData({ ...formData, tipoProjeto: e.target.value })}
                >
                  <option value="landing-page">Landing Page Premium</option>
                  <option value="site-institucional">Site Institucional Completo</option>
                  <option value="sistema-customizado">Sistema Web / Plataforma SaaS</option>
                  <option value="outro">Outro Projeto Sob Medida</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-xs text-ink-dim uppercase tracking-wider mb-1">
                  Conte um pouco sobre o projeto
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Qual é o seu negócio e qual o principal objetivo deste projeto?"
                  className="w-full bg-black/40 border border-line rounded px-3 py-2 text-ink placeholder-ink-faint focus:outline-none focus:border-red-bright text-sm resize-none"
                  value={formData.detalhes}
                  onChange={(e) => setFormData({ ...formData, detalhes: e.target.value })}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-red-brand hover:bg-red-bright text-white py-3 rounded font-semibold text-sm transition-all shadow-lg hover:shadow-red-brand/40 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Confirmar e Falar no WhatsApp
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
