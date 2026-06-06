"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TextReveal from "./ui/TextReveal";
import { skills } from "../data/portfolio";
import { Rocket, AppWindow } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Skills() {

  const frontend = skills[0];
  const ai = skills[1];
  const backend = skills[2];
  const tools = skills[3];
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".skill-header",
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
    
    gsap.fromTo(".skill-card",
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  }, { scope: container });

  return (
    <section ref={container} id="skills" className="py-24 bg-[#f9f8f4] relative overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-6">
        <div className="space-y-16">
          {/* Section Label */}
          <div className="skill-header">
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
              Skills
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#121212] tracking-tight leading-[1.1] mt-4 font-claude text-left whitespace-nowrap flex items-baseline">
              <TextReveal text="Toolbox " />
              <TextReveal text="expertise." className="font-instrument font-normal text-secondary italic tracking-normal" delay={0.1} />
            </h2>
          </div>

          {/* Priority Editorial Layout - Perfect Fit Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-12">
            
            {/* 1. DELIVERY BANNER - Full Width (12 columns) */}
            <div className="skill-card lg:col-span-12 bg-white border border-black/[0.06] rounded-3xl p-8 lg:p-10 shadow-[0_4px_20px_rgba(18,18,18,0.02)] flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden relative">
              {/* Premium Corner Ribbon */}
              <div className="absolute -right-[36px] top-[26px] w-[150px] rotate-45 bg-gradient-to-b from-[#1f1f1f] to-[#0a0a0a] border-t border-white/20 border-b border-black text-white text-[10px] font-bold tracking-[0.2em] uppercase py-1.5 text-center shadow-[-4px_4px_15px_rgba(0,0,0,0.2)] flex justify-center items-center gap-2.5 z-20 pointer-events-none">
                <span className="text-secondary font-medium text-[12px] opacity-90 drop-shadow-[0_0_6px_rgba(193,95,60,0.5)] mt-[-1px]">&lt;</span>
                <span className="mt-[1px]">WEB DEV</span>
                <span className="text-secondary font-medium text-[12px] opacity-90 drop-shadow-[0_0_6px_rgba(193,95,60,0.5)] mt-[-1px]">&gt;</span>
              </div>

              <div className="lg:w-1/3 text-center lg:text-left relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold font-claude text-[#121212]">
                  End-to-End Delivery
                </h3>
                <p className="text-[#70706c] text-sm mt-2 max-w-sm mx-auto lg:mx-0">
                  I architect scalable codebases and deliver flawless live products directly to my clients.
                </p>
              </div>

              <div className="w-full lg:w-2/3 flex items-center justify-center relative py-8 lg:py-0 mt-4 lg:mt-0">
                {/* Connecting Line Track */}
                <div className="absolute left-[5%] right-[5%] sm:left-[10%] sm:right-[10%] top-1/2 -translate-y-1/2 h-[2px] bg-black/[0.06] z-0 overflow-hidden rounded-full">
                  {/* Ray of Light Animation */}
                  <motion.div 
                    className="absolute top-0 bottom-0 w-[150px] bg-gradient-to-r from-transparent via-secondary to-transparent"
                    initial={{ left: '-150px' }}
                    animate={{ left: '100%' }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.5, 
                      ease: "easeInOut",
                      repeatDelay: 0.5
                    }}
                  />
                </div>

                {/* Middle Badge - Full text on sm+ */}
                <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#121212] text-[#f5f5f5] border border-white/10 text-[9px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full z-10 whitespace-nowrap shadow-2xl items-center gap-2">
                  <div className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-secondary shadow-[0_0_8px_rgba(193,95,60,0.6)]"></span>
                  </div>
                  Deploying
                  <div className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-secondary shadow-[0_0_8px_rgba(193,95,60,0.6)]"></span>
                  </div>
                </div>

                {/* Middle Badge - Dot only on mobile */}
                <div className="flex sm:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#121212] border border-white/10 px-2.5 py-2.5 rounded-full z-10 shadow-2xl items-center justify-center">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary shadow-[0_0_8px_rgba(193,95,60,0.6)]"></span>
                  </div>
                </div>

                <div className="flex w-full justify-between items-center relative z-10 px-0 sm:px-10 max-w-xl mx-auto">
                  {/* Left: Developer */}
                  <div className="bg-white border border-black/[0.08] shadow-lg rounded-[16px] sm:rounded-[20px] p-3 sm:p-5 flex flex-col items-center gap-3 sm:gap-4 w-[95px] sm:w-[130px] shrink-0">
                     <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#121212] rounded-full flex items-center justify-center text-white shrink-0">
                       <AppWindow className="w-5 h-5 sm:w-[22px] sm:h-[22px]" strokeWidth={1.5} />
                     </div>
                     <div className="bg-[#f3f2eb] text-[#121212] text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1.5 rounded-lg w-full text-center truncate">
                       Codebase
                     </div>
                  </div>

                  {/* Right: Client/Product */}
                  <div className="bg-[#121212] shadow-2xl rounded-[16px] sm:rounded-[20px] p-3 sm:p-5 flex flex-col items-center gap-3 sm:gap-4 w-[95px] sm:w-[130px] shrink-0">
                     <div className="w-10 h-10 sm:w-14 sm:h-14 bg-secondary rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(193,95,60,0.4)] shrink-0">
                       <Rocket className="w-5 h-5 sm:w-[22px] sm:h-[22px]" strokeWidth={1.5} />
                     </div>
                     <div className="bg-white/10 text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1.5 rounded-lg w-full text-center truncate border border-white/5">
                       Product <span className="text-secondary">Live</span>
                     </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. FRONTEND - 5 Columns */}
            <div className="skill-card lg:col-span-5 relative overflow-hidden bg-white border border-black/[0.06] rounded-3xl p-8 lg:p-10 shadow-[0_4px_20px_rgba(18,18,18,0.02)] flex flex-col justify-start h-full group hover:border-black/[0.12] transition-colors">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8 pb-5 border-b border-black/[0.08]">
                  <h3 className="text-2xl font-bold font-claude text-[#121212] tracking-tight">
                    {frontend.label}
                  </h3>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {frontend.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="text-sm px-4 py-2 bg-[#f3f2eb]/60 text-[#121212] rounded-xl font-medium border border-black/[0.04] group-hover:border-black/[0.08] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 3. BACKEND - 4 Columns */}
            <div className="skill-card lg:col-span-4 relative overflow-hidden bg-white border border-black/[0.06] rounded-3xl p-8 shadow-[0_4px_20px_rgba(18,18,18,0.02)] flex flex-col justify-start h-full group hover:border-black/[0.12] transition-colors">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8 pb-5 border-b border-black/[0.08]">
                  <h3 className="text-2xl font-bold font-claude text-[#121212] tracking-tight">
                    {backend.label}
                  </h3>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {backend.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="text-xs px-3 py-1.5 bg-[#f3f2eb]/60 text-[#70706c] rounded-lg font-medium border border-black/[0.03] group-hover:text-[#121212] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 4. TOOLS - 3 Columns */}
            <div className="skill-card lg:col-span-3 relative overflow-hidden bg-[#121212] text-white border border-black/[0.06] rounded-3xl p-8 shadow-[0_4px_20px_rgba(18,18,18,0.08)] flex flex-col justify-start h-full group">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8 pb-5 border-b border-white/10">
                  <h3 className="text-xl font-bold font-claude text-white tracking-tight">
                    {tools.label}
                  </h3>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {tools.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="text-xs px-3 py-1.5 bg-white/5 text-white/90 rounded-lg font-medium border border-white/10 group-hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
