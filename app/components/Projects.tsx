"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/portfolio";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Top 4 selected projects
  const selectedProjects = projects.slice(0, 4);

  useEffect(() => {
    const cards = deckRef.current?.querySelectorAll(".project-stack-card");
    if (!cards || cards.length === 0) return;

    // Set CSS sticky position
    gsap.set(cards, {
      position: "sticky",
      top: "120px",
    });

    const ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        gsap.to(card, {
          scale: 1 - (cards.length - 1 - index) * 0.015,
          scrollTrigger: {
            trigger: card,
            start: "top 120px",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="work"
      ref={containerRef}
      className="py-16 bg-[#f9f8f4]"
    >
      <div className="w-full max-w-3xl mx-auto px-6">
        {/* Section Label */}
        <span className="section-label">
          Work
        </span>

        <h2 className="text-2xl font-serif text-[#121212] mb-8 leading-snug">
          Selected projects I have designed and built end-to-end.
        </h2>

        {/* Stacked Cards Deck Container */}
        <div ref={deckRef} className="space-y-8 relative">
          {selectedProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => router.push(`/project/${project.id}`)}
              className="project-stack-card group cursor-pointer soft-card overflow-hidden bg-[#f3f2eb] border border-black/8 hover:border-black/15 shadow-sm hover:shadow-md transition-all duration-300"
              style={{
                zIndex: index + 1,
              }}
            >
              {/* Aspect Video Image Preview */}
              <div className="p-4 pb-0">
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-black/5 relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                  />
                </div>
              </div>

              {/* Project Card Text Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#70706c] font-mono opacity-50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-medium text-[#121212] group-hover:text-clay-accent transition-colors">
                      {project.name}
                    </h3>
                    
                    {/* Trophy Badge for Achievements */}
                    {project.achievement && (
                      <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 bg-clay-light text-clay-accent rounded-full border border-clay-accent/10 font-mono">
                        {/* Trophy Icon SVG */}
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.475 3.475 0 011.89 1.89 3.475 3.475 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.475 3.475 0 01-1.89 1.89 3.475 3.475 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.475 3.475 0 01-1.89-1.89 3.475 3.475 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.475 3.475 0 011.89-1.89z"
                          />
                        </svg>
                        Winner
                      </span>
                    )}
                  </div>

                  {/* Arrow up-right SVG icon */}
                  <svg
                    className="w-4 h-4 text-[#70706c] group-hover:text-[#121212] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>

                <p className="text-sm text-[#70706c] mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Tech Stack tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2.5 py-1 bg-white/70 border border-black/5 text-[#121212] rounded font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={() => router.push("/projects")}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#70706c] hover:text-[#121212] transition-colors group font-semibold border-b border-dashed border-[#70706c]/30 pb-1"
          >
            View all {projects.length} projects
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
