"use client";
import { useState, useEffect } from "react";
import { Mail, MapPin, ArrowDown } from "lucide-react";
import { PROFILE, STATS } from "../data";

const ROLES = [
  "Full Stack .NET Developer",
  "AI Agent Developer",
  "Cloud Architect",
  "AWS Bedrock Specialist",
  ".NET Core Expert",
];

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TypingText() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <span className="text-indigo-400 font-medium">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center dot-grid overflow-hidden">
      {/* Glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 pt-40">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8"
          style={{ opacity: 1, animation: "fadeInUp 0.5s ease both" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Available for Senior / Lead Roles
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-tight">
          Hi, I&apos;m{" "}
          <span className="gradient-text">{PROFILE.name}</span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-[#a0a0b8] font-medium mb-3">
          {PROFILE.title}
        </p>

        {/* Typing subtitle */}
        <p className="text-base text-[#606078] mb-6 h-6">
          <TypingText />
        </p>

        {/* Tagline */}
        <p className="text-base md:text-lg text-[#a0a0b8] max-w-xl leading-relaxed mb-10">
          {PROFILE.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors text-sm"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-[#1e1e2e] hover:border-indigo-500/50 text-[#a0a0b8] hover:text-white font-medium transition-colors text-sm"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-5 mb-16 flex-wrap">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#606078] hover:text-indigo-400 transition-colors"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#606078] hover:text-indigo-400 transition-colors"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="flex items-center gap-2 text-sm text-[#606078] hover:text-indigo-400 transition-colors"
          >
            <Mail size={16} />
            {PROFILE.email}
          </a>
          <span className="flex items-center gap-1 text-sm text-[#606078]">
            <MapPin size={14} />
            {PROFILE.location}
          </span>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="p-4 rounded-xl border border-[#1e1e2e] bg-[#111118]/60"
            >
              <div className="text-2xl font-bold gradient-text mb-1">{s.value}</div>
              <div className="text-xs text-[#606078]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#606078] hover:text-indigo-400 transition-colors"
      >
        <span className="text-xs">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
