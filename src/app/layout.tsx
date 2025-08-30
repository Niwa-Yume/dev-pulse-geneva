import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PrismaticBurst from "@/components/PrismaticBurst";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevPulse Geneva – Événements Tech pour Développeurs",
  description:
    "Ateliers, hackathons et talks/networking à Genève. Rejoignez la waitlist DevPulse Geneva pour apprendre, créer et connecter.",
  openGraph: {
    title: "DevPulse Geneva – Événements Tech",
    description:
      "Ateliers, hackathons et talks/networking à Genève. Rejoignez la communauté.",
    type: "website",
    locale: "fr_CH",
  },
  keywords: [
    "Genève",
    "développeurs",
    "hackathon",
    "meetup",
    "atelier tech",
    "DevPulse",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative has-gradient-bg`}>
        <div className="fixed inset-0 -z-10">
          <PrismaticBurst
            animationType="rotate3d"
            intensity={2}
            speed={0.5}
            distort={1.0}
            paused={false}
            offset={{ x: 0, y: 0 }}
            hoverDampness={0.25}
            rayCount={24}
            mixBlendMode="lighten"
            colors={['#A6FF00', '#00FFD1', '#FF6F00']}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
