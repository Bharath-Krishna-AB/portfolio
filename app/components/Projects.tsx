"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TextReveal from "./ui/TextReveal";
import { projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import { ExternalLink } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Projects() {
  const router = useRouter();
  // Display exactly 2 projects as requested
  const selectedProjects = projects.slice(0, 2);

  // Arc Browser inspired theme workspaces for each card
  const arcThemes = [
    {
      headerBg: "bg-gradient-to-r from-[#fdf5f2] via-[#fbeee9] to-[#f0eee4]",
      addressBorder: "border-secondary/15 text-secondary",
      shadowGlow: "shadow-[0_20px_50px_rgba(193,95,60,0.045)] hover:shadow-[0_30px_70px_rgba(193,95,60,0.08)]",
    },
    {
      headerBg: "bg-gradient-to-r from-[#fdf5f2] via-[#fbeee9] to-[#f0eee4]",
      addressBorder: "border-secondary/15 text-secondary",
      shadowGlow: "shadow-[0_20px_50px_rgba(193,95,60,0.045)] hover:shadow-[0_30px_70px_rgba(193,95,60,0.08)]",
    }
  ];

  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".project-header",
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

    gsap.fromTo(".project-item",
      { opacity: 0, y: 60 },
      {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, { scope: container });

  return (
    <section
      ref={container}
      id="work"
      className="w-full relative bg-background py-24 overflow-hidden transition-colors duration-500"
    >
      <div className="w-full flex flex-col gap-10 md:gap-12">
        {/* Section Header */}
        <div className="project-header w-full max-w-5xl mx-auto px-6 text-left flex items-end justify-between shrink-0">
          <div>
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-clay-accent shrink-0" />
              Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mt-4 font-claude text-left whitespace-nowrap flex items-baseline transition-colors duration-500">
              <TextReveal text="Selected " />
              <TextReveal text="work." className="font-instrument font-normal text-secondary italic tracking-normal" delay={0.1} />
            </h2>
          </div>
        </div>

        {/* 3-Column Grid Cards Deck */}
        <div className="w-full max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {selectedProjects.map((project, index) => (
            <div key={project.id} className="project-item h-full">
              <ProjectCard project={project} index={index} />
            </div>
          ))}

          {/* View All Projects Card */}
          <div
            onClick={() => router.push("/works")}
            className="project-item w-full h-full min-h-[450px] md:min-h-[480px] rounded-[2rem] md:rounded-[2.5rem] bg-foreground/5 border border-dashed border-foreground/15 flex flex-col items-center justify-center p-8 text-center gap-4 hover:bg-foreground/10 transition-colors duration-500 select-none cursor-pointer group shadow-sm md:col-span-2 lg:col-span-1"
          >
            <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center border border-border shadow-sm relative overflow-hidden group-hover:scale-110 transition-all duration-300">
              {/* Active Arrow */}
              <svg
                className="w-5 h-5 text-secondary absolute transition-all duration-300 ease-in-out -rotate-45 group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              {/* Incoming Arrow */}
              <svg
                className="w-5 h-5 text-secondary absolute transition-all duration-300 ease-in-out -rotate-45 -translate-x-6 translate-y-6 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <div className="mt-2">
              <h3 className="font-claude font-bold text-xl sm:text-2xl text-foreground transition-colors duration-500">View All Projects</h3>
              <p className="text-sm text-muted mt-2 font-medium transition-colors duration-500">Explore the complete collection of {projects.length} works</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
