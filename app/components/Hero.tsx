"use client";

import { motion } from "framer-motion";

interface HeroProps {
  introComplete?: boolean;
}

export default function Hero({ introComplete = true }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-[#f9f8f4] pt-28 pb-16"
    >
      {/* Background Decorative Glow Blobs */}
      <div className="absolute top-0 left-0 right-0 h-[600px] overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[75%] bg-clay-accent opacity-[0.06] blur-[120px] rounded-full mix-blend-multiply" />
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[70%] bg-sage-accent opacity-[0.06] blur-[120px] rounded-full mix-blend-multiply" />
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
          className="flex items-center gap-2 text-sm text-[#70706c] mb-6"
        >
          <svg
            className="w-3.5 h-3.5 text-[#70706c]"
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

        {/* Large Centered Typographic Statement */}
        <h1 className="text-[10vw] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-[#121212] font-general mb-8 flex flex-col items-center select-none">
          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: introComplete ? 1 : 0, y: introComplete ? 0 : 25 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="block"
          >
            Hey, I'm{" "}
            <span className="relative inline-block px-1">
              <span className="relative z-10 font-instrument font-normal text-clay-accent italic tracking-normal">
                Bharath
              </span>
            </span>
          </motion.span>
          
          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: introComplete ? 1 : 0, y: introComplete ? 0 : 25 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[#70706c] block mt-1.5"
          >
            I build{" "}
            <span className="relative inline-block px-1">
              <span className="relative z-10 font-instrument font-normal italic text-[#121212] tracking-normal">
                scalable
              </span>
            </span>{" "}
            web & SaaS products
          </motion.span>
        </h1>

        {/* Hero Subtext Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: introComplete ? 1 : 0, y: introComplete ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-base sm:text-lg text-[#70706c] leading-relaxed max-w-2xl text-center mb-10"
        >
          Full-stack engineer crafting modern applications with MERN, Next.js, and AI integrations.
        </motion.p>

        {/* Action CTAs (Pill layout with custom nested circles) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: introComplete ? 1 : 0, y: introComplete ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <a
            href="mailto:bharathkrishna.ab.dev@gmail.com"
            className="group relative flex items-center justify-between sm:justify-start gap-4 px-6 py-3 w-full sm:w-auto bg-[#121212] text-white rounded-full font-semibold text-sm sm:text-base hover:scale-105 hover:bg-[#222] transition-all duration-300 shadow-xl shadow-black/10 cursor-pointer"
          >
            <span>Get in Touch</span>
            <div className="w-7 h-7 rounded-full bg-clay-accent flex items-center justify-center shrink-0 relative overflow-hidden">
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

          {/* Secondary CTA */}
          <a
            href="#work"
            className="group flex items-center justify-between sm:justify-start gap-3 px-6 py-3 w-full sm:w-auto bg-white text-[#121212] rounded-full font-semibold text-sm sm:text-base border border-black/10 hover:bg-gray-50 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center group-hover:translate-y-0.5 transition-transform shrink-0">
              <svg
                className="w-3.5 h-3.5 text-[#121212]"
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
            <span>View Work</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
