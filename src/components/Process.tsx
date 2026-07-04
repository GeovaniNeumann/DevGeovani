import React from "react";
import { processSteps } from "../data";
import { Clock } from "lucide-react";

export default function Process() {
  return (
    <section className="py-24 bg-surface-dark border-y border-line" id="processo">
      <div className="max-w-[1240px] mx-auto px-8">
        
        <div className="section-head max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-red-bright uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-bright" />
            Método de Trabalho
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mb-4">
            Como funciona a criação do seu projeto
          </h2>
          <p className="text-ink-dim text-lg">
            Um processo transparente, ágil e focado na entrega rápida de resultados, mantendo você informado em cada etapa.
          </p>
        </div>

        <div className="process-list flex flex-col">
          {processSteps.map((step, index) => (
            <div 
              key={step.id} 
              className="process-item grid grid-cols-1 md:grid-cols-[100px_1fr_200px] gap-8 py-10 border-t border-line last:border-b last:border-line group hover:bg-neutral-900/10 px-4 rounded-lg transition-colors"
            >
              <div className="process-num font-mono text-sm text-ink-faint group-hover:text-red-bright font-bold transition-colors">
                ETAPA // {step.number}
              </div>
              
              <div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-ink mb-2 group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-ink-dim text-sm sm:text-base leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>

              <div className="flex md:justify-end items-start pt-1 md:pt-0">
                <span className="ptime inline-flex items-center gap-1.5 font-mono text-xs font-bold text-red-bright bg-red-dim/15 border border-red-brand/10 px-3 py-1.5 rounded">
                  <Clock size={12} />
                  {step.timeframe}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
