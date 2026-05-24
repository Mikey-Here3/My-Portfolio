"use client";

import { type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: Variants;
  className?: string;
  delay?: number;
}

export function ScrollReveal({
  children,
  variant = fadeInUp,
  className,
  delay,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variant}
      transition={delay ? { delay } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
