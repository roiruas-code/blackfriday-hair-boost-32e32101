import { Heart } from "lucide-react";

export const VIPAuthoritySection = () => {
  const handleCTA = () => {
    console.log("Redirecionar para grupo VIP");
  };

  return (
    <section className="relative py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Icon */}
        <div className="flex justify-center animate-fade-in">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink/20 to-orange/20 flex items-center justify-center backdrop-blur-sm">
            <Heart className="w-12 h-12 text-pink" fill="currentColor" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">O propósito Phoenix é </span>
            <span className="bg-gradient-to-r from-pink via-pink-light to-pink bg-clip-text text-transparent">
              Transformar Sua Saúde
            </span>
            <br />
            <span className="text-white">de Dentro Pra Fora!</span>
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
          <p>
            Nosso propósito é devolver a vitalidade e a confiança para mulheres que querem viver plenamente cada fase da vida.
          </p>
          <p>
            Sabemos que após os 50, o corpo muda - e com essas mudanças vêm desafios que muitas vezes nos fazem sentir invisíveis ou menos capazes.
          </p>
          <p className="font-semibold text-white text-xl">
            Mas a verdade é outra: essa é a sua melhor fase.
          </p>
          <p>
            Temos como objetivo levar mais saúde, energia e bem-estar, para que você aproveite cada momento com qualidade, liberdade e alegria - do jeito que você merece.
          </p>
          <p className="text-sm text-gray-500">
            Fazemos isso através de conhecimento sobre saúde integral e suplementos que restauram seu corpo de dentro pra fora - cuidando da sua pele, cabelos, articulações, energia, memória e muito mais.
          </p>
          <p className="text-sm font-medium text-white mt-4">
            Tudo de forma acessível, justa e honesta.
          </p>
        </div>

        {/* Highlight Text */}
        <div className="pt-6">
          <p className="text-xl md:text-2xl font-bold">
            <span className="bg-gradient-to-r from-pink to-orange bg-clip-text text-transparent">
              Porque você pode, merece e vai viver com muito mais vitalidade e{" "}
            </span>
            <span className="text-orange">autoestima.</span>
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <button
            onClick={handleCTA}
            className="group relative px-10 py-4 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink via-orange to-pink"></div>
            <div className="absolute inset-[2px] bg-black rounded-full transition-opacity group-hover:opacity-0"></div>
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
              <span>✨</span>
              Nos vemos no grupo!
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
