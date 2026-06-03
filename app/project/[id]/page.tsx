"use client";

import { use, useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { projects, Project } from "../../data/portfolio";
import { motion, AnimatePresence } from "framer-motion";

// Grid Motion Gallery Component from sooryaa.me
interface GridMotionProps {
  images: string[];
  onImageClick: (src: string) => void;
}

function GridMotionGallery({ images, onImageClick }: GridMotionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);
  const mouseXRef = useRef(0);

  // Populate gallery grid items recursively to fill 4 rows x 7 columns (28 total slots)
  const gridSlots = 28;
  const gridImages = (() => {
    if (images.length === 0) return Array(gridSlots).fill("");
    const filled: string[] = [];
    while (filled.length < gridSlots) {
      filled.push(...images);
    }
    return filled.slice(0, gridSlots);
  })();

  useEffect(() => {
    if (typeof window === "undefined") return;

    mouseXRef.current = window.innerWidth / 2;
    // Track the current x position for each of the 4 rows to apply lerp smoothing
    const currentX = [0, 0, 0, 0];

    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX;
    };

    let animationFrameId: number;

    const animateRows = () => {
      // Row delays correspond to speed factor in lerp (lower means smoother/slower catch-up)
      const rowSpeeds = [0.06, 0.08, 0.1, 0.12];
      
      rowsRef.current.forEach((row, rowIndex) => {
        if (!row) return;
        // Alternate directions
        const dirSign = rowIndex % 2 === 0 ? 1 : -1;
        // Translate relative to mouse coordinate
        const targetX =
          ((mouseXRef.current / window.innerWidth) * 300 - 150) * dirSign;

        // Linear interpolation (lerp): current = current + (target - current) * factor
        const speed = rowSpeeds[rowIndex % rowSpeeds.length];
        currentX[rowIndex] += (targetX - currentX[rowIndex]) * speed;

        row.style.transform = `translateX(${currentX[rowIndex]}px)`;
      });

      animationFrameId = requestAnimationFrame(animateRows);
    };

    animationFrameId = requestAnimationFrame(animateRows);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="noscroll h-full w-full" ref={containerRef}>
      <div className="intro h-full w-full">
        <div className="gridMotion-container">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="row"
              ref={(el) => {
                rowsRef.current[rowIndex] = el;
              }}
            >
              {[...Array(7)].map((_, colIndex) => {
                const imgIndex = rowIndex * 7 + colIndex;
                const imgSrc = gridImages[imgIndex];

                return (
                  <div key={colIndex} className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img cursor-pointer"
                        style={{
                          backgroundImage: `url(${imgSrc})`,
                        }}
                        onClick={() => onImageClick(imgSrc)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [selectedZoomImage, setSelectedZoomImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find target project
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#f9f8f4] flex items-center justify-center text-[#121212] font-general">
        <div className="text-center space-y-4">
          <p className="text-[#70706c] text-sm">Project not found</p>
          <button
            onClick={() => router.push("/projects")}
            className="btn-primary"
          >
            View all projects
          </button>
        </div>
      </div>
    );
  }

  // Gallery images array
  const galleryImages = Array.from(
    new Set([project.image, ...(project.images || [])])
  );

  return (
    <div className="min-h-screen bg-[#f9f8f4] text-[#121212] font-general selection:bg-clay-light selection:text-clay-accent pb-24">
      {/* Dynamic Header Mouse-interactive Motion Gallery */}
      <div className="relative h-[55vh] overflow-hidden bg-[#f3f2eb]/60">
        <GridMotionGallery
          images={galleryImages}
          onImageClick={setSelectedZoomImage}
        />
        {/* Soft bottom mask gradient */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f9f8f4] via-[#f9f8f4]/60 to-transparent pointer-events-none z-10" />

        {/* Floating Back Button */}
        <div className="absolute top-6 left-6 z-50">
          <button
            onClick={() => router.back()}
            className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-black/8 hover:bg-white hover:scale-105 shadow-sm transition-all cursor-pointer"
            aria-label="Go Back"
          >
            {/* Arrow Left SVG */}
            <svg className="w-5 h-5 text-[#121212]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content Container */}
      <div className="container-narrow max-w-3xl mx-auto px-6 -mt-24 relative z-20 space-y-8">
        
        {/* Core Project Specs Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="soft-card p-6 md:p-8 bg-white/90 backdrop-blur-md"
        >
          {/* Category & Scope labels */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="text-[10px] font-mono font-medium px-2.5 py-0.5 bg-black/5 text-[#121212] rounded-full capitalize">
              {project.category}
            </span>
            <span className="text-xs text-[#70706c] font-mono">
              / {project.type}
            </span>
          </div>

          {/* Winner Achievement Ribbon */}
          {project.achievement && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 rounded-full bg-clay-light border border-clay-accent/15"
            >
              {/* Trophy SVG */}
              <svg className="w-4 h-4 text-clay-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.475 3.475 0 011.89 1.89 3.475 3.475 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.475 3.475 0 01-1.89 1.89 3.475 3.475 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.475 3.475 0 01-1.89-1.89 3.475 3.475 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.475 3.475 0 011.89-1.89z" />
              </svg>
              <span className="text-xs font-mono font-medium text-clay-accent">
                {project.achievement.title} {project.achievement.prize ? `— ${project.achievement.prize}` : ""}
              </span>
            </motion.div>
          )}

          {/* Project Title */}
          <h1 className="text-3xl md:text-4xl font-serif text-[#121212] mb-2 leading-tight">
            {project.name}
          </h1>
          <p className="text-base sm:text-lg text-[#70706c] mb-6 max-w-xl leading-relaxed">
            {project.tagline}
          </p>

          {/* Specs Meta details */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 text-xs text-[#70706c] mb-6 border-b border-black/5 pb-6">
            <div className="flex items-center gap-1.5">
              {/* User Icon SVG */}
              <svg className="w-4 h-4 text-[#70706c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{project.role}</span>
            </div>

            {project.timeline && (
              <div className="flex items-center gap-1.5">
                {/* Calendar SVG */}
                <svg className="w-4 h-4 text-[#70706c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{project.timeline}</span>
              </div>
            )}

            <div className="flex items-center gap-1.5">
              {/* Code/Briefcase SVG */}
              <svg className="w-4 h-4 text-[#70706c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{project.stack.length} technologies</span>
            </div>
          </div>

          {/* Tech stack badge list */}
          <div className="flex flex-wrap gap-1.5 mb-8">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] px-3 py-1 bg-[#f3f2eb] text-[#121212] border border-black/5 rounded-full font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Direct CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            {project.links?.buy && (
              <a
                href={project.links.buy}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {/* Gumroad Shopping Cart SVG */}
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Buy Template
              </a>
            )}

            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {/* External link SVG */}
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Live
              </a>
            )}

            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Source Code
              </a>
            )}
          </div>
        </motion.div>

        {/* Video Player Embed Card (Loom / Vimeo) */}
        {project.video && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="soft-card p-2 sm:p-3 overflow-hidden bg-white/60"
          >
            <div
              className="w-full rounded-xl overflow-hidden"
              dangerouslySetInnerHTML={{ __html: project.video }}
            />
          </motion.div>
        )}

        {/* Problem Statement Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="soft-card p-6 md:p-8 space-y-3"
        >
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#70706c] font-semibold">
            The Problem
          </h2>
          <p className="text-base text-[#121212] leading-relaxed">
            {project.problem}
          </p>
        </motion.div>

        {/* Solution Statement Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="soft-card p-6 md:p-8 space-y-3"
        >
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#70706c] font-semibold">
            The Solution
          </h2>
          <p className="text-base text-[#121212] leading-relaxed">
            {project.solution}
          </p>
        </motion.div>

        {/* Secondary screenshot showcase gallery */}
        {galleryImages.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="soft-card p-6 md:p-8 space-y-6"
          >
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#70706c] font-semibold">
              Project Gallery
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {galleryImages.slice(1).map((src, idx) => (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden bg-black/5 aspect-video cursor-pointer hover:shadow-md border border-black/5 transition-all"
                  onClick={() => setSelectedZoomImage(src)}
                >
                  <img
                    src={src}
                    alt={`${project.name} screenshot ${idx + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Key Features Matrix List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="soft-card p-6 md:p-8 space-y-4"
        >
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#70706c] font-semibold">
            Key Features & Implementation
          </h2>
          <div className="grid sm:grid-cols-2 gap-3.5">
            {project.keyFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/60 border border-black/5">
                <span className="w-1.5 h-1.5 rounded-full bg-clay-accent mt-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-[#121212] leading-relaxed">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Impact and Achievements summary */}
        {(project.impact || project.achievement) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="soft-card p-6 md:p-8 bg-gradient-to-br from-clay-light/20 to-transparent space-y-4"
          >
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#70706c] font-semibold">
              Impact & Achievements
            </h2>
            
            {project.achievement && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/80 border border-clay-accent/10 shadow-sm">
                {/* Trophy SVG */}
                <svg className="w-5 h-5 text-clay-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                </svg>
                <div>
                  <p className="font-medium text-sm text-[#121212] leading-snug">
                    {project.achievement.title}
                  </p>
                  {project.achievement.prize && (
                    <p className="text-[11px] text-[#70706c] font-mono mt-0.5">
                      Prize: {project.achievement.prize}
                    </p>
                  )}
                </div>
              </div>
            )}

            {project.impact && (
              <p className="text-sm leading-relaxed text-[#70706c]">
                {project.impact}
              </p>
            )}
          </motion.div>
        )}

        {/* Footer Back Button CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-8 flex justify-center"
        >
          <button
            onClick={() => router.push("/projects")}
            className="btn-secondary flex items-center gap-2 cursor-pointer font-mono text-xs uppercase tracking-wider"
          >
            {/* Arrow Left SVG */}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Projects
          </button>
        </motion.div>
      </div>

      {/* Lightbox / Zoomed image Modal overlay */}
      <AnimatePresence>
        {selectedZoomImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#f9f8f4]/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedZoomImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-2.5 rounded-full bg-[#f3f2eb] hover:bg-secondary hover:text-white transition-colors border border-black/5 cursor-pointer z-[110]"
              onClick={() => setSelectedZoomImage(null)}
              aria-label="Close Preview"
            >
              {/* Close X SVG */}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image */}
            <div className="relative w-full max-w-4xl flex items-center justify-center h-full pointer-events-none">
              <motion.img
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={selectedZoomImage}
                alt="Project Screenshot Preview"
                className="max-w-full max-h-[80vh] rounded-xl shadow-lg border border-black/5 object-contain pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
