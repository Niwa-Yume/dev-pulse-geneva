"use client";
import WaitlistForm from "@/components/WaitlistForm";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="section-max pt-14 md:pt-24 pb-20 grid gap-12 md:gap-16 md:grid-cols-12 items-center relative" id="hero">
      <div className="relative z-10 md:col-span-7 flex flex-col gap-7">
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight font-bold">
          <span className="hero-gradient-text">DevPulse Geneva</span>{" "}
          <span className="block text-white/90 text-2xl sm:text-3xl md:text-4xl mt-4 font-semibold">
            Événements pour développeurs à Genève
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-xl">
          Ateliers, hackathons et talks / networking pour apprendre, créer et connecter. Une communauté locale animée par la passion du code.
        </p>
        <div id="waitlist" className="max-w-xl">
          <WaitlistForm />
          <p className="mt-3 text-[11px] text-white/40">Nous n&apos;enverrons jamais de spam. Désinscription à tout moment.</p>
        </div>
        <div className="flex gap-4 pt-4">
          <a href="#why" className="glow-hover relative inline-flex items-center rounded-lg px-5 py-3 text-sm font-medium text-white/90 ring-1 ring-white/15 hover:text-white transition bg-white/5">Pourquoi rejoindre ?</a>
          <a href="#values" className="relative inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold text-white focus:outline-none bg-orange-500 hover:bg-orange-600 transition">🌐 Nos valeurs</a>
        </div>
      </div>
      <div className="md:col-span-5 relative">
        <div className="relative grid gap-4 p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm">
          <Image
            src="/image/Full-logo.png"
            alt="DevPulse Geneva Logo"
            width={320}
            height={220}
            className="w-full h-auto"
          />
          <p className="text-xs text-white/50 max-w-[24ch]">Une plateforme créée par et pour les développeurs romands.</p>
        </div>
      </div>
    </section>
  );
}
