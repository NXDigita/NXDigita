import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const About = () => {
  const features = [
    "Innovation",
    "Scalability",
    "Security",
    "Automation"
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative group">
              {/* Abstract Gradient Mesh replacing image */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/40 via-primary to-background transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHBhdGggZD0iTTAgMEw4IDhaTTAgOEw4IDBaIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')] mix-blend-overlay opacity-50" />
              
              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-md bg-white/5">
                <div className="w-2 h-2 bg-accent rounded-full animate-ping" />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                className="absolute bottom-8 right-8 bg-card/90 backdrop-blur-xl border border-border p-6 rounded-2xl shadow-xl max-w-[200px]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent mb-2">
                  15+
                </div>
                <div className="text-sm font-medium text-card-foreground leading-tight">
                  Years of Global Engineering Excellence
                </div>
              </motion.div>
            </div>
            
            {/* Background blur effect behind card */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 text-secondary font-medium tracking-wider text-sm uppercase mb-4">
              <span className="w-8 h-px bg-secondary" />
              About Us
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Engineering Digital Growth <span className="text-muted-foreground">For Tomorrow</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              NXDigita AI Technologies is a technology consulting and software engineering company delivering AI-powered products, enterprise applications, cloud platforms, business automation, and digital transformation services globally.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border/50 hover:bg-muted transition-colors"
                >
                  <div className="text-accent">✦</div>
                  <span className="font-medium text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <a 
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform group"
            >
              Learn More About Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
