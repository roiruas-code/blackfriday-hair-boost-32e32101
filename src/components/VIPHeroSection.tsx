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

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-black">
      {/* Logo */}
      <div className="mb-8 animate-fade-in">
        <img 
          src={phoenixLogo} 
          alt="Phoenix Hair" 
          className="h-32 md:h-40 w-auto drop-shadow-2xl"
        />
      </div>

      {/* Countdown Timer */}
      <div className="mb-12 animate-fade-in">
        <div className="text-center space-y-4 md:space-y-6">
          {/* "Faltam" text */}
          <div className="text-gold text-lg md:text-2xl font-semibold tracking-wide">
            Faltam:
          </div>
          
          {/* Timer boxes */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-6">
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
      <div className="mb-8 animate-fade-in">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-full blur-sm opacity-75"></div>
          <div className="relative px-6 py-2.5 bg-black rounded-full border-2 border-transparent bg-clip-padding">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-full opacity-100" style={{ margin: '-2px', zIndex: -1 }}></div>
            <span className="text-white font-semibold text-sm tracking-wide">Black Week Phoenix</span>
          </div>
        </div>
      </div>

      {/* Main Title */}
      <div className="max-w-5xl mx-auto text-center space-y-6 mb-12">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
            A Black Friday que você mais esperava.
          </span>{" "}
          <span className="text-white">
            Descontos nunca vistos para o fim da queda e o crescimento dos fios.
          </span>
        </h1>

        {/* Date Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <Calendar className="w-4 h-4 text-gold" />
            <span className="text-white text-sm">
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
            className="group relative px-12 py-5 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
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
