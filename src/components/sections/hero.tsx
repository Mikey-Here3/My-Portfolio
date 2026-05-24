"use client";

import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Mail, CheckCircle2 } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const achievements = [
  "3 Month Full Stack Internship",
  "10+ Projects",
  "Production Deployments",
  "Open To Opportunities",
];

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* ── Animated gradient mesh background ── */}
      <motion.div
        className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/10 blur-3xl"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-40 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-indigo-500/15 via-blue-500/10 to-cyan-500/10 blur-3xl"
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 60, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/10 to-indigo-500/10 blur-3xl"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* ── Dot grid pattern overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* ── Content ── */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        {/* Open to Opportunities Badge */}
        <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
          <Badge
            variant="outline"
            className="flex items-center gap-2 border-green-500/30 bg-green-500/5 px-4 py-1.5 text-xs font-semibold text-green-700"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Open to Opportunities
          </Badge>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl font-bold tracking-tight md:text-7xl"
        >
          <span className="gradient-text">
            Ashan Mir
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-xl text-muted-foreground md:text-2xl"
        >
          Full Stack Developer | Software Engineering Graduate
        </motion.p>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground/80"
        >
          I build scalable full-stack applications using Next.js, PostgreSQL,
          Prisma and modern web technologies. Experienced in authentication
          systems, dashboards, deployment workflows and production-ready
          applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="gap-2 px-8"
            onClick={() => scrollTo("#projects")}
          >
            View Projects
          </Button>
          <a
            href="/resume.pdf"
            download
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "gap-2 px-8"
            )}
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <Button
            variant="ghost"
            size="lg"
            className="gap-2 px-8"
            onClick={() => scrollTo("#contact")}
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </Button>
        </motion.div>

        {/* Achievement badges */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {achievements.map((achievement) => (
            <Badge
              key={achievement}
              variant="outline"
              className="gap-1.5 border-border/50 bg-card/30 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm"
            >
              <CheckCircle2 className="h-3 w-3 text-primary" />
              {achievement}
            </Badge>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 text-muted-foreground/50"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
