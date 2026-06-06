"use client";

import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import { projects } from "../../data/portfolio";
import { motion } from "framer-motion";

export default function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();

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

  // Gallery images array (Main image first, then additional)
  const galleryImages = Array.from(
    new Set([project.image, ...(project.images || [])])
  );

  return (
    <div className="min-h-screen bg-[#f9f8f4] text-[#121212] selection:bg-[#121212] selection:text-white pb-32">
      
      {/* Editorial Top Navigation */}
      <nav className="sticky top-0 z-50 bg-[#f9f8f4]/90 backdrop-blur-md border-b border-black/10 px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => router.push("/works")}
          className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] hover:text-secondary transition-colors group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Works
        </button>
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#70706c]">
          {project.category}
        </span>
      </nav>

      {/* Massive Hero Image */}
      <div className="w-full h-[60vh] md:h-[75vh] bg-black/5 relative overflow-hidden">
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover grayscale-[10%]"
        />
      </div>

      {/* Brutalist Split-Pane Layout */}
      <div className="max-w-[1400px] mx-auto px-6 mt-16 md:mt-24">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1fr_2.5fr] gap-16 lg:gap-32 items-start">
          
          {/* LEFT PANE: Sticky Metadata Table */}
          <div className="lg:sticky lg:top-32 w-full flex flex-col font-mono uppercase tracking-widest text-[10px] md:text-xs text-[#121212]">
            {/* Tech Stack Row */}
            <div className="flex flex-col gap-2 py-5 border-t border-black/10">
              <span className="text-[#70706c]">Stack</span>
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                {project.stack.map((tech, i) => (
                  <span key={tech} className="font-bold">
                    {tech}{i < project.stack.length - 1 ? "," : ""}
                  </span>
                ))}
              </div>
            </div>

            {/* Role Row */}
            <div className="flex justify-between py-5 border-t border-black/10">
              <span className="text-[#70706c]">Role</span>
              <span className="font-bold text-right">{project.role}</span>
            </div>

            {/* Timeline Row */}
            {project.timeline && (
              <div className="flex justify-between py-5 border-t border-black/10">
                <span className="text-[#70706c]">Date</span>
                <span className="font-bold">{project.timeline}</span>
              </div>
            )}

            {/* Achievement Row */}
            {project.achievement && (
              <div className="flex justify-between py-5 border-t border-black/10">
                <span className="text-[#70706c]">Award</span>
                <span className="font-bold text-secondary text-right">{project.achievement.title}</span>
              </div>
            )}

            {/* Links Row */}
            <div className="flex flex-col gap-4 py-5 border-y border-black/10">
              <span className="text-[#70706c]">Links</span>
              <div className="flex flex-col gap-3">
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group hover:text-secondary transition-colors"
                  >
                    <span className="font-bold">Live Site</span>
                    <svg className="w-3.5 h-3.5 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
                {project.links?.buy && (
                  <a
                    href={project.links.buy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group hover:text-secondary transition-colors"
                  >
                    <span className="font-bold">Buy Template</span>
                    <svg className="w-3.5 h-3.5 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group hover:text-secondary transition-colors"
                  >
                    <span className="font-bold">Source Code</span>
                    <svg className="w-3.5 h-3.5 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT PANE: Editorial Content & Gallery */}
          <div className="w-full flex flex-col pb-24">
            
            {/* Massive Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem] leading-[0.9] font-claude tracking-tighter text-[#121212] mb-12"
            >
              {project.name}<span className="text-secondary">.</span>
            </motion.h1>

            {/* Tagline / Intro */}
            <div className="text-xl md:text-3xl text-[#121212] leading-tight max-w-4xl mb-16 font-claude">
              {project.tagline}
            </div>

            {/* Description */}
            <div className="text-sm md:text-base text-[#70706c] leading-relaxed max-w-3xl mb-24">
              {project.description}
            </div>

            {/* Problem & Solution Blocks */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-32">
              {project.problem && (
                <div className="space-y-6">
                  <h3 className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#121212] border-b border-black/10 pb-4">
                    The Problem
                  </h3>
                  <p className="text-sm text-[#70706c] leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}
              {project.solution && (
                <div className="space-y-6">
                  <h3 className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#121212] border-b border-black/10 pb-4">
                    The Solution
                  </h3>
                  <p className="text-sm text-[#70706c] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>

            {/* Video Player Embed Card (Loom / Vimeo) */}
            {project.video && (
              <div className="w-full mb-32">
                <div className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#121212] mb-6">
                  Video Walkthrough
                </div>
                <div
                  className="w-full bg-black/5"
                  dangerouslySetInnerHTML={{ __html: project.video }}
                />
              </div>
            )}

            {/* Scrolling Gallery Waterfall */}
            {galleryImages.length > 1 && (
              <div className="w-full flex flex-col gap-8 md:gap-16">
                {galleryImages.slice(1).map((src, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full bg-black/5"
                  >
                    <img
                      src={src}
                      alt={`${project.name} image ${idx + 2}`}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            )}

            {/* Key Features List */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="mt-32 pt-16 border-t border-black/10">
                <h3 className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#121212] mb-10">
                  Implementation Highlights
                </h3>
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <span className="text-secondary font-mono text-[10px] mt-1 tracking-widest">
                        {(idx + 1).toString().padStart(2, '0')}
                      </span>
                      <p className="text-sm text-[#70706c] leading-relaxed">
                        {feat}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
