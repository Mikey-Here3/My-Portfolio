"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, AlertCircle, ArrowRight } from "lucide-react";
import { Github } from "@/components/shared/brand-icons";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedCard } from "@/components/shared/animated-card";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { PROJECTS } from "@/lib/constants";

export function Projects() {
  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const otherProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          badge="Projects"
          title="Featured Work"
          subtitle="Real-world applications built with production-grade engineering."
        />

        {/* ── Featured Project (StudyHouse) ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-md">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              {/* Image side - Browser Mockup */}
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-6 xl:col-span-7 bg-muted/10 border-b lg:border-b-0 lg:border-r border-border/40">
                <div className="relative w-full overflow-hidden rounded-xl border border-border bg-card shadow-xl transition-all duration-300 hover:shadow-primary/5 hover:border-primary/20">
                  {/* Browser Header */}
                  <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                    </div>
                    {/* URL Bar */}
                    <div className="flex h-5 w-3/5 max-w-[240px] items-center justify-center rounded bg-background px-3 text-[10px] text-muted-foreground/80 font-mono border border-border/50 truncate">
                      studyhouse.online/browse
                    </div>
                    <div className="w-8" /> {/* Spacer */}
                  </div>
                  {/* Browser Content */}
                  <div className="relative aspect-[1024/484] w-full overflow-hidden bg-background">
                    <Image
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="relative z-10 object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                      priority
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className="flex flex-col justify-between p-6 lg:col-span-6 xl:col-span-5 md:p-8">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight md:text-3xl text-foreground">
                    {featuredProject.title}
                  </h3>
                  <p className="mt-2 text-sm italic text-muted-foreground">
                    &ldquo;{featuredProject.problem}&rdquo;
                  </p>
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Key Features */}
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-3">
                      Key Highlights
                    </h4>
                    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {featuredProject.features.slice(0, 4).map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges Box */}
                  {featuredProject.challenges && (
                    <div className="mt-6 rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
                      <div className="flex gap-2">
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                        <div>
                          <h5 className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                            Engineering Challenges Solved
                          </h5>
                          <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                            {featuredProject.challenges}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {featuredProject.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-border/50 bg-primary/5 text-xs text-muted-foreground font-mono"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {featuredProject.githubUrl && (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "gap-2"
                      )}
                    >
                      <Github className="h-4 w-4" />
                      Code Base
                    </a>
                  )}
                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "gap-2"
                      )}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Other Projects Grid ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {otherProjects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <AnimatedCard className="flex h-full flex-col p-0 overflow-hidden bg-card/20 border-border/40 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all">
                {/* Image side - Browser Mockup */}
                <div className="relative w-full overflow-hidden border-b border-border/40 bg-muted/10 p-4">
                  <div className="relative w-full overflow-hidden rounded-lg border border-border bg-background shadow-md">
                    {/* Browser Header */}
                    <div className="flex items-center justify-between border-b border-border bg-muted/40 px-3 py-1.5">
                      <div className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-400/60" />
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/60" />
                        <span className="h-1.5 w-1.5 rounded-full bg-green-400/60" />
                      </div>
                      {/* URL Bar */}
                      <div className="flex h-4 w-1/2 max-w-[120px] items-center justify-center rounded bg-background px-2 text-[8px] text-muted-foreground/60 font-mono border border-border/30 truncate">
                        {project.id === "stockpilot" ? "stockpilot.app" : project.id === "solevault" ? "solevault.shop" : "luxe.store"}
                      </div>
                      <div className="w-6" /> {/* Spacer */}
                    </div>
                    {/* Browser Content */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-background">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 hover:scale-105"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-grow flex-col justify-between p-6">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs italic text-muted-foreground">
                      &ldquo;{project.problem}&rdquo;
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground/80 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features list */}
                    <div className="mt-4">
                      <ul className="space-y-1.5">
                        {project.features.slice(0, 3).map((feat) => (
                          <li key={feat} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer tags and links */}
                  <div className="mt-6">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-border/30 bg-primary/5 text-[10px] text-muted-foreground/80 font-mono py-0"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github className="h-3.5 w-3.5" />
                          Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline transition-colors"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
