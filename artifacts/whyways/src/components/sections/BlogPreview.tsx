import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const blogs = [
  {
    category: "AI",
    date: "Jan 15, 2026",
    title: "The Future of AI in Enterprise Software",
    excerpt: "How large language models are fundamentally changing the architecture of enterprise applications.",
    image: "from-[var(--brand-cyan-dark)] to-[var(--navy)]"
  },
  {
    category: "Cloud",
    date: "Feb 3, 2026",
    title: "Why Cloud-Native Architecture Wins in 2026",
    excerpt: "Migrating legacy systems to cloud-native microservices: challenges, patterns, and ultimate ROI.",
    image: "from-accent to-[var(--brand-cyan-dark)]"
  },
  {
    category: "Mobile",
    date: "Mar 10, 2026",
    title: "Building Scalable Mobile Apps with Flutter",
    excerpt: "Our engineering approach to creating cross-platform mobile experiences that feel truly native.",
    image: "from-primary to-[var(--brand-orange-dark)]"
  }
];

export const BlogPreview = () => {
  return (
    <section id="blog" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-secondary font-medium tracking-wider text-sm uppercase mb-4">
              <span className="w-8 h-px bg-secondary" />
              Insights
            </div>
            <h2 className="text-4xl font-heading font-bold text-foreground">
              Latest Thinking
            </h2>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 font-semibold text-secondary hover:text-accent transition-colors">
            View All Articles <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-card rounded-3xl overflow-hidden border border-border hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Image Placeholder */}
              <div className={`h-48 w-full bg-gradient-to-br ${blog.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar size={16} />
                  {blog.date}
                </div>
                <h3 className="text-xl font-heading font-bold text-card-foreground mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                  {blog.excerpt}
                </p>
                <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-foreground group-hover:text-secondary transition-colors">
                  Read More <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button className="inline-flex items-center gap-2 font-semibold text-secondary">
            View All Articles <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
