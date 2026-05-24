"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
}

export function SectionHeader({ title, subtitle, badge }: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      className="mx-auto mb-16 max-w-2xl text-center"
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
          {badge}
        </span>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
        {subtitle}
      </p>
    </motion.div>
  );
}
