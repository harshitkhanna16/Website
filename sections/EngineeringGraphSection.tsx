"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Network, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  Info
} from "lucide-react";
import { soundManager } from "@/lib/audio";

interface GraphEdge {
  tech: string;
  project: string;
  domain: string;
  techCategory: string;
}

const GRAPH_RELATIONSHIPS: GraphEdge[] = [
  { tech: "Python", project: "AI War Room", domain: "Reinforcement Learning", techCategory: "Language" },
  { tech: "Python", project: "KavachGo", domain: "ML Pricing Engine", techCategory: "Language" },
  { tech: "Python", project: "Seq2Seq Translation", domain: "Attention Neural Net", techCategory: "Language" },
  { tech: "FastAPI", project: "Bluestock", domain: "REST APIs (40% Latency Drop)", techCategory: "Backend" },
  { tech: "FastAPI", project: "KavachGo", domain: "Parametric Contracts API", techCategory: "Backend" },
  { tech: "Swift", project: "Myra", domain: "Native iOS & HealthKit", techCategory: "Mobile" },
  { tech: "Swift", project: "Loan Management System", domain: "Enterprise Admin Panel", techCategory: "Mobile" },
  { tech: "SQL / Databases", project: "Bluestock", domain: "Database Optimization (-35% Query Time)", techCategory: "Data" },
  { tech: "SQL / Databases", project: "Credential Honeypot", domain: "Forensic MongoDB Audit", techCategory: "Data" },
  { tech: "AI / ML", project: "AI War Room", domain: "Multi-Agent Simulator", techCategory: "AI/ML" },
  { tech: "AI / ML", project: "Myra", domain: "Gemini 2.5 Flash + Apple Intelligence", techCategory: "AI/ML" },
  { tech: "AI / ML", project: "KavachGo", domain: "10-Feature Pricing Model", techCategory: "AI/ML" },
  { tech: "AI / ML", project: "Seq2Seq Translation", domain: "Bahdanau Attention", techCategory: "AI/ML" },
  { tech: "Docker", project: "AI War Room & Honeypot", domain: "Backend Infrastructure", techCategory: "Infrastructure" },
  { tech: "AWS / Cloud", project: "Cloud Deployment", domain: "Practical Cloud Infrastructure (Expanding)", techCategory: "Cloud" },
  { tech: "Kubernetes", project: "Container Orchestration", domain: "Declarative Cluster Pods (Expanding)", techCategory: "Cloud" },
  { tech: "Security", project: "Credential Honeypot", domain: "Active Deception & Honeypots", techCategory: "Security" },
  { tech: "Security", project: "AI War Room", domain: "Cyber & Drone Threat Simulation", techCategory: "Security" },
];

export default function EngineeringGraphSection() {
  const [selectedTech, setSelectedTech] = useState<string | null>("Python");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const uniqueTechs = Array.from(new Set(GRAPH_RELATIONSHIPS.map(r => r.tech)));
  const uniqueProjects = Array.from(new Set(GRAPH_RELATIONSHIPS.map(r => r.project)));

  const handleTechClick = (tech: string) => {
    soundManager.playClick();
    soundManager.triggerHaptic(8);
    setSelectedTech(selectedTech === tech ? null : tech);
    setSelectedProject(null);
  };

  const handleProjectClick = (proj: string) => {
    soundManager.playClick();
    soundManager.triggerHaptic(8);
    setSelectedProject(selectedProject === proj ? null : proj);
    setSelectedTech(null);
  };

  const activeRelationships = GRAPH_RELATIONSHIPS.filter(rel => {
    if (selectedTech) return rel.tech === selectedTech;
    if (selectedProject) return rel.project === selectedProject;
    return true;
  });

  return (
    <section id="engineering-graph" className="relative w-full bg-[#07080e] py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-[11px] tracking-wider text-cyan-300 uppercase">
            <Network className="h-3 w-3" />
            <span>Interactive Knowledge Topology</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            MY ENGINEERING <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">GRAPH</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Every technology in my stack directly anchors real-world systems, internships, or machine learning pipelines. Click any node to trace relationships across the engineering graph.
          </p>
        </div>

        {/* Technology Node Selector Bar */}
        <div className="mt-10 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-zinc-400 mr-2 flex items-center gap-1">
            <Terminal className="h-3.5 w-3.5 text-cyan-400" /> Technologies:
          </span>
          {uniqueTechs.map((tech) => {
            const isSelected = selectedTech === tech;
            return (
              <button
                key={tech}
                onClick={() => handleTechClick(tech)}
                onMouseEnter={() => soundManager.playHover()}
                className={`rounded-lg border px-3 py-1.5 text-xs font-mono transition-all ${
                  isSelected
                    ? "border-cyan-400 bg-cyan-500/20 text-cyan-200 font-bold shadow-md shadow-cyan-950/40"
                    : "border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {tech}
              </button>
            );
          })}
        </div>

        {/* Visual Graph Relationship Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {activeRelationships.map((rel, idx) => (
              <motion.div
                key={`${rel.tech}-${rel.project}-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-sm transition-all hover:border-cyan-500/40"
              >
                {/* Tech Origin */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="text-xs font-bold text-white font-mono">{rel.tech}</span>
                  </div>
                  <span className="text-[10px] font-mono rounded bg-white/5 px-2 py-0.5 text-zinc-400">
                    {rel.techCategory}
                  </span>
                </div>

                {/* Connection Arrow */}
                <div className="my-3 flex items-center justify-center text-zinc-600 font-mono text-xs">
                  <span>↓ anchored in ↓</span>
                </div>

                {/* Project Destination */}
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-300">{rel.project}</span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  </div>
                  <p className="mt-1 text-[11px] text-zinc-400 font-mono">
                    Domain: <span className="text-zinc-200">{rel.domain}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Graph Legend / Instruction */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/5 bg-black/40 p-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Info className="h-4 w-4 text-cyan-400 shrink-0" />
            <span>Click any technology filter above to isolate specific system clusters.</span>
          </div>
          <button
            onClick={() => {
              setSelectedTech(null);
              setSelectedProject(null);
            }}
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300"
          >
            Show Complete Topology ({GRAPH_RELATIONSHIPS.length} edges)
          </button>
        </div>

      </div>
    </section>
  );
}
