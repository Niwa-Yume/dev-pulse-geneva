"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import WaitlistForm from "@/components/WaitlistForm";

const ShaderHeroBackground = dynamic(() => import("@/components/ShaderHeroBackground"), {
  ssr: false,
  loading: () => (
    <div
      className="absolute inset-0 -z-10 pointer-events-none opacity-40"
      style={{
        background:
          "radial-gradient(circle at 20% 30%,rgba(166,255,0,.25),transparent 60%),radial-gradient(circle at 80% 40%,rgba(0,255,209,.25),transparent 65%),linear-gradient(140deg,#020409,#06121b)",
      }}
    />
  ),
});

export default function HeroSection() {
  return (
    <section className="section-max pt-14 md:pt-24 pb-20 grid gap-12 md:gap-16 md:grid-cols-12 items-center relative" id="hero">
      <ShaderHeroBackground />
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
          <p className="mt-3 text-[11px] text-white/40">
            Nous n&apos;enverrons jamais de spam. Désinscription à tout moment.
          </p>
        </div>
        <div className="flex gap-4 pt-4">
          <a
            href="#why"
            className="glow-hover relative inline-flex items-center rounded-lg px-5 py-3 text-sm font-medium text-white/90 ring-1 ring-white/15 hover:text-white transition bg-white/5"
          >
            Pourquoi rejoindre ?
          </a>
          <a
            href="#values"
            className="relative inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold text-black focus:outline-none"
            style={{
              background: "linear-gradient(110deg,#A6FF00,#00FFD1 50%,#FF6F00)",
            }}
          >
            🌐 Nos valeurs
          </a>
        </div>
      </div>
      <div className="md:col-span-5 relative">
        <div
          className="absolute -inset-10 md:-inset-16 opacity-60 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 30% 30%,rgba(166,255,0,.35),transparent 60%),radial-gradient(circle at 70% 60%,rgba(0,255,209,.35),transparent 60%),radial-gradient(circle at 50% 80%,rgba(255,111,0,.3),transparent 65%)",
          }}
        />
        <div className="relative grid gap-4 p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm">
          <CircuitSVG />
          <p className="text-xs text-white/50 max-w-[24ch]">
            Une plateforme créée par et pour les développeurs romands.
          </p>
        </div>
      </div>
    </section>
  );
}

function CircuitSVG() {
  return (
    <svg
      width="320"
      height="220"
      viewBox="0 0 320 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto text-teal-200/60"
    >
      <rect x="0" y="0" width="320" height="220" rx="18" fill="url(#g)" className="opacity-10" />
      <g
        stroke="url(#grad)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="[&>*]:animate-pulse [&>*]:[animation-duration:4s]"
      >
        <path d="M40 40h60v30h30v30h40v40h40" />
        <path d="M40 70h40v40h30v40h30" />
        <path d="M110 40v-20h60v40h30v30h40" />
      </g>
      <circle cx="170" cy="100" r="8" fill="#00FFD1" className="animate-ping [animation-duration:3s]" />
      <defs>
        <linearGradient id="grad" x1="0" x2="320" y1="0" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A6FF00" />
          <stop offset="0.5" stopColor="#00FFD1" />
          <stop offset="1" stopColor="#FF6F00" />
        </linearGradient>
        <radialGradient id="g" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0) rotate(45) scale(400 300)">
          <stop stopColor="#A6FF00" />
          <stop offset="0.5" stopColor="#00FFD1" />
          <stop offset="1" stopColor="#FF6F00" />
        </radialGradient>
      </defs>
    </svg>
  );
}

