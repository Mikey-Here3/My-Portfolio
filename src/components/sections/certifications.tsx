"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedCard } from "@/components/shared/animated-card";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { CERTIFICATIONS } from "@/lib/constants";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          badge="Certifications"
          title="Professional Certifications"
          subtitle="Verified credentials from industry leaders demonstrating specialized expertise."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div key={cert.title} variants={fadeInUp}>
              <AnimatedCard className="h-full flex flex-col justify-between border-border/50 bg-card/30 hover:border-primary/30 transition-all p-6 md:p-8 rounded-xl backdrop-blur-md">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary shadow-inner">
                      <Award className="h-6 w-6" />
                    </div>
                    <Badge
                      variant="outline"
                      className="border-green-500/30 bg-green-500/5 text-green-700 text-[10px] font-bold flex items-center gap-1 uppercase tracking-wider py-0.5"
                    >
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Verified
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight md:text-xl text-foreground mb-2">
                    {cert.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground mb-4">
                    <span className="font-semibold text-foreground/80">{cert.issuer}</span>
                    <span>&middot;</span>
                    <span>{cert.issuedBy}</span>
                    <span>&middot;</span>
                    <span>{cert.date}</span>
                  </div>

                  {cert.description && (
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
