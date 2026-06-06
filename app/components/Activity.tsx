"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Helper function to format ISO date into relative time
function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMins < 60) {
    return diffMins <= 1 ? "Just now" : `${diffMins} mins ago`;
  } else if (diffHours < 24) {
    return diffHours === 1 ? "1 hour ago" : `${diffHours} hours ago`;
  } else {
    return diffDays === 1 ? "Yesterday" : `${diffDays} days ago`;
  }
}

// Categorizes raw commit messages into HR-friendly labels
function getCommitCategory(message: string): { label: string; color: string; bg: string } {
  const msg = message.toLowerCase();
  if (msg.includes("feat") || msg.includes("add") || msg.includes("create") || msg.includes("implement") || msg.includes("setup") || msg.includes("new")) {
    return { label: "Feature", color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-200" };
  }
  if (msg.includes("fix") || msg.includes("bug") || msg.includes("resolve") || msg.includes("crash") || msg.includes("error") || msg.includes("prevent")) {
    return { label: "Bug Fix", color: "text-rose-700", bg: "bg-rose-50 border-rose-200" };
  }
  if (msg.includes("perf") || msg.includes("optimize") || msg.includes("speed") || msg.includes("improve") || msg.includes("scale") || msg.includes("reduce") || msg.includes("fast")) {
    return { label: "Optimization", color: "text-blue-700", bg: "bg-blue-50 border-blue-200" };
  }
  if (msg.includes("refactor") || msg.includes("clean") || msg.includes("rewrite") || msg.includes("restructure")) {
    return { label: "Refactor", color: "text-purple-700", bg: "bg-purple-50 border-purple-200" };
  }
  return { label: "Deployment", color: "text-amber-700", bg: "bg-amber-50 border-amber-200" };
}

interface CommitFeedItem {
  project: string;
  hash: string;
  message: string;
  description: string;
  time: string;
  category: { label: string; color: string; bg: string };
}

interface LanguageStat {
  name: string;
  percentage: number;
  color: string;
}

export default function Activity() {
  const [activeTab, setActiveTab] = useState<"contributions" | "stats" | "feed">("contributions");
  const [loading, setLoading] = useState(true);

  // Tab labels designed for non-technical HR scanning
  const tabs = [
    { id: "contributions", label: "Consistency" },
    { id: "stats", label: "Capabilities" },
    { id: "feed", label: "Product Log" }
  ];

  // Dynamic stats
  const [statsData, setStatsData] = useState<{
    totalCommits: string | null;
    activeStreak: string | null;
    longestStreak: string | null;
    publicRepos: string | null;
  }>({
    totalCommits: null,
    activeStreak: null,
    longestStreak: null,
    publicRepos: null
  });

  const [languageStats, setLanguageStats] = useState<LanguageStat[] | null>(null);

  const [commitFeed, setCommitFeed] = useState<CommitFeedItem[] | null>(null);

  const stats = [
    {
      label: "Total Contributions",
      value: statsData.totalCommits,
      sub: "Yearly contributions",
      icon: (
        <svg className="w-[18px] h-[18px] text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
        </svg>
      )
    },
    {
      label: "Active Streak",
      value: statsData.activeStreak,
      sub: "Current daily pulse",
      icon: (
        <svg className="w-[18px] h-[18px] text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      )
    },
    {
      label: "Longest Streak",
      value: statsData.longestStreak,
      sub: "All-time record",
      icon: (
        <svg className="w-[18px] h-[18px] text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.475 3.475 0 011.89 1.89 3.475 3.475 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.475 3.475 0 01-1.89 1.89 3.475 3.475 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.475 3.475 0 01-1.89-1.89 3.475 3.475 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.475 3.475 0 011.89-1.89z" />
        </svg>
      )
    },
    {
      label: "Public Repositories",
      value: statsData.publicRepos,
      sub: "Active open-source codebases",
      icon: (
        <svg className="w-[18px] h-[18px] text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      )
    }
  ];

  const languages = languageStats;

  const [disciplines, setDisciplines] = useState<{ name: string; percentage: number }[]>([
    { name: "Frontend / UI Engineering", percentage: 70 },
    { name: "Backend / Database APIs", percentage: 30 }
  ]);

  useEffect(() => {
    const fetchGithubData = async () => {
      let repoCount = 0;
      let repoDescriptions: Record<string, string> = {};
      let topRepos: any[] = [];

      try {
        setLoading(true);

        // A. Fetch public repositories
        const reposRes = await fetch("https://api.github.com/users/Bharath-Krishna-AB/repos?per_page=100&sort=updated");
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          repoCount = reposData.length;
          topRepos = reposData.slice(0, 4);
          const languageCounts: Record<string, number> = {};
          let frontendCount = 0;
          let backendCount = 0;

          reposData.forEach((repo: any) => {
            if (repo.name) {
              repoDescriptions[repo.name] = repo.description || `Updates and code improvements in ${repo.name}.`;
            }
            if (repo.language) {
              languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
              const lang = repo.language.toLowerCase();
              if (["typescript", "javascript", "html", "css", "vue", "svelte"].includes(lang)) {
                frontendCount++;
              } else {
                backendCount++;
              }
            } else {
              frontendCount++;
            }
          });

          // Calculate discipline percentages dynamically
          const totalCount = frontendCount + backendCount;
          let fePct = 70;
          let bePct = 30;
          if (totalCount > 0) {
            fePct = Math.round((frontendCount / totalCount) * 100);
            bePct = 100 - fePct;
          }
          setDisciplines([
            { name: "Frontend / UI Engineering", percentage: fePct },
            { name: "Backend / Database APIs", percentage: bePct }
          ]);

          const totalLanguages = Object.values(languageCounts).reduce((a, b) => a + b, 0);
          if (totalLanguages > 0) {
            const langColors: Record<string, string> = {
              TypeScript: "#3178c6",
              JavaScript: "#f1e05a",
              HTML: "#e34c26",
              CSS: "#563d7c",
              Python: "#3572A5",
              Java: "#b07219",
              Rust: "#dea584",
              Go: "#00ADD8"
            };

            const dynamicLanguages = Object.entries(languageCounts)
              .map(([name, count]) => ({
                name,
                percentage: Math.round((count / totalLanguages) * 100),
                color: langColors[name] || "#70706c"
              }))
              .sort((a: any, b: any) => b.percentage - a.percentage)
              .slice(0, 4);

            setLanguageStats(dynamicLanguages);
          } else {
            setLanguageStats([]);
          }
        } else {
          setLanguageStats([]);
        }
      } catch (err) {
        console.error("Failed to load GitHub repos:", err);
        setLanguageStats([]);
      }

      try {
        // B. Fetch public commits from top repositories
        let reposToQuery = topRepos;
        if (reposToQuery.length === 0) {
          const reposRes = await fetch("https://api.github.com/users/Bharath-Krishna-AB/repos?per_page=4&sort=updated");
          if (reposRes.ok) {
            reposToQuery = await reposRes.json();
          }
        }

        const commitPromises = reposToQuery.map(async (repo: any) => {
          try {
            const res = await fetch(`https://api.github.com/repos/Bharath-Krishna-AB/${repo.name}/commits?author=Bharath-Krishna-AB&per_page=3`);
            if (res.ok) {
              const commitsData = await res.json();
              return commitsData.map((c: any) => {
                const category = getCommitCategory(c.commit.message);
                return {
                  project: repo.name,
                  hash: c.sha.substring(0, 7),
                  message: c.commit.message.split("\n")[0],
                  description: repoDescriptions[repo.name] || repo.description || `Updates and code improvements in ${repo.name}.`,
                  time: getRelativeTime(c.commit.author.date),
                  category,
                  dateObject: new Date(c.commit.author.date)
                };
              });
            }
          } catch (e) {
            console.error(`Failed to fetch commits for ${repo.name}:`, e);
          }
          return [];
        });

        const results = await Promise.all(commitPromises);
        const allCommits = results.flat();
        allCommits.sort((a: any, b: any) => b.dateObject.getTime() - a.dateObject.getTime());
        setCommitFeed(allCommits.slice(0, 5));
      } catch (err) {
        console.error("Failed to load GitHub commits:", err);
        setCommitFeed([]);
      }

      try {
        // C. Fetch contributions calendar & streaks
        const contribRes = await fetch("https://github-contributions-api.deno.dev/Bharath-Krishna-AB.json");
        if (contribRes.ok) {
          const contribData = await contribRes.json();
          const yearlyContribs = contribData.totalContributions || 0;

          const contributionsList = (contribData.contributions || []).flat();
          let longestStreak = 0;
          let currentStreak = 0;
          let activeStreak = 0;

          contributionsList.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());

          contributionsList.forEach((day: any) => {
            const count = day.contributionCount || day.count || 0;
            if (count > 0) {
              currentStreak++;
              if (currentStreak > longestStreak) {
                longestStreak = currentStreak;
              }
            } else {
              currentStreak = 0;
            }
          });

          const reversedContribs = [...contributionsList].reverse();
          let startIndex = -1;

          for (let i = 0; i < Math.min(3, reversedContribs.length); i++) {
            const count = reversedContribs[i].contributionCount || reversedContribs[i].count || 0;
            if (count > 0) {
              startIndex = i;
              break;
            }
          }

          if (startIndex !== -1) {
            for (let i = startIndex; i < reversedContribs.length; i++) {
              const count = reversedContribs[i].contributionCount || reversedContribs[i].count || 0;
              if (count > 0) {
                activeStreak++;
              } else {
                break;
              }
            }
          }

          setStatsData({
            totalCommits: `${yearlyContribs.toLocaleString()}`,
            activeStreak: `${activeStreak} Days`,
            longestStreak: `${longestStreak} Days`,
            publicRepos: `${repoCount} Repos`
          });
        } else {
          setStatsData({
            totalCommits: "-",
            activeStreak: "-",
            longestStreak: "-",
            publicRepos: `${repoCount} Repos`
          });
        }
      } catch (err) {
        console.error("Failed to load GitHub contributions:", err);
        setStatsData({
          totalCommits: "-",
          activeStreak: "-",
          longestStreak: "-",
          publicRepos: `${repoCount} Repos`
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  const commits = commitFeed;

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
              <h2 className="text-3xl sm:text-5xl font-bold text-[#121212] tracking-tight leading-[1.1] mt-4 font-claude">
                Developer{" "}
                <span className="font-instrument font-normal text-secondary italic tracking-normal">
                  pulse.
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
                          Live Contribution Grid
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
                        src="https://ghchart.rshah.org/c15f3c/Bharath-Krishna-AB"
                        alt="GitHub Contributions"
                        className="w-full min-w-[680px] h-auto opacity-95 transition-opacity duration-300 hover:opacity-100"
                      />
                    </div>

                    {/* Legend bar */}
                    <div className="flex justify-between items-center mt-3 text-[10px] font-mono text-slate-accent/70 flex-wrap gap-2">
                      <span>Consistency index mapped by days</span>
                      <div className="flex items-center gap-2">
                        <span>Less</span>
                        <div className="flex gap-1">
                          <span className="w-[11px] h-[11px] rounded-[3px] bg-[#faf9f6] border border-black/[0.08]" />
                          <span className="w-[11px] h-[11px] rounded-[3px] bg-[#e8e6dc] border border-black/[0.04]" />
                          <span className="w-[11px] h-[11px] rounded-[3px] bg-[#a3a69a] border border-black/[0.04]" />
                          <span className="w-[11px] h-[11px] rounded-[3px] bg-[#c15f3c] border border-black/[0.04]" />
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
                        className="p-6 flex flex-col justify-between min-h-[135px] text-left bg-sand-bg border border-black/[0.04] rounded-3xl hover:border-black/[0.08] transition-all duration-300"
                      >
                        <div className="flex items-start justify-between">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-accent font-bold">
                            {stat.label}
                          </span>
                          <div className="flex items-center justify-center shrink-0">
                            {stat.icon}
                          </div>
                        </div>
                        <div className="mt-4">
                          {stat.value === null ? (
                            <div className="h-7 w-20 bg-black/5 animate-pulse rounded-md mt-1 mb-1.5" />
                          ) : (
                            <div className="text-2xl sm:text-3xl font-bold text-[#121212] tracking-tight font-claude leading-tight">
                              {stat.value}
                            </div>
                          )}
                          <div className="text-[10px] text-slate-accent/80 mt-1.5 font-mono leading-tight">
                            {stat.sub}
                          </div>
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
                        <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Language Focus
                      </h4>
                      {languageStats === null ? (
                        <div className="space-y-4">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="space-y-1.5 animate-pulse">
                              <div className="flex justify-between items-center text-xs">
                                <div className="h-3.5 w-20 bg-black/5 rounded" />
                                <div className="h-3.5 w-10 bg-black/5 rounded" />
                              </div>
                              <div className="h-2 w-full bg-black/5 rounded-full" />
                            </div>
                          ))}
                        </div>
                      ) : languageStats.length === 0 ? (
                        <div className="text-center py-8">
                          <p className="text-xs text-slate-accent font-mono">No repository language stats found.</p>
                          <a href="https://github.com/Bharath-Krishna-AB" target="_blank" rel="noopener noreferrer" className="text-xs text-clay-accent font-mono hover:underline mt-2 inline-block">
                            View Repositories on GitHub →
                          </a>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {languageStats.map((lang, idx) => (
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
                                  className="h-full rounded-full bg-secondary"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <p className="text-[10px] text-[#70706c]/70 font-mono mt-8 border-t border-black/[0.03] pt-4 select-none">
                      * Aggregated from repositories statistics and primary coding lines.
                    </p>
                  </div>

                  {/* Right Column: Elevator Pitch / Disciplines (5 cols) */}
                  <div className="md:col-span-5 bg-white border border-black/5 rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(18,18,18,0.01)] flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-[#121212] mb-6 flex items-center gap-2 select-none">
                        <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.475 3.475 0 011.89 1.89 3.475 3.475 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.475 3.475 0 01-1.89 1.89 3.475 3.475 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.475 3.475 0 01-1.89-1.89 3.475 3.475 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.475 3.475 0 011.89-1.89z" />
                        </svg>
                        Professional Competence
                      </h4>
                      <div className="space-y-4">
                        {disciplines.map((disc, idx) => (
                          <div key={idx} className="space-y-1.5">
                            <div className="flex justify-between items-center text-xs">
                              <span className="font-bold text-[#121212]">{disc.name}</span>
                              <span className="font-mono text-secondary font-bold">{disc.percentage}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-[#f3f2eb] rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${disc.percentage}%` }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.12 }}
                                className="h-full rounded-full bg-secondary"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-black/[0.03] space-y-2 select-none text-left">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span className="text-[10px] font-mono text-[#70706c] font-bold">Focus: Full-Stack Web Solutions</span>
                      </div>
                      <p className="text-[10px] text-[#70706c] leading-relaxed">
                        Engineering responsive user interfaces and robust backend architectures.
                      </p>
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
                      <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                      <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-[#121212]">
                        Recent Product Deliverables
                      </h4>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 bg-secondary-light text-secondary rounded border border-secondary/15 font-bold">
                      ✓ Continuous Integration passing
                    </span>
                  </div>

                  {commitFeed === null ? (
                    <div className="space-y-8 pl-6 sm:pl-8 border-l border-black/10 ml-2 py-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="relative group animate-pulse space-y-3">
                          <span className="absolute -left-[31px] sm:-left-[35px] top-1.5 w-2.5 h-2.5 rounded-full bg-black/10 border-[3px] border-white" />
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div className="flex items-center gap-2 flex-wrap">
                              <div className="h-4 w-12 bg-black/5 rounded" />
                              <div className="h-4 w-16 bg-black/5 rounded" />
                              <div className="h-4 w-12 bg-black/5 rounded" />
                              <div className="h-4 w-40 bg-black/5 rounded" />
                            </div>
                            <div className="h-3 w-16 bg-black/5 rounded" />
                          </div>
                          <div className="h-3.5 w-full bg-black/5 rounded" />
                        </div>
                      ))}
                    </div>
                  ) : commitFeed.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-xs text-[#70706c] font-mono mb-4">No recent commit logs found on your public profile.</p>
                      <a
                        href="https://github.com/Bharath-Krishna-AB"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-black/10 hover:bg-black/5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-colors inline-block"
                      >
                        Visit GitHub Profile →
                      </a>
                    </div>
                  ) : (
                    /* Timeline Feed Container */
                    <div className="relative border-l border-black/10 ml-2 pl-6 sm:pl-8 space-y-8 py-2">
                      {commitFeed.map((commit, idx) => (
                        <div key={idx} className="relative group">
                          {/* Timeline point */}
                          <span className="absolute -left-[31px] sm:-left-[35px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#f9f8f4] border-[3px] border-[#121212] group-hover:border-clay-accent transition-colors duration-300" />

                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            {/* Heading details */}
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-[9px] font-mono font-bold text-clay-accent px-1.5 py-0.5 bg-clay-light rounded border border-clay-accent/15 select-none">
                                {commit.project}
                              </span>
                              <span className={`text-[8px] font-mono font-bold uppercase px-2 py-0.5 rounded border select-none ${commit.category.color} ${commit.category.bg}`}>
                                {commit.category.label}
                              </span>
                              <span className="text-[10px] font-mono text-[#70706c] bg-[#f3f2eb] px-1.5 py-0.5 rounded border border-black/5 select-none font-bold">
                                {commit.hash}
                              </span>
                              <span className="text-xs font-bold text-[#121212] tracking-tight ml-1 font-claude">
                                {commit.message}
                              </span>
                            </div>
                            {/* Timestamp */}
                            <span className="text-[10px] font-mono text-[#70706c]/70 self-start sm:self-center shrink-0">
                              {commit.time}
                            </span>
                          </div>
                          <p className="text-xs text-[#70706c] mt-2 leading-relaxed max-w-2xl font-claude">
                            {commit.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
