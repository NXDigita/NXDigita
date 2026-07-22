import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Lightbulb, PenTool, Code, TestTube, Rocket, HeartHandshake } from 'lucide-react';

const steps = [
  { id: 1, title: 'Discovery', icon: Search, desc: 'We dive deep into your business requirements, target audience, and market landscape.' },
  { id: 2, title: 'Strategy', icon: Lightbulb, desc: 'Formulating a robust technical roadmap and architecture blueprint for scalable success.' },
  { id: 3, title: 'Design', icon: PenTool, desc: 'Crafting intuitive UI/UX and interactive prototypes that validate the user journey.' },
  { id: 4, title: 'Development', icon: Code, desc: 'Agile engineering using modern stacks, building secure and high-performance software.' },
  { id: 5, title: 'Testing', icon: TestTube, desc: 'Rigorous QA, automated testing, and security audits to ensure zero defects.' },
  { id: 6, title: 'Deployment', icon: Rocket, desc: 'Seamless CI/CD pipelines deploying to scalable cloud infrastructure.' },
  { id: 7, title: 'Support', icon: HeartHandshake, desc: 'Continuous monitoring, optimization, and SLA-backed maintenance.' }
];

export const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-secondary font-medium tracking-wider text-sm uppercase mb-4">
            <span className="w-8 h-px bg-secondary" />
            How We Work
            <span className="w-8 h-px bg-secondary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            A Proven Process for Success
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto mt-20">
          {/* Connecting Line */}
          <div className="absolute top-8 left-0 w-full h-1 bg-muted rounded-full hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 relative z-10">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              const isPast = index < activeStep;
              
              return (
                <div 
                  key={step.id}
                  className="relative flex md:flex-col items-center gap-4 md:gap-0 cursor-pointer group"
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Active Line Fill (Desktop) */}
                  {isPast && (
                    <motion.div 
                      layoutId="activeLine"
                      className="absolute top-8 right-1/2 w-full h-1 bg-secondary origin-left hidden md:block"
                    />
                  )}

                  {/* Icon Node */}
                  <motion.div 
                    className={`w-16 h-16 md:mb-6 rounded-2xl flex items-center justify-center shrink-0 border-2 transition-all duration-300 ${
                      isActive 
                        ? 'bg-secondary border-secondary text-white shadow-lg shadow-secondary/30 scale-110' 
                        : isPast
                        ? 'bg-primary border-primary text-white'
                        : 'bg-card border-border text-muted-foreground group-hover:border-secondary/50'
                    }`}
                  >
                    <step.icon className="w-6 h-6" />
                  </motion.div>

                  {/* Number Label */}
                  <div className={`absolute top-0 right-0 md:top-auto md:-bottom-8 md:left-1/2 md:-translate-x-1/2 text-[10px] font-bold px-2 py-1 rounded bg-background border hidden md:block ${isActive ? 'border-secondary text-secondary' : 'border-border text-muted-foreground'}`}>
                    STEP 0{step.id}
                  </div>

                  {/* Content (Mobile always visible, Desktop changes state) */}
                  <div className="md:hidden">
                    <h3 className={`font-bold text-lg ${isActive ? 'text-secondary' : 'text-foreground'}`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                  </div>

                  {/* Desktop Title */}
                  <h3 className={`hidden md:block font-bold text-sm text-center transition-colors ${isActive ? 'text-secondary' : 'text-foreground'}`}>
                    {step.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Detailed Description Box (Desktop Only) */}
          <div className="hidden md:block mt-16 max-w-2xl mx-auto bg-card border border-border rounded-2xl p-8 shadow-sm relative overflow-hidden min-h-[140px]">
            <div className="absolute top-0 left-0 w-1 h-full bg-secondary" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-secondary font-bold font-heading">Step 0{steps[activeStep].id}</span>
                  <h4 className="text-xl font-bold text-card-foreground">{steps[activeStep].title}</h4>
                </div>
                <p className="text-muted-foreground text-lg">
                  {steps[activeStep].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
