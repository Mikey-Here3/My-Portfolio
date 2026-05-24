"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  MapPin,
  ArrowRight,
  Send,
} from "lucide-react";
import { Github, Linkedin } from "@/components/shared/brand-icons";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedCard } from "@/components/shared/animated-card";
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { PERSONAL_INFO } from "@/lib/constants";

export function Contact() {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Mikey-Here3",
      href: "https://github.com/Mikey-Here3",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Ashan Mir",
      href: "https://www.linkedin.com/in/ashan-mir/",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+92 319 0799711",
      href: `https://wa.me/${PERSONAL_INFO.whatsapp}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: PERSONAL_INFO.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="relative py-24">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 bg-gradient-to-t from-primary/5 via-indigo-500/5 to-transparent blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          badge="Get In Touch"
          title="Let's Build Something Together"
          subtitle="Open to new opportunities, working student roles, international internships, and Master's admissions."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Contact Info */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                Contact Information
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                I am currently open to full-stack developer roles, internships, working student opportunities, and academic collaborations, particularly in Germany and international markets.
              </p>
            </div>

            {/* Germany badge */}
            <div className="flex">
              <Badge
                variant="outline"
                className="inline-flex items-center justify-center gap-2 border-amber-500/30 bg-amber-500/5 px-4 py-2 text-sm font-semibold text-amber-800 whitespace-normal text-center h-auto"
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
                </span>
                🇩🇪 Open to Germany Opportunities
              </Badge>
            </div>

            {/* Contact Items */}
            <div className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const isLink = item.href !== null;
                const Component = isLink ? "a" : "div";

                return (
                  <Component
                    key={item.label}
                    href={item.href || undefined}
                    target={isLink ? "_blank" : undefined}
                    rel={isLink ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-4 rounded-xl border border-border/50 bg-card/10 p-4 transition-all duration-300 ${
                      isLink
                        ? "hover:border-primary/20 hover:bg-card/25 hover:-translate-x-1"
                        : ""
                    }`}
                  >
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-foreground md:text-base">
                        {item.value}
                      </p>
                    </div>
                  </Component>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Direct CTA Card */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center"
          >
            <AnimatedCard className="border-border/50 bg-card/20 hover:border-primary/30 p-8 md:p-10 rounded-2xl backdrop-blur-md relative overflow-hidden">
              <div className="space-y-6 text-center lg:text-left">
                <h3 className="text-2xl font-bold tracking-tight text-foreground">
                  Interested in working together?
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground/90">
                  Feel free to reach out via email, connect on LinkedIn, or shoot a quick message over WhatsApp. I generally respond within a few hours and am always excited to discuss software engineering projects, research, and technical opportunities.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className={cn(
                      buttonVariants({ size: "lg", variant: "default" }),
                      "gap-2 w-full sm:w-auto px-6"
                    )}
                  >
                    <Send className="h-4 w-4" />
                    Send Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ashan-mir/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ size: "lg", variant: "outline" }),
                      "gap-2 w-full sm:w-auto px-6"
                    )}
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </AnimatedCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
