"use client";

import { use, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "../../data/portfolio";

export default function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHeroText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#f9f8f4] flex items-center justify-center text-[#121212]">
        <div className="text-center">
          <h1 className="text-4xl font-claude mb-4">404</h1>
          <p className="text-[#70706c] text-sm uppercase tracking-widest font-mono mb-8">Project not found</p>
          <button
            onClick={() => router.push("/works")}
            className="border-b border-[#121212] pb-1 uppercase tracking-widest font-mono text-xs hover:text-secondary transition-colors"
          >
            Return to Works
          </button>
        </div>
      </div>
    );
  }

  const galleryImages = Array.from(
    new Set([project.image, ...(project.images || [])])
  );

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-secondary selection:text-white pb-32 transition-colors duration-500">
      
      {/* Absolute Back Button */}
      <button
        onClick={() => router.push("/works")}
        className="fixed top-6 left-6 z-50 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] text-white hover:text-secondary transition-colors mix-blend-difference group"
      >
        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Works
      </button>

      {/* 100vh Hero Parallax */}
      <div ref={heroRef} className="w-full h-screen relative overflow-hidden bg-[#121212]">
        <motion.div 
          style={{ scale: 1.05 }} 
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
        
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#121212]" />
        
        {/* Centered Massive Title */}
        <motion.div 
          style={{ y: yHeroText, opacity: opacityHeroText }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <span className="font-mono text-white/80 text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-6 sm:mb-8 border border-white/20 px-4 py-1.5 rounded-full backdrop-blur-sm">
            {project.category}
          </span>
          <h1 className="text-[14vw] leading-[0.8] font-claude tracking-tighter text-white drop-shadow-2xl">
            {project.name}<span className="text-secondary">.</span>
          </h1>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/50">
          <span className="text-[9px] font-mono uppercase tracking-[0.3em]">Scroll</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" 
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full bg-background relative z-20 -mt-10 rounded-t-[2rem] sm:rounded-t-[4rem] px-6 py-20 sm:py-32 transition-colors duration-500">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Hero Tagline Pull Quote */}
          <div className="w-full text-center max-w-5xl mx-auto mb-24 md:mb-32">
             <h2 className="text-3xl sm:text-5xl md:text-[4vw] leading-[1.1] font-claude text-foreground">
               "{project.tagline}"
             </h2>
          </div>

          {/* Minimal Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-12 md:py-16 border-y border-border mb-24 md:mb-32 max-w-6xl mx-auto">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted">Role</span>
              <span className="font-bold text-sm">{project.role}</span>
            </div>
            {project.timeline && (
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted">Timeline</span>
                <span className="font-bold text-sm">{project.timeline}</span>
              </div>
            )}
            <div className="flex flex-col gap-3 col-span-2 md:col-span-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted">Stack</span>
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                {project.stack.map((tech, i) => (
                  <span key={tech} className="font-bold text-sm">
                    {tech}{i < project.stack.length - 1 ? "," : ""}
                  </span>
                ))}
              </div>
            </div>
            {project.links && (
              <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted">Live Links</span>
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:text-secondary flex items-center gap-2 group">
                    Live Site
                    <svg className="w-3.5 h-3.5 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:text-secondary flex items-center gap-2 group">
                    Source Code
                    <svg className="w-3.5 h-3.5 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-32 md:mb-48 text-center sm:text-left">
            <p className="text-lg md:text-2xl text-foreground/70 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Cinematic Gallery - Staggered */}
          {galleryImages.length > 1 && (
            <div className="flex flex-col gap-12 sm:gap-32 mb-32 md:mb-48">
              {galleryImages.slice(1).map((src, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full ${idx === 0 ? 'md:w-full' : (isEven ? 'md:w-[80%] mr-auto' : 'md:w-[80%] ml-auto')} bg-foreground/5 rounded-2xl md:rounded-[3rem] overflow-hidden`}
                  >
                    <img src={src} alt={`Gallery ${idx}`} className="w-full h-auto object-cover" />
                  </motion.div>
                )
              })}
            </div>
          )}

          {/* Problem & Solution Blocks */}
          {(project.problem || project.solution) && (
            <div className="grid md:grid-cols-2 gap-16 md:gap-32 mb-32 md:mb-48 max-w-6xl mx-auto">
              {project.problem && (
                <div className="space-y-8">
                  <h3 className="text-sm font-mono uppercase tracking-[0.2em] font-bold text-foreground border-b border-border pb-6">
                    The Challenge
                  </h3>
                  <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}
              {project.solution && (
                <div className="space-y-8">
                  <h3 className="text-sm font-mono uppercase tracking-[0.2em] font-bold text-foreground border-b border-border pb-6">
                    The Solution
                  </h3>
                  <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Key Features List */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="max-w-6xl mx-auto mb-32">
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] font-bold text-foreground mb-16 border-b border-border pb-6">
                Implementation Highlights
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex flex-col items-start gap-4">
                    <span className="text-secondary font-mono text-sm font-bold tracking-widest bg-secondary/10 px-3 py-1 rounded-full">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <p className="text-base text-foreground/70 leading-relaxed font-medium">
                      {feat}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Video Player Embed Card (Loom / Vimeo) */}
          {project.video && (
            <div className="w-full max-w-6xl mx-auto mb-32">
              <div className="text-sm font-mono uppercase tracking-[0.2em] font-bold text-foreground mb-8 border-b border-border pb-6">
                Video Walkthrough
              </div>
              <div
                className="w-full bg-foreground/5 rounded-[2rem] overflow-hidden"
                dangerouslySetInnerHTML={{ __html: project.video }}
              />
            </div>
          )}

          {/* Next Steps / Footer CTA */}
          <div className="w-full border-t border-border pt-32 pb-16 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl md:text-6xl font-claude mb-12">Interested in working together?</h2>
            <a href="mailto:bharathkrishna.ab.dev@gmail.com" className="px-8 py-4 bg-foreground text-foreground-inverse rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 hover:bg-secondary hover:text-white transition-all duration-300">
              Get in Touch
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
