import React, { useState, useEffect, memo, useCallback } from "react";
import { Terminal as TerminalIcon, Sparkles } from "lucide-react";

const Terminal = memo(() => {
  const [typedCode, setTypedCode] = useState("");
  const codeSnippet = `// Geovani Neumann — High Performance Web Systems
import { NextPage } from "next";
import { database } from "@/lib/db";
import { cache } from "react";

export const getMetrics = cache(async () => {
  return await database.select().from("sales").limit(10);
});

export default async function FastSalesPage() {
  const data = await getMetrics();
  
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <h1 className="text-4xl font-bold tracking-tight">
        Performance that converts.
      </h1>
      <Dashboard data={data} speed="99.8ms" />
    </main>
  );
}`;

  useEffect(() => {
    let index = 0;
    let timeoutId: NodeJS.Timeout;
    
    const typeNextChar = () => {
      setTypedCode((prev) => prev + codeSnippet.charAt(index));
      index++;
      if (index < codeSnippet.length) {
        timeoutId = setTimeout(typeNextChar, 30);
      } else {
        setTimeout(() => {
          setTypedCode("");
          index = 0;
          timeoutId = setTimeout(typeNextChar, 500);
        }, 5000);
      }
    };
    
    timeoutId = setTimeout(typeNextChar, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  const renderFormattedCode = useCallback(() => {
    const lines = typedCode.split("\n");
    return lines.map((line, idx) => {
      if (line.startsWith("//")) {
        return <div key={idx} className="text-gray-500">{line}</div>;
      }
      
      const words = line.split(/(\s+|=|\{|\}|\(|\)|"|'|;|,|\.|=>)/);
      const formattedWords = words.map((word, wIdx) => {
        if (["import", "from", "export", "async", "const", "await", "return", "default", "function"].includes(word)) {
          return <span key={wIdx} className="text-red-400">{word}</span>;
        }
        if (["NextPage", "FastSalesPage", "Dashboard"].includes(word)) {
          return <span key={wIdx} className="text-blue-400">{word}</span>;
        }
        if (word.startsWith('"') || word.startsWith("'") || word.includes('metrics') || word.includes('sales')) {
          return <span key={wIdx} className="text-yellow-400">{word}</span>;
        }
        if (["getMetrics", "database", "select", "from", "limit"].includes(word)) {
          return <span key={wIdx} className="text-blue-400">{word}</span>;
        }
        return word;
      });

      return (
        <div key={idx} className="min-h-[1.5rem]">
          <span className="text-gray-600 select-none mr-4 w-4 inline-block text-right">{idx + 1}</span>
          {formattedWords}
        </div>
      );
    });
  }, [typedCode]);

  return (
    <section className="py-20 bg-[#111111] border-y border-white/10" id="sobre">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="bg-neutral-950 border border-white/10 rounded-lg overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 bg-neutral-900 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-2 font-mono text-xs text-gray-500">geovani-neumann.ts</span>
              </div>
              <div className="flex items-center gap-1.5 text-red-400 font-mono text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
                LIVE DEV
              </div>
            </div>
            
            <div className="p-6 font-mono text-[13px] leading-relaxed overflow-x-auto min-h-[360px] text-gray-400 selection:bg-red-500">
              {renderFormattedCode()}
              <span className="inline-block w-2 h-4 bg-red-400 animate-blink ml-1 align-middle" />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full mb-4">
              <TerminalIcon size={14} />
              CÓDIGO PURO, VELOCIDADE MÁXIMA
            </div>
            <h2 className="font-bold text-3xl sm:text-4xl text-white leading-tight mb-6">
              Por que código sob medida supera qualquer criador de site?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Plataformas como WordPress, Elementor ou Wix injetam toneladas de arquivos desnecessários e scripts lentos nas suas páginas. Eu programo sistemas rápidos, seguros e limpos do zero, usando tecnologias de ponta.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 mt-1">
                  <Sparkles size={14} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Super Performance</h4>
                  <p className="text-gray-400 text-sm mt-0.5">Sites ultrarrápidos melhoram seu posicionamento orgânico no Google e reduzem rejeição.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 mt-1">
                  <Sparkles size={14} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Zero Dependência de Plugins</h4>
                  <p className="text-gray-400 text-sm mt-0.5">Esqueça problemas de segurança e atualizações que quebram o visual do seu site.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 mt-1">
                  <Sparkles size={14} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Arquitetura Escalável</h4>
                  <p className="text-gray-400 text-sm mt-0.5">Seu site ou sistema preparado para crescer e receber milhares de acessos sem travar.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
});

Terminal.displayName = 'Terminal';

export default Terminal;