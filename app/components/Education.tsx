"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TextReveal from "./ui/TextReveal";
import { education } from "../data/portfolio";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Education() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".edu-header",
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

    gsap.fromTo(".edu-item",
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 bg-background relative overflow-hidden transition-colors duration-500">
      <div className="w-full max-w-5xl mx-auto px-6">
        <div className="space-y-12">
          {/* Section Label */}
          <div className="edu-header">
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-clay-accent shrink-0" />
              Education
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mt-4 font-claude text-left whitespace-nowrap flex items-baseline transition-colors duration-500">
              <TextReveal text="Learning " />
              <TextReveal text="path." className="font-instrument font-normal text-secondary italic tracking-normal" delay={0.1} />
            </h2>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative space-y-6 mt-12">
            {/* Timeline line */}
            <div className="absolute left-6 top-8 bottom-8 w-px border-l-2 border-dashed border-foreground/10 hidden sm:block transition-colors duration-500" />

            {education.map((item, index) => (
              <div
                key={`${item.institution}-${item.degree}`}
                className="relative edu-item"
              >
                {/* Timeline node dot with pulse */}
                <div className="absolute left-[20px] top-6 w-2.5 h-2.5 rounded-full bg-secondary border border-white dark:border-surface z-10 hidden sm:block" />

                {/* Card Container */}
                <div className="soft-card p-6 sm:ml-16 bg-surface hover:border-foreground/15 hover:shadow-[0_8px_30px_rgba(18,18,18,0.02)] transition-all text-left duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-mono px-2.5 py-1 bg-foreground/5 text-foreground rounded-full font-bold uppercase tracking-wider transition-colors duration-500">
                        {item.institution}
                      </span>
                      <h3 className="text-lg font-bold text-foreground mt-3 transition-colors duration-500">
                        {item.degree}
                      </h3>
                      {item.status && (
                        <span className="inline-flex items-center gap-1.5 text-[9px] font-mono font-bold px-2 py-0.5 mt-2 bg-secondary border border-transparent text-foreground-inverse rounded-full uppercase tracking-wide">
                          <span className="status-dot w-1 h-1 bg-foreground-inverse" />
                          {item.status}
                        </span>
                      )}
                    </div>
                    
                    <span className="text-xs font-bold font-mono px-3.5 py-1.5 bg-background border border-border text-muted rounded-full whitespace-nowrap self-start sm:self-center transition-colors duration-500">
                      {item.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
