import { Check } from "lucide-react";

const benefits = [
  "Bônus exclusivo para quem está no grupo VIP",
  "Garantir seu tratamento",
  "Frete grátis para qualquer estado",
  "Redução de queda já nas primeiras semanas",
  "Crescimento acelerado",
  "Aprovado pela Anvisa e sem efeitos colaterais",
];

export const VIPBenefitsSection = () => {
  return (
    <section className="relative py-12 md:py-20 px-4 bg-gradient-to-b from-black via-primary/5 to-black">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              Benefícios de estar no grupo VIP:
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Você terá acesso antecipado à Black Friday da marca referência de
            suplementação para queda capilar, isso significa:
          </p>
        </div>

        {/* Benefits List */}
        <div className="bg-gradient-to-br from-gold/10 via-gold/5 to-transparent backdrop-blur-md border-2 border-gold/40 rounded-3xl p-8 md:p-12 shadow-2xl shadow-gold/20">
          <div className="space-y-5 md:space-y-7">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 md:gap-5 group hover:translate-x-3 transition-all duration-300 bg-gradient-to-r from-white/5 to-transparent hover:from-gold/10 hover:to-transparent p-4 md:p-5 rounded-xl border border-transparent hover:border-gold/30"
              >
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-gold via-gold-light to-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-gold/50 group-hover:shadow-gold/80">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-black font-bold" strokeWidth={3} />
                </div>
                <p className="text-lg md:text-xl lg:text-2xl text-white font-semibold leading-relaxed flex-1 group-hover:text-gold-light transition-colors">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
