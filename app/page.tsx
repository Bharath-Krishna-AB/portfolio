"use client";

import { useState, useEffect } from "react";
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
        <div className="flex flex-col min-h-screen bg-[#f9f8f4] text-[#121212] font-general selection:bg-clay-light selection:text-clay-accent">
          {/* Top Thin Scroll Progress Bar */}
          <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-transparent">
            <div
              className="h-full bg-[#121212]/30 transition-all duration-75 ease-out"
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
                className="relative overflow-hidden text-[10px] sm:text-xs font-mono font-bold tracking-wider px-4 py-2 bg-[#f3f2eb] border border-black/5 hover:border-clay-accent/20 rounded-full text-[#121212] flex items-center justify-center min-w-[150px] h-8 transition-colors select-none"
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
