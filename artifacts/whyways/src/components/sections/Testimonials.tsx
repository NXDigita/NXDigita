import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "NXDigita AI Technologies transformed our diagnostic workflow completely. The AI models they integrated reduced our processing time by 60% while improving accuracy. True engineering partners.",
    author: "Dr. Sarah Chen",
    role: "CTO, MedCore Health",
    avatar: "SC"
  },
  {
    quote: "The team delivered a world-class financial platform under incredible time pressure. Their understanding of high-frequency architecture and security is unmatched in the industry.",
    author: "James Whitfield",
    role: "VP Engineering, FinVista",
    avatar: "JW"
  },
  {
    quote: "Exceptional quality and speed. They didn't just build the product we asked for—they challenged our assumptions and delivered something far better than we imagined.",
    author: "Priya Nair",
    role: "Head of Digital, EduSphere",
    avatar: "PN"
  }
];

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-secondary/5 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-secondary font-medium tracking-wider text-sm uppercase mb-4">
              <span className="w-8 h-px bg-secondary" />
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              What Our Clients Say
            </h2>
          </div>
          <div className="hidden md:flex gap-4">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary hover:text-white hover:border-secondary transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary hover:text-white hover:border-secondary transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, idx) => (
              <div key={idx} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_80%] lg:flex-[0_0_60%] pl-4 md:pl-8">
                <div className="bg-card border border-border rounded-3xl p-8 md:p-12 h-full shadow-lg">
                  <Quote className="w-12 h-12 text-secondary/20 mb-8" />
                  
                  <div className="flex gap-1 mb-6 text-accent">
                    {[1,2,3,4,5].map(star => <Star key={star} size={20} fill="currentColor" />)}
                  </div>

                  <p className="text-xl md:text-2xl text-card-foreground font-medium leading-relaxed mb-10">
                    "{t.quote}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-xl">
                      {t.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{t.author}</h4>
                      <p className="text-muted-foreground text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
