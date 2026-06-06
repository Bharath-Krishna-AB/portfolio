"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TextReveal from "./ui/TextReveal";
import MagneticButton from "./ui/MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".about-card", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      },
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
    });
    
    gsap.from(".about-avatar", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      },
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="py-24 md:py-32 bg-background relative overflow-hidden transition-colors duration-500">
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
          <div className="about-card bg-surface border border-border rounded-[2rem] p-8 md:p-10 lg:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-start shadow-[0_8px_30px_rgba(18,18,18,0.02)]">
            {/* Left: Avatar */}
            <div className="shrink-0 about-avatar mx-auto md:mx-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-border bg-background">
                <img 
                  src="https://github.com/Bharath-Krishna-AB.png" 
                  alt="Bharath Krishna" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col items-start text-left flex-1">
              <h2 className="text-3xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mt-4 font-claude text-left whitespace-nowrap flex items-baseline transition-colors duration-500">
                <TextReveal text="Who " />
                <TextReveal text="am I." className="font-instrument font-normal text-secondary italic tracking-normal" delay={0.1} />
              </h2>
              
              <div className="overflow-hidden mb-5">
                <motion.p 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.6, ease: [0.19, 1.0, 0.22, 1.0], delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-muted text-sm md:text-[15px] leading-relaxed max-w-xl font-claude transition-colors duration-500"
                >
                  Specializing in modern web technologies including JavaScript, React.js, Next.js, and Tailwind CSS.
                </motion.p>
              </div>

              <div className="overflow-hidden mb-8">
                <motion.p 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.6, ease: [0.19, 1.0, 0.22, 1.0], delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-muted text-sm md:text-[15px] leading-relaxed max-w-xl font-claude transition-colors duration-500"
                >
                  Driven by a passion for crafting elegant user interfaces, robust architectures, and building things that actually get used.
                </motion.p>
              </div>

              <MagneticButton strength={20} className="w-full sm:w-auto mt-2">
                <a 
                  href="/bharathresume.pdf" 
                  download="bharathresume.pdf" 
                  className="group flex items-center justify-center gap-2.5 px-6 py-3.5 bg-foreground hover:bg-secondary border border-transparent rounded-full text-foreground-inverse text-[13px] md:text-sm transition-all duration-300 font-claude w-full sm:w-auto"
                >
                  <svg className="w-4 h-4 text-foreground-inverse/80 group-hover:text-foreground-inverse transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0l-4-4m4 4V4" /></svg>
                  Download Resume
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
