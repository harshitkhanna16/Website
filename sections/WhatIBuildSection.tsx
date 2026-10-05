"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Server, 
  Brain, 
  Cloud, 
  ShieldAlert, 
  Smartphone, 
  Database, 
  ArrowUpRight, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { PORTFOLIO_DATA, DomainCard } from "@/data/portfolio";
import { soundManager } from "@/lib/audio";

const ICONS: Record<string, React.ElementType> = {
  Server,
  Brain,
  Cloud,
  ShieldAlert,
  Smartphone,
  Database,
};

interface WhatIBuildSectionProps {
  onSelectProject?: (projectId: string) => void;
}

export default function WhatIBuildSection({ onSelectProject }: WhatIBuildSectionProps) {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  const handleDomainClick = (domainId: string) => {
    soundManager.playClick();
    soundManager.triggerHaptic(10);
    setSelectedDomain(selectedDomain === domainId ? null : domainId);
  };

  const handleProjectClick = (projectId: string) => {
    soundManager.playClick();
    const el = document.getElementById(projectId) || document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="what-i-build" className="relative w-full bg-[#050508] py-24 sm:py-32">
      {/* Subtle top divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-[11px] tracking-wider text-cyan-300 uppercase">
            <Sparkles className="h-3 w-3" />
            <span>Core Disciplines</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            WHAT I <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">BUILD</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Engineered across systems, machine intelligence, cloud infrastructure, and native Apple platforms. Click any domain card to explore connected projects.
          </p>
        </div>

        {/* 6 Interactive Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_DATA.domains.map((domain) => {
            const Icon = ICONS[domain.icon] || Server;
            const isSelected = selectedDomain === domain.id;
            
            // Find connected projects
            const connectedProjs = PORTFOLIO_DATA.projects.filter(p => domain.connectedProjects.includes(p.id));

            return (
              <motion.div
                key={domain.id}
                onClick={() => handleDomainClick(domain.id)}
                onMouseEnter={() => soundManager.playHover()}
                layout
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 transition-all cursor-pointer ${
                  isSelected
                    ? "border-cyan-500/60 bg-[#0d1220] shadow-xl shadow-cyan-950/40"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                {/* Glow corner */}
                <div className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-cyan-500/5 blur-2xl transition-opacity group-hover:opacity-100" />

                <div>
                  {/* Card Icon & Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-400 transition-colors group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[10px] tracking-wider text-zinc-400 uppercase">
                      DOMAIN
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/90 mt-0.5">
                    {domain.subtitle}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                    {domain.description}
                  </p>

                  {/* Skills badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {domain.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[10px] font-mono text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Connected Projects Reveal */}
                <div className="mt-6 border-t border-white/5 pt-4">
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3 w-3 text-cyan-400" />
                      <span>{connectedProjs.length} Connected Projects</span>
                    </span>
                    <span className="text-cyan-400 group-hover:translate-x-0.5 transition-transform">
                      {isSelected ? "Collapse ▲" : "Inspect ▼"}
                    </span>
                  </div>

                  {/* Expanded Project links */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 space-y-2 overflow-hidden"
                      >
                        {connectedProjs.map((proj) => (
                          <button
                            key={proj.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleProjectClick(proj.id);
                            }}
                            className="flex w-full items-center justify-between rounded-lg border border-cyan-500/20 bg-cyan-950/30 px-3 py-1.5 text-left text-xs text-cyan-200 transition-colors hover:bg-cyan-900/40"
                          >
                            <span className="font-medium truncate">{proj.title}</span>
                            <ArrowUpRight className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
