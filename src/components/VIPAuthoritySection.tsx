import drAfonsoExpert from "@/assets/dr-afonso-expert.png";
import { Button } from "@/components/ui/button";

export const VIPAuthoritySection = () => {
  const handleCTA = () => {
    console.log("Redirecionar para grupo VIP");
  };

  return (
    <section id="sobre" className="relative py-4 md:py-6 px-3 bg-black scroll-mt-4">
      <div className="max-w-4xl mx-auto">
        {/* Container with golden border */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-3xl blur opacity-20"></div>
          
          {/* Main content */}
          <div className="relative bg-black border-2 border-gold/60 rounded-3xl p-4 md:p-8">
            <div className="space-y-3 md:space-y-4">
              {/* Image in circular frame */}
              <div className="flex justify-center animate-fade-in">
                <div className="relative w-28 h-28 md:w-36 md:h-36">
                  {/* Golden ring */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-gold-dark via-gold to-gold-light opacity-30 blur-md"></div>
                  <div className="absolute -inset-1 rounded-full border-2 border-gold/60"></div>
                  
                  {/* Image */}
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gold/10 to-gold-dark/10">
                    <img 
                      src={drAfonsoExpert} 
                      alt="Dr. Afonso Cruz - Expert em Saúde Capilar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="space-y-1 md:space-y-2 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  <span className="text-white">O propósito Phoenix é </span>
                  <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
                    Transformar Sua Saúde
                  </span>
                  <br />
                  <span className="text-white">de Dentro Pra Fora!</span>
                </h2>
              </div>

              {/* Description */}
              <div className="max-w-2xl mx-auto space-y-2 text-gray-400 text-sm md:text-base leading-relaxed text-center">
                <p>
                  Nosso propósito é devolver a vitalidade e a confiança para mulheres que querem viver plenamente cada fase da vida.
                </p>
                <p>
                  Sabemos que após os 50, o corpo muda - e com essas mudanças vêm desafios que muitas vezes nos fazem sentir invisíveis ou menos capazes.
                </p>
                <p className="font-semibold text-white text-lg">
                  Mas a verdade é outra: essa é a sua melhor fase.
                </p>
                <p>
                  Temos como objetivo levar mais saúde, energia e bem-estar, para que você aproveite cada momento com qualidade, liberdade e alegria - do jeito que você merece.
                </p>
                <p className="text-xs text-gray-500">
                  Fazemos isso através de conhecimento sobre saúde integral e suplementos que restauram seu corpo de dentro pra fora - cuidando da sua pele, cabelos, articulações, energia, memória e muito mais.
                </p>
                <p className="text-sm font-medium text-white">
                  Tudo de forma acessível, justa e honesta.
                </p>
              </div>

              {/* Highlight Text */}
              <div className="pt-0 text-center">
                <p className="text-base md:text-lg font-bold">
                  <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
                    Porque você pode, merece e vai viver com muito mais vitalidade e{" "}
                  </span>
                  <span className="text-gold">autoestima.</span>
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-1 md:pt-2 text-center">
                <Button
                  onClick={handleCTA}
                  variant="cta"
                  size="lg"
                  className="px-8 md:px-10 py-6 md:py-7 text-base md:text-lg font-bold rounded-full"
                >
                  <span>✨</span>
                  Nos vemos no grupo!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
