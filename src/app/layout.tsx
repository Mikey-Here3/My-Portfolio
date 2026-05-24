import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashan Mir | Full Stack Developer",
  description:
    "Full-stack developer specializing in Next.js, PostgreSQL, Prisma, and modern web technologies. Experienced in building scalable applications, authentication systems, and production-ready deployments. Open to opportunities in Germany and internationally.",
  keywords: [
    "Ashan Mir",
    "Full Stack Developer",
    "Next.js Developer",
    "Software Engineer",
    "Portfolio",
    "React Developer",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Pakistan",
    "Germany",
    "Software Engineering Graduate",
    "Web Developer",
  ],
  authors: [{ name: "Ashan Mir" }],
  creator: "Ashan Mir",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashanmir.dev",
    title: "Ashan Mir | Full Stack Developer",
    description:
      "Full-stack developer specializing in Next.js, PostgreSQL, Prisma, and modern web technologies. Building scalable, production-ready applications.",
    siteName: "Ashan Mir Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashan Mir - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashan Mir | Full Stack Developer",
    description:
      "Full-stack developer specializing in Next.js, PostgreSQL, Prisma, and modern web technologies.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ashan Mir",
              jobTitle: "Full Stack Developer",
              description:
                "Full-stack developer specializing in Next.js, PostgreSQL, Prisma, and modern web technologies.",
              url: "https://ashanmir.dev",
              sameAs: [
                "https://github.com/Mikey-Here3",
                "https://www.linkedin.com/in/ashan-mir/",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "National University of Modern Languages (NUML)",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Islamabad",
                  addressCountry: "Pakistan",
                },
              },
              knowsAbout: [
                "Next.js",
                "React",
                "TypeScript",
                "PostgreSQL",
                "Prisma",
                "Node.js",
                "TailwindCSS",
                "Full Stack Development",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
