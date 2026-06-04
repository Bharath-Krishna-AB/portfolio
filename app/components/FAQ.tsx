"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../data/portfolio";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              FAQ
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#121212] tracking-tight leading-[1.1] mt-4 font-claude text-left">
              Got{" "}
              <span className="font-instrument font-normal text-secondary italic tracking-normal">
                questions?
              </span>
            </h2>
          </div>

          {/* Accordion Cards Layout */}
          <div className="space-y-4 mt-12 w-full text-left">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`soft-card bg-white border border-black/[0.04] overflow-hidden transition-all duration-300 ${
                    isOpen ? "border-black/10 shadow-sm" : "hover:border-black/10"
                  }`}
                >
                  {/* Trigger Header */}
                  <button
                    onClick={() => toggleIndex(index)}
                    className="flex w-full items-center justify-between p-5 md:p-6 text-left font-bold text-sm sm:text-base text-[#121212] transition-colors focus:outline-none cursor-pointer"
                  >
                    <span className="pr-4">{faq.question}</span>
                    {/* Rotate Chevron Icon */}
                    <div className={`w-7 h-7 rounded-full bg-[#f3f2eb] flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-secondary text-white" : "text-[#70706c]"}`}>
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Collapsible Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 md:p-6 pt-0 border-t border-black/[0.02]">
                          <p className="text-xs sm:text-sm text-[#70706c] leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
