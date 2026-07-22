import React from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  Code2, 
  LayoutTemplate, 
  Smartphone, 
  Cloud, 
  PenTool, 
  TrendingUp, 
  Workflow 
} from 'lucide-react';

const services = [
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    description: "Custom AI models, LLM integrations, and intelligent automation for enterprise.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Enterprise-grade applications built for scale, performance, and security.",
    color: "from-indigo-500 to-purple-400"
  },
  {
    icon: LayoutTemplate,
    title: "Web Development",
    description: "High-performance web platforms, SPAs, and enterprise portals.",
    color: "from-emerald-500 to-teal-400"
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform iOS and Android experiences that users love.",
    color: "from-orange-500 to-yellow-400"
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    description: "AWS, Azure, and GCP architecture, migration, and DevOps services.",
    color: "from-sky-500 to-blue-400"
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Research-driven, human-centric design that converts and engages.",
    color: "from-pink-500 to-rose-400"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven growth, SEO, and performance marketing campaigns.",
    color: "from-violet-500 to-fuchsia-400"
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description: "Workflow automation, RPA, and business process optimization.",
    color: "from-amber-500 to-orange-400"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-secondary font-medium tracking-wider text-sm uppercase mb-4"
          >
            <span className="w-8 h-px bg-secondary" />
            What We Build
            <span className="w-8 h-px bg-secondary" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6"
          >
            Comprehensive Digital Capabilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            From concept to scale, we provide end-to-end technology solutions tailored to your business objectives.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/5 hover:-translate-y-1 overflow-hidden"
            >
              {/* Background gradient reveal on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.color} shadow-lg relative z-10`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-heading font-bold text-card-foreground mb-3 relative z-10">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-10">
                {service.description}
              </p>
              
              <a href="#" className="inline-flex items-center text-sm font-semibold text-secondary hover:text-accent transition-colors relative z-10">
                Learn More 
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
