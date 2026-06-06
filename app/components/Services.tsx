"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TextReveal from "./ui/TextReveal";
import { services } from "../data/portfolio";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Services() {
  const serviceDetails = [
    {
      index: "01",
      stack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "PostgreSQL"],
      capabilities: [
        "End-to-end web application architecture and database schema design.",
        "Secure JWT authentication, session handling, and RESTful API endpoints.",
        "Server-side rendering (SSR), static site generation (SSG), and API routes optimization."
      ]
    },
    {
      index: "02",
      stack: ["TypeScript", "JavaScript", "Tailwind CSS", "CSS Transitions", "Framer Motion"],
      capabilities: [
        "Pixel-perfect responsive design tailored for all device resolutions.",
        "Performance-optimized frontend animations and scroll-bound micro-interactions.",
        "Reusable, structured component architecture with modular styling paradigms."
      ]
    },
    {
      index: "03",
      stack: ["LangChain", "OpenAI API", "Vector Databases", "Embeddings", "RAG Pipeline"],
      capabilities: [
        "Integrating large language models (LLMs) with retrieval-augmented generation (RAG).",
        "Designing custom system prompts and vector embedding storage (Pinecone, Chroma).",
        "Developing structured data extraction tools and autonomous agent workflows."
      ]
    },
    {
      index: "04",
      stack: ["Git / GitHub", "Vercel", "Figma", "Supabase", "Postman"],
      capabilities: [
        "Translating UI/UX Figma mockups into highly optimized production-ready code.",
        "Developing minimum viable products (MVPs) quickly for startup validation.",
        "Setting up CI/CD pipelines and deployment previews on Vercel or Netlify."
      ]
    }
  ];

  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".service-header",
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

    gsap.fromTo(".service-item",
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
    <section ref={container} id="services" className="py-24 bg-background border-y border-border relative transition-colors duration-500">
      <div className="w-full max-w-4xl mx-auto px-6">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="service-header text-left">
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-clay-accent shrink-0" />
              Services
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mt-4 font-claude text-left whitespace-nowrap flex items-baseline transition-colors duration-500">
              <TextReveal text="Core " />
              <TextReveal text="offerings." className="font-instrument font-normal text-secondary italic tracking-normal" delay={0.1} />
            </h2>
          </div>

          {/* Resume Style List */}
          <div className="divide-y divide-border transition-colors duration-500">
            {services.map((service, index) => {
              const detail = serviceDetails[index];
              return (
                <div
                  key={service.title}
                  className="service-item py-10 first:pt-0 last:pb-0 grid md:grid-cols-12 gap-6 items-start text-left group"
                >
                  {/* Left Column: Index & Service Title */}
                  <div className="md:col-span-4 flex gap-4 items-start">
                    <span className="text-xs font-mono text-muted select-none font-bold opacity-60 pt-0.5 transition-colors duration-500">
                      {detail.index}
                    </span>
                    <div>
                      <h3 className="font-bold text-lg text-foreground tracking-tight group-hover:text-clay-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1 mt-3">
                        {detail.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[9px] font-mono px-2 py-0.5 bg-surface border border-border text-muted rounded transition-colors duration-500"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Description & Capabilities */}
                  <div className="md:col-span-8 space-y-4">
                    <p className="text-sm text-muted leading-relaxed transition-colors duration-500">
                      {service.description}
                    </p>
                    
                    {/* Capabilities checklist */}
                    <ul className="space-y-2.5">
                      {detail.capabilities.map((cap, i) => (
                        <li key={i} className="flex gap-2.5 text-xs text-muted leading-relaxed transition-colors duration-500">
                          <span className="text-clay-accent font-bold mt-0.5">•</span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
