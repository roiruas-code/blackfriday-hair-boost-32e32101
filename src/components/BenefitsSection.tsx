import { Sparkles, Shield, Zap, Clock, Heart, Award } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Fórmula Americana",
    description: "Tecnologia avançada desenvolvida nos EUA com ingredientes premium",
  },
  {
    icon: Zap,
    title: "Resultados Rápidos",
    description: "Primeiros resultados visíveis em até 30 dias de uso contínuo",
  },
  {
    icon: Shield,
    title: "Garantia Total",
    description: "30 dias de garantia ou seu dinheiro de volta, sem perguntas",
  },
  {
    icon: Clock,
    title: "Fácil Aplicação",
    description: "Aplique em segundos, sem complicação. Ideal para rotina diária",
  },
  {
    icon: Heart,
    title: "Sem Efeitos Colaterais",
    description: "Fórmula dermatologicamente testada e aprovada pela ANVISA",
  },
  {
    icon: Award,
    title: "+50mil Clientes",
    description: "Mais de 50 mil brasileiros já transformaram seus cabelos",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="relative py-20 px-4 bg-black overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-light/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              Por Que Escolher Phoenix Hair?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Benefícios exclusivos que fazem toda a diferença
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glass morphism card */}
                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 hover:border-gold/50 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5 transition-all duration-500 hover:scale-105">
                  {/* Golden glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  {/* Icon container */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-gold/20">
                      <Icon className="w-8 h-8 text-gold" />
                    </div>
                    
                    {/* Floating particles around icon */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-gold rounded-full animate-pulse"
                          style={{
                            left: `${30 + i * 20}%`,
                            top: `${20 + i * 15}%`,
                            animationDelay: `${i * 200}ms`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gold transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Bottom shine effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
                </div>

                {/* Outer glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border border-gold/30 rounded-2xl p-8 backdrop-blur-sm">
            <p className="text-lg md:text-xl mb-4">
              <span className="text-gold font-bold">Atenção:</span>{" "}
              <span className="text-foreground">
                Últimas unidades com{" "}
                <span className="text-gold font-bold">70% de desconto!</span>
              </span>
            </p>
            <p className="text-muted-foreground">
              Não perca essa oportunidade única de Black Friday
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
