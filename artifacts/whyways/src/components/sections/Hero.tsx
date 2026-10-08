import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Activity, Users, Star } from "lucide-react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Generate random particles for the background
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden bg-primary dark:bg-[#040D1A]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px] mix-blend-screen animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px] mix-blend-screen animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-highlight/20 blur-[100px] mix-blend-screen animate-blob animation-delay-4000" />

        {/* Particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white/20"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div className="max-w-3xl" style={{ y, opacity }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#281B20] border border-white/10 text-[#E95D2A] text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E95D2A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E95D2A]"></span>
              </span>
              🚀 AI-Powered Digital Innovation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6"
            >
              Building Intelligent <br className="hidden md:block" />
              <span className=" text-[#E95D2A] bg-clip-text from-secondary via-accent to-white">
                Digital Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed"
            >
              We help startups, enterprises, and organizations transform ideas
              into scalable AI-powered software products through strategy,
              design, engineering, and digital innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-[#E95D2A] from-secondary to-accent text-white font-medium hover:shadow-[0_0_30px_rgba(0,194,255,0.3)] transition-all hover:-translate-y-1 flex items-center gap-2 group "
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-full bg-white/5 text-white border border-white/20 font-medium hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                Explore Services
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-6 items-center"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30">
                  <Activity className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-white font-bold font-heading">250+</div>
                  <div className="text-xs text-slate-400">
                    Projects Delivered
                  </div>
                </div>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-white font-bold font-heading">150+</div>
                  <div className="text-xs text-slate-400">Happy Clients</div>
                </div>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#6C63FF]/20 flex items-center justify-center border border-[#6C63FF]/30">
                  <Star className="w-5 h-5 text-[#6C63FF]" />
                </div>
                <div>
                  <div className="text-white font-bold font-heading">98%</div>
                  <div className="text-xs text-slate-400">Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Abstract Tech Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px] w-full hidden md:block"
            style={{ y }}
          >
            {/* Central Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary rounded-full border border-secondary/50 flex items-center justify-center text-2xl font-bold text-[#ff551d] select-none z-20">
              <div className="w-24 h-24 rounded-full flex items-center bg-[#101729] justify-center">
                <span className="text-2xl font-bold text-[#E95D2A] font-heading">
                  AI
                </span>
              </div>
            </div>

            {/* Orbiting Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/10 animate-[spin_20s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-white/5 animate-[spin_30s_linear_infinite_reverse]" />

            {/* Satellite Nodes */}
            {[
              {
                label: "Cloud",
                delay: 0,
                color: "#E95D2A",
                size: "w-16 h-16",
                pos: "top-10 left-[20%]",
                borderColor: "white/20",
              },
              {
                label: "Data",
                delay: 1,
                color: "#324256",
                size: "w-12 h-12",
                pos: "bottom-20 right-[15%]",
                borderColor: "#324256",
              },
              {
                label: "Mobile",
                delay: 2,
                color: "#1D2A3A",
                size: "w-20 h-20",
                pos: "top-[40%] right-0",
                borderColor: "white/20",
              },
              {
                label: "Web",
                delay: 3,
                color: "#E95D2A",
                size: "w-14 h-14",
                pos: "bottom-[30%] left-0",
                borderColor: "white/20",
              },
            ].map((node, idx) => (
              <motion.div
                key={idx}
                className={`absolute ${node.pos} ${node.size} rounded-2xl bg-[${node.color}] flex items-center justify-center shadow-lg shadow-black/50 backdrop-blur-md border border-[${node.borderColor}] z-30`}
                animate={{
                  y: [0, -15, 0],
                }}
                style={{
                  backgroundColor: node.color,
                  borderColor: node.borderColor.includes("/")
                    ? undefined
                    : node.borderColor,
                }}
                transition={{
                  duration: 4,
                  delay: node.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-white text-xs font-bold">
                  {node.label}
                </span>
              </motion.div>
            ))}

            {/* Connection Lines (SVG) */}
            <svg
              className="absolute inset-0 w-full h-full z-10 pointer-events-none"
              style={{ filter: "drop-shadow(0 0 8px rgba(0,194,255,0.5))" }}
            >
              <motion.path
                d="M 250 250 L 125 75"
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                className="animate-[dash_20s_linear_infinite]"
              />
              <motion.path
                d="M 250 250 L 425 425"
                stroke="url(#gradient2)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                className="animate-[dash_15s_linear_infinite]"
              />
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#00C2FF" stopOpacity="0" />
                  <stop offset="100%" stopColor="#00C2FF" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient
                  id="gradient2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#0F62FE" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#0F62FE" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
