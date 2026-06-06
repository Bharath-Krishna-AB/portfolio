"use client";

import { useRouter } from "next/navigation";
import { ExternalLink } from "lucide-react";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  timeline?: string;
  role: string;
  stack: string[];
  category: "client" | "hackathon" | "personal" | string;
  links?: {
    live?: string;
    github?: string;
  };
  achievement?: {
    title: string;
    url?: string;
  };
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const router = useRouter();

  const displayUrl = project.links?.live
    ? project.links.live.replace("https://", "").replace("www.", "")
    : `${project.id}.dev`;

  const arcThemes = [
    {
      headerBg: "bg-surface",
      addressBorder: "border-secondary/15 text-secondary",
      shadowGlow: "shadow-[0_20px_50px_rgba(193,95,60,0.045)] hover:shadow-[0_30px_70px_rgba(193,95,60,0.08)]",
    },
    {
      headerBg: "bg-surface",
      addressBorder: "border-secondary/15 text-secondary",
      shadowGlow: "shadow-[0_20px_50px_rgba(193,95,60,0.045)] hover:shadow-[0_30px_70px_rgba(193,95,60,0.08)]",
    }
  ];
  
  const theme = arcThemes[index % arcThemes.length];

  return (
    <div
      className={`w-full h-full min-h-[450px] md:min-h-[480px] rounded-[2rem] md:rounded-[2.5rem] bg-background border border-border overflow-hidden flex flex-col justify-between select-none hover:border-foreground/20 transition-all duration-500 ease-out group ${theme.shadowGlow}`}
    >
      {/* Top Portion: Arc Browser Mock Frame */}
      <div
        onClick={() => router.push(`/work/${project.id}`)}
        className="w-full cursor-pointer flex flex-col overflow-hidden bg-foreground/[0.01] border-b border-border shrink-0 transition-colors duration-500"
      >
        {/* Arc Browser Header */}
        <div className={`px-4 py-3.5 flex items-center justify-between border-b border-border select-none shrink-0 ${theme.headerBg} transition-colors duration-500`}>
          {/* Control Dots (Exact MacOS/Arc Colors) */}
          <div className="flex gap-1.5 items-center shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] border border-black/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] border border-black/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] border border-black/10" />
          </div>

          {/* Address Bar */}
          <div className={`mx-auto w-full max-w-[130px] sm:max-w-[170px] bg-background/75 backdrop-blur-sm border ${theme.addressBorder} text-[9px] font-mono px-3 py-1 rounded-full text-center truncate flex items-center justify-center gap-1.5 shadow-inner transition-colors duration-500`}>
            <svg
              className="w-2.5 h-2.5 text-[#2ecc71]/90 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="truncate">{displayUrl}</span>
          </div>

          {/* External Link Action */}
          <div className="w-[35px] shrink-0 flex justify-end">
            {project.links?.live && (
              <a 
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-7 h-7 rounded-full hover:bg-foreground/5 flex items-center justify-center transition-colors text-muted hover:text-foreground"
                title="Visit live site"
              >
                <ExternalLink size={14} strokeWidth={2} />
              </a>
            )}
          </div>
        </div>

        {/* Screenshot aspect frame */}
        <div className="aspect-video w-full overflow-hidden relative">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          {/* Glass hover details indicator */}
          <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="px-5 py-2.5 bg-background/95 backdrop-blur-sm rounded-full shadow-sm text-[10px] sm:text-xs font-mono font-bold text-foreground tracking-wider uppercase scale-90 group-hover:scale-100 transition-all duration-300">
              View Details
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Portion: Information Details & CTAs */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-4 text-left bg-transparent">
        <div className="space-y-4">
          {/* Meta information tags */}
          <div className="flex items-center justify-between gap-4 select-none">
            <span className="text-[10px] font-mono text-muted/80 font-bold tracking-[0.2em] uppercase transition-colors duration-500">
              {String(index + 1).padStart(2, "0")} /{" "}
              {project.category === "client"
                ? "Client"
                : project.category === "hackathon"
                ? "Hackathon"
                : "Personal"}
            </span>
            {project.achievement && (
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-secondary flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(193,95,60,0.6)] animate-pulse" />
                {project.achievement.title || "Winner"}
              </span>
            )}
          </div>

          {/* Project Name and Duration */}
          <div>
            <h3
              onClick={() => router.push(`/work/${project.id}`)}
              className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:text-secondary cursor-pointer transition-colors duration-300 font-claude"
            >
              {project.name}
            </h3>
            <p className="text-[10px] sm:text-xs font-mono text-muted/90 mt-1.5 select-none font-semibold transition-colors duration-500">
              {project.role} • {project.timeline || "Ongoing"}
            </p>
          </div>

          {/* Tech stack inline text */}
          <div className="pt-1 select-none">
            <p className="text-[10px] sm:text-xs font-mono text-secondary font-semibold tracking-widest uppercase">
              {project.stack.join(" • ")}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm md:text-[15px] text-muted leading-relaxed line-clamp-2 md:line-clamp-3 transition-colors duration-500">
            {project.description}
          </p>
        </div>

        {/* Action Pill Buttons */}
        <div className="flex flex-nowrap items-center gap-2 pt-3 border-t border-border select-none shrink-0 overflow-x-auto no-scrollbar pb-1 transition-colors duration-500">
          {/* Primary pill */}
          <button
            onClick={() => router.push(`/work/${project.id}`)}
            className="px-4 py-2 bg-foreground hover:bg-secondary text-foreground-inverse rounded-full font-bold text-[10px] font-mono uppercase tracking-wider shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-1.5 group/btn shrink-0"
          >
            Project Details
            <div className="w-3.5 h-3.5 relative overflow-hidden flex items-center justify-center shrink-0">
              {/* Active Arrow */}
              <svg
                className="w-3 h-3 text-foreground-inverse absolute transition-all duration-300 ease-in-out -rotate-45 group-hover/btn:translate-x-3.5 group-hover/btn:-translate-y-3.5 group-hover/btn:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              {/* Incoming Arrow */}
              <svg
                className="w-3 h-3 text-foreground-inverse absolute transition-all duration-300 ease-in-out -rotate-45 -translate-x-3.5 translate-y-3.5 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 group-hover/btn:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {/* Secondary pills */}
          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 border border-border hover:border-foreground/20 bg-surface text-muted hover:text-foreground rounded-full font-bold text-[10px] font-mono uppercase tracking-wider hover:scale-102 active:scale-98 transition-all inline-flex items-center gap-1 shadow-sm shrink-0"
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
              className="px-3 py-2 border border-border hover:border-foreground/20 bg-surface text-muted hover:text-foreground rounded-full font-bold text-[10px] font-mono uppercase tracking-wider hover:scale-102 active:scale-98 transition-all inline-flex items-center gap-1 shadow-sm shrink-0"
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
}
