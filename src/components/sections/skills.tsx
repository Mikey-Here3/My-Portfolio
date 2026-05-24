"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SKILL_CATEGORIES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  monitor: Monitor,
  server: Server,
  database: Database,
  wrench: Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          badge="Skills"
          title="Technologies & Tools"
          subtitle="The technologies I work with to bring ideas to life."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {SKILL_CATEGORIES.map((category) => {
            const Icon = iconMap[category.icon] ?? Monitor;

            return (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                className="group rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 inline-flex rounded-lg border border-border/50 bg-primary/5 p-2.5">
                  <Icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>

                <h3 className="mb-4 text-lg font-semibold">{category.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary transition-colors duration-200 hover:bg-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
