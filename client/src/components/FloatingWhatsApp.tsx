import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511983598420?text=Olá%20Rafael%2C%20quero%20conhecer%20o%20Método%20Xô%20Gordura!";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Falar com Rafael no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
