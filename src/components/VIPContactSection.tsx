import { MessageCircle } from "lucide-react";

export const VIPContactSection = () => {
  const handleContact = () => {
    console.log("Abrir WhatsApp ou formulário");
  };

  return (
    <section id="contato" className="relative py-8 md:py-12 px-4 bg-black scroll-mt-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Golden border glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-3xl blur opacity-20"></div>
          
          {/* Main container */}
          <div className="relative bg-black border-2 border-gold/60 rounded-3xl p-6 md:p-10 text-center space-y-4 md:space-y-6">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-white">Ainda tem </span>
              <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
                dúvidas?
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-2 md:space-y-3">
              <p className="text-base md:text-lg text-gray-400 leading-relaxed px-4">
                Nossa equipe está pronta para tirar todas as suas dúvidas sobre os nossos produtos.
              </p>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed px-4">
                Basta clicar no link que a nossa equipe especializada irá conversar com você!
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center pt-2">
              <div className="relative">
                {/* Animated glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-full opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500 animate-pulse"></div>
                
                <button
                  onClick={handleContact}
                  className="group relative px-8 md:px-10 py-3 md:py-4 text-white font-bold text-base md:text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light"></div>
                  <div className="absolute inset-[2px] bg-black rounded-full transition-opacity group-hover:opacity-0"></div>
                  <span className="relative z-10 flex items-center gap-3 text-gold group-hover:text-black transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    Fale com nossa equipe
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
