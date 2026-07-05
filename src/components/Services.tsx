import React, { memo, useMemo } from "react";
import { services } from "../data";
import { Zap, Code, ShieldCheck } from "lucide-react";

const Services = memo(() => {
  const getIcon = useMemo(() => {
    return (id: string) => {
      switch (id) {
        case "landing-page":
          return <Zap className="text-red-400" size={24} />;
        case "web-systems":
          return <Code className="text-red-400" size={24} />;
        case "ecommerce":
          return <ShieldCheck className="text-red-400" size={24} />;
        default:
          return <Zap className="text-red-400" size={24} />;
      }
    };
  }, []);

  return (
    <section className="py-24 bg-black" id="servicos">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-red-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            Especialidades
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl text-white mb-4">
            Soluções digitais de alta performance focadas em resultados
          </h2>
          <p className="text-gray-400 text-lg">
            Sistemas e sites projetados com foco em conversão de leads, usabilidade impecável e velocidade absurda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-[#0a0a0a] hover:bg-[#111111] p-10 relative overflow-hidden transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400 group-hover:w-full transition-all duration-500 ease-out" />
              
              <div className="flex justify-between items-start mb-8">
                <span className="font-mono text-xs font-bold text-red-400/85 tracking-widest uppercase">
                  SERV // {service.number}
                </span>
                <div className="p-3 bg-red-500/20 border border-red-500/10 rounded-lg group-hover:border-red-500/30 transition-colors">
                  {getIcon(service.id)}
                </div>
              </div>

              <h3 className="font-bold text-xl text-white mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';

export default Services;