"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Code2, Globe } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

const infoCards = [
  {
    icon: GraduationCap,
    title: "BS Software Engineering",
    subtitle: "NUML, Islamabad · 2026",
  },
  {
    icon: Briefcase,
    title: "Full Stack Intern",
    subtitle: "Synctom · 3 Months · Onsite",
  },
  {
    icon: Code2,
    title: "Core Stack",
    subtitle: "Next.js · PostgreSQL · Prisma",
  },
  {
    icon: Globe,
    title: "Languages",
    subtitle: "English · Urdu",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          badge="About Me"
          title="Passionate Full Stack Developer"
          subtitle="Building modern web applications with a focus on clean architecture and user experience."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* ── Left column: Bio ── */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m Ashan Mir, a Software Engineering student at{" "}
              <span className="font-medium text-foreground">
                NUML, Islamabad
              </span>
              , graduating in 2026. My journey in software development has been
              driven by a deep curiosity for how modern web applications are
              built and scaled — from frontend interfaces to robust backend
              systems.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I completed a{" "}
              <span className="font-medium text-foreground">
                3-month onsite internship at Synctom
              </span>
              , where I worked hands-on with the full stack: building responsive
              UIs with Next.js and TailwindCSS, designing REST APIs with
              Node.js and Express, implementing authentication with JWT and
              NextAuth, and managing databases using Prisma ORM with PostgreSQL.
              That experience cemented my passion for production-grade
              development.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m currently focused on expanding my expertise and am{" "}
              <span className="font-medium text-foreground">
                actively exploring Master&apos;s programs and opportunities in
              </span>{" "}
              Germany. I believe in continuous learning, clean code, and building
              software that makes a real impact. My goal is to grow as an
              engineer in an international environment where I can contribute
              meaningfully and learn from world-class teams.
            </p>
          </motion.div>

          {/* ── Right column: Info grid ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {infoCards.map((card) => (
                <motion.div
                  key={card.title}
                  variants={fadeInUp}
                  className="group rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30"
                >
                  <card.icon className="mb-3 h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-semibold">{card.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {card.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Germany callout */}
            <motion.div variants={fadeInUp}>
              <Badge
                variant="outline"
                className="w-full justify-center border-amber-500/30 bg-amber-500/5 px-4 py-3 text-sm font-semibold text-amber-800 whitespace-normal text-center flex h-auto"
              >
                🇩🇪 Interested in Master&apos;s programs &amp; opportunities in Germany
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
