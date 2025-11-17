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
      <div className="mb-6 md:mb-8 animate-fade-in relative flex justify-center items-center">
        {/* Rotating golden ring around entire logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-2 border-gold/30 animate-[spin_8s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gold shadow-lg shadow-gold/50"></div>
          </div>
        </div>
        
        {/* Animated glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light opacity-20 blur-3xl"></div>
        
        {/* Text Logo */}
        <div className="relative z-10 text-center hover:scale-105 transition-transform duration-300">
          {/* AMERICANO */}
          <div className="text-[0.45rem] md:text-xs tracking-[0.35em] text-gray-400/80 font-light uppercase mb-1.5 md:mb-3">
            AMERICANO
          </div>
          
          {/* PHOEN I X */}
          <div className="flex items-center justify-center gap-0.5 md:gap-2 mb-1.5 md:mb-3">
            <div className="text-3xl md:text-6xl lg:text-7xl font-serif">
              <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 bg-clip-text text-transparent font-bold" style={{ letterSpacing: '0.05em' }}>
                PHOEN
              </span>
            </div>
            
            {/* Letter I - Golden and prominent */}
            <div className="text-3xl md:text-6xl lg:text-7xl font-serif" style={{ filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.6))' }}>
              <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent font-bold">
                I
              </span>
            </div>
            
            <div className="text-3xl md:text-6xl lg:text-7xl font-serif">
              <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent font-bold" style={{ letterSpacing: '0.05em' }}>
                X
              </span>
            </div>
          </div>
          
          {/* HAIR */}
          <div className="text-base md:text-2xl lg:text-3xl tracking-[0.45em] font-light">
            <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 bg-clip-text text-transparent">
              HAIR
            </span>
          </div>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="mt-5 md:mt-6 mb-5 md:mb-6 animate-fade-in">
        <div className="text-center space-y-3 md:space-y-4">
          {/* "Faltam" text */}
          <div className="text-base md:text-2xl font-serif font-bold tracking-wider mb-3 md:mb-4">
            <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent" style={{ filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.5))' }}>
              FALTAM:
            </span>
          </div>
          
          {/* Timer boxes */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {/* Days */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-black border-2 border-gold/40 rounded-xl md:rounded-2xl p-3 md:p-6 min-w-[70px] md:min-w-[120px]">
                <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
                  {String(timeLeft.days).padStart(2, "0")}
                </div>
                <div className="text-[10px] md:text-sm text-gray-400 mt-1.5 md:mt-2 uppercase tracking-wider md:tracking-widest">
                  DIAS
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-black border-2 border-gold/40 rounded-xl md:rounded-2xl p-3 md:p-6 min-w-[70px] md:min-w-[120px]">
                <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className="text-[10px] md:text-sm text-gray-400 mt-1.5 md:mt-2 uppercase tracking-wider md:tracking-widest">
                  HORAS
                </div>
              </div>
            </div>

            {/* Minutes */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-black border-2 border-gold/40 rounded-xl md:rounded-2xl p-3 md:p-6 min-w-[70px] md:min-w-[120px]">
                <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className="text-[10px] md:text-sm text-gray-400 mt-1.5 md:mt-2 uppercase tracking-wider md:tracking-widest">
                  MIN
                </div>
              </div>
            </div>

            {/* Seconds */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-black border-2 border-gold/40 rounded-xl md:rounded-2xl p-3 md:p-6 min-w-[70px] md:min-w-[120px]">
                <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent animate-pulse">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
                <div className="text-[10px] md:text-sm text-gray-400 mt-1.5 md:mt-2 uppercase tracking-wider md:tracking-widest">
                  SEG
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
          <div className="relative px-5 py-2 md:py-2.5 bg-black rounded-full border-2 border-transparent bg-clip-padding">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-full opacity-100" style={{ margin: '-2px', zIndex: -1 }}></div>
            <span className="text-white font-semibold text-xs md:text-sm tracking-wide">Black Week Phoenix</span>
          </div>
        </div>
      </div>

      {/* Main Title */}
      <div className="max-w-5xl mx-auto text-center space-y-3 md:space-y-4 mb-4 md:mb-5">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight px-2">
          <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
            A Black Friday que você esperava.
          </span>{" "}
          <span className="text-white">
            Descontos exclusivos até 70% OFF.
          </span>
        </h1>
        
        <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto px-4 leading-relaxed">
          Entre para a lista VIP e garanta acesso antecipado aos melhores descontos para o fim da queda e crescimento capilar.
        </p>

        {/* Date Badge */}
        <div className="flex justify-center pt-2 md:pt-3">
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold" />
            <span className="text-white text-xs md:text-sm">
              Black Friday <span className="text-gold font-bold">26 de Novembro</span>
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-4 md:mt-5 flex justify-center">
        <button
          onClick={scrollToNextSection}
          className="animate-bounce cursor-pointer group"
          aria-label="Rolar para próxima seção"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-gold text-[10px] md:text-xs uppercase tracking-wider opacity-70 group-hover:opacity-100 transition-opacity">
              VEJA MAIS
            </span>
            <div className="w-5 h-9 md:w-6 md:h-10 border-2 border-gold/30 rounded-full flex items-start justify-center p-2 group-hover:border-gold/60 transition-colors">
              <div className="w-1 h-2 bg-gold rounded-full animate-pulse"></div>
            </div>
          </div>
        </button>
      </div>

      {/* CTA Button */}
      <div className="animate-fade-in mt-4 md:mt-5">
        <div className="relative">
          {/* Animated glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-full opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500 animate-pulse"></div>
          
          <button
            onClick={handleCTA}
            className="group relative px-8 md:px-10 py-3.5 md:py-4 text-white font-bold text-sm md:text-base rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
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
    </section>
  );
};
