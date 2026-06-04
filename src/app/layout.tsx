import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { FluidBackground } from "@/components/background/FluidBackground";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const description =
  "Cloud / DevOps Engineer with 2+ years managing multi-cloud production infrastructure — Kubernetes, Terraform, CI/CD and observability at scale.";

export const metadata: Metadata = {
  metadataBase: new URL("https://bgonzva.fr"),
  title: "Benjamin Gonzva — Cloud / DevOps Engineer",
  description,
  alternates: { canonical: "https://bgonzva.fr" },
  openGraph: {
    type: "website",
    url: "https://bgonzva.fr",
    title: "Benjamin Gonzva — Cloud / DevOps Engineer",
    description,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "Benjamin Gonzva — Cloud / DevOps Engineer",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} ${mono.variable} h-full antialiased`}
    >
      <body
        className="flex min-h-full flex-col lg:h-screen lg:overflow-hidden"
        suppressHydrationWarning
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-ink focus:shadow-hover"
        >
          Skip to content
        </a>
        <FluidBackground />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
