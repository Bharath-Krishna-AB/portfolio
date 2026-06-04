"use client";

import { motion } from "framer-motion";

export default function About() {
  const summaryWords = "Passionate self-taught Frontend Web Developer & Co-Founder of".split(" ");

  const pillars = [
    {
      title: "Product Execution",
      desc: "Delivering polished, user-centric web applications from concept to deployment."
    },
    {
      title: "Engineering Quality",
      desc: "Writing scalable, maintainable, and well-documented TypeScript & React code."
    },
    {
      title: "Strategic Leadership",
      desc: "Leading technical direction and startup operations as a Co-Founder."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#f9f8f4] relative overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-6">
        {/* Section Label */}
        <span className="section-label mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
          About
        </span>

        {/* About Grid Card Block */}
        <div className="grid md:grid-cols-12 gap-6 items-stretch mt-6">
          {/* Left Column: Premium Avatar Card (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-5 soft-card p-6 flex flex-col items-center justify-center bg-white relative overflow-hidden group select-none border border-black/[0.04] shadow-[0_8px_30px_rgba(18,18,18,0.01)]"
          >
            {/* Soft decorative glow background in card */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-light/30 to-transparent pointer-events-none" />

            {/* Rotating Portrait Ring */}
            <div className="relative w-36 h-36 md:w-48 md:h-48 flex items-center justify-center z-10">
              <div className="absolute inset-0 rounded-full border border-dashed border-secondary/30 animate-[spin_40s_linear_infinite] group-hover:border-secondary transition-colors" />
              
              {/* Actual Profile Avatar Container */}
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-white shadow-md bg-[#f3f2eb]">
                <img
                  src="https://github.com/Bharath-Krishna-AB.png"
                  alt="Bharath Krishna"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2 z-10">
              <span className="text-[11px] font-mono px-3 py-1 bg-secondary-light text-secondary border border-secondary/10 rounded-full font-semibold">
                Frontend Developer
              </span>
              <span className="text-[11px] font-mono px-3 py-1 bg-secondary-light text-secondary border border-secondary/10 rounded-full font-semibold">
                Co-Founder
              </span>
            </div>

            {/* Actions button */}
            <div className="mt-8 z-10 w-full">
              <motion.a
                href="/resume.pdf"
                download="Bharath_Krishna_Resume.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center w-full gap-3 px-6 py-3 bg-[#121212] text-white rounded-xl font-semibold text-xs sm:text-sm shadow-md hover:bg-[#222] transition-all cursor-pointer font-mono uppercase tracking-wider"
              >
                <span>Download Resume</span>
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Structured HR-Friendly Narrative (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-7 soft-card p-8 md:p-10 bg-[#f3f2eb]/70 border border-black/[0.04] flex flex-col justify-center"
          >
            <div className="space-y-0">
              {/* Executive Summary Headline */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-claude text-[#121212] leading-snug select-none flex flex-wrap gap-x-1.5 items-center">
                  {summaryWords.map((word, i) => (
                    <span key={i}>{word}</span>
                  ))}
                  <span className="relative inline-block ml-1">
                    <span className="relative z-10 font-instrument font-normal text-secondary italic tracking-normal text-3xl sm:text-4xl">
                      Aevon.
                    </span>
                  </span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#70706c] leading-relaxed max-w-xl">
                  Specializing in modern web technologies including JavaScript, React.js, Next.js, and Tailwind CSS. Driven by a passion for crafting elegant user interfaces and robust architectures.
                </p>
              </div>
              
              {/* Engineering Capability Matrix */}
              <div className="mt-10 pt-8 border-t border-black/[0.06]">
                <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#121212] mb-6">Core Competencies</h3>
                
                <div className="flex flex-col">
                  {pillars.map((pillar, idx) => (
                    <div 
                      key={idx} 
                      className="group flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 py-5 border-b border-black/[0.04] last:border-0"
                    >
                      {/* Typographic Index */}
                      <span className="text-xs font-mono text-secondary font-bold pt-0.5 w-6 shrink-0">
                        0{idx + 1}.
                      </span>
                      
                      {/* Matrix Content */}
                      <div className="space-y-1.5 flex-1">
                        <h4 className="text-[#121212] font-bold text-base sm:text-lg tracking-tight group-hover:text-secondary transition-colors duration-300">
                          {pillar.title}
                        </h4>
                        <p className="text-[#70706c] text-xs sm:text-sm leading-relaxed max-w-sm">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Facts HR Status Bar */}
              <div className="mt-8 bg-[#121212] text-white p-5 sm:px-6 sm:py-5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-lg border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#d0fc4a] animate-pulse shrink-0 shadow-[0_0_8px_rgba(208,252,74,0.6)]" />
                  <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.15em] uppercase text-[#d0fc4a]">
                    Available for Full-time Roles
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-[10px] sm:text-xs font-medium text-white/70 uppercase tracking-wider font-mono">
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    Based in India
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    Frontend & Fullstack
                  </span>
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
