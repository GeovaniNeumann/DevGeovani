import React, { memo } from "react";
import { processSteps } from "../data";
import { Clock } from "lucide-react";

const Process = memo(() => {
  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/10" id="processo">
      <div className="max-w-[1240px] mx-auto px-8">
        
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-red-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            Método de Trabalho
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl text-white mb-4">
            Como funciona a criação do seu projeto
          </h2>
          <p className="text-gray-400 text-lg">
            Um processo transparente, ágil e focado na entrega rápida de resultados, mantendo você informado em cada etapa.
          </p>
        </div>

        <div className="flex flex-col">
          {processSteps.map((step) => (
            <div 
              key={step.id} 
              className="grid grid-cols-1 md:grid-cols-[100px_1fr_200px] gap-8 py-10 border-t border-white/10 last:border-b hover:bg-white/5 px-4 rounded-lg transition-colors"
            >
              <div className="font-mono text-sm text-gray-500 group-hover:text-red-400 font-bold transition-colors">
                ETAPA // {step.number}
              </div>
              
              <div>
                <h3 className="font-bold text-lg sm:text-xl text-white mb-2 group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>

              <div className="flex md:justify-end items-start pt-1 md:pt-0">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-red-400 bg-red-500/15 border border-red-500/10 px-3 py-1.5 rounded">
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
});

Process.displayName = 'Process';

export default Process;