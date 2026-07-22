import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Server, Cpu, Users2, Clock } from 'lucide-react';

const reasons = [
  {
    icon: Users2,
    title: "Industry Experts",
    description: "Specialists across 12+ verticals delivering domain-specific solutions."
  },
  {
    icon: Zap,
    title: "Agile Delivery",
    description: "Two-week sprint cycles with daily standups and transparent reporting."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "SOC2, ISO 27001 compliant infrastructure and secure coding practices."
  },
  {
    icon: Cpu,
    title: "AI-First Approach",
    description: "AI embedded at every layer of the stack for maximum efficiency."
  },
  {
    icon: Server,
    title: "Dedicated Team",
    description: "Your team, extended seamlessly. Not just freelancers, but partners."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock monitoring, maintenance, and incident response."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Animated Infographic */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[500px] w-full max-w-lg mx-auto lg:mx-0 flex items-center justify-center"
          >
            {/* Concentric rings */}
            {[1, 2, 3, 4].map((ring) => (
              <motion.div
                key={ring}
                className="absolute rounded-full border border-secondary/20"
                style={{
                  width: `${ring * 100}px`,
                  height: `${ring * 100}px`,
                }}
                animate={{
                  rotate: ring % 2 === 0 ? 360 : -360,
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 20 * ring, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: ring },
                }}
              />
            ))}
            
            {/* Center Node */}
            <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-accent p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="font-heading font-bold text-xl text-foreground">WhyUs</span>
              </div>
            </div>

            {/* Orbiting stat badges */}
            <motion.div 
              className="absolute top-10 right-10 bg-card border border-border shadow-lg rounded-xl p-4 backdrop-blur-sm z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-2xl font-bold text-accent">100%</div>
              <div className="text-xs text-muted-foreground">In-house Talent</div>
            </motion.div>

            <motion.div 
              className="absolute bottom-20 left-4 bg-card border border-border shadow-lg rounded-xl p-4 backdrop-blur-sm z-20"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="text-2xl font-bold text-secondary">Zero</div>
              <div className="text-xs text-muted-foreground">Compromise</div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <div>
            <div className="inline-flex items-center gap-2 text-secondary font-medium tracking-wider text-sm uppercase mb-4">
              <span className="w-8 h-px bg-secondary" />
              The NXDigita Advantage
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12">
              Why Global Leaders <br />Partner With Us
            </h2>

            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                      <reason.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
