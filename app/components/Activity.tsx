"use client";

import { motion } from "framer-motion";

export default function Activity() {
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
            Activity
          </span>

          {/* Activity Card */}
          <div className="soft-card p-6 overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-[#121212]">
                GitHub Contributions
              </h3>
              <a
                href="https://github.com/Bharath-Krishna-AB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#70706c] hover:text-[#121212] transition-colors font-mono"
              >
                @Bharath-Krishna-AB
              </a>
            </div>

            {/* Horizontal Scroll wrapper for responsive graph */}
            <div className="w-full overflow-x-auto no-scrollbar">
              <img
                src="https://ghchart.rshah.org/0a0a0a/Bharath-Krishna-AB"
                alt="GitHub Contributions"
                className="w-full min-w-[640px] h-auto opacity-90"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
