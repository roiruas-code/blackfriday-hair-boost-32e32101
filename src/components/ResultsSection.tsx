import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import beforeAfter3 from "@/assets/before-after-3.jpg";
import beforeAfter4 from "@/assets/before-after-4.jpg";
import beforeAfter5 from "@/assets/before-after-5.jpg";
import beforeAfter6 from "@/assets/before-after-6.jpg";

const beforeAfterImages = [
  { id: 1, src: beforeAfter1, alt: "Transformação capilar 1" },
  { id: 2, src: beforeAfter2, alt: "Transformação capilar 2" },
  { id: 3, src: beforeAfter3, alt: "Transformação capilar 3" },
  { id: 4, src: beforeAfter4, alt: "Transformação capilar 4" },
  { id: 5, src: beforeAfter5, alt: "Transformação capilar 5" },
  { id: 6, src: beforeAfter6, alt: "Transformação capilar 6" },
];

export const ResultsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [clients, setClients] = useState(0);
  const [rating, setRating] = useState(0);
  const [success, setSuccess] = useState(0);
  const [guarantee, setGuarantee] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setClients(Math.floor(50000 * progress));
      setRating(parseFloat((4.9 * progress).toFixed(1)));
      setSuccess(Math.floor(98 * progress));
      setGuarantee(Math.floor(30 * progress));

      if (currentStep >= steps) {
        clearInterval(interval);
        setClients(50000);
        setRating(4.9);
        setSuccess(98);
        setGuarantee(30);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative py-12 md:py-20 px-4 bg-black scroll-mt-4">
      <div className="max-w-6xl mx-auto">
        {/* Stars */}
        <div className="flex justify-center gap-2 mb-6 animate-fade-in">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-8 h-8 md:w-12 md:h-12 fill-gold text-gold" />
          ))}
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 animate-fade-in">
          <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
            Resultados Reais
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          Milhares de clientes já transformaram seus cabelos com Phoenix Hair
        </p>

        {/* Carousel */}
        <div className="mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {beforeAfterImages.map((image) => (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative overflow-hidden rounded-2xl border-2 border-gold/30 hover:border-gold/60 transition-all duration-300 group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-black/80 border-gold/50 text-gold hover:bg-gold hover:text-black" />
            <CarouselNext className="right-2 bg-black/80 border-gold/50 text-gold hover:bg-gold hover:text-black" />
          </Carousel>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {/* Clientes Satisfeitos */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-3xl blur opacity-20" />
            <div className="relative bg-black border-2 border-gold/40 rounded-3xl p-4 md:p-8 text-center hover:border-gold/60 transition-all duration-300">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent mb-1 md:mb-2">
                +{clients >= 1000 ? `${Math.floor(clients / 1000)}mil` : clients}
              </div>
              <div className="text-gray-400 text-sm md:text-lg">Clientes Satisfeitos</div>
            </div>
          </div>

          {/* Avaliação Média */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-3xl blur opacity-20" />
            <div className="relative bg-black border-2 border-gold/40 rounded-3xl p-4 md:p-8 text-center hover:border-gold/60 transition-all duration-300">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent mb-1 md:mb-2 flex items-center justify-center gap-1 md:gap-2">
                {rating.toFixed(1)}
                <Star className="w-6 h-6 md:w-10 md:h-10 fill-gold text-gold" />
              </div>
              <div className="text-gray-400 text-sm md:text-lg">Avaliação Média</div>
            </div>
          </div>

          {/* Taxa de Sucesso */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-3xl blur opacity-20" />
            <div className="relative bg-black border-2 border-gold/40 rounded-3xl p-4 md:p-8 text-center hover:border-gold/60 transition-all duration-300">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent mb-1 md:mb-2">
                {success}%
              </div>
              <div className="text-gray-400 text-sm md:text-lg">Taxa de Sucesso</div>
            </div>
          </div>

          {/* Garantia Total */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-3xl blur opacity-20" />
            <div className="relative bg-black border-2 border-gold/40 rounded-3xl p-4 md:p-8 text-center hover:border-gold/60 transition-all duration-300">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent mb-1 md:mb-2">
                {guarantee} dias
              </div>
              <div className="text-gray-400 text-sm md:text-lg">Garantia Total</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
