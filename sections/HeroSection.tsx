"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { 
  ArrowRight, 
  Mail, 
  Code2, 
  Terminal, 
  Layers, 
  Sparkles, 
  ChevronDown,
  Cpu,
  Shield,
  Smartphone
} from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { soundManager } from "@/lib/audio";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for cursor ambient glow
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleScrollTo = (id: string) => {
    soundManager.playClick();
    soundManager.triggerHaptic(12);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-[#050508] pt-28 pb-16"
    >
      {/* Dynamic Grid Background with Subtle Radial Fade */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)]" />
      
      {/* Interactive Mouse Ambient Glow */}
      <motion.div
        className="pointer-events-none absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-indigo-500/5 blur-[120px]"
        style={{
          left: smoothX,
          top: smoothY,
        }}
      />

      {/* Decorative Fixed Ambient Orbs */}
      <div className="pointer-events-none absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-cyan-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-40 h-96 w-96 rounded-full bg-emerald-600/10 blur-[140px]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        
        {/* Availability & Subheading Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span className="font-mono text-xs font-medium tracking-wide text-zinc-300">
            {PORTFOLIO_DATA.personal.subheading}
          </span>
        </motion.div>

        {/* Primary Name Editorial Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-6"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            HARSHIT <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">KHANNA</span>
          </h1>
        </motion.div>

        {/* Main Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-5 max-w-3xl text-xl font-medium tracking-tight text-zinc-100 sm:text-2xl md:text-3xl"
        >
          &ldquo;{PORTFOLIO_DATA.personal.mainStatement}&rdquo;
        </motion.h2>

        {/* Supporting Bio Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base"
        >
          {PORTFOLIO_DATA.personal.supportingText}
        </motion.p>

        {/* Primary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScrollTo("projects")}
            onMouseEnter={() => soundManager.playHover()}
            data-cursor="view"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3.5 text-xs font-semibold tracking-wide text-black transition-all hover:bg-cyan-50 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95"
          >
            <span>View My Work</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => handleScrollTo("contact")}
            onMouseEnter={() => soundManager.playHover()}
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10 active:scale-95"
          >
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span>Let&apos;s Connect</span>
          </button>
        </motion.div>

        {/* Secondary Links Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400"
        >
          <a
            href={PORTFOLIO_DATA.personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            className="flex items-center gap-1.5 transition-colors hover:text-cyan-400"
          >
            <LinkedInIcon className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href={PORTFOLIO_DATA.personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <GitHubIcon className="h-4 w-4" />
            <span>GitHub</span>
          </a>

          <a
            href={PORTFOLIO_DATA.personal.links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            className="flex items-center gap-1.5 transition-colors hover:text-amber-400"
          >
            <Code2 className="h-4 w-4" />
            <span>LeetCode</span>
          </a>

          <a
            href={PORTFOLIO_DATA.personal.links.email}
            onMouseEnter={() => soundManager.playHover()}
            className="flex items-center gap-1.5 transition-colors hover:text-emerald-400"
          >
            <Mail className="h-4 w-4" />
            <span>Email</span>
          </a>
        </motion.div>

        {/* Engineering Domain Micro-Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-2 max-w-4xl"
        >
          {[
            { label: "Backend Architecture", icon: Terminal },
            { label: "AI & Multi-Agent RL", icon: Cpu },
            { label: "Native iOS & HealthKit", icon: Smartphone },
            { label: "Security & Honeypots", icon: Shield },
            { label: "Cloud & Microservices", icon: Layers },
          ].map((pill, i) => {
            const Icon = pill.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-1.5 text-[11px] font-mono text-zinc-400 transition-colors hover:border-cyan-500/30 hover:text-zinc-200"
              >
                <Icon className="h-3 w-3 text-cyan-400" />
                <span>{pill.label}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => handleScrollTo("about")}
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mt-14 flex flex-col items-center gap-1 text-[11px] font-mono tracking-widest text-zinc-500 transition-colors hover:text-zinc-300"
          aria-label="Scroll down to About section"
        >
          <span>EXPLORE</span>
          <ChevronDown className="h-4 w-4" />
        </motion.button>

      </div>
    </section>
  );
}
