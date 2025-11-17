import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

export const VIPHeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
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
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCTA = () => {
    // Aqui você pode adicionar a lógica de redirecionamento para o grupo VIP
    console.log("Redirecionar para grupo VIP");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-b from-black via-primary/10 to-black">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Countdown Timer */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-6 h-6 text-gold" />
            <span className="text-gold font-semibold text-lg">
              Faltam {timeLeft.days} {timeLeft.days === 1 ? "dia" : "dias"}
            </span>
          </div>
          
          <div className="flex justify-center gap-3">
            {[
              { value: timeLeft.days, label: "DIAS" },
              { value: timeLeft.hours, label: "HORAS" },
              { value: timeLeft.minutes, label: "MIN" },
              { value: timeLeft.seconds, label: "SEG" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-black/80 to-primary/50 backdrop-blur-sm border-2 border-gold/50 rounded-xl p-3 md:p-4 min-w-[70px] md:min-w-[90px]"
              >
                <div className="text-3xl md:text-4xl font-bold text-gold">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Title */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              A Black Friday que você mais esperava.
            </span>{" "}
            <span className="text-foreground">
              Descontos nunca vistos para o fim da queda e o crescimento dos fios.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Entre para nossa lista VIP e seja a primeira a receber ofertas com até{" "}
            <span className="text-gold font-bold">70% de desconto</span> em nosso
            tratamento. Os estoques são limitados!
          </p>
        </div>

        {/* CTA Button */}
        <Button
          onClick={handleCTA}
          size="lg"
          className="w-full md:w-auto bg-gradient-to-r from-gold via-gold-light to-gold hover:from-gold-dark hover:via-gold hover:to-gold-light text-black font-bold text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 rounded-full shadow-2xl shadow-gold/50 hover:shadow-gold/80 hover:scale-105 transition-all duration-300"
        >
          QUERO GARANTIR MEU DESCONTO
        </Button>
      </div>
    </section>
  );
};
