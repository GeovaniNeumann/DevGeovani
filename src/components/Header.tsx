import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { Menu, X } from "lucide-react";

export interface HeaderProps {
  onOpenContact: () => void;
  onMenuToggle?: (isOpen: boolean) => void;
}

export default function Header({ onOpenContact, onMenuToggle }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const menuItems = useMemo(() => [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#processo", label: "Processo" },
    { href: "#precos", label: "Investimento" },
    { href: "#faq", label: "FAQ" }
  ], []);

  useEffect(() => {
    if (onMenuToggle) {
      onMenuToggle(isOpen);
    }
  }, [isOpen, onMenuToggle]);

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  const handleWhatsApp = useCallback(() => {
    const text = "Olá Geovani! Vim pelo site e gostaria de solicitar um orçamento para o meu projeto.";
    const url = `https://wa.me/5541997552818?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleMenuItemClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();

    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - headerHeight,
          behavior: "smooth"
        });
      }
    }, 150);
  }, [closeMenu]);

  const handleMobileContact = useCallback(() => {
    closeMenu();
    handleWhatsApp();
  }, [closeMenu, handleWhatsApp]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-black/95 backdrop-blur-md border-b border-white/10 py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 flex items-center justify-between">
          <a
            href="#top"
            className="font-bold text-lg text-white flex items-center gap-2 hover:text-red-400 transition-colors flex-shrink-0"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              closeMenu();
            }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(255,77,77,0.5)] flex-shrink-0" />
            <span className="hidden xs:inline">Geovani Neumann</span>
            <span className="xs:hidden">Geovani Neumann</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                onClick={(e) => handleMenuItemClick(e, item.href)}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <button
            onClick={handleWhatsApp}
            className="hidden md:flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-red-500/30"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.94.56 3.76 1.55 5.3L2 22l4.92-1.65a9.86 9.86 0 0 0 5.12 1.4h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.05h-.01a8.17 8.17 0 0 1-4.16-1.14l-.3-.18-3.09 1.04 1.06-3.01-.2-.31a8.13 8.13 0 0 1-1.25-4.34c0-4.51 3.67-8.18 8.19-8.18a8.13 8.13 0 0 1 8.18 8.18c0 4.51-3.67 8.18-8.18 8.18zm4.49-6.13c-.25-.12-1.45-.71-1.67-.8-.22-.08-.39-.12-.55.13-.16.24-.63.79-.78.95-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.51.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.08-.18.04-.33-.04-.46-.08-.12-.5-1.2-.69-1.65-.18-.43-.36-.37-.5-.38-.13 0-.28-.01-.43-.01-.15 0-.39.06-.6.3-.21.24-.8.78-.8 1.91s.82 2.21.93 2.36c.12.16 1.62 2.48 3.94 3.38 2.32.9 2.32.6 2.74.56.42-.03 1.36-.55 1.55-1.09.19-.53.19-.99.13-1.09-.06-.1-.22-.16-.47-.28Z" />
            </svg>
            ORÇAMENTO
          </button>

          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="md:hidden text-white p-2 -mr-2 z-50 relative"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div
        className={`
          fixed inset-0 z-40 bg-black/80 backdrop-blur-sm
          transition-opacity duration-300 md:hidden
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={closeMenu}
      />

      <div
        ref={menuRef}
        className={`
          fixed top-0 right-0 h-full w-[85%] max-w-sm z-40
          bg-black/95 backdrop-blur-md border-l border-white/10
          transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
          md:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
        style={{
          paddingTop: "80px",
        }}
      >
        <div className="h-full px-6 py-8 flex flex-col">
          <nav className="flex-1 space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center justify-between py-4 px-4 text-lg text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all group"
                onClick={(e) => handleMenuItemClick(e, item.href)}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span className="font-medium">{item.label}</span>
                <span className="text-gray-500 group-hover:text-red-400 group-hover:translate-x-1 transition-all text-sm">
                  →
                </span>
              </a>
            ))}
          </nav>

          <div className="border-t border-white/10 pt-6 space-y-4">
            <p className="text-xs text-gray-400 text-center">
              Vamos conversar?
            </p>
            <button
              onClick={handleMobileContact}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3.5 rounded-xl font-semibold text-center transition-all hover:shadow-lg hover:shadow-red-500/30 active:scale-[0.98] flex items-center justify-center gap-2 text-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.94.56 3.76 1.55 5.3L2 22l4.92-1.65a9.86 9.86 0 0 0 5.12 1.4h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.05h-.01a8.17 8.17 0 0 1-4.16-1.14l-.3-.18-3.09 1.04 1.06-3.01-.2-.31a8.13 8.13 0 0 1-1.25-4.34c0-4.51 3.67-8.18 8.19-8.18a8.13 8.13 0 0 1 8.18 8.18c0 4.51-3.67 8.18-8.18 8.18zm4.49-6.13c-.25-.12-1.45-.71-1.67-.8-.22-.08-.39-.12-.55.13-.16.24-.63.79-.78.95-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.51.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.08-.18.04-.33-.04-.46-.08-.12-.5-1.2-.69-1.65-.18-.43-.36-.37-.5-.38-.13 0-.28-.01-.43-.01-.15 0-.39.06-.6.3-.21.24-.8.78-.8 1.91s.82 2.21.93 2.36c.12.16 1.62 2.48 3.94 3.38 2.32.9 2.32.6 2.74.56.42-.03 1.36-.55 1.55-1.09.19-.53.19-.99.13-1.09-.06-.1-.22-.16-.47-.28Z" />
              </svg>
              FALAR COM GEOVANI
            </button>
            <p className="text-[10px] text-gray-500 text-center">
              Sites e sistemas web sob medida
            </p>
          </div>
        </div>
      </div>
    </>
  );
}