"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isDone, setIsDone] = useState(false);
  const fullText = "Hi, I'm Bharath";

  useEffect(() => {
    // Prevent scrolling while preloading
    document.body.style.overflow = "hidden";

    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        
        // Wait a bit, hide cursor, and trigger exit
        setTimeout(() => {
          setShowCursor(false);
          setIsDone(true);
          
          // Complete preloader after fade out transition
          setTimeout(() => {
            document.body.style.overflow = "";
            onComplete();
          }, 600);
        }, 500);
      }
    }, 80);

    return () => {
      clearInterval(typingInterval);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#f9f8f4] flex items-center justify-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-general tracking-tight text-[#121212] select-none font-medium">
            <span>{text}</span>
            {showCursor && (
              <span className="animate-pulse text-[#70706c] ml-0.5 font-light">|</span>
            )}
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
