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
        <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 md:p-10">
          <div className="space-y-4 md:space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 md:gap-4 group hover:translate-x-2 transition-transform duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 bg-gold/20 rounded-full flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                </div>
                <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed flex-1">
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
