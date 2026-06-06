"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import TextReveal from "./ui/TextReveal";

export default function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage
  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);

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

  return (
    <footer id="contact" className="relative bg-background py-16 pb-32 transition-colors duration-500">
      {/* Decorative Glow */}
      <div className="absolute bottom-[-10%] left-[20%] w-[35rem] h-[35rem] bg-clay-light/20 rounded-full glow-blur pointer-events-none" />

      <div className="w-full max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-10"
        >
          {/* Main Footer Header */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-claude text-foreground leading-snug flex-wrap sm:whitespace-nowrap flex items-baseline justify-center transition-colors duration-500">
              <TextReveal text="Let's build something " />
              <TextReveal text="meaningful." className="font-instrument font-normal text-secondary italic tracking-normal ml-1" delay={0.1} />
            </h2>
            <p className="text-sm text-muted max-w-sm mx-auto leading-relaxed transition-colors duration-500">
              Have a project in mind or just want to chat? I'm always open to new opportunities.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Direct Email Primary Button */}
            <a
              href="mailto:bharathkrishna.ab.dev@gmail.com"
              className="group relative flex items-center justify-between gap-4 px-6 py-3 w-full sm:w-auto bg-foreground text-foreground-inverse rounded-full font-semibold text-sm sm:text-base hover:scale-[1.02] active:scale-[0.98] hover:opacity-85 transition-all duration-300 shadow-xl shadow-black/5 cursor-pointer"
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

            {/* Direct Call Secondary Button */}
            <a
              href="tel:+916235311216"
              className="group flex items-center justify-between gap-3 px-6 py-3 w-full sm:w-auto bg-background text-foreground rounded-full font-semibold text-sm sm:text-base border border-border hover:bg-foreground/5 hover:border-foreground/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <div className="w-7 h-7 rounded-full bg-surface flex items-center justify-center group-hover:translate-y-0.5 transition-transform shrink-0 border border-border">
                <svg
                  className="w-3.5 h-3.5 text-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <span>Call Me</span>
            </a>
          </div>

          {/* Centered Social Profile Grid */}
          <div className="flex items-center justify-center gap-3 pt-4">
            {/* GitHub */}
            <a
              href="https://github.com/Bharath-Krishna-AB"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/bharathkrishnaab/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/Bharath__AB"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Email Icon */}
            <a
              href="mailto:bharathkrishna.ab.dev@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Bottom Glass Navigation Capsule */}
      <nav className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-auto max-w-md sm:max-w-none">
        <div className="liquid-glass flex items-center justify-start sm:justify-center gap-0.5 sm:gap-1 px-2.5 py-2 rounded-full overflow-x-auto no-scrollbar">
          {/* Navigation Links */}
          {[
            { label: "Home", href: "#home" },
            { label: "Work", href: "#work" },
            { label: "Services", href: "#services" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center justify-center px-3 sm:px-4 py-2 text-xs sm:text-sm text-foreground/75 hover:text-foreground transition-colors duration-200 rounded-full hover:bg-foreground/5"
            >
              {link.label}
            </a>
          ))}

          {/* Direct Phone button in nav */}
          <a
            href="tel:6235311216"
            className="flex items-center justify-center ml-1 px-4 py-2 text-xs sm:text-sm bg-foreground text-foreground-inverse rounded-full hover:opacity-80 transition-opacity duration-200 cursor-pointer"
          >
            Call me
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 ml-1 rounded-full hover:bg-foreground/5 text-foreground transition-colors duration-200 cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              // Sun Icon SVG
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              // Moon Icon SVG
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </footer>
  );
}
