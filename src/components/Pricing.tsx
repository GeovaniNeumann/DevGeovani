import React from "react";
import { pricingPlans } from "../data";
import { Check, Star } from "lucide-react";

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  return (
    <section className="py-24 bg-black" id="precos">
      <div className="max-w-[1240px] mx-auto px-8">
        
        <div className="section-head max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-red-bright uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-bright" />
            Transparência
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mb-4">
            Investimento sob medida para o seu momento
          </h2>
          <p className="text-ink-dim text-lg">
            Projetos precificados sob escopo definido de acordo com a complexidade do seu negócio. Transparência total, sem surpresas desagradáveis.
          </p>
        </div>

        <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`price-card border rounded-lg p-8 flex flex-col justify-between transition-all duration-300 relative hover:-translate-y-1.5 ${
                plan.isFeatured 
                  ? "border-red-brand bg-gradient-to-b from-red-dim/10 to-transparent shadow-xl shadow-red-brand/5" 
                  : "border-line bg-surface-dark/40"
              }`}
            >
              {plan.isFeatured && (
                <div className="absolute -top-3.5 left-8 bg-red-brand text-white text-[10px] font-mono font-bold uppercase tracking-wider py-1 px-3.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-red-brand/40">
                  <Star size={10} fill="currentColor" />
                  MAIS ESCOLHIDO
                </div>
              )}

              <div>
                <div className="pname font-display font-bold text-xl text-ink mb-1">
                  {plan.name}
                </div>
                <div className="pdesc text-ink-faint text-xs mb-6">
                  {plan.description}
                </div>
                
                <div className="pval font-display font-bold text-3xl sm:text-4xl text-white mb-1">
                  {plan.price}
                </div>
                <div className="pnote font-mono text-[10px] text-red-bright uppercase tracking-wider mb-8">
                  {plan.note}
                </div>

                <div className="h-px bg-line w-full mb-8" />

                <ul className="price-feats space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-ink-dim leading-snug">
                      <Check size={16} className="text-red-bright flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`price-cta w-full py-3.5 px-4 rounded text-center text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  plan.isFeatured
                    ? "bg-red-brand text-white hover:bg-red-bright hover:shadow-lg hover:shadow-red-brand/30"
                    : "bg-surface-dark border border-line text-ink hover:border-red-bright"
                }`}
              >
                Solicitar Orçamento
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
