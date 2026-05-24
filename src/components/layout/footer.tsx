import { Mail, MessageCircle } from "lucide-react";
import { Github, Linkedin } from "@/components/shared/brand-icons";
import { Separator } from "@/components/ui/separator";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  messageCircle: MessageCircle,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-muted-foreground/60">
              Built with Next.js &amp; TailwindCSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => {
              const IconComponent = iconMap[link.icon];
              if (!IconComponent) return null;

              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${link.platform}`}
                  className="rounded-lg p-2 text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
