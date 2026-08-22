"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  /** Stagger delay between each character in seconds */
  stagger?: number;
  /** Base delay before animation starts */
  delay?: number;
}

/**
 * AnimatedText — character-by-character scroll-triggered reveal.
 * Each character fades+slides in sequentially when the element enters view.
 */
export default function AnimatedText({
  text,
  className = "",
  stagger = 0.012,
  delay = 0,
}: AnimatedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Split into chars — preserve spaces as non-breaking
  const chars = text.split("");

  return (
    <span ref={ref} className={`inline ${className}`} aria-label={text}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
          animate={
            inView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 18, filter: "blur(4px)" }
          }
          transition={{
            duration: 0.4,
            delay: delay + i * stagger,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
