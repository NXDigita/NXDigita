import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = ['All', 'Healthcare', 'FinTech', 'Education', 'Manufacturing', 'Real Estate'];

const projects = [
  {
    id: 1,
    title: 'Healthcare AI Diagnostic Platform',
    category: 'Healthcare',
    description: 'AI-powered diagnostic platform deployed across 500+ hospitals globally.',
    image: 'from-accent to-[var(--brand-cyan-dark)]',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 2,
    title: 'Enterprise HR Management',
    category: 'Enterprise',
    description: 'End-to-end HR platform serving 10,000+ employees.',
    image: 'from-primary to-[var(--brand-orange-dark)]',
    span: 'col-span-1 md:col-span-1 row-span-1'
  },
  {
    id: 3,
    title: 'Smart Manufacturing ERP',
    category: 'Manufacturing',
    description: 'IoT-integrated ERP reducing factory downtime by 40%.',
    image: 'from-accent to-[var(--brand-cyan-dark)]',
    span: 'col-span-1 md:col-span-1 row-span-1'
  },
  {
    id: 4,
    title: 'Real-time FinTech Dashboard',
    category: 'FinTech',
    description: 'High-frequency trading and financial intelligence platform.',
    image: 'from-primary to-[var(--brand-orange-dark)]',
    span: 'col-span-1 md:col-span-1 row-span-2'
  },
  {
    id: 5,
    title: 'Global Education LMS',
    category: 'Education',
    description: 'Interactive learning platform scaling to 2M+ active users.',
    image: 'from-accent to-[var(--brand-cyan-dark)]',
    span: 'col-span-1 md:col-span-2 row-span-1'
  },
  {
    id: 6,
    title: 'AI Property Engine',
    category: 'Real Estate',
    description: 'Machine learning driven property recommendation and pricing engine.',
    image: 'from-primary to-[var(--brand-orange-dark)]',
    span: 'col-span-1 md:col-span-1 row-span-1'
  }
];

export const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-secondary font-medium tracking-wider text-sm uppercase mb-4">
              <span className="w-8 h-px bg-secondary" />
              Our Work
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Featured Case Studies
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat 
                    ? 'bg-foreground text-background' 
                    : 'bg-card text-muted-foreground border border-border hover:border-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className={`relative group rounded-3xl overflow-hidden ${project.span}`}
              >
                {/* Simulated Image Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.image} transition-transform duration-700 group-hover:scale-105`} />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-200 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.description}
                    </p>
                    <button className="flex items-center gap-2 text-white font-medium hover:text-accent transition-colors opacity-0 group-hover:opacity-100 duration-300 delay-150">
                      View Case Study <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-4 rounded-full border border-border bg-card text-foreground font-medium hover:bg-muted transition-colors inline-flex items-center gap-2">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};
