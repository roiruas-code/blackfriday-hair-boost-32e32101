import { Button } from "@/components/ui/button";
import { ShoppingCart, Shield, Zap } from "lucide-react";
import spray1 from "@/assets/spray-1.png";
import spray2 from "@/assets/spray-2.png";
import sprayProduct from "@/assets/spray-product.png";

const products = [
  {
    id: 1,
    image: spray1,
    name: "Phoenix Hair Spray",
    description: "Fórmula americana avançada",
  },
  {
    id: 2,
    image: spray2,
    name: "Phoenix Hair Premium",
    description: "Tecnologia de crescimento capilar",
  },
  {
    id: 3,
    image: sprayProduct,
    name: "Phoenix Hair Original",
    description: "Resultados em 30 dias",
  },
];

export const ProductsSection = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-black via-primary/20 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-light rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              Kits Exclusivos
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha o kit ideal para sua transformação capilar
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-black/80 to-primary/30 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 hover:border-gold/60 transition-all duration-500 hover:scale-105">
                {/* Discount badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-gold via-gold-light to-gold text-black font-bold px-4 py-2 rounded-full shadow-xl shadow-gold/50 animate-pulse z-20">
                  -70%
                </div>

                {/* Golden glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/5 to-gold-light/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                {/* Product image container */}
                <div className="relative aspect-square mb-6 overflow-hidden rounded-xl">
                  {/* Animated border */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-gold via-gold-light to-gold rounded-xl opacity-0 group-hover:opacity-75 blur-md transition-all duration-500" />
                  
                  {/* Image with 3D effect */}
                  <div className="relative w-full h-full bg-gradient-to-br from-black to-primary/50 rounded-xl p-4 transform group-hover:rotate-y-6 group-hover:scale-110 transition-all duration-500 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  {/* Floating particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-gold rounded-full animate-pulse"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 200}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Product info */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>

                  {/* Features */}
                  <div className="flex flex-col gap-2 mb-6 text-sm">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Zap className="w-4 h-4 text-gold" />
                      <span>Resultados em 30 dias</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Shield className="w-4 h-4 text-gold" />
                      <span>Garantia total</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="text-sm text-muted-foreground line-through">
                      R$ 297,00
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                      R$ 89,00
                    </div>
                    <div className="text-xs text-green-500">ou 12x de R$ 8,90</div>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full bg-gradient-to-r from-gold via-gold-light to-gold hover:from-gold-dark hover:via-gold hover:to-gold-light text-black font-bold py-6 rounded-xl shadow-lg shadow-gold/30 hover:shadow-gold/60 transition-all duration-300 group/btn">
                    <ShoppingCart className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                    COMPRAR AGORA
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="bg-gradient-to-r from-black via-primary/30 to-black border-y border-gold/20 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-gold" />
              <span className="text-muted-foreground">Compra 100% Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-gold" />
              <span className="text-muted-foreground">Entrega Rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-gold" />
              <span className="text-muted-foreground">Garantia de 30 Dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
