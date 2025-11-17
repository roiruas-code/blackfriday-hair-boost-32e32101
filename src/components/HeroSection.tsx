import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Clock, ArrowRight } from "lucide-react";
import phoenixLogo from "@/assets/phoenix-logo.png";

export const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-primary to-black">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img
            src={phoenixLogo}
            alt="Phoenix Hair Americano"
            className="w-64 md:w-80 mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Discount Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold via-gold-light to-gold rounded-full mb-8 animate-pulse shadow-2xl shadow-gold/50">
          <Sparkles className="w-5 h-5 text-black" />
          <span className="text-black font-bold text-xl">70% OFF</span>
          <Sparkles className="w-5 h-5 text-black" />
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-white via-gold-light to-white bg-clip-text text-transparent">
            BLACK FRIDAY VIP
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Transforme seus cabelos com a tecnologia americana que conquistou mais de{" "}
          <span className="text-gold font-bold">50 mil clientes</span>
        </p>

        {/* Countdown Timer */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-gold animate-pulse" />
            <span className="text-gold font-semibold text-lg">OFERTA TERMINA EM:</span>
          </div>
          <div className="flex justify-center gap-4">
            {[
              { value: timeLeft.hours, label: "HORAS" },
              { value: timeLeft.minutes, label: "MIN" },
              { value: timeLeft.seconds, label: "SEG" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-black/80 to-primary/50 backdrop-blur-sm border-2 border-gold/50 rounded-xl p-4 md:p-6 min-w-[80px] md:min-w-[100px] shadow-2xl shadow-gold/20 hover:scale-105 transition-transform"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-2">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-gradient-to-r from-gold via-gold-light to-gold hover:from-gold-dark hover:via-gold hover:to-gold-light text-black font-bold text-xl px-12 py-8 rounded-full shadow-2xl shadow-gold/50 hover:shadow-gold/80 hover:scale-105 transition-all duration-300 group"
        >
          QUERO MEU DESCONTO VIP
          <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
        </Button>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Garantia de 30 dias</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Entrega Rápida</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>+50mil clientes</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};
