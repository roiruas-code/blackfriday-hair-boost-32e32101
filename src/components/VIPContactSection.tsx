import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const VIPContactSection = () => {
  const handleContact = () => {
    console.log("Abrir WhatsApp ou formulário");
  };

  return (
    <section id="contato" className="relative py-4 md:py-6 px-3 bg-black scroll-mt-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Golden border glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-3xl blur opacity-20"></div>
          
          {/* Main container */}
          <div className="relative bg-black border-2 border-gold/60 rounded-3xl p-4 md:p-8 text-center space-y-3 md:space-y-4">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-white">Ainda tem </span>
              <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
                dúvidas?
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-1 md:space-y-2">
              <p className="text-base md:text-lg text-gray-400 leading-relaxed px-4">
                Nossa equipe está pronta para tirar todas as suas dúvidas sobre os nossos produtos.
              </p>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed px-4">
                Basta clicar no link que a nossa equipe especializada irá conversar com você!
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center pt-1">
              <Button
                onClick={handleContact}
                variant="cta"
                size="lg"
                className="px-8 md:px-10 py-6 md:py-7 text-base md:text-lg font-bold rounded-full"
              >
                <MessageCircle className="w-5 h-5" />
                Fale com nossa equipe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
