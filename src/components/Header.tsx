import React, { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenContact: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Scroll handler com throttle para performance
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;
    const handleScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);
        timeoutId = undefined;
      }, 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const scrollPositionRef = useRef(0);

  // Bloquear scroll do body quando menu abre — preservando a posição de rolagem
  // IMPORTANTE: a posição fica guardada num ref (não em document.body.style.top),
  // porque a cleanup deste mesmo efeito roda ANTES do branch de fechamento
  // (troca de true -> false), e já zera o style.top — se lêssemos de lá,
  // o valor sempre chegaria vazio e o scroll nunca seria restaurado.
  useEffect(() => {
    if (mobileMenuOpen) {
      scrollPositionRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPositionRef.current);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, [mobileMenuOpen]);

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  // Fechar menu ao pressionar ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [mobileMenuOpen]);

  const handleWA = useCallback(() => {
    const text = "Olá Geovani! Vim pelo site e gostaria de solicitar um orçamento para o meu projeto.";
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/5541997552818?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  }, []);

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const handleMenuItemClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');

    // Fecha o menu primeiro para o body voltar a ter scroll liberado
    // (enquanto o drawer está aberto, body fica com overflow:hidden e
    // position:fixed, então scrollTo() chamado antes disso não faz nada)
    closeMenu();

    if (href) {
      // Espera o unlock do body (useEffect do mobileMenuOpen) ser aplicado
      // antes de rolar a página até a seção
      requestAnimationFrame(() => {
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            const headerHeight = document.querySelector('nav')?.offsetHeight || 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 50);
      });
    }
  }, [closeMenu]);

  const menuItems = [
    { href: "#sobre", label: "SOBRE" },
    { href: "#servicos", label: "SERVIÇOS" },
    { href: "#processo", label: "PROCESSO" },
    { href: "#precos", label: "INVESTIMENTO" },
    { href: "#faq", label: "FAQ" }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/95 border-b border-line/50 py-3 backdrop-blur-md" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a 
          href="#top" 
          className="font-display font-bold text-lg text-white flex items-center gap-2 hover:text-red-bright transition-colors flex-shrink-0"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            closeMenu();
          }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-red-brand shadow-[0_0_10px_#ff4d4d] flex-shrink-0" />
          Geovani Neumann
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10 font-mono text-xs font-semibold tracking-wider text-ink-dim">
          {menuItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="relative group hover:text-white transition-colors py-1"
              onClick={handleMenuItemClick}
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-bright transition-all group-hover:w-full duration-300" />
            </a>
          ))}
        </div>

        {/* Desktop Action Button */}
        <div className="hidden md:block flex-shrink-0">
          <button 
            onClick={handleWA}
            className="border border-red-brand hover:bg-red-brand text-white text-xs font-mono font-bold tracking-widest px-4 lg:px-5 py-2.5 rounded transition-all shadow-md hover:shadow-red-brand/30 flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.94.56 3.76 1.55 5.3L2 22l4.92-1.65a9.86 9.86 0 0 0 5.12 1.4h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.05h-.01a8.17 8.17 0 0 1-4.16-1.14l-.3-.18-3.09 1.04 1.06-3.01-.2-.31a8.13 8.13 0 0 1-1.25-4.34c0-4.51 3.67-8.18 8.19-8.18a8.13 8.13 0 0 1 8.18 8.18c0 4.51-3.67 8.18-8.18 8.18Zm4.49-6.13c-.25-.12-1.45-.71-1.67-.8-.22-.08-.39-.12-.55.13-.16.24-.63.79-.78.95-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.51.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.08-.18.04-.33-.04-.46-.08-.12-.5-1.2-.69-1.65-.18-.43-.36-.37-.5-.38-.13 0-.28-.01-.43-.01-.15 0-.39.06-.6.3-.21.24-.8.78-.8 1.91s.82 2.21.93 2.36c.12.16 1.62 2.48 3.94 3.38 2.32.9 2.32.6 2.74.56.42-.03 1.36-.55 1.55-1.09.19-.53.19-.99.13-1.09-.06-.1-.22-.16-.47-.28Z" />
            </svg>
            ORÇAMENTO
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button 
          ref={buttonRef}
          onClick={toggleMenu}
          className="md:hidden text-ink-dim hover:text-white transition-colors p-2 -mr-2 z-50 relative"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer - Abre instantâneo (sem flash da imagem por trás), fecha com fade suave */}
      <div
        ref={menuRef}
        className={`
          md:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-40
          ease-in-out
          ${mobileMenuOpen 
            ? 'opacity-100 visible pointer-events-auto duration-[0ms]' 
            : 'opacity-0 invisible pointer-events-none duration-300'}
        `}
        style={{
          top: isScrolled ? '60px' : '72px',
          transitionProperty: 'opacity, visibility',
        }}
      >
        <div className={`
          h-full px-8 py-8 flex flex-col gap-4 font-mono text-sm font-semibold tracking-wider text-ink-dim
          transition-all duration-300 ease-in-out
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-8'}
        `}>
          {menuItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              onClick={handleMenuItemClick}
              className="hover:text-white transition-colors border-b border-line/40 pb-4 text-base active:text-red-bright"
            >
              {item.label}
            </a>
          ))}
          
          <button 
            onClick={() => {
              closeMenu();
              handleWA();
            }}
            className="mt-2 bg-red-brand hover:bg-red-bright text-white py-4 rounded-lg font-bold text-center tracking-wider hover:shadow-lg hover:shadow-red-brand/30 transition-all cursor-pointer active:scale-95"
          >
            SOLICITAR ORÇAMENTO
          </button>

          {/* Versão compacta da descrição no mobile */}
          <p className="text-xs text-ink-dim/60 mt-auto text-center border-t border-line/40 pt-6">
            Sites e sistemas web sob medida
          </p>
        </div>
      </div>
    </nav>
  );
}