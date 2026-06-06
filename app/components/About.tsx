"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#f9f8f4] relative overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="w-full text-left flex items-end justify-between shrink-0 mb-8 md:mb-12">
          <div>
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-clay-accent shrink-0" />
              About
            </span>
          </div>
        </div>

        {/* Minimal Card Layout (Adapted to Site Theme) */}
        <div className="w-full max-w-[54rem] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white border border-black/[0.04] rounded-[2rem] p-8 md:p-10 lg:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-start shadow-[0_8px_30px_rgba(18,18,18,0.02)]"
          >
            {/* Left: Avatar */}
            <div className="shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-black/5 bg-[#f3f2eb]">
                <img 
                  src="https://github.com/Bharath-Krishna-AB.png" 
                  alt="Bharath Krishna" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col items-start text-left flex-1">
              <h3 className="text-2xl sm:text-3xl md:text-[1.85rem] font-claude text-[#121212] leading-[1.4] mb-6 tracking-tight">
                Full-Stack Developer Delivering Real-World Web Solutions.
              </h3>
              
              <p className="text-[#70706c] text-sm md:text-[15px] leading-relaxed mb-5 max-w-xl font-claude">
                Specializing in modern web technologies including JavaScript, React.js, Next.js, and Tailwind CSS.
              </p>

              <p className="text-[#70706c] text-sm md:text-[15px] leading-relaxed mb-8 max-w-xl font-claude">
                Driven by a passion for crafting elegant user interfaces, robust architectures, and building things that actually get used.
              </p>

              <a 
                href="/resume.pdf" 
                download="Bharath_Krishna_Resume.pdf" 
                className="group flex items-center gap-2.5 px-6 py-3 bg-[#121212] hover:bg-[#222222] border border-transparent rounded-full text-white text-[13px] md:text-sm transition-all duration-300 font-claude"
              >
                <svg className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
