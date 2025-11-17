import { Shield, Award } from "lucide-react";
import drAfonso from "@/assets/dr-afonso.webp";

export const AuthoritySection = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-black via-primary/10 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/20 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative flex justify-center animate-fade-in">
            {/* Outer golden ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full border-4 border-gold/30 animate-pulse" />
            </div>
            
            {/* Middle golden ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full border-2 border-gold/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Image container */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gold shadow-2xl shadow-gold/50 hover:scale-105 transition-transform duration-500">
              <img
                src={drAfonso}
                alt="Dr. Afonso - Especialista Capilar"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* ANVISA seal */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-green-500 to-green-700 text-white p-4 rounded-full shadow-xl border-4 border-white animate-pulse">
              <Shield className="w-8 h-8" />
            </div>
          </div>

          {/* Content side */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full">
              <Award className="w-5 h-5 text-gold" />
              <span className="text-gold font-semibold">Aprovado pela ANVISA</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                Desenvolvido por Especialistas
              </span>
            </h2>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Dr. Afonso Silva</h3>
              <p className="text-gold font-semibold">Tricologista certificado • 15 anos de experiência</p>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg">
              Phoenix Hair é resultado de anos de pesquisa em tecnologia capilar americana. 
              Nossa fórmula exclusiva combina ingredientes clinicamente testados para 
              proporcionar resultados reais e duradouros.
            </p>

            {/* Certifications */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-gold/20 rounded-xl p-4 hover:border-gold/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">ANVISA</div>
                    <div className="text-xs text-muted-foreground">Aprovado</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-gold/20 rounded-xl p-4 hover:border-gold/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">FDA</div>
                    <div className="text-xs text-muted-foreground">Certificado</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gold/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">15+</div>
                <div className="text-xs text-muted-foreground">Anos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">50k+</div>
                <div className="text-xs text-muted-foreground">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">98%</div>
                <div className="text-xs text-muted-foreground">Sucesso</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
