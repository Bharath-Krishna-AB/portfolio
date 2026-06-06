"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import Preloader from "./components/Preloader";
import Hero from "./components/Hero";
import About from "./components/About";
import Activity from "./components/Activity";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isBrandHovered, setIsBrandHovered] = useState(false);
  const [isStatusHovered, setIsStatusHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setIsDarkMode(isDark);
    
    const handleThemeChange = () => {
      setIsDarkMode(localStorage.getItem("theme") === "dark");
    };
    window.addEventListener('theme-change', handleThemeChange);
    return () => window.removeEventListener('theme-change', handleThemeChange);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDarkMode;
    setIsDarkMode(nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", nextDark);
    window.dispatchEvent(new Event('theme-change'));
  };

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    if (!isLoaded) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Scroll progress handler
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = (window.scrollY / scrollHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      lenis.destroy();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoaded]);

  return (
    <>
      {/* Typing Preloader */}
      <Preloader onComplete={() => setIsLoaded(true)} />

      {isLoaded && (
        <div className="flex flex-col min-h-screen bg-background text-foreground font-claude selection:bg-clay-light selection:text-clay-accent transition-colors duration-500">
          {/* Top Thin Scroll Progress Bar */}
          <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-transparent">
            <div
              className="h-full bg-foreground/30 transition-all duration-75 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Absolute Header Navigation */}
          <header className="absolute top-0 left-0 right-0 z-20 py-6">
            <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
              {/* Brand Label (Morphing rolling ticker) */}
              <a
                href="#home"
                onMouseEnter={() => setIsBrandHovered(true)}
                onMouseLeave={() => setIsBrandHovered(false)}
                className="relative overflow-hidden text-[10px] sm:text-xs font-mono font-bold tracking-wider px-4 py-2 bg-surface border border-border hover:border-clay-accent/20 rounded-full text-foreground flex items-center justify-center min-w-[150px] h-8 transition-colors select-none"
              >
                <AnimatePresence mode="wait">
                  {!isBrandHovered ? (
                    <motion.span
                      key="brand"
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -8, opacity: 0 }}
                      transition={{ duration: 0.12 }}
                    >
                      @bharathkrishnaab
                    </motion.span>
                  ) : (
                    <motion.span
                      key="title"
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -8, opacity: 0 }}
                      transition={{ duration: 0.12 }}
                      className="text-clay-accent font-bold"
                    >
                      aevon co-founder
                    </motion.span>
                  )}
                </AnimatePresence>
              </a>

              {/* Status Indicator (Radar pulse badge with hover reveal text) */}
              <motion.div
                onMouseEnter={() => setIsStatusHovered(true)}
                onMouseLeave={() => setIsStatusHovered(false)}
                animate={{ width: isStatusHovered ? 230 : 120 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="flex items-center gap-2 px-3 py-1.5 bg-secondary-light border border-secondary/10 rounded-full cursor-help h-8 overflow-hidden select-none shrink-0 whitespace-nowrap"
              >
                {/* Radar Node pulse */}
                <div className="relative flex items-center justify-center w-2 h-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                </div>

                <AnimatePresence mode="wait">
                  {!isStatusHovered ? (
                    <motion.span
                      key="status-short"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 5 }}
                      transition={{ duration: 0.12 }}
                      className="text-[10px] font-mono font-bold text-secondary uppercase tracking-wider"
                    >
                      Open to work
                    </motion.span>
                  ) : (
                    <motion.span
                      key="status-long"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 5 }}
                      transition={{ duration: 0.12 }}
                      className="text-[10px] font-mono font-bold text-secondary uppercase tracking-wider"
                    >
                      Available for Q2 projects • IST
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="ml-2 w-8 h-8 rounded-full flex items-center justify-center bg-surface border border-border text-foreground hover:bg-foreground/5 hover:scale-105 active:scale-95 transition-all"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isDarkMode ? (
                    <motion.div
                      key="moon"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={14} strokeWidth={2.5} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={14} strokeWidth={2.5} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </header>

          {/* Homepage Sections */}
          <main className="flex-1 w-full pb-16">
            <Hero introComplete={isLoaded} />
            <About />
            <Activity />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Achievements />
            <Services />
            <FAQ />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
}
