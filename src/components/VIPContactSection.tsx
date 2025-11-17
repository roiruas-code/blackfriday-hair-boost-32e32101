import { MessageCircle } from "lucide-react";

export const VIPContactSection = () => {
  const handleContact = () => {
    console.log("Abrir WhatsApp ou formulário");
  };

  return (
    <section className="relative py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="text-white">Ainda tem </span>
          <span className="bg-gradient-to-r from-pink via-pink-light to-pink bg-clip-text text-transparent">
            dúvidas?
          </span>
        </h2>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Nossa equipe está pronta para tirar todas as suas dúvidas sobre os nossos produtos.
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Basta clicar no link que a nossa equipe especializada irá conversar com você!
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Animated glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-pink via-orange to-pink rounded-full opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500 animate-pulse"></div>
            
            <button
              onClick={handleContact}
              className="group relative px-10 py-4 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-pink via-orange to-pink"></div>
              <div className="absolute inset-[2px] bg-black rounded-full transition-opacity group-hover:opacity-0"></div>
              <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
                Fale com nossa equipe
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
