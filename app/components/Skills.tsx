"use client";

import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

export default function Skills() {
  // SVG Icons matching each categories indices:
  // 0: Frontend, 1: Exploring/AI, 2: Backend/DB, 3: Tools
  const icons = [
    // Frontend
    <svg key="0" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    // Exploring/AI
    <svg key="1" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    // Backend/DB
    <svg key="2" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
    // Tools
    <svg key="3" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  ];

  // Specific visual styling classes for each category block
  const cardStyles = [
    "bg-clay-light/35 border-clay-accent/10 hover:border-clay-accent/20",
    "bg-sage-light/25 border-sage-accent/10 hover:border-sage-accent/20",
    "bg-[#f3f2eb]/60 border-black/5 hover:border-black/10",
    "bg-white border-black/5 hover:border-black/10"
  ];

  return (
    <section id="skills" className="py-24 bg-[#f9f8f4] relative overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Label */}
          <div>
            <span className="section-label">Skills</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#121212] tracking-tight leading-[1.1] mt-4 font-general text-left">
              Toolbox & expertise. <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 font-instrument font-normal text-[#121212] italic tracking-normal">
                  Fully equipped.
                </span>
                <span className="absolute bottom-1 left-0 w-full h-3.5 bg-[#e5ebe6] -z-10" />
              </span>
            </h2>
          </div>

          {/* 2x2 Grid Toolbox layout */}
          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            {skills.map((category, idx) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`soft-card p-6 flex flex-col justify-between select-none ${cardStyles[idx]} shadow-[0_4px_20px_rgba(18,18,18,0.01)] h-[190px] text-left`}
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-[#121212]">
                      {icons[idx]}
                    </div>
                    <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-[#121212]">
                      {category.label}
                    </h3>
                  </div>

                  {/* Skills tags list */}
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] px-2.5 py-1 bg-white border border-black/5 text-[#121212] rounded font-mono shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
