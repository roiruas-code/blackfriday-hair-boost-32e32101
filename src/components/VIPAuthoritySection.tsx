import { Button } from "@/components/ui/button";
import { Award, CheckCircle2, Users } from "lucide-react";
import drAfonsoImage from "@/assets/dr-afonso-authority.png";

export const VIPAuthoritySection = () => {
  const handleCTA = () => {
    console.log("Redirecionar para grupo VIP");
  };

  return (
    <section className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-black via-primary/10 to-black overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              Conheça o especialista
            </span>{" "}
            <span className="text-white">por trás da Phoenix Hair</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
          {/* Doctor Image */}
          <div className="flex justify-center md:justify-end animate-scale-in">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gold via-gold-light to-gold rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Rotating border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-gold via-gold-light to-gold rounded-full opacity-40 animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gold shadow-2xl shadow-gold/50 group-hover:scale-105 transition-transform duration-500">
                <img
                  src={drAfonsoImage}
                  alt="Dr. Afonso Cruz - Especialista em Tricologia"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Seal */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-gold via-gold-light to-gold p-3 rounded-full shadow-xl animate-bounce">
                <Award className="w-8 h-8 text-black" />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="text-left space-y-6 animate-fade-in">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Dr. Afonso Cruz
              </h3>
              <p className="text-gold text-lg md:text-xl font-semibold">
                Especialista em Tricologia
              </p>
            </div>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Com mais de 15 anos de experiência dedicados ao tratamento capilar, 
              o Dr. Afonso Cruz é referência nacional em tricologia e tratamentos 
              para queda de cabelo.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-gray-300">
                  Formado pelas melhores instituições de dermatologia do país
                </p>
              </div>
              <div className="flex items-start gap-3 group">
                <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-gray-300">
                  Desenvolvedor da fórmula exclusiva Phoenix Hair
                </p>
              </div>
              <div className="flex items-start gap-3 group">
                <Users className="w-6 h-6 text-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-gray-300">
                  <span className="text-gold font-bold">+50.000 pacientes</span> tratados com sucesso
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gold/10 to-transparent border-l-4 border-gold p-4 rounded-r-lg">
              <p className="text-white italic">
                "Minha missão é devolver a autoestima e confiança através de 
                tratamentos capilares eficazes e cientificamente comprovados."
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fade-in">
          <Button
            onClick={handleCTA}
            size="lg"
            className="w-full md:w-auto bg-gradient-to-r from-gold via-gold-light to-gold hover:from-gold-dark hover:via-gold hover:to-gold-light text-black font-bold text-lg md:text-xl px-12 md:px-16 py-6 md:py-8 rounded-full shadow-2xl shadow-gold/50 hover:shadow-gold/80 hover:scale-105 transition-all duration-300 animate-pulse"
          >
            Quero garantir minha vaga no grupo VIP
          </Button>
        </div>
      </div>
    </section>
  );
};
