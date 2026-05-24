"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedCard({ children, className }: AnimatedCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -2,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      className={cn(
        "group rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-xl",
        "transition-colors duration-300 hover:border-primary/30",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
