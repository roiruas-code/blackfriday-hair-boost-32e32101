import { useState } from "react";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.png";
import testimonial4 from "@/assets/testimonial-4.png";
import testimonial5 from "@/assets/testimonial-5.png";
import testimonial6 from "@/assets/testimonial-6.png";

const testimonials = [
  {
    id: 1,
    image: testimonial1,
    name: "Maria Silva",
    location: "São Paulo, SP",
    text: "Em apenas 3 meses usando Phoenix Hair, meu cabelo ficou muito mais forte e volumoso. Não caí mais tanto e finalmente tenho a autoestima que sempre quis!",
    rating: 5,
  },
  {
    id: 2,
    image: testimonial2,
    name: "Ana Costa",
    location: "Rio de Janeiro, RJ",
    text: "Estava perdendo cabelo há anos. Com Phoenix Hair recuperei a densidade e o brilho natural. Produto incrível, recomendo demais!",
    rating: 5,
  },
  {
    id: 3,
    image: testimonial3,
    name: "Juliana Santos",
    location: "Belo Horizonte, MG",
    text: "Resultado surpreendente! Meu cabelo cresceu mais rápido e ficou muito mais saudável. Não troco por nada!",
    rating: 5,
  },
  {
    id: 4,
    image: testimonial4,
    name: "Carla Oliveira",
    location: "Curitiba, PR",
    text: "Depois de tantos produtos que não funcionaram, Phoenix Hair foi a solução. Meu cabelo parou de cair e voltou a crescer forte e bonito!",
    rating: 5,
  },
  {
    id: 5,
    image: testimonial5,
    name: "Fernanda Lima",
    location: "Porto Alegre, RS",
    text: "Estava quase desistindo, mas Phoenix Hair mudou tudo! Hoje tenho um cabelo cheio, forte e lindo. Gratidão infinita!",
    rating: 5,
  },
  {
    id: 6,
    image: testimonial6,
    name: "Patricia Rocha",
    location: "Brasília, DF",
    text: "Transformação total! Meu cabelo estava fraco e quebradiço. Agora está forte, brilhante e cheio de vida. Produto sensacional!",
    rating: 5,
  },
];

export const TestimonialsCarousel = () => {
  const [api, setApi] = useState<any>();

  return (
    <section id="depoimentos" className="relative py-12 md:py-20 px-4 bg-gradient-to-b from-black via-gold/5 to-black scroll-mt-4">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 md:w-10 md:h-10 fill-gold text-gold animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
              O Que Dizem Nossos Clientes
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Histórias reais de transformação e confiança renovada
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group h-full">
                  {/* Card container */}
                  <div className="relative h-full">
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-3xl opacity-0 group-hover:opacity-30 blur transition-all duration-500" />
                    
                    {/* Card */}
                    <div className="relative h-full bg-gradient-to-br from-black/90 to-black/50 backdrop-blur-sm border-2 border-gold/30 group-hover:border-gold/60 rounded-3xl p-6 transition-all duration-500 hover:scale-[1.02] flex flex-col">
                      {/* Quote icon */}
                      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Quote className="w-16 h-16 text-gold" />
                      </div>

                      {/* Image */}
                      <div className="relative mb-6 overflow-hidden rounded-2xl">
                        <div className="aspect-square">
                          <img
                            src={testimonial.image}
                            alt={`Depoimento de ${testimonial.name}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        {/* Image overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                        ))}
                      </div>

                      {/* Text */}
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 flex-grow italic">
                        "{testimonial.text}"
                      </p>

                      {/* Author info */}
                      <div className="pt-4 border-t border-gold/20">
                        <p className="font-bold text-white text-lg mb-1">
                          {testimonial.name}
                        </p>
                        <p className="text-gold text-sm">
                          {testimonial.location}
                        </p>
                      </div>

                      {/* Verified badge */}
                      <div className="absolute bottom-6 right-6">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-gold/20 border border-gold/40 rounded-full">
                          <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                          <span className="text-gold text-xs font-semibold">Verificado</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious className="relative left-0 translate-x-0 bg-black/80 border-2 border-gold/50 text-gold hover:bg-gold hover:text-black hover:border-gold transition-all duration-300" />
            <CarouselNext className="relative right-0 translate-x-0 bg-black/80 border-2 border-gold/50 text-gold hover:bg-gold hover:text-black hover:border-gold transition-all duration-300" />
          </div>
        </Carousel>

        {/* Bottom stats */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-black/50 border border-gold/30 rounded-full backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 fill-gold text-gold" />
              <span className="text-2xl font-bold text-gold">4.9</span>
            </div>
            <div className="w-px h-8 bg-gold/30" />
            <div className="text-gray-400">
              <span className="text-white font-semibold">+50mil</span> avaliações
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
