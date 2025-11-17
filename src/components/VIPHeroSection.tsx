import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import phoenixLogo from "@/assets/phoenix-logo.png";

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
      <div className="mb-12 animate-fade-in">
        <img 
          src={phoenixLogo} 
          alt="Phoenix Hair" 
          className="h-14 md:h-16 w-auto opacity-90"
        />
      </div>

      {/* Badge */}
      <div className="mb-8 animate-fade-in">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-pink via-orange to-pink rounded-full blur-sm opacity-75"></div>
          <div className="relative px-6 py-2.5 bg-black rounded-full border-2 border-transparent bg-clip-padding">
            <div className="absolute inset-0 bg-gradient-to-r from-pink via-orange to-pink rounded-full opacity-100" style={{ margin: '-2px', zIndex: -1 }}></div>
            <span className="text-white font-semibold text-sm tracking-wide">Black Week Phoenix</span>
          </div>
        </div>
      </div>

      {/* Main Title */}
      <div className="max-w-5xl mx-auto text-center space-y-6 mb-12">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="text-white">Prepare-se para a </span>
          <span className="bg-gradient-to-r from-pink via-pink-light to-pink bg-clip-text text-transparent">
            Ultra Black Week
          </span>
          <br />
          <span className="text-white">Da Phoenix Hair</span>
        </h1>

        {/* Date Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <Calendar className="w-4 h-4 text-pink" />
            <span className="text-white text-sm">
              Abertura no dia <span className="text-pink font-bold">26 de Novembro</span>
            </span>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="animate-fade-in">
        <button
          onClick={handleCTA}
          className="group relative px-12 py-5 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink via-orange to-pink"></div>
          <div className="absolute inset-[2px] bg-black rounded-full transition-opacity group-hover:opacity-0"></div>
          <span className="relative z-10 group-hover:text-white transition-colors">
            Garantir Meu Acesso à Black Week
          </span>
        </button>
      </div>
    </section>
  );
};
