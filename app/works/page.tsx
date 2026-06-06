"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "../data/portfolio";

function ProjectRow({ project, index }: { project: any, index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  
  // Stagger left/right
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="w-full relative py-16 md:py-24 flex flex-col justify-center border-b border-border group transition-colors duration-500">
      <Link href={`/work/${project.id}`} className="block max-w-[1400px] mx-auto w-full px-6 relative z-10">
        
        <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-20`}>
          
          {/* Cinematic Image Container with Parallax */}
          <div className="w-full md:w-[55%] overflow-hidden bg-black/5 rounded-2xl md:rounded-[2rem] aspect-[4/3] md:aspect-[16/10] relative">
            <motion.div style={{ y: yImage }} className="absolute inset-[-15%] w-[130%] h-[130%]">
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
            </motion.div>
            
            {/* Hover Magnetic-style Cursor Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground text-foreground-inverse w-24 h-24 rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-20 shadow-2xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold">View</span>
            </div>
            
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          {/* Massive Typography */}
          <div className="w-full md:w-[45%] flex flex-col">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <span className="font-mono text-secondary text-xs sm:text-sm tracking-[0.2em] font-semibold">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <span className="w-8 h-[1px] bg-foreground/20" />
              <span className="font-mono text-muted text-[10px] sm:text-xs uppercase tracking-[0.2em]">
                {project.category}
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl md:text-[5vw] leading-[0.9] font-claude tracking-tighter mb-6 md:mb-8 group-hover:text-secondary transition-colors duration-500 text-foreground">
              {project.name}
            </h2>
            
            <p className="text-foreground/70 text-sm md:text-base leading-relaxed max-w-md font-sans">
              {project.tagline}
            </p>
            
            <div className="mt-8 md:mt-10 flex flex-wrap gap-2">
              {project.stack.slice(0, 3).map((tech: string) => (
                <span key={tech} className="text-[9px] sm:text-[10px] uppercase tracking-wider font-mono px-3.5 py-1.5 border border-border rounded-full text-muted bg-foreground/5">
                  {tech}
                </span>
              ))}
              {project.stack.length > 3 && (
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-mono px-3.5 py-1.5 border border-border rounded-full text-muted bg-foreground/5">
                  +{project.stack.length - 3}
                </span>
              )}
            </div>
          </div>

        </div>
      </Link>
    </div>
  )
}

export default function ProjectsArchive() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: "all", label: "All Works" },
    { id: "client", label: "Client" },
    { id: "frontend", label: "Frontend" },
    { id: "hackathon", label: "Hackathon" },
  ];

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      return selectedCategory === "all" || project.category === selectedCategory;
    });
  }, [selectedCategory]);

  return (
    <div className="min-h-dvh bg-background text-foreground font-claude selection:bg-foreground selection:text-foreground-inverse pb-32 transition-colors duration-500">
      {/* Immersive Header */}
      <div className="pt-32 pb-16 px-6 max-w-[1400px] mx-auto relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground hover:opacity-80 text-foreground-inverse rounded-full font-bold text-[10px] font-mono uppercase tracking-[0.2em] shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer mb-12 group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </Link>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[4.5rem] sm:text-[10vw] lg:text-[12vw] leading-[0.8] font-claude tracking-tighter text-foreground mb-8"
        >
          Work<span className="text-secondary">.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-xl leading-relaxed font-sans"
        >
          An archive of premium digital experiences, robust architectures, and forward-thinking interfaces.
        </motion.p>
      </div>

      {/* Floating Filter Console */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-2xl border-y border-border mb-12">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex items-center gap-6 md:gap-10 overflow-x-auto no-scrollbar shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.15em] transition-all duration-300 shrink-0 pb-1.5 ${
                  selectedCategory === cat.id
                    ? "text-foreground font-bold"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {cat.label}
                {/* Active Indicator Line */}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-[1.5px] transition-all duration-300 ${
                    selectedCategory === cat.id ? "bg-foreground" : "bg-transparent"
                  }`} 
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cinematic Staggered Projects List */}
      <div className="w-full">
        {filteredProjects.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index} />
        ))}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="w-full py-32 flex flex-col items-center justify-center text-center px-6">
            <h3 className="text-3xl font-bold font-claude text-foreground mb-2">No projects found</h3>
            <p className="text-muted font-mono text-[10px] uppercase tracking-widest mb-8">
              Adjust your filters to see more work.
            </p>
            <button
              onClick={() => setSelectedCategory("all")}
              className="px-6 py-3 bg-foreground hover:bg-secondary text-foreground-inverse rounded-full font-bold text-[10px] font-mono uppercase tracking-widest transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
