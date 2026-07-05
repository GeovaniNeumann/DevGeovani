import React, { memo } from "react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenContact: () => void;
}

const Hero = memo(({ onOpenContact }: HeroProps) => {
  return (
    <header className="hero relative min-h-screen flex items-end lg:items-center justify-center pt-24 pb-10 sm:pb-16 overflow-hidden z-1 bg-black" id="top">
      
      {/* Immersive background image - Desktop */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none hidden lg:block">
        <picture>
          <source 
            srcSet="https://i.ibb.co/fYt2NHDp/Chat-GPT-Image-28-de-jun-de-2026-18-55-38.webp" 
            type="image/webp"
          />
          <img 
            src="https://i.ibb.co/fYt2NHDp/Chat-GPT-Image-28-de-jun-de-2026-18-55-38.webp" 
            alt="Geovani Neumann Tech Atmosphere" 
            className="w-full h-full object-cover object-center scale-105 filter brightness-105 contrast-100 saturate-[0.95] transition-all duration-700 opacity-65"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </picture>
      </div>

      {/* Imagem mobile */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none lg:hidden">
        <picture>
          <source 
            srcSet="https://i.ibb.co/93StMBkJ/Sem-nome-1080-x-1350-px-736-x-1308-px-10.webp" 
            type="image/webp"
          />
          <img 
            src="https://i.ibb.co/93StMBkJ/Sem-nome-1080-x-1350-px-736-x-1308-px-10.webp" 
            alt="Geovani Neumann" 
            className="w-full h-full object-cover object-center scale-105 transition-all duration-700"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </picture>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 lg:from-black lg:via-black/70 lg:to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/10 lg:from-black/50 lg:to-black/30" />
        <div className="absolute inset-0 hidden lg:block bg-radial-at-c from-transparent via-black/20 to-black/80" />
      </div>

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        
        <div className="space-y-3 sm:space-y-6 lg:space-y-8 max-w-2xl bg-gradient-to-t from-black/80 via-black/40 to-transparent lg:bg-none rounded-2xl px-1 py-4 sm:p-0 -mx-1">
          
          <div className="hidden lg:inline-flex items-center gap-2.5 font-mono text-xs font-bold text-red-400 uppercase tracking-widest bg-red-500/10 border border-red-500/20 px-3.5 py-1.5 rounded-full backdrop-blur-sm animate-pulse">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            DESENVOLVEDOR NEXT.JS &amp; REACT
          </div>
          
          <p className="lg:hidden text-red-400 font-mono text-xs font-bold tracking-widest uppercase">
            Desenvolvedor Next.js &amp; React
          </p>

          <h1 className="font-bold text-white text-3xl sm:text-4xl md:text-6xl lg:text-[4.4rem] leading-[1.1] lg:leading-[1.05] tracking-tight">
            Sites que carregam <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-red-400">rápido.</span> <br />
            <span className="text-red-500 relative inline-block">
              Vendem
              <span className="absolute -bottom-1.5 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-400 rounded-full" />
            </span> mais.
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg">
            <span className="hidden lg:inline">
              Projeto e construo sites e sistemas web sob medida, rápidos, bonitos e 
              prontos para converter visita em cliente. Sem templates genéricos, sem enrolação.
            </span>
            <span className="lg:hidden">
              Sites e sistemas web sob medida, rápidos e prontos para converter.
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 lg:pt-4">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3.5 sm:py-4.5 rounded font-bold text-xs sm:text-sm tracking-wider shadow-lg hover:shadow-red-500/40 group transition-all duration-300 cursor-pointer w-full sm:w-auto justify-center"
            >
              Solicitar Orçamento
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex sm:grid sm:grid-cols-3 gap-3 sm:gap-6 pt-3 sm:pt-4 lg:pt-8 mt-1 border-t border-white/10 max-w-xl">
            <div className="flex sm:block items-baseline gap-1 sm:space-y-0.5 lg:space-y-1">
              <div className="font-bold text-base sm:text-2xl lg:text-3xl text-white flex items-center gap-1">
                98<span className="text-red-400 font-mono text-sm sm:text-xl">+</span>
              </div>
              <div className="text-[9px] sm:text-[10px] lg:text-xs text-gray-500 font-mono uppercase tracking-wider">
                Performance
              </div>
            </div>
            
            <div className="flex sm:block items-baseline gap-1 sm:space-y-0.5 lg:space-y-1">
              <div className="font-bold text-base sm:text-2xl lg:text-3xl text-white flex items-center gap-1">
                3<span className="text-red-400 font-mono text-sm sm:text-xl">+</span>
              </div>
              <div className="text-[9px] sm:text-[10px] lg:text-xs text-gray-500 font-mono uppercase tracking-wider">
                Anos na Web
              </div>
            </div>

            <div className="flex sm:block items-baseline gap-1 sm:space-y-0.5 lg:space-y-1">
              <div className="font-bold text-base sm:text-2xl lg:text-3xl text-white flex items-center gap-1">
                100<span className="text-red-400 font-mono text-sm sm:text-xl">%</span>
              </div>
              <div className="text-[9px] sm:text-[10px] lg:text-xs text-gray-500 font-mono uppercase tracking-wider">
                Autoral
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-end justify-end h-full min-h-[300px] relative">
          <div className="absolute bottom-12 right-0 flex items-center gap-3 bg-black/50 backdrop-blur-sm border border-white/10 px-4 py-2.5 rounded font-mono text-[10px] tracking-wide text-gray-400">
            <span className="text-white font-semibold">GEOVANI NEUMANN</span>
            <span className="text-gray-500">/</span>
            <span className="text-red-400 flex items-center gap-1.5 font-bold uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-blink" />
              LIVE PORTFOLIO
            </span>
          </div>
        </div>

      </div>
    </header>
  );
});

Hero.displayName = 'Hero';

export default Hero;