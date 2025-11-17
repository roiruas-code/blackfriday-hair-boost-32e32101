import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import phoenixLogo from "@/assets/phoenix-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6">
          {/* Brand Section */}
          <div className="space-y-3">
            <img 
              src={phoenixLogo} 
              alt="Phoenix Hair" 
              className="h-10 w-auto opacity-80"
            />
            <p className="text-gray-500 text-sm leading-relaxed">
              A marca referência em suplementação capilar. Resultados comprovados 
              por milhares de clientes satisfeitos.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-9 h-9 bg-white/5 hover:bg-gold/20 rounded-full flex items-center justify-center transition-all hover:scale-110 border border-white/5"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-400 hover:text-gold transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-white/5 hover:bg-gold/20 rounded-full flex items-center justify-center transition-all hover:scale-110 border border-white/5"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-gray-400 hover:text-gold transition-colors" />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-base">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-gold transition-colors text-sm">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gold transition-colors text-sm">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gold transition-colors text-sm">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gold transition-colors text-sm">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-base">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span>contato@phoenixhair.com.br</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>(11) 9 9999-9999</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span>São Paulo, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          {/* Legal Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-3">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
              <a 
                href="#" 
                className="text-gray-500 hover:text-gold transition-colors text-sm"
              >
                Política de Privacidade
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-gold transition-colors text-sm"
              >
                Termos de Uso
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-gold transition-colors text-sm"
              >
                Política de Reembolso
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Phoenix Hair. Todos os direitos reservados.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              CNPJ: 00.000.000/0001-00 | Produto aprovado pela ANVISA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
