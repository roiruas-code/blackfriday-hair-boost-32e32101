import { CheckCircle } from "lucide-react";

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
    <section id="beneficios" className="relative py-8 md:py-12 px-4 bg-black scroll-mt-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8 space-y-2 md:space-y-3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
              Benefícios de estar
            </span>
            {" "}
            <span className="text-white">no grupo VIP:</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Você terá acesso antecipado à Black Week da marca referência de
            suplementação para queda capilar, isso significa:
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Golden border glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-3xl blur opacity-20"></div>
            
            {/* Main container */}
            <div className="relative bg-black border-2 border-gold/60 rounded-3xl p-4 md:p-8 space-y-3 md:space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-3 p-3 md:p-4 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-gold-dark via-gold to-gold-light flex items-center justify-center border-2 border-gold/50">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-black" strokeWidth={3} />
                  </div>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed pt-0.5">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
