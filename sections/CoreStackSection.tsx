"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  Layers, 
  ExternalLink, 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  Filter
} from "lucide-react";
import { PORTFOLIO_DATA, SkillNode } from "@/data/portfolio";
import { soundManager } from "@/lib/audio";

interface CoreStackSectionProps {
  onSkillSelect?: (skillId: string) => void;
}

export default function CoreStackSection({ onSkillSelect }: CoreStackSectionProps) {
  const [activeSkillId, setActiveSkillId] = useState<string | null>(null);

  const handleSkillClick = (skill: SkillNode) => {
    soundManager.playClick();
    soundManager.triggerHaptic(10);
    const next = activeSkillId === skill.id ? null : skill.id;
    setActiveSkillId(next);
    if (onSkillSelect && next) {
      onSkillSelect(next);
    }
  };

  const activeSkill = PORTFOLIO_DATA.coreSkills.find(s => s.id === activeSkillId);
  const connectedProjects = activeSkill 
    ? PORTFOLIO_DATA.projects.filter(p => activeSkill.connectedProjects.includes(p.id))
    : [];
  const connectedExperiences = activeSkill
    ? PORTFOLIO_DATA.experiences.filter(e => activeSkill.connectedExperience?.includes(e.id))
    : [];

  return (
    <section id="skills" className="relative w-full bg-[#07080e] py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-[11px] tracking-wider text-cyan-300 uppercase">
            <Sparkles className="h-3 w-3" />
            <span>Curated Expertise</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            CORE <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">STACK</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Exclusively the 10 foundational technologies powering my backend architectures, intelligent models, and distributed software. Select any node to trace real-world implementations.
          </p>
        </div>

        {/* 10 Interactive Technology Nodes */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {PORTFOLIO_DATA.coreSkills.map((skill, idx) => {
            const isSelected = activeSkillId === skill.id;
            return (
              <motion.button
                key={skill.id}
                onClick={() => handleSkillClick(skill)}
                onMouseEnter={() => soundManager.playHover()}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex flex-col justify-between rounded-xl border p-4 text-left transition-all ${
                  isSelected
                    ? "border-cyan-400 bg-[#0d1627] shadow-lg shadow-cyan-950/50"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-zinc-400">
                      0{idx + 1}
                    </span>
                    <span className={`h-1.5 w-1.5 rounded-full ${
                      skill.proficiency === "Building & Expanding" ? "bg-amber-400" : "bg-cyan-400"
                    }`} />
                  </div>

                  <h3 className="mt-2 text-sm font-bold text-white group-hover:text-cyan-300">
                    {skill.name}
                  </h3>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2 text-[10px] font-mono text-zinc-400">
                  <span>{skill.category}</span>
                  <span className={isSelected ? "text-cyan-400 font-semibold" : ""}>
                    {isSelected ? "Active" : "Trace →"}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Dynamic Trace / Connection Card */}
        <AnimatePresence mode="wait">
          {activeSkill ? (
            <motion.div
              key={activeSkill.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="mt-8 rounded-2xl border border-cyan-500/30 bg-[#090d18] p-6 shadow-xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/10 font-mono text-sm font-bold text-cyan-400">
                    &lt;/&gt;
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {activeSkill.name}
                    </h3>
                    <p className="text-xs text-zinc-400">{activeSkill.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-mono ${
                    activeSkill.proficiency === "Building & Expanding"
                      ? "bg-amber-500/10 text-amber-300 border border-amber-500/30"
                      : "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
                  }`}>
                    {activeSkill.proficiency}
                  </span>
                  <button
                    onClick={() => setActiveSkillId(null)}
                    className="text-xs font-mono text-zinc-400 hover:text-white"
                  >
                    Clear Filter ✕
                  </button>
                </div>
              </div>

              {/* Connected Items Grid */}
              <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Connected Projects */}
                <div>
                  <h4 className="text-xs font-mono tracking-wider uppercase text-zinc-400 mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Connected Projects ({connectedProjects.length})</span>
                  </h4>
                  {connectedProjects.length > 0 ? (
                    <div className="space-y-2">
                      {connectedProjects.map((p) => (
                        <a
                          key={p.id}
                          href={`#${p.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-zinc-200 transition-colors hover:border-cyan-500/30 hover:bg-cyan-950/20"
                        >
                          <div>
                            <span className="font-semibold text-white">{p.title}</span>
                            <span className="text-[11px] text-zinc-400 block">{p.subtitle}</span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-cyan-400" />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-zinc-400">Algorithmic and problem-solving focus.</p>
                  )}
                </div>

                {/* Connected Experience */}
                <div>
                  <h4 className="text-xs font-mono tracking-wider uppercase text-zinc-400 mb-3 flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Applied Experience ({connectedExperiences.length})</span>
                  </h4>
                  {connectedExperiences.length > 0 ? (
                    <div className="space-y-2">
                      {connectedExperiences.map((exp) => (
                        <div
                          key={exp.id}
                          className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-zinc-200"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-white">{exp.company}</span>
                            <span className="font-mono text-[10px] text-cyan-400">{exp.role}</span>
                          </div>
                          <p className="text-[11px] text-zinc-400 mt-1">{exp.period}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-zinc-400">Integrated through technical projects and research implementations.</p>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="mt-8 flex items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.01] p-6 text-center text-xs text-zinc-400">
              <Filter className="h-4 w-4 mr-2 text-cyan-400" />
              <span>Click on any core skill node above to inspect connected production work and experiences.</span>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
