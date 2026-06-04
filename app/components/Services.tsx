"use client";

import { motion } from "framer-motion";
import { services } from "../data/portfolio";

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

  return (
    <section id="services" className="py-24 bg-[#f9f8f4] border-y border-black/[0.04] relative">
      <div className="w-full max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-left">
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-clay-accent shrink-0" />
              Services
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#121212] tracking-tight leading-[1.1] mt-4 font-claude">
              Core{" "}
              <span className="font-instrument font-normal text-secondary italic tracking-normal">
                competencies.
              </span>
            </h2>
          </div>

          {/* Resume Style List */}
          <div className="divide-y divide-black/10">
            {services.map((service, index) => {
              const detail = serviceDetails[index];
              return (
                <div
                  key={service.title}
                  className="py-10 first:pt-0 last:pb-0 grid md:grid-cols-12 gap-6 items-start text-left group"
                >
                  {/* Left Column: Index & Service Title */}
                  <div className="md:col-span-4 flex gap-4 items-start">
                    <span className="text-xs font-mono text-[#70706c] select-none font-bold opacity-60 pt-0.5">
                      {detail.index}
                    </span>
                    <div>
                      <h3 className="font-bold text-lg text-[#121212] tracking-tight group-hover:text-clay-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1 mt-3">
                        {detail.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[9px] font-mono px-2 py-0.5 bg-[#f3f2eb] border border-black/5 text-[#70706c] rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Description & Capabilities */}
                  <div className="md:col-span-8 space-y-4">
                    <p className="text-sm text-[#70706c] leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Capabilities checklist */}
                    <ul className="space-y-2.5">
                      {detail.capabilities.map((cap, i) => (
                        <li key={i} className="flex gap-2.5 text-xs text-[#70706c] leading-relaxed">
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
        </motion.div>
      </div>
    </section>
  );
}
