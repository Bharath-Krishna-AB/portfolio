"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TextReveal from "./ui/TextReveal";
import { achievements } from "../data/portfolio";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Achievements() {
  const achievementDetails = [
    {
      date: "Oct 2025",
      category: "HACKATHON WINNER",
      description: "Won 1st place among 19 teams in a competitive 12-hour Webathon by leading the frontend development of a production-ready, responsive web application."
    },
    {
      date: "Oct 2025",
      category: "INNOVATION AWARD",
      description: "Secured 1st Prize at EVOLVE 2.0 by presenting AGRUS, an AI-driven agritech platform designed to enhance farming decisions through real-time monitoring."
    },
    {
      date: "2025 — Present",
      category: "FREELANCE DEV",
      description: "Delivered responsive websites for an import-export company and a digital marketing agency, successfully managing end-to-end development."
    },
    {
      date: "2026 — Present",
      category: "CAMPUS LEAD",
      description: "Organized and led student learning initiatives, workshops, and community events, mentoring students in technology and professional development."
    }
  ];

  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".achieve-header",
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

    gsap.fromTo(".achieve-item",
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
    <section ref={container} className="py-24 bg-background border-y border-border relative transition-colors duration-500">
      <div className="w-full max-w-4xl mx-auto px-6">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="achieve-header text-left">
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
              Achievements
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mt-4 font-claude text-left flex-wrap sm:whitespace-nowrap flex items-baseline transition-colors duration-500">
              <TextReveal text="Key " />
              <TextReveal text="milestones." className="font-instrument font-normal text-secondary italic tracking-normal" delay={0.1} />
            </h2>
          </div>

          {/* Architectural Timeline Layout */}
          <div className="relative">
            {/* Continuous Vertical Timeline Line */}
            <div className="absolute left-0 top-3 bottom-0 w-[1px] bg-border transition-colors duration-500" />

            <div className="space-y-12">
              {achievements.map((item, index) => {
                const detail = achievementDetails[index];
                return (
                  <div
                    key={item.label}
                    className="achieve-item relative pl-8 sm:pl-12 grid md:grid-cols-12 gap-4 sm:gap-6 items-start text-left group"
                  >
                    {/* Glowing Node Marker */}
                    <div className="absolute left-[-4.5px] top-1.5 w-[10px] h-[10px] rounded-full bg-secondary ring-4 ring-background group-hover:scale-125 transition-all duration-300" />

                    {/* Left Column: Date & Category */}
                    <div className="md:col-span-4 flex flex-col gap-2 select-none pt-0.5">
                      <span className="text-sm font-mono text-foreground font-semibold tracking-tight transition-colors duration-500">
                        {detail.date}
                      </span>
                      <div className="flex flex-col items-start gap-2">
                        <span className="inline-flex text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 bg-surface border border-border text-muted rounded-md shadow-sm transition-colors duration-500">
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
                    <div className="md:col-span-8 space-y-3 bg-surface p-6 sm:p-8 rounded-2xl border border-border shadow-[0_4px_20px_rgba(18,18,18,0.02)] group-hover:border-foreground/20 transition-colors duration-500">
                      <h3 className="font-bold text-lg sm:text-xl font-claude text-foreground tracking-tight group-hover:text-secondary transition-colors duration-300">
                        {item.label}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed transition-colors duration-500">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
