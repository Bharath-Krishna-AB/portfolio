"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { projects } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsArchive() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: "all", label: "All Works" },
    { id: "client", label: "Client" },
    { id: "frontend", label: "Frontend" },
    { id: "hackathon", label: "Hackathon" },
  ];

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      return selectedCategory === "all" || project.category === selectedCategory;
    });
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#f9f8f4] text-[#121212] font-claude selection:bg-clay-light selection:text-clay-accent pb-32">
      {/* Massive Editorial Header */}
      <div className="pt-24 pb-12 px-6 max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#70706c] hover:text-[#121212] transition-colors mb-10 group"
        >
          <span className="w-6 h-[1px] bg-current group-hover:-translate-x-2 transition-transform duration-300" />
          Back to Portfolio
        </Link>
        <h1 className="text-[5.5rem] sm:text-[10vw] lg:text-[8vw] leading-[0.85] font-claude tracking-tighter text-[#121212] mb-6">
          Work<span className="text-secondary">.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#70706c] max-w-2xl leading-relaxed font-medium">
          A comprehensive collection of software architectures, digital products, and experimental interfaces I've built.
        </p>
      </div>

      {/* Professional Filter Console */}
      <div className="sticky top-0 z-40 bg-[#f9f8f4]/95 backdrop-blur-3xl border-b border-black/[0.08] mb-12">
        <div className="max-w-5xl mx-auto px-6 py-5 md:py-6">
          {/* Categories */}
          <div className="flex items-center gap-6 md:gap-8 overflow-x-auto no-scrollbar shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.15em] transition-all duration-300 shrink-0 pb-1.5 ${
                  selectedCategory === cat.id
                    ? "text-[#121212] font-bold"
                    : "text-[#70706c] hover:text-[#121212]"
                }`}
              >
                {cat.label}
                {/* Active Indicator Line */}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-[1.5px] transition-all duration-300 ${
                    selectedCategory === cat.id ? "bg-[#121212]" : "bg-transparent"
                  }`} 
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="w-full py-32 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#70706c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold font-claude text-[#121212] mb-2">No projects found</h3>
            <p className="text-[#70706c] font-mono text-xs uppercase tracking-wider mb-8 max-w-sm">
              We couldn't find any projects in this category.
            </p>
            <button
              onClick={() => setSelectedCategory("all")}
              className="px-6 py-3 bg-[#121212] hover:bg-secondary text-white rounded-full font-bold text-[10px] font-mono uppercase tracking-widest shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              View All Works
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
