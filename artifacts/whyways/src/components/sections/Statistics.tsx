import React from 'react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const stats = [
  { value: 250, suffix: '+', label: 'Projects Delivered' },
  { value: 150, suffix: '+', label: 'Happy Clients' },
  { value: 25, suffix: '+', label: 'Countries Served' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

export const Statistics = () => {
  return (
    <section className="py-20 bg-[var(--navy)] relative overflow-hidden text-white">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:bg-white/10 transition-colors duration-300 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-[var(--brand-cyan-dark)] mb-2 drop-shadow-sm">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base font-medium text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
