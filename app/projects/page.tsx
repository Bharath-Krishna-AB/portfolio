"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { projects } from "../data/portfolio";

export default function ProjectsArchive() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStack, setSelectedStack] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "client", label: "Client Work" },
    { id: "frontend", label: "Frontend" },
    { id: "hackathon", label: "Hackathon" },
  ];

  // Dynamically extract all unique technologies from projects stack list
  const uniqueTechStack = useMemo(() => {
    const stackSet = new Set<string>();
    projects.forEach((p) => p.stack.forEach((tech) => stackSet.add(tech)));
    return Array.from(stackSet).sort();
  }, []);

  // Filter projects based on Search + Category + Stack tags selection
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
    <div className="min-h-screen bg-[#f9f8f4] text-[#121212] font-general selection:bg-clay-light selection:text-clay-accent pb-24">
      {/* Header Banner */}
      <div className="relative border-b border-black/5 bg-[#f3f2eb]/30">
        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#70706c] hover:text-[#121212] transition-colors mb-8 group"
          >
            {/* Arrow Left SVG */}
            <svg
              className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back Home
          </Link>

          <h1 className="text-4xl font-serif text-[#121212] mb-3 leading-snug">
            All Projects
          </h1>
          <p className="text-[#70706c] text-sm max-w-md leading-relaxed">
            A collection of projects I've designed and built, from hackathon winners to client work.
          </p>
        </div>
      </div>

      {/* Filter and Content Controls */}
      <div className="max-w-3xl mx-auto px-6 mt-8 space-y-6">
        {/* Search Bar Input */}
        <div className="relative">
          {/* Search Icon */}
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#70706c]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-10 py-3 rounded-xl bg-[#f3f2eb] border border-black/8 text-[#121212] placeholder:text-[#70706c] focus:outline-none focus:border-black/20 focus:ring-1 focus:ring-black/10 text-sm transition-all shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#70706c] hover:text-[#121212] transition-colors"
            >
              {/* Close SVG */}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Filters Toggles and Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-xs text-[#70706c] font-mono">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} found
          </p>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all border cursor-pointer ${
              showFilters || hasActiveFilters
                ? "bg-[#121212] text-white border-transparent"
                : "bg-transparent text-[#70706c] border-black/10 hover:bg-black/5"
            }`}
          >
            {/* Sliders Icon */}
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            Filters
            {hasActiveFilters && (
              <span className="ml-1 w-4 h-4 text-[9px] rounded-full bg-white text-[#121212] flex items-center justify-center font-bold">
                {(selectedCategory !== "all" ? 1 : 0) + selectedStack.length + (searchQuery ? 1 : 0)}
              </span>
            )}
          </button>
        </div>

        {/* Collapsible Filter Categories Panel */}
        {showFilters && (
          <div className="p-6 rounded-2xl bg-[#f3f2eb] border border-black/8 space-y-5 shadow-sm">
            {/* Category Filter */}
            <div className="space-y-2.5">
              <p className="text-[10px] font-mono text-[#70706c] uppercase tracking-wider font-semibold">
                Category
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`text-xs px-3.5 py-1.5 rounded-full transition-all border cursor-pointer ${
                      selectedCategory === cat.id
                        ? "bg-[#121212] text-white border-transparent"
                        : "bg-white border-black/5 text-[#121212] hover:bg-black/5"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tech Stack filter tags */}
            <div className="space-y-2.5">
              <p className="text-[10px] font-mono text-[#70706c] uppercase tracking-wider font-semibold">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {uniqueTechStack.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => toggleStackTech(tech)}
                    className={`text-[10px] px-2.5 py-1.5 rounded font-mono transition-all border cursor-pointer ${
                      selectedStack.includes(tech)
                        ? "bg-clay-accent text-white border-transparent"
                        : "bg-white border-black/5 text-[#70706c] hover:bg-black/5"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear All Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="inline-flex items-center gap-1.5 text-xs text-clay-accent hover:underline font-mono"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* Projects Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 pt-4">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => router.push(`/project/${project.id}`)}
              className="group cursor-pointer soft-card overflow-hidden bg-[#f3f2eb] border border-black/8 hover:border-black/15 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Image preview */}
              <div className="p-4 pb-0">
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-black/5">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                  />
                </div>
              </div>

              {/* Title and Tagline */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#70706c] font-mono opacity-50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-medium text-[#121212] group-hover:text-clay-accent transition-colors">
                      {project.name}
                    </h3>
                    {project.achievement && (
                      <span className="flex items-center gap-1 text-[9px] px-1.5 py-0.5 bg-clay-light text-clay-accent rounded-full border border-clay-accent/10 font-mono">
                        Winner
                      </span>
                    )}
                  </div>

                  {/* Arrow up-right Icon */}
                  <div className="w-5 h-5 relative overflow-hidden flex items-center justify-center shrink-0">
                    {/* Active Arrow (slides out top-right on hover) */}
                    <svg
                      className="w-3.5 h-3.5 text-[#70706c] absolute transition-all duration-300 ease-in-out -rotate-45 group-hover:translate-x-5 group-hover:-translate-y-5 group-hover:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                    {/* Incoming Arrow (slides in from bottom-left on hover) */}
                    <svg
                      className="w-3.5 h-3.5 text-[#121212] absolute transition-all duration-300 ease-in-out -rotate-45 -translate-x-5 translate-y-5 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                <p className="text-xs text-[#70706c] mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags (capped at 4) */}
                <div className="flex flex-wrap gap-1">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] px-2 py-0.5 bg-white/70 border border-black/5 text-[#121212] rounded font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-[9px] px-2 py-0.5 text-[#70706c] font-mono">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-[#f3f2eb]/30 border border-black/5 rounded-2xl">
            <p className="text-[#70706c] text-sm mb-4">
              No projects match your filters.
            </p>
            <button
              onClick={clearAllFilters}
              className="text-xs font-mono uppercase tracking-wider px-4 py-2 bg-[#121212] text-white rounded-full hover:opacity-90 transition-opacity"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
