import { Button } from "@/components/ui/button";
import drAfonso from "@/assets/dr-afonso.webp";

export const VIPAuthoritySection = () => {
  const handleCTA = () => {
    // Aqui você pode adicionar a lógica de redirecionamento para o grupo VIP
    console.log("Redirecionar para grupo VIP");
  };

  return (
    <section className="relative py-12 md:py-20 px-4 bg-gradient-to-b from-black via-primary/10 to-black">
      <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
        {/* Authority Image */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Golden rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-gold/30" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full border border-gold/50" />
            </div>

            {/* Image */}
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gold shadow-2xl shadow-gold/50">
              <img
                src={drAfonso}
                alt="Dr. Afonso - Especialista Capilar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          onClick={handleCTA}
          size="lg"
          className="w-full md:w-auto bg-gradient-to-r from-gold via-gold-light to-gold hover:from-gold-dark hover:via-gold hover:to-gold-light text-black font-bold text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 rounded-full shadow-2xl shadow-gold/50 hover:shadow-gold/80 hover:scale-105 transition-all duration-300"
        >
          Quero garantir minha vaga.
        </Button>
      </div>
    </section>
  );
};
