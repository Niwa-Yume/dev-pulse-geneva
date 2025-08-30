"use client";
import { useState } from "react";

interface WaitlistFormProps {
  className?: string;
}

export default function WaitlistForm({ className }: WaitlistFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const substackBase = process.env.NEXT_PUBLIC_SUBSTACK_URL || "https://devpulsegeneva.substack.com"; // placeholder
  const action = `${substackBase.replace(/\/$/, "")}/api/v1/free`;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");
    if (!email || typeof email !== "string") return;
    setStatus("loading");
    try {
      const res = await fetch(action, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        setStatus("error");
        setMessage("Erreur réseau. Réessayez.");
        return;
      }
      setStatus("success");
      setMessage("Inscription reçue ! Vérifiez votre email.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Impossible d'envoyer. Réessayez.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full flex-col gap-3 sm:flex-row sm:items-stretch ${className || ""}`}
    >
      <div className="relative flex-1">
        <input
          required
          name="email"
          type="email"
          placeholder="Votre email"
          aria-label="Adresse email"
          className="w-full rounded-lg bg-white/5 px-4 py-3 text-sm outline-none ring-1 ring-white/20 placeholder:text-white/40 focus:ring-2 focus:ring-teal-300/70 dark:focus:ring-teal-400/80 backdrop-blur-md text-white"
          disabled={status === "loading"}
        />
        <span className="pointer-events-none absolute inset-y-0 right-3 grid place-items-center text-xs text-white/40">✉️</span>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="group relative overflow-hidden rounded-lg px-6 py-3 text-sm font-semibold text-black focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
        style={{
          background:
            "linear-gradient(110deg,#A6FF00, #00FFD1 40%, #FF6F00 80%)",
        }}
      >
        <span className="relative z-10 flex items-center gap-1">
          {status === "loading" ? "Envoi..." : "Rejoindre la waitlist"}
          <span className="transition-transform group-hover:translate-x-0.5">⚡</span>
        </span>
        <span className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-20" style={{background:"radial-gradient(circle at 30% 20%,rgba(255,255,255,.6),transparent 60%)"}} />
      </button>
      {message && (
        <p
          role="status"
          className={`w-full text-xs sm:text-sm ${status === "error" ? "text-orange-300" : "text-teal-200"}`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
