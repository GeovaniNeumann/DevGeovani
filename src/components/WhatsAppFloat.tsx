import React from "react";

export default function WhatsAppFloat() {
  const handleWA = () => {
    const text = "Olá Geovani! Vi seu portfólio e gostaria de solicitar um orçamento para o meu projeto.";
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/5541997552818?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button 
      onClick={handleWA}
      className="wa-float fixed bottom-6 right-6 z-150 flex items-center gap-3 bg-red-brand hover:bg-red-bright text-white px-5 py-3.5 rounded-full font-bold text-sm shadow-xl hover:shadow-red-brand/40 animate-float-pulse transition-all cursor-pointer group"
      aria-label="Falar no WhatsApp"
    >
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.94.56 3.76 1.55 5.3L2 22l4.92-1.65a9.86 9.86 0 0 0 5.12 1.4h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.05h-.01a8.17 8.17 0 0 1-4.16-1.14l-.3-.18-3.09 1.04 1.06-3.01-.2-.31a8.13 8.13 0 0 1-1.25-4.34c0-4.51 3.67-8.18 8.19-8.18a8.13 8.13 0 0 1 8.18 8.18c0 4.51-3.67 8.18-8.18 8.18Zm4.49-6.13c-.25-.12-1.45-.71-1.67-.8-.22-.08-.39-.12-.55.13-.16.24-.63.79-.78.95-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.51.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.08-.18.04-.33-.04-.46-.08-.12-.5-1.2-.69-1.65-.18-.43-.36-.37-.5-.38-.13 0-.28-.01-.43-.01-.15 0-.39.06-.6.3-.21.24-.8.78-.8 1.91s.82 2.21.93 2.36c.12.16 1.62 2.48 3.94 3.38 2.32.9 2.32.6 2.74.56.42-.03 1.36-.55 1.55-1.09.19-.53.19-.99.13-1.09-.06-.1-.22-.16-.47-.28Z" />
      </svg>
      <span className="hidden sm:inline font-mono tracking-wider group-hover:translate-x-0.5 transition-transform">
        FALAR NO WHATSAPP
      </span>
    </button>
  );
}
