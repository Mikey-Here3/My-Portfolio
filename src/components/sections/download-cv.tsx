"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/animations";
import { PERSONAL_INFO } from "@/lib/constants";

export function DownloadCV() {
  return (
    <section className="relative py-24 overflow-hidden border-t border-border/30">
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-background to-primary/5 z-0" />
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <FileText className="h-3.5 w-3.5" />
            Curriculum Vitae
          </span>

          <h2 className="text-3xl font-bold tracking-tight md:text-5xl text-foreground">
            Ready to learn more?
          </h2>

          <p className="mx-auto max-w-xl text-base md:text-lg text-muted-foreground/80 leading-relaxed">
            Get a detailed overview of my experience, engineering skills, academic projects, and complete technical qualifications.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download
              className={cn(
                buttonVariants({ size: "lg", variant: "default" }),
                "gap-2.5 px-8 py-6 text-base font-semibold shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] transition-all"
              )}
            >
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
