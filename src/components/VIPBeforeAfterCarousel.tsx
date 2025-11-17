import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.png";
import testimonial4 from "@/assets/testimonial-4.png";
import testimonial5 from "@/assets/testimonial-5.png";
import testimonial6 from "@/assets/testimonial-6.png";

const testimonials = [
  { id: 1, image: testimonial1 },
  { id: 2, image: testimonial2 },
  { id: 3, image: testimonial3 },
  { id: 4, image: testimonial4 },
  { id: 5, image: testimonial5 },
  { id: 6, image: testimonial6 },
];

export const VIPBeforeAfterCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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
    <section className="relative py-12 md:py-20 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Carousel */}
        <div className="relative">
          {/* Main image container */}
          <div className="relative aspect-square md:aspect-video overflow-hidden rounded-2xl">
            <div className="relative w-full h-full">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <img
                    src={testimonial.image}
                    alt="Antes e Depois Phoenix Hair"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <Button
              onClick={prevSlide}
              variant="ghost"
              size="icon"
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/80 border border-gold/30 hover:border-gold text-gold hover:text-gold-light backdrop-blur-sm transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
            <Button
              onClick={nextSlide}
              variant="ghost"
              size="icon"
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/80 border border-gold/30 hover:border-gold text-gold hover:text-gold-light backdrop-blur-sm transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 md:w-12 h-2 md:h-3 bg-gradient-to-r from-gold via-gold-light to-gold"
                    : "w-2 md:w-3 h-2 md:h-3 bg-muted hover:bg-gold/50"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
