import React, { memo, useCallback, useMemo } from "react";
import { pricingPlans } from "../data";
import { Check, Star } from "lucide-react";

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

const Pricing = memo(({ onSelectPlan }: PricingProps) => {
  const plans = useMemo(() => pricingPlans, []);

  const handleSelectPlan = useCallback((planName: string) => {
    onSelectPlan(planName);
  }, [onSelectPlan]);

  return (
    <section className="py-24 bg-black" id="precos">
      <div className="max-w-[1240px] mx-auto px-8">
        
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-red-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            Transparência
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl text-white mb-4">
            Investimento sob medida para o seu momento
          </h2>
          <p className="text-gray-400 text-lg">
            Projetos precificados sob escopo definido de acordo com a complexidade do seu negócio. Transparência total, sem surpresas desagradáveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`border rounded-lg p-8 flex flex-col justify-between transition-all duration-300 relative hover:-translate-y-1.5 ${
                plan.isFeatured 
                  ? "border-red-500 bg-gradient-to-b from-red-500/10 to-transparent shadow-xl shadow-red-500/5" 
                  : "border-white/10 bg-[#0a0a0a]/40"
              }`}
            >
              {plan.isFeatured && (
                <div className="absolute -top-3.5 left-8 bg-red-500 text-white text-[10px] font-mono font-bold uppercase tracking-wider py-1 px-3.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-red-500/40">
                  <Star size={10} fill="currentColor" />
                  MAIS ESCOLHIDO
                </div>
              )}

              <div>
                <div className="font-bold text-xl text-white mb-1">
                  {plan.name}
                </div>
                <div className="text-gray-500 text-xs mb-6">
                  {plan.description}
                </div>
                
                <div className="font-bold text-3xl sm:text-4xl text-white mb-1">
                  {plan.price}
                </div>
                <div className="font-mono text-[10px] text-red-400 uppercase tracking-wider mb-8">
                  {plan.note}
                </div>

                <div className="h-px bg-white/10 w-full mb-8" />

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-400 leading-snug">
                      <Check size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleSelectPlan(plan.name)}
                className={`w-full py-3.5 px-4 rounded text-center text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  plan.isFeatured
                    ? "bg-red-500 text-white hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30"
                    : "bg-[#0a0a0a] border border-white/10 text-white hover:border-red-400"
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
});

Pricing.displayName = 'Pricing';

export default Pricing;