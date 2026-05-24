import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Stats } from "@/components/sections/stats";

// Dynamic imports for below-fold sections to improve initial load
const Projects = dynamic(
  () =>
    import("@/components/sections/projects").then((mod) => ({
      default: mod.Projects,
    })),
  { ssr: true }
);

const CaseStudy = dynamic(
  () =>
    import("@/components/sections/case-study").then((mod) => ({
      default: mod.CaseStudy,
    })),
  { ssr: true }
);

const Certifications = dynamic(
  () =>
    import("@/components/sections/certifications").then((mod) => ({
      default: mod.Certifications,
    })),
  { ssr: true }
);

const Education = dynamic(
  () =>
    import("@/components/sections/education").then((mod) => ({
      default: mod.Education,
    })),
  { ssr: true }
);

const DownloadCV = dynamic(
  () =>
    import("@/components/sections/download-cv").then((mod) => ({
      default: mod.DownloadCV,
    })),
  { ssr: true }
);

const Contact = dynamic(
  () =>
    import("@/components/sections/contact").then((mod) => ({
      default: mod.Contact,
    })),
  { ssr: true }
);

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Stats />
        <Projects />
        <CaseStudy />
        <Certifications />
        <Education />
        <DownloadCV />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
