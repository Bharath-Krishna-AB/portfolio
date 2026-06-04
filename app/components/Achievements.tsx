"use client";

import { motion } from "framer-motion";
import { achievements } from "../data/portfolio";

export default function Achievements() {
  const achievementDetails = [
    {
      index: "01",
      category: "STUDIO FOUNDER",
      description: "Co-founded and scaled Aevon Digital Studio, managing premium Next.js engineering pipelines, interactive design specs, and client acquisition."
    },
    {
      index: "02",
      category: "PORTAL ARCHITECT",
      description: "Developed and deployed full-stack event and startup management portals for Christ College of Engineering's (CCE) incubation hub."
    },
    {
      index: "03",
      category: "AI PRODUCT DEV",
      description: "Engineered AI-integrated web applications like Resume IQ (ATS analysis with OpenAI RAG) and StudyHive (real-time synchronized study rooms)."
    },
    {
      index: "04",
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
              <span className="w-1.5 h-1.5 rounded-full bg-clay-accent shrink-0" />
              Achievements
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#121212] tracking-tight leading-[1.1] mt-4 font-claude">
              Key{" "}
              <span className="font-instrument font-normal text-secondary italic tracking-normal">
                milestones.
              </span>
            </h2>
          </div>

          {/* Resume Style Divided List */}
          <div className="divide-y divide-black/10">
            {achievements.map((item, index) => {
              const detail = achievementDetails[index];
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="py-10 first:pt-0 last:pb-0 grid md:grid-cols-12 gap-6 items-start text-left group"
                >
                  {/* Left Column: Index & Category Badge */}
                  <div className="md:col-span-4 flex gap-4 items-start select-none">
                    <span className="text-xs font-mono text-[#70706c] font-bold opacity-60 pt-0.5">
                      {detail.index}
                    </span>
                    <div className="space-y-2">
                      <span className="inline-flex text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 bg-[#f3f2eb] border border-black/5 text-[#70706c] rounded">
                        {detail.category}
                      </span>
                      {item.highlight && (
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-clay-accent animate-pulse" />
                          <span className="text-[8px] font-mono text-clay-accent font-bold uppercase tracking-widest">
                            Key Milestone
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Title & Detailed Description */}
                  <div className="md:col-span-8 space-y-3">
                    <h3 className="font-bold text-base sm:text-lg text-[#121212] tracking-tight group-hover:text-clay-accent transition-colors duration-300">
                      {item.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#70706c] leading-relaxed">
                      {detail.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
