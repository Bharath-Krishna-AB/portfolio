"use client";

import { motion } from "framer-motion";
import { services } from "../data/portfolio";

export default function Services() {
  const icons = [
    // Full-Stack
    <svg key="0" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>,
    // Frontend
    <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>,
    // AI & RAG
    <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>,
    // Prototyping
    <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ];

  return (
    <section id="services" className="py-24 bg-[#FAFAFC] border-y border-black/[0.02] relative overflow-hidden">
      {/* Background Decorative glow blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-clay-light/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sage-light/20 rounded-full blur-[100px] pointer-events-none translate-y-1/4 -translate-x-1/4" />

      <div className="w-full max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Label */}
          <div>
            <span className="section-label">Services</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#121212] tracking-tight leading-[1.1] mt-4 font-general text-left">
              Modern craftsmanship. <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 font-instrument font-normal text-clay-accent italic tracking-normal">
                  The dev way.
                </span>
                <span className="absolute bottom-1 left-0 w-full h-3.5 bg-clay-light -z-10" />
              </span>
            </h2>
          </div>

          {/* Side-by-Side Comparison Box (ShopDropApp inspired chaos-to-clarity layout) */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-12">
            {/* The Fragile Way */}
            <div className="bg-[#121212] rounded-[2rem] border border-white/5 p-6 md:p-8 relative overflow-hidden h-[380px] flex flex-col justify-end text-left select-none">
              <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#121212] to-transparent z-10" />
              <div className="absolute top-6 left-6 z-20 bg-white/5 border border-white/10 px-3 py-1 flex items-center gap-1.5 rounded-full shadow-sm">
                <svg className="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>
                <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">The Fragile Way</span>
              </div>
              
              {/* Vertical Stack representing spaghetti chats and errors */}
              <div className="space-y-3 z-10 opacity-70 scale-95 origin-bottom">
                <div className="bg-white/5 p-3 rounded-xl rounded-bl-none max-w-[85%] border border-white/5">
                  <p className="text-[11px] text-white/90 font-mono">"Wait, why is the page crashing on mobile?"</p>
                </div>
                <div className="bg-white/5 p-3 rounded-xl rounded-br-none max-w-[85%] ml-auto border border-white/5 text-right">
                  <p className="text-[11px] text-white/70 font-mono">"I don't know, it works locally. Let me re-upload files via FTP..."</p>
                </div>
                <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-xl max-w-full">
                  <p className="text-[10px] text-red-400 font-mono">Uncaught TypeError: Cannot read properties of undefined (reading 'map') at main.js:42</p>
                </div>
                <div className="bg-white/5 p-3 rounded-xl rounded-bl-none max-w-[85%] border border-white/5">
                  <p className="text-[11px] text-white/90 font-mono">"Staging server went offline again. Can we rollback?"</p>
                </div>
              </div>
            </div>

            {/* The Bharath Way */}
            <div className="bg-[#0D0D12] rounded-[2rem] border border-white/5 p-6 md:p-8 relative overflow-hidden h-[380px] flex flex-col justify-end text-left select-none">
              <div className="absolute top-6 left-6 z-20 bg-white/5 border border-white/10 px-3 py-1 flex items-center gap-1.5 rounded-full">
                <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">The Bharath Way</span>
              </div>
              <div className="absolute top-[-30px] right-[-30px] w-[140px] h-[140px] bg-clay-accent rounded-full blur-[40px] opacity-25" />
              
              {/* Stack representing build systems and clean structure */}
              <div className="space-y-3 z-10 scale-95 origin-bottom">
                {/* Code Block snippet */}
                <div className="bg-white/5 p-3.5 rounded-xl border border-white/5 font-mono text-[9px] text-white/80 space-y-1">
                  <div className="text-white/40">{"// app/components/DynamicFeature.tsx"}</div>
                  <div>{"export default function Feature() {"}</div>
                  <div className="pl-3">{"const { data, loading } = useSWR('/api/data');"}</div>
                  <div className="pl-3">{"return <motion.div animate={{ opacity: 1 }} />;"}</div>
                  <div>{"}"}</div>
                </div>

                {/* Compilation bar */}
                <div className="bg-[#1a1a24] p-3 rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-white font-mono">Next.js Turbopack</span>
                  </div>
                  <span className="text-[9px] text-green-400 font-mono">✓ Build Success</span>
                </div>

                {/* Automated check */}
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-white/70 font-mono">CI/CD Deploy Action</span>
                  <span className="text-[10px] text-green-400 font-mono font-bold">14/14 Tests Passed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid (Everything you need to build) */}
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.995 }}
                className="soft-card group cursor-pointer p-6 bg-white border border-black/[0.04] shadow-[0_4px_20px_rgba(18,18,18,0.01)] hover:border-black/10 flex flex-col justify-between h-[180px] text-left"
              >
                <div className="flex items-start gap-4">
                  {/* Icon wrapper */}
                  <div className="p-3 rounded-2xl bg-[#f3f2eb] text-[#70706c] group-hover:bg-[#121212] group-hover:text-white transition-all duration-300 shrink-0">
                    {icons[index]}
                  </div>

                  {/* Text Details */}
                  <div className="min-w-0">
                    <h3 className="font-bold text-base text-[#121212] group-hover:text-clay-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#70706c] mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Arrow right on hover at bottom */}
                <div className="flex justify-end opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                  <svg
                    className="w-5 h-5 text-[#70706c]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
