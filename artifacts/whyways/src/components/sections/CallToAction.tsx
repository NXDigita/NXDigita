import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';

export const CallToAction = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#040D1A]">
      {/* Abstract Glowing Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[500px] bg-secondary/30 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 blur-[100px] rounded-full mix-blend-screen" />
        
        {/* Floating Orbs */}
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            initial={{ 
              x: `${Math.random() * 100}vw`, 
              y: `${Math.random() * 100}vh`,
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{ 
              y: [null, `${Math.random() * -50}vh`],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center border border-white/10 bg-white/5 backdrop-blur-xl rounded-[3rem] p-10 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-highlight" />
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Let's Build Something <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Extraordinary</span> Together
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto"
          >
            Whether you're launching a startup or scaling an enterprise platform, our engineering experts are ready to turn your vision into reality.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-secondary to-accent text-white font-medium hover:shadow-[0_0_30px_rgba(0,194,255,0.4)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group text-lg">
              <MessageSquare className="w-5 h-5" />
              Book a Consultation
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 text-white border border-white/20 font-medium hover:bg-white/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group text-lg">
              Get a Proposal
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
          
          <p className="mt-8 text-sm text-slate-400">
            Usually responds within 2 hours • No commitment required
          </p>
        </div>
      </div>
    </section>
  );
};
