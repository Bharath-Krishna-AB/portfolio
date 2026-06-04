"use client";

import { motion } from "framer-motion";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section className="py-24 bg-[#f9f8f4] relative overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Label */}
          <div>
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-clay-accent shrink-0" />
              Experience
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#121212] tracking-tight leading-[1.1] mt-4 font-claude text-left">
              Career{" "}
              <span className="font-instrument font-normal text-secondary italic tracking-normal">
                log.
              </span>
            </h2>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative space-y-6 mt-12">
            {/* Timeline line */}
            <div className="absolute left-6 top-8 bottom-8 w-px border-l-2 border-dashed border-black/10 hidden sm:block" />

            {experience.map((item, index) => (
              <motion.div
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                {/* Timeline node dot with pulse */}
                <div className="absolute left-[20px] top-6 w-2.5 h-2.5 rounded-full bg-clay-accent border border-white ring-4 ring-clay-light z-10 hidden sm:block" />

                {/* Card Container */}
                <div className="soft-card p-6 sm:ml-16 bg-white hover:border-[#121212]/15 hover:shadow-[0_8px_30px_rgba(18,18,18,0.02)] transition-all text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-mono px-2.5 py-1 bg-black/5 text-[#121212] rounded-full font-bold uppercase tracking-wider">
                        {item.company}
                      </span>
                      <h3 className="text-lg font-bold text-[#121212] mt-3">
                        {item.role}
                      </h3>
                      {item.type && (
                        <p className="text-xs text-[#70706c] mt-1 font-mono">
                          {item.type}
                        </p>
                      )}
                    </div>
                    
                    <span className="text-xs font-bold font-mono px-3.5 py-1.5 bg-[#f3f2eb] border border-black/5 text-[#70706c] rounded-full whitespace-nowrap self-start sm:self-center">
                      {item.period}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
