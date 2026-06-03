"use client";

import { useRouter } from "next/navigation";
import { projects } from "../data/portfolio";

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
            <h2 className="text-3xl sm:text-5xl font-bold text-[#121212] tracking-tight leading-[1.1] mt-4 font-general">
              Selected{" "}
              <span className="font-instrument font-normal text-secondary italic tracking-normal">
                work.
              </span>
            </h2>
          </div>
        </div>

        {/* 3-Column Grid Cards Deck */}
        <div className="w-full max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {selectedProjects.map((project, index) => {
            const displayUrl = project.links?.live
              ? project.links.live.replace("https://", "").replace("www.", "")
              : `${project.id}.dev`;
            const theme = arcThemes[index] || arcThemes[0];

            return (
              <div
                key={project.id}
                className={`w-full h-[510px] md:h-[530px] rounded-[2rem] md:rounded-[2.25rem] bg-[#f0eee4] border border-black/[0.05] overflow-hidden flex flex-col justify-between select-none hover:border-black/[0.08] transition-all duration-500 ease-out group ${theme.shadowGlow}`}
              >
                {/* Top Portion: Arc Browser Mock Frame */}
                <div
                  onClick={() => router.push(`/project/${project.id}`)}
                  className="w-full cursor-pointer flex flex-col overflow-hidden bg-black/[0.01] border-b border-black/[0.05] shrink-0"
                >
                  {/* Arc Browser Header */}
                  <div className={`px-4 py-3.5 flex items-center justify-between border-b border-black/[0.04] select-none shrink-0 ${theme.headerBg}`}>
                    {/* Control Dots */}
                    <div className="flex gap-1.5 items-center shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/90 shadow-sm" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/90 shadow-sm" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/90 shadow-sm" />
                    </div>

                    {/* Address Bar */}
                    <div className={`mx-auto w-full max-w-[130px] sm:max-w-[170px] bg-white/75 backdrop-blur-sm border ${theme.addressBorder} text-[9px] font-mono px-3 py-1 rounded-full text-center truncate flex items-center justify-center gap-1.5 shadow-inner`}>
                      <svg
                        className="w-2.5 h-2.5 text-[#2ecc71]/90 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      <span className="truncate">{displayUrl}</span>
                    </div>

                    {/* Spacer */}
                    <div className="w-[35px] shrink-0" />
                  </div>

                  {/* Screenshot aspect frame */}
                  <div className="aspect-video w-full overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    {/* Glass hover details indicator */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-sm text-[9px] font-mono font-bold text-[#121212] tracking-wider uppercase scale-90 group-hover:scale-100 transition-all duration-300">
                        View Details
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Portion: Information Details & CTAs */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-3 text-left bg-transparent">
                  <div className="space-y-3">
                    {/* Meta information tags */}
                    <div className="flex items-center justify-between gap-4 select-none">
                      <span className="text-[9px] font-mono text-[#70706c]/90 font-bold tracking-widest uppercase">
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {project.category === "client"
                          ? "Client"
                          : project.category === "hackathon"
                          ? "Hackathon"
                          : "Personal"}
                      </span>
                      {project.achievement && (
                        <span className="text-[8px] font-mono font-bold uppercase tracking-wide px-2 py-0.5 bg-clay-light text-clay-accent rounded border border-clay-accent/15 shadow-sm">
                          ★ {project.achievement.title || "Winner"}
                        </span>
                      )}
                    </div>

                    {/* Project Name and Duration */}
                    <div>
                      <h3
                        onClick={() => router.push(`/project/${project.id}`)}
                        className="text-xl sm:text-2xl font-bold tracking-tight text-[#121212] group-hover:text-clay-accent cursor-pointer transition-colors duration-300 font-general"
                      >
                        {project.name}
                      </h3>
                      <p className="text-[9px] font-mono text-[#70706c]/90 mt-1 select-none font-semibold">
                        {project.role} • {project.timeline || "Ongoing"}
                      </p>
                    </div>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-1.5 pt-0.5 select-none">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[8px] font-mono px-2 py-0.5 bg-white/90 border border-black/5 text-[#70706c] rounded font-bold shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#70706c] leading-relaxed line-clamp-2 md:line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Action Pill Buttons */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-black/[0.05] select-none shrink-0">
                    {/* Primary pill */}
                    <button
                      onClick={() => router.push(`/project/${project.id}`)}
                      className="px-3.5 py-1.5 bg-[#121212] hover:bg-[#222] text-white rounded-full font-bold text-[9px] font-mono uppercase tracking-wider shadow-sm hover:scale-102 active:scale-98 transition-all cursor-pointer inline-flex items-center gap-1 group/btn"
                    >
                      Case Study
                      <div className="w-3.5 h-3.5 relative overflow-hidden flex items-center justify-center shrink-0">
                        {/* Active Arrow */}
                        <svg
                          className="w-3 h-3 text-white absolute transition-all duration-300 ease-in-out -rotate-45 group-hover/btn:translate-x-3.5 group-hover/btn:-translate-y-3.5 group-hover/btn:opacity-0"
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
                        {/* Incoming Arrow */}
                        <svg
                          className="w-3 h-3 text-white absolute transition-all duration-300 ease-in-out -rotate-45 -translate-x-3.5 translate-y-3.5 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 group-hover/btn:opacity-100"
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
                    </button>

                    {/* Secondary pills */}
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1.5 border border-black/10 hover:border-black/20 bg-white text-[#70706c] hover:text-[#121212] rounded-full font-bold text-[9px] font-mono uppercase tracking-wider hover:scale-102 active:scale-98 transition-all inline-flex items-center gap-1 shadow-sm"
                      >
                        Live
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}

                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1.5 border border-black/10 hover:border-black/20 bg-white text-[#70706c] hover:text-[#121212] rounded-full font-bold text-[9px] font-mono uppercase tracking-wider hover:scale-102 active:scale-98 transition-all inline-flex items-center gap-1 shadow-sm"
                      >
                        Code
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* View All Projects Card */}
          <div
            onClick={() => router.push("/projects")}
            className="w-full h-[510px] md:h-[530px] rounded-[2rem] md:rounded-[2.25rem] bg-[#edeae0]/40 border border-dashed border-black/15 flex flex-col items-center justify-center p-8 text-center gap-4 hover:bg-[#edeae0]/70 transition-colors duration-300 select-none cursor-pointer group shadow-sm"
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
              <h3 className="font-general font-bold text-lg text-[#121212]">View All Projects</h3>
              <p className="text-xs text-[#70706c] mt-1">Explore the complete archive of {projects.length} works</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
