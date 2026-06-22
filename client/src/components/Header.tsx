import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import logoRafael from "../assets/Logo_RafaelGreco.png";

const WHATSAPP_LINK = "https://wa.me/555511983598420?text=Olá%20Rafael%2C%20quero%20conhecer%20o%20Método%20Xô%20Gordura!";


export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-600/20">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-3 py-2">
          <img
            src={logoRafael}
            alt="Rafael Greco"
            className="h-20 w-auto md:h-28 object-contain"
          />
        </div>

        {/* CTA Button */}
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <Button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold flex items-center gap-1 md:gap-2 text-xs md:text-sm"
            size="sm"
          >
            <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">Falar com Rafael</span>
            <span className="sm:hidden">Falar</span>
          </Button>
        </a>
      </div>
    </header>
  );
}
