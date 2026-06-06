"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  wordMode?: boolean; // if false, splits by characters
  duration?: number;
}

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  wordMode = true,
  duration = 1.2,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const tokens = wordMode ? text.split(" ") : text.split("");

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {tokens.map((token, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden relative"
          style={{ marginRight: wordMode ? "0.25em" : "0" }}
        >
          <motion.span
            initial={{ y: "110%", rotateZ: 8, skewY: 5 }}
            animate={isInView ? { y: "0%", rotateZ: 0, skewY: 0 } : { y: "110%", rotateZ: 8, skewY: 5 }}
            transition={{
              duration: duration,
              ease: [0.16, 1, 0.3, 1], // expo out ease
              delay: delay + index * (wordMode ? 0.04 : 0.015),
            }}
            className="inline-block origin-top-left"
          >
            {token}
            {/* If it's a character mode and it's a space, render a hard space to preserve gaps */}
            {!wordMode && token === " " && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
