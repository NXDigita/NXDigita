import React from 'react';
import { Cloud, Brain } from 'lucide-react';
import { FaAws, FaMicrosoft } from 'react-icons/fa';
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiFastapi, 
  SiTensorflow, SiFlutter,
  SiDocker, SiKubernetes, SiMongodb, 
  SiPostgresql, SiTypescript, SiRust 
} from 'react-icons/si';

const techsRow1 = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  { name: 'Rust', icon: SiRust, color: '#000000' },
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
];

const techsRow2 = [
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'Azure', icon: FaMicrosoft, color: '#0089D6' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'OpenAI', icon: Brain, color: '#412991' },
];

export const TechStack = () => {
  return (
    <section className="py-24 bg-muted/30 overflow-hidden relative">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Our Technology Stack
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We use the latest tools and frameworks to build scalable, secure, and high-performance applications.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

        {/* Row 1 */}
        <div className="flex w-[200%] mb-6 animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
          {[...techsRow1, ...techsRow1, ...techsRow1].map((tech, i) => (
            <div key={`r1-${i}`} className="flex-1 flex items-center justify-center min-w-[200px]">
              <div className="flex items-center gap-3 bg-card border border-border px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow">
                <tech.icon size={24} style={{ color: tech.color }} className="dark:brightness-150" />
                <span className="font-semibold text-card-foreground">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex w-[200%] animate-[marquee_35s_linear_infinite_reverse] hover:[animation-play-state:paused]">
          {[...techsRow2, ...techsRow2, ...techsRow2].map((tech, i) => (
            <div key={`r2-${i}`} className="flex-1 flex items-center justify-center min-w-[200px]">
              <div className="flex items-center gap-3 bg-card border border-border px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow">
                <tech.icon size={24} style={{ color: tech.color }} className="dark:brightness-150" />
                <span className="font-semibold text-card-foreground">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
