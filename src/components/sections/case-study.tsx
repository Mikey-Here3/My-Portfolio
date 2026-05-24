"use client";

import { motion } from "framer-motion";
import {
  Target,
  Layers,
  AlertTriangle,
  Shield,
  Rocket,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { CASE_STUDY } from "@/lib/constants";

interface CaseSectionProps {
  icon: LucideIcon;
  title: string;
  content: string;
  points?: string[];
}

function CaseSection({ icon: Icon, title, content, points }: CaseSectionProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative rounded-2xl border border-border/50 bg-card/25 p-6 backdrop-blur-sm md:p-8"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
        <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary shadow-inner">
          <Icon className="h-6 w-6" />
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground/90 md:text-base">
            {content}
          </p>
          {points && points.length > 0 && (
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function CaseStudy() {
  return (
    <section id="case-study" className="relative py-24 bg-muted/5 border-t border-border/30">
      {/* Subtle top background decorative glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 bg-gradient-to-b from-primary/5 to-transparent blur-3xl" />

      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          badge="Case Study"
          title="StudyHouse — Deep Dive"
          subtitle="An engineering whitepaper on how I built NUML's largest digital academic archive."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {/* Section 1: The Problem */}
          <CaseSection
            icon={Target}
            title="1. The Problem"
            content={CASE_STUDY.problem}
          />

          {/* Section 2: Architecture */}
          <CaseSection
            icon={Layers}
            title="2. System Architecture"
            content={CASE_STUDY.architecture}
            points={CASE_STUDY.stack as unknown as string[]}
          />

          {/* Section 3: Challenges */}
          <CaseSection
            icon={AlertTriangle}
            title="3. Engineering Challenges"
            content={CASE_STUDY.challenges}
          />

          {/* Section 4: Auth Layer */}
          <CaseSection
            icon={Shield}
            title="4. Authentication & Security"
            content={CASE_STUDY.authentication}
          />

          {/* Section 5: Deployment */}
          <CaseSection
            icon={Rocket}
            title="5. DevOps & CI/CD Pipeline"
            content={CASE_STUDY.deployment}
          />

          {/* Section 6: Results */}
          <CaseSection
            icon={TrendingUp}
            title="6. The Results"
            content={CASE_STUDY.results}
          />
        </motion.div>
      </div>
    </section>
  );
}
