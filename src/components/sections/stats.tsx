"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { STATS } from "@/lib/constants";

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic for natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration]);

  useEffect(() => {
    if (isInView) {
      animate();
    }
  }, [isInView, animate]);

  return { count, ref };
}

export function Stats() {
  return (
    <section className="border-y border-border/50 py-16">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4"
      >
        {STATS.map((stat) => (
          <StatItem
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </motion.div>
    </section>
  );
}

interface StatItemProps {
  value: string;
  suffix?: string;
  label: string;
}

function StatItem({ value, suffix, label }: StatItemProps) {
  const numericValue = parseInt(value, 10) || 0;
  const { count, ref } = useCountUp(numericValue, 2000);

  return (
    <motion.div variants={fadeInUp} className="text-center">
      <span
        ref={ref}
        className="gradient-text text-4xl font-bold md:text-5xl"
      >
        {count}
        {suffix}
      </span>
      <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
    </motion.div>
  );
}
