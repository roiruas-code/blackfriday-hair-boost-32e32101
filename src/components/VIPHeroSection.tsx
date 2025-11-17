import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import phoenixLogo from "@/assets/phoenix-logo-new.png";

export const VIPHeroSection = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-11-26T00:00:00");
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCTA = () => {
    console.log("Redirecionar para grupo VIP");
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('depoimentos');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 md:py-12 bg-black">
      {/* Logo */}
      <div className="mb-4 md:mb-6 animate-fade-in">
        <img 
          src={phoenixLogo} 
          alt="Phoenix Hair" 
          className="h-24 md:h-32 w-auto drop-shadow-2xl"
        />
      </div>

      {/* Countdown Timer */}
      <div className="mb-6 md:mb-8 animate-fade-in">
        <div className="text-center space-y-2 md:space-y-3">
          {/* "Faltam" text */}
          <div className="text-gold text-base md:text-xl font-semibold tracking-wide">
            Faltam:
          </div>
          
          {/* Timer boxes */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {/* Days */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-black border-2 border-gold/40 rounded-xl md:rounded-2xl p-3 md:p-8 min-w-[70px] md:min-w-[140px]">
                <div className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
                  {String(timeLeft.days).padStart(2, "0")}
                </div>
                <div className="text-xs md:text-base text-gray-400 mt-1 md:mt-2 uppercase tracking-wide md:tracking-widest">
                  Dias
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-black border-2 border-gold/40 rounded-xl md:rounded-2xl p-3 md:p-8 min-w-[70px] md:min-w-[140px]">
                <div className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className="text-xs md:text-base text-gray-400 mt-1 md:mt-2 uppercase tracking-wide md:tracking-widest">
                  Horas
                </div>
              </div>
            </div>

            {/* Minutes */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-black border-2 border-gold/40 rounded-xl md:rounded-2xl p-3 md:p-8 min-w-[70px] md:min-w-[140px]">
                <div className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className="text-xs md:text-base text-gray-400 mt-1 md:mt-2 uppercase tracking-wide md:tracking-widest">
                  Min
                </div>
              </div>
            </div>

            {/* Seconds */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-black border-2 border-gold/40 rounded-xl md:rounded-2xl p-3 md:p-8 min-w-[70px] md:min-w-[140px]">
                <div className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent animate-pulse">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
                <div className="text-xs md:text-base text-gray-400 mt-1 md:mt-2 uppercase tracking-wide md:tracking-widest">
                  Seg
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Badge */}
      <div className="mb-4 md:mb-5 animate-fade-in">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-full blur-sm opacity-75"></div>
          <div className="relative px-5 py-2 bg-black rounded-full border-2 border-transparent bg-clip-padding">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-full opacity-100" style={{ margin: '-2px', zIndex: -1 }}></div>
            <span className="text-white font-semibold text-xs md:text-sm tracking-wide">Black Week Phoenix</span>
          </div>
        </div>
      </div>

      {/* Main Title */}
      <div className="max-w-5xl mx-auto text-center space-y-2 md:space-y-3 mb-4 md:mb-6">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
            A Black Friday que você esperava.
          </span>{" "}
          <span className="text-white">
            Descontos exclusivos até 70% OFF.
          </span>
        </h1>
        
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
          Entre para a lista VIP e garanta acesso antecipado aos melhores descontos para o fim da queda e crescimento capilar.
        </p>

        {/* Date Badge */}
        <div className="flex justify-center pt-2">
          <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <Calendar className="w-4 h-4 text-gold" />
            <span className="text-white text-xs md:text-sm">
              Black Friday <span className="text-gold font-bold">26 de Novembro</span>
            </span>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="animate-fade-in">
        <div className="relative">
          {/* Animated glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-full opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500 animate-pulse"></div>
          
          <button
            onClick={handleCTA}
            className="group relative px-8 md:px-12 py-3 md:py-5 text-white font-bold text-base md:text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
          >
            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light"></div>
            <div className="absolute inset-[2px] bg-black rounded-full transition-opacity group-hover:opacity-0"></div>
            <span className="relative z-10 text-gold group-hover:text-black transition-colors">
              QUERO GARANTIR MEU DESCONTO
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group"
        aria-label="Rolar para próxima seção"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gold text-xs uppercase tracking-wider opacity-70 group-hover:opacity-100 transition-opacity">
            Veja mais
          </span>
          <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex items-start justify-center p-2 group-hover:border-gold/60 transition-colors">
            <div className="w-1 h-2 bg-gold rounded-full animate-pulse"></div>
          </div>
        </div>
      </button>
    </section>
  );
};
