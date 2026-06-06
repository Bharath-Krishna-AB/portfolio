"use client";

import { motion } from "framer-motion";
import MagneticButton from "./ui/MagneticButton";

interface HeroProps {
  introComplete?: boolean;
}

export default function Hero({ introComplete = true }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-background pt-28 pb-16 transition-colors duration-500"
    >
      {/* Background Decorative Glow Blobs */}
      <div className="absolute top-0 left-0 right-0 h-[600px] overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[75%] bg-clay-accent opacity-[0.06] blur-[120px] rounded-full mix-blend-multiply" />
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[70%] bg-secondary opacity-[0.06] blur-[120px] rounded-full mix-blend-multiply" />
      </div>

      {/* Editorial Grid Lines Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(18, 18, 18, 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="w-full max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Location Pin Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: introComplete ? 1 : 0, y: introComplete ? 0 : 10 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 text-sm text-muted mb-6 transition-colors duration-500"
        >
          <svg
            className="w-3.5 h-3.5 text-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="font-mono text-xs uppercase tracking-wider">Kerala, India</span>
        </motion.div>

        {/* Large Typographic Statement */}
        <div className="flex flex-col items-center text-center mb-12 w-full max-w-5xl px-4 mx-auto mt-8 sm:mt-12">
          <h1 className="text-[11vw] sm:text-[7.5vw] md:text-7xl lg:text-[6rem] font-bold leading-[1.05] tracking-[-0.03em] font-claude">
            {/* Line 1 */}
            <span className="block overflow-hidden relative">
              <motion.span
                initial={{ y: "110%", rotateZ: 8, skewY: 5 }}
                animate={introComplete ? { y: "0%", rotateZ: 0, skewY: 0 } : { y: "110%", rotateZ: 8, skewY: 5 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="block text-foreground origin-top-left transition-colors duration-500"
              >
                Hey, I'm <span className="font-instrument font-normal tracking-normal text-clay-accent">Bharath</span>
              </motion.span>
            </span>
            
            {/* Line 2 */}
            <span className="block overflow-hidden relative pt-1">
              <motion.span
                initial={{ y: "110%", rotateZ: 8, skewY: 5 }}
                animate={introComplete ? { y: "0%", rotateZ: 0, skewY: 0 } : { y: "110%", rotateZ: 8, skewY: 5 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="block text-foreground origin-top-left transition-colors duration-500"
              >
                I build <span className="font-instrument font-normal italic tracking-[-0.02em] text-foreground">web products</span>
              </motion.span>
            </span>

            {/* Line 3 */}
            <span className="block overflow-hidden relative pt-1">
              <motion.span
                initial={{ y: "110%", rotateZ: 8, skewY: 5 }}
                animate={introComplete ? { y: "0%", rotateZ: 0, skewY: 0 } : { y: "110%", rotateZ: 8, skewY: 5 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="block text-foreground origin-top-left transition-colors duration-500"
              >
                that actually <span className="font-instrument font-normal italic tracking-[-0.02em] text-clay-accent">ship</span>
              </motion.span>
            </span>
          </h1>
        </div>

        {/* Hero Subtext Description */}
        <div className="overflow-hidden mb-10">
          <motion.p
            initial={{ y: "100%", opacity: 0, skewY: 2 }}
            animate={introComplete ? { y: "0%", opacity: 1, skewY: 0 } : { y: "100%", opacity: 0, skewY: 2 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl text-center transition-colors duration-500"
          >
            Full-stack engineer crafting modern applications with MERN, Next.js, and AI integrations.
          </motion.p>
        </div>

        {/* Action CTAs (Pill layout with custom nested circles) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: introComplete ? 1 : 0, y: introComplete ? 0 : 30 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          {/* Primary CTA */}
          <MagneticButton strength={20} className="w-full sm:w-auto">
            <a
              href="mailto:bharathkrishna.ab.dev@gmail.com"
              className="group relative flex items-center justify-between sm:justify-start gap-4 px-6 py-3 w-full sm:w-auto bg-foreground text-foreground-inverse rounded-full font-semibold text-sm sm:text-base hover:scale-[1.02] active:scale-[0.98] hover:opacity-85 transition-all duration-300 shadow-xl shadow-black/10 cursor-pointer"
            >
              <span>Get in Touch</span>
              <div className="w-7 h-7 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 relative overflow-hidden">
                {/* Active Arrow (slides out top-right on hover) */}
                <svg
                  className="w-3.5 h-3.5 text-white absolute transition-all duration-300 ease-in-out -rotate-45 group-hover:translate-x-5 group-hover:-translate-y-5 group-hover:opacity-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
                {/* Incoming Arrow (slides in from bottom-left on hover) */}
                <svg
                  className="w-3.5 h-3.5 text-white absolute transition-all duration-300 ease-in-out -rotate-45 -translate-x-5 translate-y-5 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          </MagneticButton>

          {/* Secondary CTA */}
          <MagneticButton strength={15} className="w-full sm:w-auto">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative flex items-center justify-between sm:justify-center gap-4 px-6 py-3 w-full sm:w-auto bg-background text-foreground rounded-full font-semibold text-sm sm:text-base border border-border hover:bg-foreground/5 hover:border-foreground/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm cursor-pointer"
            >
              <span>View Work</span>
              <div className="w-7 h-7 rounded-full bg-secondary text-white flex items-center justify-center transition-colors shrink-0 relative overflow-hidden">
                {/* Active Arrow (slides out bottom on hover) */}
                <svg
                  className="w-3.5 h-3.5 absolute transition-all duration-300 ease-in-out group-hover:translate-y-5 group-hover:opacity-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
                {/* Incoming Arrow (slides in from top on hover) */}
                <svg
                  className="w-3.5 h-3.5 absolute transition-all duration-300 ease-in-out -translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
