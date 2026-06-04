"use client";

import { useRouter } from "next/navigation";
import { projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import { ExternalLink } from "lucide-react";

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

  return (
    <section
      id="work"
      className="w-full relative bg-[#f9f8f4] py-24 overflow-hidden"
    >
      <div className="w-full flex flex-col gap-10 md:gap-12">
        {/* Section Header */}
        <div className="w-full max-w-5xl mx-auto px-6 text-left flex items-end justify-between shrink-0">
          <div>
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-clay-accent shrink-0" />
              Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#121212] tracking-tight leading-[1.1] mt-4 font-claude">
              Selected{" "}
              <span className="font-instrument font-normal text-secondary italic tracking-normal">
                work.
              </span>
            </h2>
          </div>
        </div>

        {/* 3-Column Grid Cards Deck */}
        <div className="w-full max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {selectedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}

          {/* View All Projects Card */}
          <div
            onClick={() => router.push("/projects")}
            className="w-full h-full min-h-[550px] md:min-h-[580px] rounded-[2rem] md:rounded-[2.5rem] bg-[#edeae0]/40 border border-dashed border-black/15 flex flex-col items-center justify-center p-8 text-center gap-4 hover:bg-[#edeae0]/70 transition-colors duration-300 select-none cursor-pointer group shadow-sm md:col-span-2 lg:col-span-1"
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-black/5 shadow-sm relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
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
            <div>
              <h3 className="font-claude font-bold text-lg text-[#121212]">View All Projects</h3>
              <p className="text-xs text-[#70706c] mt-1">Explore the complete archive of {projects.length} works</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
