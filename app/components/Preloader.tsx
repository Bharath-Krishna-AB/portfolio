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
          initial={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-colors duration-500"
        >
          <motion.h1 
            exit={{ scale: 0.8, opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-claude tracking-tight text-foreground select-none font-medium transition-colors duration-500"
          >
            <span>{text}</span>
            {showCursor && (
              <span className="animate-pulse text-muted ml-0.5 font-light">|</span>
            )}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
