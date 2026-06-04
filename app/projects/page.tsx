"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { projects } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsArchive() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStack, setSelectedStack] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  // Dynamically extract top 8 technologies from projects to use as quick filters
  const popularTechStack = useMemo(() => {
    const counts: Record<string, number> = {};
    projects.forEach((p) => p.stack.forEach((tech) => {
      counts[tech] = (counts[tech] || 0) + 1;
    }));
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([tech]) => tech);
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchCategory =
        selectedCategory === "all" || project.category === selectedCategory;
      const matchStack =
        selectedStack.length === 0 ||
        selectedStack.some((tech) => project.stack.includes(tech));
      const matchSearch =
        searchQuery === "" ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchStack && matchSearch;
    });
  }, [selectedCategory, selectedStack, searchQuery]);

  const toggleStackTech = (tech: string) => {
    setSelectedStack((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const hasActiveFilters =
    selectedCategory !== "all" || selectedStack.length > 0 || searchQuery !== "";

  const clearAllFilters = () => {
    setSelectedCategory("all");
    setSelectedStack([]);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-[#f9f8f4] text-[#121212] font-claude selection:bg-clay-light selection:text-clay-accent pb-32">
      {/* Massive Editorial Header */}
      <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#70706c] hover:text-secondary transition-colors mb-12 group"
        >
          <span className="w-6 h-[1px] bg-current group-hover:-translate-x-2 transition-transform duration-300" />
          Back to Portfolio
        </Link>
        <h1 className="text-6xl sm:text-[8vw] leading-[0.9] font-claude tracking-tight text-[#121212] mb-6">
          The Archive.
        </h1>
        <p className="text-base sm:text-lg text-[#70706c] max-w-2xl leading-relaxed font-medium">
          A comprehensive collection of software architectures, digital products, and experimental interfaces I've built.
        </p>
      </div>

      {/* Sleek Filter Bar */}
      <div className="sticky top-0 z-40 bg-[#f9f8f4]/80 backdrop-blur-xl border-y border-black/[0.04] mb-12">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Category Toggles */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? "bg-[#121212] text-white shadow-md scale-[1.02]"
                      : "bg-transparent text-[#70706c] hover:bg-black/5 hover:text-[#121212]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Tech Stack Quick Filters & Search */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="hidden lg:flex items-center gap-1.5 border-r border-black/10 pr-4">
                <span className="text-[9px] font-mono text-[#70706c] uppercase tracking-widest mr-2">Tech:</span>
                {popularTechStack.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => toggleStackTech(tech)}
                    className={`px-2.5 py-1 rounded text-[9px] font-mono uppercase tracking-wider transition-colors ${
                      selectedStack.includes(tech)
                        ? "bg-secondary/10 text-secondary border border-secondary/20 font-bold"
                        : "bg-transparent text-[#70706c] border border-black/5 hover:border-black/15"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full md:w-auto">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#70706c]"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search index..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-48 pl-9 pr-4 py-2 bg-transparent border-b border-black/10 text-[#121212] placeholder:text-[#70706c]/60 focus:outline-none focus:border-black/30 focus:w-full md:focus:w-64 text-xs font-mono uppercase tracking-wider transition-all"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Active Filters Bar (if any) */}
      {hasActiveFilters && (
        <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between animate-in fade-in slide-in-from-top-2 duration-500">
          <p className="text-[10px] font-mono text-[#70706c] uppercase tracking-widest">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? "Result" : "Results"}
          </p>
          <button
            onClick={clearAllFilters}
            className="text-[10px] font-mono text-secondary hover:text-[#121212] uppercase tracking-widest flex items-center gap-1.5 transition-colors"
          >
            Clear Filters
            <span className="w-4 h-4 rounded-full bg-secondary/10 flex items-center justify-center">✕</span>
          </button>
        </div>
      )}

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6">
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
              We couldn't find any projects matching your current filters.
            </p>
            <button
              onClick={clearAllFilters}
              className="px-6 py-3 bg-[#121212] hover:bg-secondary text-white rounded-full font-bold text-[10px] font-mono uppercase tracking-widest shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
