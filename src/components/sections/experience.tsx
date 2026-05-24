"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { staggerContainer, fadeInUp, staggerFast } from "@/lib/animations";
import { EXPERIENCE } from "@/lib/constants";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          badge="Experience"
          title="Professional Experience"
          subtitle="Where I've applied my skills in real-world projects."
        />

        {/* ── Timeline ── */}
        <div ref={containerRef} className="relative">
          {/* Timeline line (background) */}
          <div className="absolute left-4 top-0 h-full w-px bg-border/30 md:left-8" />

          {/* Timeline line (animated foreground) */}
          <motion.div
            className="absolute left-4 top-0 w-px bg-gradient-to-b from-primary via-primary to-primary/50 md:left-8"
            style={{ height: lineHeight }}
          />

          {/* Experience entries */}
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative pb-12 pl-12 md:pl-20"
            >
              {/* Timeline node */}
              <div className="absolute left-2 top-1 flex items-center justify-center md:left-6">
                <span className="relative flex h-4 w-4">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-30" />
                  <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-background bg-primary shadow-[0_0_12px_rgba(99,102,241,0.5)]" />
                </span>
              </div>

              {/* Card */}
              <div className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm md:p-8">
                {/* Header */}
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Building2 className="h-3.5 w-3.5" />
                        {exp.company}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-primary/30 bg-primary/5 text-primary"
                  >
                    {exp.type}
                  </Badge>
                </div>

                {/* Responsibilities */}
                <motion.ul
                  variants={staggerFast}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mb-6 space-y-2.5"
                >
                  {exp.responsibilities.map((item, i) => (
                    <motion.li
                      key={i}
                      variants={fadeInUp}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-border/50 bg-primary/5 text-xs text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
