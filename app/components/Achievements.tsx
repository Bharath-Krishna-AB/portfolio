"use client";

import { motion } from "framer-motion";
import { achievements } from "../data/portfolio";

export default function Achievements() {
  const achievementDetails = [
    {
      date: "2023 — Present",
      category: "STUDIO FOUNDER",
      description: "Co-founded and scaled Aevon Digital Studio, managing premium Next.js engineering pipelines, interactive design specs, and client acquisition."
    },
    {
      date: "2023 — 2024",
      category: "PORTAL ARCHITECT",
      description: "Developed and deployed full-stack event and startup management portals for Christ College of Engineering's (CCE) incubation hub."
    },
    {
      date: "2022 — 2023",
      category: "AI PRODUCT DEV",
      description: "Engineered AI-integrated web applications like Resume IQ (ATS analysis with OpenAI RAG) and StudyHive (real-time synchronized study rooms)."
    },
    {
      date: "2021 — 2022",
      category: "TECH LEADERSHIP",
      description: "Mentored fellow students and collaborated on innovation workshops, technical hackathons, and product development sprints."
    }
  ];

  return (
    <section className="py-24 bg-[#f9f8f4] border-y border-black/[0.04] relative">
      <div className="w-full max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-left">
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
              Achievements
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#121212] tracking-tight leading-[1.1] mt-4 font-claude">
              Key{" "}
              <span className="font-instrument font-normal text-secondary italic tracking-normal">
                milestones.
              </span>
            </h2>
          </div>

          {/* Architectural Timeline Layout */}
          <div className="relative">
            {/* Continuous Vertical Timeline Line */}
            <div className="absolute left-0 top-3 bottom-0 w-[1px] bg-black/[0.08]" />

            <div className="space-y-12">
              {achievements.map((item, index) => {
                const detail = achievementDetails[index];
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 sm:pl-12 grid md:grid-cols-12 gap-4 sm:gap-6 items-start text-left group"
                  >
                    {/* Glowing Node Marker */}
                    <div className="absolute left-[-4.5px] top-1.5 w-[10px] h-[10px] rounded-full bg-secondary ring-4 ring-[#f9f8f4] group-hover:scale-125 transition-transform duration-300" />

                    {/* Left Column: Date & Category */}
                    <div className="md:col-span-4 flex flex-col gap-2 select-none pt-0.5">
                      <span className="text-sm font-mono text-[#121212] font-semibold tracking-tight">
                        {detail.date}
                      </span>
                      <div className="flex flex-col items-start gap-2">
                        <span className="inline-flex text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 bg-white border border-black/5 text-[#70706c] rounded-md shadow-sm">
                          {detail.category}
                        </span>
                        {item.highlight && (
                          <div className="flex items-center gap-1.5 mt-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                            <span className="text-[9px] font-mono text-secondary font-bold uppercase tracking-widest">
                              Key Milestone
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Title & Impact Description */}
                    <div className="md:col-span-8 space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-black/[0.04] shadow-[0_4px_20px_rgba(18,18,18,0.02)] group-hover:border-black/[0.08] transition-colors">
                      <h3 className="font-bold text-lg sm:text-xl font-claude text-[#121212] tracking-tight group-hover:text-secondary transition-colors duration-300">
                        {item.label}
                      </h3>
                      <p className="text-sm text-[#70706c] leading-relaxed">
                        {detail.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
