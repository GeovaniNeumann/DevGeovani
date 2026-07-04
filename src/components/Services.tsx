import React from "react";
import { services } from "../data";
import { Zap, Code, ShieldCheck } from "lucide-react";

export default function Services() {
  const getIcon = (id: string) => {
    switch (id) {
      case "landing-page":
        return <Zap className="text-red-bright" size={24} />;
      case "web-systems":
        return <Code className="text-red-bright" size={24} />;
      case "ecommerce":
        return <ShieldCheck className="text-red-bright" size={24} />;
      default:
        return <Zap className="text-red-bright" size={24} />;
    }
  };

  return (
    <section className="py-24 bg-black" id="servicos">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="section-head max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-red-bright uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-bright" />
            Especialidades
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mb-4">
            Soluções digitais de alta performance focadas em resultados
          </h2>
          <p className="text-ink-dim text-lg">
            Sistemas e sites projetados com foco em conversão de leads, usabilidade impecável e velocidade absurda.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line rounded-lg overflow-hidden">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card group bg-bg-dark hover:bg-surface-dark p-10 relative overflow-hidden transition-all duration-300"
            >
              {/* Border shine effect */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-brand to-red-bright group-hover:w-full transition-all duration-500 ease-out" />
              
              <div className="flex justify-between items-start mb-8">
                <span className="font-mono text-xs font-bold text-red-bright/85 tracking-widest uppercase">
                  SERV // {service.number}
                </span>
                <div className="p-3 bg-red-dim/25 border border-red-brand/10 rounded-lg group-hover:border-red-brand/30 transition-colors">
                  {getIcon(service.id)}
                </div>
              </div>

              <h3 className="font-display font-bold text-xl text-ink mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              
              <p className="text-ink-dim text-sm leading-relaxed group-hover:text-ink transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
