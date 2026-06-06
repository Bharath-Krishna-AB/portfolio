"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TextReveal from "./ui/TextReveal";
import { faqs } from "../data/portfolio";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".faq-header",
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

    gsap.fromTo(".faq-item",
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
          <div className="faq-header">
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-clay-accent shrink-0" />
              FAQ
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mt-4 font-claude text-left flex-wrap sm:whitespace-nowrap flex items-baseline transition-colors duration-500">
              <TextReveal text="Got " />
              <TextReveal text="questions?" className="font-instrument font-normal text-secondary italic tracking-normal" delay={0.1} />
            </h2>
          </div>

          {/* Accordion Cards Layout */}
          <div className="space-y-4 mt-12 w-full text-left">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`faq-item soft-card bg-surface border border-border overflow-hidden transition-colors duration-500 ${
                    isOpen ? "border-foreground/10 shadow-sm" : "hover:border-foreground/10"
                  }`}
                >
                  {/* Trigger Header */}
                  <button
                    onClick={() => toggleIndex(index)}
                    className="flex w-full items-center justify-between p-5 md:p-6 text-left font-bold text-sm sm:text-base text-foreground transition-colors duration-500 focus:outline-none cursor-pointer"
                  >
                    <span className="pr-4">{faq.question}</span>
                    {/* Rotate Chevron Icon */}
                    <div className={`w-7 h-7 rounded-full bg-background flex items-center justify-center shrink-0 transition-all duration-500 ${isOpen ? "rotate-180 bg-secondary text-foreground-inverse" : "text-muted"}`}>
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
                        <div className="p-5 md:p-6 pt-0 border-t border-border transition-colors duration-500">
                          <p className="text-xs sm:text-sm text-muted leading-relaxed transition-colors duration-500">
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
        </div>
      </div>
    </section>
  );
}
