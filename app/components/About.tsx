"use client";

import { motion } from "framer-motion";

export default function About() {
  const summaryWords = "Passionate self-taught Frontend Web Developer & Co-Founder of".split(" ");

  const pillars = [
    {
      title: "Product Execution",
      desc: "Delivering polished, user-centric web applications from concept to deployment.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Engineering Quality",
      desc: "Writing scalable, maintainable, and well-documented TypeScript & React code.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Strategic Leadership",
      desc: "Leading technical direction and startup operations as a Co-Founder.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
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
            <div className="space-y-8">
              {/* Executive Summary Headline */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#121212] leading-snug select-none flex flex-wrap gap-x-1.5 items-center">
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
              
              {/* Core Pillars Grid */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-accent mb-4">Core Competencies</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {pillars.map((pillar, idx) => (
                    <div key={idx} className="bg-white/60 border border-black/5 p-4 rounded-xl hover:bg-white transition-colors">
                      <div className="w-8 h-8 rounded-full bg-secondary-light text-secondary flex items-center justify-center mb-3">
                        {pillar.icon}
                      </div>
                      <h4 className="text-[#121212] font-semibold text-sm mb-1.5">{pillar.title}</h4>
                      <p className="text-[#70706c] text-xs leading-relaxed">{pillar.desc}</p>
                    </div>
                  ))}
                  
                  {/* Quick Facts Card */}
                  <div className="bg-secondary text-white p-4 rounded-xl shadow-sm flex flex-col justify-center">
                     <h4 className="font-semibold text-sm mb-2 opacity-90">Quick Facts</h4>
                     <ul className="text-xs space-y-2 opacity-80">
                       <li className="flex items-center gap-2">
                         <div className="w-1 h-1 rounded-full bg-white" />
                         Based in India
                       </li>
                       <li className="flex items-center gap-2">
                         <div className="w-1 h-1 rounded-full bg-white" />
                         Available for full-time roles
                       </li>
                       <li className="flex items-center gap-2">
                         <div className="w-1 h-1 rounded-full bg-white" />
                         Focus: Frontend & Fullstack UI
                       </li>
                     </ul>
                  </div>
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
