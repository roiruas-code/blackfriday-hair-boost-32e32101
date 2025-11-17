import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.png";
import testimonial4 from "@/assets/testimonial-4.png";
import testimonial5 from "@/assets/testimonial-5.png";
import testimonial6 from "@/assets/testimonial-6.png";

const testimonials = [
  { id: 1, image: testimonial1, alt: "Resultado Phoenix Hair 1" },
  { id: 2, image: testimonial2, alt: "Resultado Phoenix Hair 2" },
  { id: 3, image: testimonial3, alt: "Resultado Phoenix Hair 3" },
  { id: 4, image: testimonial4, alt: "Resultado Phoenix Hair 4" },
  { id: 5, image: testimonial5, alt: "Resultado Phoenix Hair 5" },
  { id: 6, image: testimonial6, alt: "Resultado Phoenix Hair 6" },
];

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full py-20 px-4 bg-gradient-to-b from-black via-black to-primary overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-gold rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-gold-light rounded-full animate-pulse delay-100" />
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-gold rounded-full animate-pulse delay-200" />
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-gold-light rounded-full animate-pulse delay-300" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-gold text-gold" />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              Resultados Reais
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Milhares de clientes já transformaram seus cabelos com Phoenix Hair
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main image container */}
          <div className="relative aspect-square md:aspect-video max-w-4xl mx-auto overflow-hidden rounded-2xl">
            <div className="relative w-full h-full">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentIndex
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-0 scale-95 z-0"
                  }`}
                >
                  <div className="relative w-full h-full group">
                    {/* Golden glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-gold-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 rounded-2xl" />
                    
                    {/* Border gradient */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-gold via-gold-light to-gold rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Image */}
                    <img
                      src={testimonial.image}
                      alt={testimonial.alt}
                      className="relative w-full h-full object-cover rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    
                    {/* Shine effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <Button
              onClick={prevSlide}
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/80 border border-gold/30 hover:border-gold text-gold hover:text-gold-light backdrop-blur-sm transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={nextSlide}
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/80 border border-gold/30 hover:border-gold text-gold hover:text-gold-light backdrop-blur-sm transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-12 h-3 bg-gradient-to-r from-gold via-gold-light to-gold shadow-lg shadow-gold/50"
                    : "w-3 h-3 bg-muted hover:bg-gold/50"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { value: "+50mil", label: "Clientes Satisfeitos" },
            { value: "4.9★", label: "Avaliação Média" },
            { value: "98%", label: "Taxa de Sucesso" },
            { value: "30 dias", label: "Garantia Total" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-black/50 to-primary/30 border border-gold/20 backdrop-blur-sm hover:border-gold/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
