import { Instagram, MessageCircle } from "lucide-react";
// Importação da logo local adicionada aqui
import logoRafael from "../assets/Logo_RafaelGreco.png";

const WHATSAPP_LINK = "https://wa.me/5511983598420";
const INSTAGRAM_LINK = "https://www.instagram.com/rafagrecopersonal/";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-red-600/20 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img
                src={logoRafael}
                alt="Rafael Greco"
                className="h-24 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm pl-1">
              Especialista em emagrecimento feminino
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#metodo" className="text-gray-400 hover:text-red-500 transition">
                  Método Xô Gordura
                </a>
              </li>
              <li>
                <a href="#acompanhamento" className="text-gray-400 hover:text-red-500 transition">
                  Acompanhamento VIP
                </a>
              </li>
              <li>
                <a href="#desafio" className="text-gray-400 hover:text-red-500 transition">
                  Desafio
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-red-500 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-red-600/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© {currentYear} Rafael Greco Personal Trainer. Todos os direitos reservados. Feito por Verse One Media</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-red-500 transition">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-red-500 transition">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}