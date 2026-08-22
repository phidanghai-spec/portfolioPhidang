"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useSpring } from "framer-motion";

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: { x: number; y: number };
  className?: string;
}

/**
 * Magnet — mouse-tracking magnetic pull effect.
 * Wraps children and pulls them toward the cursor when hovered within padding area.
 */
export default function Magnet({
  children,
  padding = 80,
  strength = { x: 0.35, y: 0.35 },
  className = "",
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      x.set(deltaX * strength.x);
      y.set(deltaY * strength.y);
    },
    [x, y, strength]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block ${className}`}
      style={{ padding }}
    >
      <motion.div
        style={{ x, y }}
        animate={{ scale: isHovered ? 1.04 : 1 }}
        transition={{ scale: { type: "spring", stiffness: 300, damping: 20 } }}
      >
        {children}
      </motion.div>
    </div>
  );
}
