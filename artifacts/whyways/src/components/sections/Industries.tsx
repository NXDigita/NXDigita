import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, GraduationCap, Factory, ShoppingCart, Landmark, Truck, HardHat, Building2 } from 'lucide-react';

const industries = [
  { name: 'Healthcare', icon: HeartPulse, color: 'bg-primary/10 text-primary border-primary/20' },
  { name: 'Education', icon: GraduationCap, color: 'bg-accent/10 text-accent border-accent/20' },
  { name: 'Manufacturing', icon: Factory, color: 'bg-primary/10 text-primary border-primary/20' },
  { name: 'Retail & E-commerce', icon: ShoppingCart, color: 'bg-accent/10 text-accent border-accent/20' },
  { name: 'Finance & FinTech', icon: Landmark, color: 'bg-primary/10 text-primary border-primary/20' },
  { name: 'Logistics', icon: Truck, color: 'bg-accent/10 text-accent border-accent/20'},
  { name: 'Construction', icon: HardHat, color: 'bg-primary/10 text-primary border-primary/20' },
  { name: 'Government', icon: Building2, color: 'bg-accent/10 text-accent border-accent/20' },
];

export const Industries = () => {
  return (
    <section id="industries" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-muted-foreground">
            Delivering domain-specific software solutions that solve real business challenges.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-all cursor-pointer hover:shadow-lg"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 border transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${ind.color}`}>
                <ind.icon className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-semibold text-center text-card-foreground group-hover:text-secondary transition-colors">
                {ind.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
