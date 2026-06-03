"use client";

import { motion } from "framer-motion";
import { achievements } from "../data/portfolio";

export default function Achievements() {
  return (
    <section className="py-16 bg-[#f9f8f4]">
      <div className="w-full max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Section Label */}
          <span className="section-label">
            Achievements
          </span>

          {/* Grid Layout */}
          <div className="grid gap-3">
            {achievements.map((item, index) => {
              // Select appropriate icon
              const isWinner = item.label.toLowerCase().includes("winner");
              const isPrize = item.label.toLowerCase().includes("prize");
              const isTyping = item.label.toLowerCase().includes("typing") || item.label.toLowerCase().includes("wpm");

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-3 p-4 soft-card bg-[#f3f2eb] hover:bg-[#ebeae2] transition-colors ${
                    item.highlight ? "border-black/15 shadow-sm" : "border-black/5"
                  }`}
                >
                  {/* Custom SVGs */}
                  {isWinner && (
                    <svg
                      className="w-4 h-4 text-clay-accent flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4"
                      />
                    </svg>
                  )}
                  {isPrize && (
                    <svg
                      className="w-4 h-4 text-sage-accent flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0h4m-4 0H8"
                      />
                    </svg>
                  )}
                  {isTyping && (
                    <svg
                      className="w-4 h-4 text-[#70706c] flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h18M3 14h18m-9-4v8m-5-8v8m10-8v8M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"
                      />
                    </svg>
                  )}
                  {!isWinner && !isPrize && !isTyping && (
                    <svg
                      className="w-4 h-4 text-[#70706c] flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v8M8 12h8" />
                    </svg>
                  )}

                  <span
                    className={`text-sm text-[#121212] ${
                      item.highlight ? "font-medium" : "text-[#121212]/80"
                    }`}
                  >
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
