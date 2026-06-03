"use client";

import { motion } from "framer-motion";

export default function About() {
  const words = "I specialize in JavaScript, React.js, Node.js, HTML, CSS, and Tailwind CSS. Currently exploring Next.js, RAG applications with LangChain, AI integration, and TypeScript.".split(" ");

  return (
    <section id="about" className="py-24 bg-[#f9f8f4] relative overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-6">
        {/* Section Label */}
        <span className="section-label mb-8">About</span>

        {/* About Grid Card Block (ShopDropApp inspired layout) */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch mt-6">
          {/* Left Column: Premium Avatar Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-5 soft-card p-6 flex flex-col items-center justify-center bg-white relative overflow-hidden group select-none border border-black/[0.04] shadow-[0_8px_30px_rgba(18,18,18,0.01)]"
          >
            {/* Soft decorative glow background in card */}
            <div className="absolute inset-0 bg-gradient-to-br from-clay-light/20 to-transparent pointer-events-none" />

            {/* Rotating Portrait Ring */}
            <div className="relative w-36 h-36 md:w-48 md:h-48 flex items-center justify-center z-10">
              <div className="absolute inset-0 rounded-full border border-dashed border-clay-accent/30 animate-[spin_40s_linear_infinite] group-hover:border-clay-accent transition-colors" />
              
              {/* Actual Profile Avatar Container */}
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-white shadow-md bg-[#f3f2eb]">
                <img
                  src="https://github.com/Bharath-Krishna-AB.png"
                  alt="Bharath Krishna"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>

            {/* Sub-label badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-1.5 z-10">
              <span className="text-[10px] font-mono px-3 py-1 bg-[#e5ebe6] text-[#607361] border border-[#607361]/10 rounded-full font-bold">
                Developer
              </span>
              <span className="text-[10px] font-mono px-3 py-1 bg-clay-light text-clay-accent border border-clay-accent/10 rounded-full font-bold">
                Co-Founder
              </span>
            </div>
          </motion.div>

          {/* Right Column: Narrative Block (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-7 soft-card p-8 md:p-10 bg-[#f3f2eb]/70 border border-black/[0.04] flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Highlight Headline */}
              <h2 className="text-2xl sm:text-3xl font-serif text-[#121212] leading-tight select-none">
                Passionate self-taught Frontend Web Developer & Co-Founder of{" "}
                <span className="relative inline-block px-1">
                  <span className="relative z-10 font-instrument font-normal text-clay-accent italic tracking-normal">
                    Aevon
                  </span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-clay-light -z-10" />
                </span>.
              </h2>
              
              {/* Narrative Content with staggered words fade effect */}
              <div className="text-sm sm:text-base text-[#70706c] leading-relaxed space-y-4">
                <p className="flex flex-wrap gap-x-1.5 gap-y-1">
                  {words.map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0.25 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.015 }}
                      viewport={{ once: true }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </p>
                
                <p>
                  I care deeply about writing scalable, maintainable, and well-documented code, and I'm always open to collaborating on innovative projects.
                </p>
              </div>
            </div>

            {/* Actions button */}
            <div className="mt-8">
              <motion.a
                href="/resume.pdf"
                download="Bharath_Krishna_Resume.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 px-6 py-3 bg-[#121212] text-white rounded-full font-semibold text-xs sm:text-sm shadow-md hover:bg-[#222] transition-all cursor-pointer font-mono uppercase tracking-wider"
              >
                <span>Download Resume</span>
                <div className="w-6 h-6 rounded-full bg-clay-accent flex items-center justify-center group-hover:translate-y-0.5 transition-transform">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
