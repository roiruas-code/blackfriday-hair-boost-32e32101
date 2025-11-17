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
    <section className="relative py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-pink via-pink-light to-pink bg-clip-text text-transparent">
              Benefícios de estar
            </span>
            <br />
            <span className="text-white">no grupo VIP:</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Você terá acesso antecipado à Black Week da marca referência de
            suplementação para queda capilar, isso significa:
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-3xl mx-auto space-y-5">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-5 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-pink/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-pink to-orange flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <p className="text-lg text-white/90 leading-relaxed pt-0.5">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
