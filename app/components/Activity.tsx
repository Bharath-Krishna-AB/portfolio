"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Activity() {
  const [activeTab, setActiveTab] = useState<"contributions" | "stats" | "feed">("contributions");

  const tabs = [
    { id: "contributions", label: "Contributions" },
    { id: "stats", label: "Coding Stats" },
    { id: "feed", label: "Recent Feed" }
  ];

  const stats = [
    {
      label: "Total Commits",
      value: "1,428+",
      sub: "Yearly contributions",
      icon: (
        <svg className="w-4 h-4 text-clay-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
        </svg>
      )
    },
    {
      label: "Active Streak",
      value: "18 Days",
      sub: "Current daily pulse",
      icon: (
        <svg className="w-4 h-4 text-[#607361]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      )
    },
    {
      label: "Longest Streak",
      value: "47 Days",
      sub: "All-time record",
      icon: (
        <svg className="w-4 h-4 text-clay-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.475 3.475 0 011.89 1.89 3.475 3.475 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.475 3.475 0 01-1.89 1.89 3.475 3.475 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.475 3.475 0 01-1.89-1.89 3.475 3.475 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.475 3.475 0 011.89-1.89z" />
        </svg>
      )
    },
    {
      label: "Peak Hour",
      value: "9 AM - 2 PM",
      sub: "Most active time",
      icon: (
        <svg className="w-4 h-4 text-[#70706c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const languages = [
    { name: "TypeScript", percentage: 42, color: "#3178c6" },
    { name: "JavaScript (ES6+)", percentage: 28, color: "#f1e05a" },
    { name: "React / Next.js", percentage: 20, color: "var(--clay-accent)" },
    { name: "Tailwind / CSS", percentage: 10, color: "var(--sage-accent)" }
  ];

  const disciplines = [
    { name: "Frontend Engineering", percentage: 65 },
    { name: "Backend / APIs", percentage: 20 },
    { name: "AI / RAG Integration", percentage: 15 }
  ];

  const commits = [
    {
      project: "PIKKCOM",
      hash: "8a4f2d1",
      message: "Refactored intent-driven product campaign logic",
      description: "Optimized database reads for large product catalogs and enhanced dynamic media generation pipeline inside Next.js API routes.",
      time: "2 hours ago"
    },
    {
      project: "Resume IQ",
      hash: "5c8b3e9",
      message: "Integrated LangChain RAG parser for ATS check validation",
      description: "Engineered document vector embeddings lookup and custom system prompt evaluations matching client resumes against job requirements.",
      time: "1 day ago"
    },
    {
      project: "SPYLT",
      hash: "9e2c1a4",
      message: "Refactored liquid-motion SVG animations using CSS animations",
      description: "Designed scroll-linked parallax animations for fluid mobile screen performance, minimizing render jank.",
      time: "3 days ago"
    },
    {
      project: "IEDC Portal",
      hash: "2b7d5f0",
      message: "Implemented student-mentor registration and database schemas",
      description: "Built startup profiles registration, admin dashboard widgets, and mentor discovery filters utilizing MongoDB queries.",
      time: "5 days ago"
    },
    {
      project: "BennyFit",
      hash: "4f3a7c8",
      message: "Optimized client-side nutrition progress chart & tracker",
      description: "Optimized React state handlers for macro tracker calculators to render live changes instantly without page lag.",
      time: "1 week ago"
    }
  ];

  return (
    <section className="py-24 bg-[#f9f8f4] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-clay-light/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="w-full max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header Block */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
            <div>
              <span className="section-label">
                <span className="w-1.5 h-1.5 rounded-full bg-clay-accent" />
                Activity
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#121212] tracking-tight leading-[1.1] mt-4 font-general">
                Developer pulse. <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 font-instrument font-normal text-clay-accent italic tracking-normal">
                    Live updates.
                  </span>
                </span>
              </h2>
            </div>

            {/* Premium segmented control */}
            <div className="flex bg-[#f3f2eb] p-1.5 rounded-full border border-black/5 gap-1 relative w-full md:w-auto shrink-0 self-start md:self-end">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`relative z-10 px-5 py-2 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase transition-colors duration-300 flex-1 md:flex-none text-center cursor-pointer select-none ${
                      isActive ? "text-white" : "text-[#70706c] hover:text-[#121212]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeActivityTab"
                        className="absolute inset-0 bg-[#121212] rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      />
                    )}
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Content Panel with Framer Motion Animation */}
          <div className="min-h-[400px] w-full relative">
            <AnimatePresence mode="wait">
              {activeTab === "contributions" && (
                <motion.div
                  key="contributions"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="space-y-6"
                >
                  {/* Calendar Widget */}
                  <div className="bg-white border border-black/5 rounded-3xl p-6 shadow-[0_4px_24px_rgba(18,18,18,0.01)] text-left">
                    <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <div className="relative flex items-center justify-center w-2 h-2 shrink-0">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#70706c]">
                          GitHub Contributions
                        </span>
                      </div>
                      <a
                        href="https://github.com/Bharath-Krishna-AB"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-mono text-[#70706c] hover:text-clay-accent transition-colors flex items-center gap-1"
                      >
                        @Bharath-Krishna-AB
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>

                    {/* Scrollable Graph Frame */}
                    <div className="w-full overflow-x-auto no-scrollbar pb-3 border-b border-black/[0.03]">
                      <img
                        src="https://ghchart.rshah.org/0a0a0a/Bharath-Krishna-AB"
                        alt="GitHub Contributions"
                        className="w-full min-w-[680px] h-auto opacity-95 transition-opacity duration-300 hover:opacity-100"
                      />
                    </div>

                    {/* Legend bar */}
                    <div className="flex justify-between items-center mt-3 text-[9px] font-mono text-[#70706c]/70 flex-wrap gap-2">
                      <span>Activity calendar mapping</span>
                      <div className="flex items-center gap-1.5">
                        <span>Less</span>
                        <div className="flex gap-0.5">
                          <span className="w-2.5 h-2.5 rounded bg-[#f3f2eb] border border-black/5" />
                          <span className="w-2.5 h-2.5 rounded bg-[#e2decb] border border-black/5" />
                          <span className="w-2.5 h-2.5 rounded bg-[#bda495] border border-black/5" />
                          <span className="w-2.5 h-2.5 rounded bg-clay-accent" />
                        </div>
                        <span>More</span>
                      </div>
                    </div>
                  </div>

                  {/* Contributions stats grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="soft-card p-5 flex flex-col justify-between h-[110px] text-left bg-white border border-black/5 hover:border-black/10 shadow-[0_4px_20px_rgba(18,18,18,0.01)]"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-mono uppercase tracking-wider text-[#70706c] font-bold">{stat.label}</span>
                          <div className="p-1.5 rounded-lg bg-[#f3f2eb]">
                            {stat.icon}
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="text-xl sm:text-2xl font-bold text-[#121212] tracking-tight">{stat.value}</div>
                          <div className="text-[9px] text-[#70706c]/80 mt-0.5 font-mono">{stat.sub}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "stats" && (
                <motion.div
                  key="stats"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="grid md:grid-cols-12 gap-6 text-left"
                >
                  {/* Left Column: Languages (7 cols) */}
                  <div className="md:col-span-7 bg-white border border-black/5 rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(18,18,18,0.01)] flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-[#121212] mb-6 flex items-center gap-2 select-none">
                        <svg className="w-4 h-4 text-clay-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Language Distribution
                      </h4>
                      <div className="space-y-4">
                        {languages.map((lang, idx) => (
                          <div key={idx} className="space-y-1.5">
                            <div className="flex justify-between items-center text-xs">
                              <span className="font-bold text-[#121212]">{lang.name}</span>
                              <span className="font-mono text-[#70706c] font-bold">{lang.percentage}%</span>
                            </div>
                            {/* Animated progress bar */}
                            <div className="h-2 w-full bg-[#f3f2eb] rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${lang.percentage}%` }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.08 }}
                                className="h-full rounded-full"
                                style={{ backgroundColor: lang.color }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-[10px] text-[#70706c]/70 font-mono mt-8 border-t border-black/[0.03] pt-4 select-none">
                      * Aggregated from repositories statistics and primary coding lines.
                    </p>
                  </div>

                  {/* Right Column: Areas (5 cols) */}
                  <div className="md:col-span-5 bg-white border border-black/5 rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(18,18,18,0.01)] flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-[#121212] mb-6 flex items-center gap-2 select-none">
                        <svg className="w-4 h-4 text-[#607361]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="12" cy="12" r="10" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                        </svg>
                        Discipline Breakdown
                      </h4>
                      <div className="space-y-5">
                        {disciplines.map((disc, idx) => (
                          <div key={idx} className="space-y-2">
                            <div className="flex justify-between items-center text-xs">
                              <span className="font-bold text-[#121212]">{disc.name}</span>
                              <span className="font-mono text-clay-accent font-bold">{disc.percentage}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-[#f3f2eb] rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${disc.percentage}%` }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.12 }}
                                className="h-full rounded-full bg-clay-accent"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-black/[0.03] flex items-center gap-2.5 select-none">
                      <div className="relative flex items-center justify-center w-2 h-2 shrink-0">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-clay-accent opacity-75 animate-ping" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-clay-accent" />
                      </div>
                      <span className="text-[10px] font-mono text-[#70706c] leading-tight">
                        Active Stack: React, Next.js, RAG
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "feed" && (
                <motion.div
                  key="feed"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="bg-white border border-black/5 rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(18,18,18,0.01)] text-left"
                >
                  <div className="flex items-center justify-between mb-8 flex-wrap gap-2 select-none">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#70706c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-[#121212]">
                        Commit Log & Recent Commits
                      </h4>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 bg-[#e5ebe6] text-[#607361] rounded border border-[#607361]/15 font-bold">
                      ✓ CI Builds Passing
                    </span>
                  </div>

                  {/* Timeline Feed Container */}
                  <div className="relative border-l border-black/10 ml-2 pl-6 sm:pl-8 space-y-8 py-2">
                    {commits.map((commit, idx) => (
                      <div key={idx} className="relative group">
                        {/* Timeline point */}
                        <span className="absolute -left-[31px] sm:-left-[35px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#f9f8f4] border-[3px] border-[#121212] group-hover:border-clay-accent transition-colors duration-300" />

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                          {/* Heading details */}
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[9px] font-mono font-bold text-clay-accent px-1.5 py-0.5 bg-clay-light rounded border border-clay-accent/15 select-none">
                              {commit.project}
                            </span>
                            <span className="text-[10px] font-mono text-[#70706c] bg-[#f3f2eb] px-1.5 py-0.5 rounded border border-black/5 select-none font-bold">
                              {commit.hash}
                            </span>
                            <span className="text-xs font-bold text-[#121212] tracking-tight ml-1 font-general">
                              {commit.message}
                            </span>
                          </div>
                          {/* Timestamp */}
                          <span className="text-[10px] font-mono text-[#70706c]/70 self-start sm:self-center shrink-0">
                            {commit.time}
                          </span>
                        </div>
                        <p className="text-xs text-[#70706c] mt-2 leading-relaxed max-w-2xl font-general">
                          {commit.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
