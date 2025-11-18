import { Button } from "@/components/ui/button";
import { ShoppingCart, Shield, Zap, TrendingUp, ArrowRight } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gold/5 to-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/20 rounded-full blur-[150px] animate-pulse" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gold rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-black/80 to-primary/40 backdrop-blur-sm border-2 border-gold/50 rounded-3xl p-8 md:p-12 shadow-2xl shadow-gold/30">
          {/* Urgency badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/20 border border-red-500/50 rounded-full animate-pulse">
              <TrendingUp className="w-5 h-5 text-red-500" />
              <span className="text-red-500 font-bold">ÚLTIMAS UNIDADES COM 70% OFF!</span>
              <TrendingUp className="w-5 h-5 text-red-500" />
            </div>
          </div>

          {/* Main content */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                Não Perca Essa Chance!
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto">
              Garanta sua transformação capilar com{" "}
              <span className="text-gold font-bold">70% de desconto</span>
            </p>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Milhares de brasileiros já transformaram seus cabelos. 
              Junte-se a eles e aproveite a maior promoção do ano!
            </p>

            {/* Price highlight */}
            <div className="py-8">
              <div className="inline-block bg-gradient-to-r from-black/50 to-primary/30 border border-gold/30 rounded-2xl p-8">
                <div className="text-sm text-muted-foreground mb-2">De R$ 297,00 por apenas</div>
                <div className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent mb-2">
                  R$ 89,00
                </div>
                <div className="text-green-500 font-semibold">
                  ou 12x de R$ 8,90 sem juros
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <Button
                variant="cta"
                size="lg"
                className="w-full md:w-auto px-12 py-8 text-xl md:text-2xl font-bold rounded-full"
              >
                <ShoppingCart className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
                GARANTIR MEU DESCONTO AGORA
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform" />
              </Button>

              <p className="text-sm text-muted-foreground">
                🔒 Pagamento 100% seguro e criptografado
              </p>
            </div>

            {/* Benefits bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-gold/20 mt-12">
              <div className="flex flex-col items-center gap-3 p-4">
                <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center">
                  <Shield className="w-7 h-7 text-gold" />
                </div>
                <div className="text-center">
                  <div className="font-bold text-foreground">Garantia de 30 Dias</div>
                  <div className="text-sm text-muted-foreground">Devolução sem burocracia</div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 p-4">
                <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center">
                  <Zap className="w-7 h-7 text-gold" />
                </div>
                <div className="text-center">
                  <div className="font-bold text-foreground">Entrega Rápida</div>
                  <div className="text-sm text-muted-foreground">Rastreamento incluído</div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 p-4">
                <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-gold" />
                </div>
                <div className="text-center">
                  <div className="font-bold text-foreground">98% de Sucesso</div>
                  <div className="text-sm text-muted-foreground">Resultados comprovados</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom warning */}
        <div className="mt-8 text-center">
          <p className="text-red-500 font-semibold animate-pulse">
            ⚠️ ATENÇÃO: Estoque limitado! Promoção válida apenas enquanto durar o estoque.
          </p>
        </div>
      </div>
    </section>
  );
};
