"use client";

import { motion } from "framer-motion";
import { GraduationCap, Folder, Briefcase, Code, Rocket } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedCard } from "@/components/shared/animated-card";
import { fadeInUp } from "@/lib/animations";
import { EDUCATION } from "@/lib/constants";

export function Education() {
  const highlightIcons = [Folder, Briefcase, Code, Rocket];

  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          badge="Education"
          title="Academic Background"
          subtitle="My academic foundation in software engineering and professional highlights."
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-2xl"
        >
          <AnimatedCard className="relative overflow-hidden border-border/50 bg-card/30 hover:border-primary/30 transition-all p-8 md:p-10 rounded-2xl backdrop-blur-md">
            {/* Top decorative glow */}
            <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/5 blur-2xl" />

            <div className="flex flex-col items-center text-center md:items-start md:text-left gap-6">
              {/* Icon */}
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 text-primary shadow-inner">
                <GraduationCap className="h-8 w-8" />
              </div>

              {/* Title Info */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight text-foreground">
                  {EDUCATION.degree}
                </h3>
                <h4 className="text-lg font-semibold text-foreground/80">
                  {EDUCATION.university}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {EDUCATION.location} &middot; Class of {EDUCATION.year.split(" – ").pop()}
                </p>
              </div>
            </div>

            <Separator className="my-8 bg-border/50" />

            {/* Highlights Grid */}
            <div className="space-y-6">
              <h5 className="text-xs font-semibold text-foreground tracking-wider uppercase text-center md:text-left">
                Academic &amp; Practical Highlights
              </h5>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {EDUCATION.highlights.map((highlight, index) => {
                  const Icon = highlightIcons[index % highlightIcons.length];
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-lg border border-border/30 bg-card/10 p-4 transition-colors hover:bg-card/25"
                    >
                      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground/90 leading-relaxed font-medium">
                        {highlight}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedCard>
        </motion.div>
      </div>
    </section>
  );
}
