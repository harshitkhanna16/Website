"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Sparkles, 
  Activity, 
  Cpu, 
  Layers, 
  ArrowRight, 
  ShieldAlert, 
  Smartphone, 
  Camera, 
  Heart, 
  Zap, 
  CheckCircle2, 
  Terminal, 
  Lock, 
  AlertTriangle,
  Play,
  RotateCcw
} from "lucide-react";
import { GitHubIcon } from "@/components/Icons";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio";
import { soundManager } from "@/lib/audio";

export default function ProjectsShowcaseSection() {
  // States for interactive simulations inside project cards
  // AI War Room
  const [warRoomDifficulty, setWarRoomDifficulty] = useState<"ALPHA" | "BETA" | "OMEGA">("BETA");
  const [warRoomThreatCount, setWarRoomThreatCount] = useState(54);
  const [warRoomStatus, setWarRoomStatus] = useState("ADAPTIVE DEFENSE NOMINAL");

  // Myra iPhone Mockup Active Screen
  const [myraScreen, setMyraScreen] = useState<"dashboard" | "meal" | "apple-ai" | "health">("dashboard");

  // KavachGo Flow Step
  const [kavachStep, setKavachStep] = useState(2);

  // Honeypot Simulation
  const [honeypotAttempts, setHoneypotAttempts] = useState(0);
  const [honeypotAlertSent, setHoneypotAlertSent] = useState(false);
  const [honeypotOddHour, setHoneypotOddHour] = useState(true);

  const simulateHoneypotAttempt = () => {
    soundManager.playClick();
    soundManager.triggerHaptic(15);
    const next = honeypotAttempts + 1;
    setHoneypotAttempts(next);
    if (next >= 3 || honeypotOddHour) {
      setHoneypotAlertSent(true);
      soundManager.playSuccess();
    }
  };

  const resetHoneypot = () => {
    soundManager.playClick();
    setHoneypotAttempts(0);
    setHoneypotAlertSent(false);
  };

  return (
    <section id="projects" className="relative w-full bg-[#050508] py-24 sm:py-32">
      {/* Background radial accent */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-cyan-600/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-[11px] tracking-wider text-cyan-300 uppercase">
            <Sparkles className="h-3 w-3" />
            <span>Production Systems & Research</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            SELECTED <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">WORK</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Engineered systems designed for high resilience, multi-agent reinforcement learning, parametric intelligence, and native on-device Apple experiences.
          </p>
        </div>

        {/* ---------------- PROJECT 1: AI WAR ROOM ---------------- */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-[#080a12] p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            
            {/* Left Column: Details */}
            <div className="flex flex-col justify-between lg:col-span-6">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-0.5 font-mono text-[11px] font-semibold text-cyan-400">
                    FEATURED AI SIMULATOR
                  </span>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 font-mono text-[11px] text-emerald-400">
                    LIVE DEMO AVAILABLE
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
                  AI War Room
                </h3>
                <p className="mt-1 text-sm font-mono text-cyan-300">
                  Cyber & Drone Defense Simulator • Multi-Agent Reinforcement Learning
                </p>

                <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                  An AI-driven multi-agent reinforcement learning simulator designed to model complex cyber and drone defense scenarios across distributed multi-node topologies.
                </p>

                {/* Key Metrics */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3 text-center">
                    <span className="text-[10px] font-mono text-zinc-400">Efficiency Boost</span>
                    <p className="text-xl font-bold font-mono text-cyan-400 mt-0.5">+35%</p>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3 text-center">
                    <span className="text-[10px] font-mono text-zinc-400">Concurrent Threats</span>
                    <p className="text-xl font-bold font-mono text-emerald-400 mt-0.5">50+ Nodes</p>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3 text-center">
                    <span className="text-[10px] font-mono text-zinc-400">Difficulty Tiers</span>
                    <p className="text-xl font-bold font-mono text-indigo-400 mt-0.5">3 Modes</p>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="mt-6 space-y-2 text-xs text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">▸</span>
                    <span>Multi-agent RL simulator with continuous reward shaping and policy optimization.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">▸</span>
                    <span>Adversarial load testing across 50+ concurrent multi-vector threat instances.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">▸</span>
                    <span>Published and accessible live on Hugging Face Spaces for interactive simulation testing.</span>
                  </li>
                </ul>

                {/* Tech Badges */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {["Python", "Reinforcement Learning", "Multi-Agent Systems", "Policy Optimization", "Hugging Face Spaces"].map((t, i) => (
                    <span key={i} className="rounded bg-white/5 px-2 py-0.5 text-[11px] font-mono text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://harshitkhanna16-ai-war-room.hf.space/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-2.5 text-xs font-semibold text-black transition-all hover:bg-cyan-300 active:scale-95"
                >
                  <Play className="h-3.5 w-3.5 fill-black" />
                  <span>Launch Live Simulation</span>
                  <ExternalLink className="h-3.5 w-3.5 ml-1" />
                </a>

                <span className="text-[11px] font-mono text-zinc-400">
                  Hosted on Hugging Face Spaces
                </span>
              </div>
            </div>

            {/* Right Column: Tactical Command Center Mockup */}
            <div className="flex flex-col rounded-2xl border border-cyan-500/20 bg-black/80 p-5 lg:col-span-6 font-mono text-xs shadow-inner">
              {/* Command Center Titlebar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[11px] font-bold text-zinc-200 uppercase tracking-wider">
                    TACTICAL DEFENSE COMMAND MATRIX
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  {(["ALPHA", "BETA", "OMEGA"] as const).map(tier => (
                    <button
                      key={tier}
                      onClick={() => {
                        soundManager.playClick();
                        setWarRoomDifficulty(tier);
                        setWarRoomThreatCount(tier === "ALPHA" ? 28 : tier === "BETA" ? 54 : 92);
                      }}
                      className={`rounded px-2 py-0.5 text-[10px] transition-colors ${
                        warRoomDifficulty === tier
                          ? "bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-bold"
                          : "bg-white/5 border border-white/5 text-zinc-400 hover:text-white"
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Ribbon */}
              <div className="mt-3 flex items-center justify-between rounded-lg bg-cyan-950/20 border border-cyan-500/20 px-3 py-2 text-[11px]">
                <span className="text-zinc-400">DEFENSE GRID STATUS:</span>
                <span className="text-cyan-300 font-bold flex items-center gap-1.5">
                  <Activity className="h-3.5 w-3.5 animate-pulse" />
                  {warRoomDifficulty} LEVEL ACTIVE ({warRoomThreatCount} SCENARIOS)
                </span>
              </div>

              {/* Simulated 4x4 Topology Node Grid */}
              <div className="mt-4 grid grid-cols-4 gap-2.5 p-3 rounded-xl border border-white/5 bg-black/60">
                {[
                  { name: "NODE-01", status: "INTERCEPTED", ping: "4ms", color: "text-emerald-400 border-emerald-500/30" },
                  { name: "NODE-02", status: "INTERCEPTED", ping: "6ms", color: "text-emerald-400 border-emerald-500/30" },
                  { name: "NODE-03", status: "ENGAGING", ping: "12ms", color: "text-cyan-400 border-cyan-500/30" },
                  { name: "NODE-04", status: "EVALUATING", ping: "9ms", color: "text-amber-400 border-amber-500/30" },
                  { name: "DRONE-A", status: "SWARM LOCK", ping: "3ms", color: "text-emerald-400 border-emerald-500/30" },
                  { name: "DRONE-B", status: "SWARM LOCK", ping: "5ms", color: "text-emerald-400 border-emerald-500/30" },
                  { name: "POLICY-NET", status: "CONVERGED", ping: "2ms", color: "text-cyan-400 border-cyan-500/30" },
                  { name: "REWARD-M", status: "+0.84 OPT", ping: "1ms", color: "text-emerald-400 border-emerald-500/30" },
                ].map((node, i) => (
                  <div key={i} className={`rounded-lg border p-2 bg-white/[0.01] ${node.color}`}>
                    <div className="flex items-center justify-between text-[9px] text-zinc-400">
                      <span>{node.name}</span>
                      <span>{node.ping}</span>
                    </div>
                    <p className="mt-1 text-[10px] font-bold truncate">{node.status}</p>
                  </div>
                ))}
              </div>

              {/* Simulation Architecture Graph */}
              <div className="mt-4 rounded-xl border border-white/5 bg-black/40 p-3">
                <span className="text-[10px] uppercase text-zinc-400 block mb-1.5">
                  REINFORCEMENT LEARNING PIPELINE:
                </span>
                <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-cyan-300">
                  <span className="rounded bg-white/5 px-2 py-0.5">Threat Generator</span>
                  <span>→</span>
                  <span className="rounded bg-white/5 px-2 py-0.5">Sensor Ingestion</span>
                  <span>→</span>
                  <span className="rounded bg-cyan-500/20 text-cyan-200 border border-cyan-500/30 px-2 py-0.5">Policy Network</span>
                  <span>→</span>
                  <span className="rounded bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 px-2 py-0.5">Reward Shaping (+35%)</span>
                  <span>→</span>
                  <span className="rounded bg-white/5 px-2 py-0.5">Action Dispatch</span>
                </div>
              </div>

              {/* Tactical Activity Log */}
              <div className="mt-4 rounded-lg bg-zinc-950 p-2.5 text-[10px] text-zinc-400 space-y-1">
                <div className="text-zinc-500">// Real-time simulation stream from Hugging Face node cluster:</div>
                <div className="text-cyan-400">&gt; Policy iteration 4,200: Agent coordination loss minimized to 0.041</div>
                <div className="text-emerald-400">&gt; Threat vector #38 intercepted across simulated subnet</div>
              </div>
            </div>

          </div>
        </div>


        {/* ---------------- PROJECT 2: MYRA (PMOS COMPANION) ---------------- */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-[#080a12] p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            
            {/* Left Column: Details */}
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-0.5 font-mono text-[11px] font-semibold text-purple-400">
                    FEATURED NATIVE IOS PRODUCT
                  </span>
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-0.5 font-mono text-[11px] text-cyan-400">
                    APPLE INTELLIGENCE + GEMINI 2.5 FLASH
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Myra
                </h3>
                <p className="mt-1 text-sm font-mono text-purple-300">
                  PMOS Companion App • iOS • AI • Health Intelligence • Multimodal AI
                </p>

                <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                  A full-featured native iOS companion application combining on-device Apple Intelligence, multimodal AI meal analysis, health telemetry, and personalized wellness routines.
                </p>

                {/* Key Metrics */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3 text-center">
                    <span className="text-[10px] font-mono text-zinc-400">Specialized AI</span>
                    <p className="text-xl font-bold font-mono text-purple-400 mt-0.5">17 Intents</p>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3 text-center">
                    <span className="text-[10px] font-mono text-zinc-400">Health Domains</span>
                    <p className="text-xl font-bold font-mono text-cyan-400 mt-0.5">6+ Modules</p>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3 text-center">
                    <span className="text-[10px] font-mono text-zinc-400">Vision Analysis</span>
                    <p className="text-xl font-bold font-mono text-emerald-400 mt-0.5">Gemini 2.5</p>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="mt-6 space-y-2 text-xs text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">▸</span>
                    <span>Full-featured native Swift &amp; UIKit architecture with SQLite3 persistence and Firebase syncing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">▸</span>
                    <span>On-device Apple Intelligence companion processing 17 specialized wellness &amp; biometric intents.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">▸</span>
                    <span>Gemini 2.5 Flash multimodal food &amp; meal analysis directly from live AVFoundation camera feed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">▸</span>
                    <span>HealthKit integration for cycle tracking, adaptive workouts, meditation, and PDFKit report export.</span>
                  </li>
                </ul>

                {/* Dual Architectural Pipeline Visualizations */}
                <div className="mt-6 space-y-3">
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3">
                    <span className="text-[10px] font-mono uppercase text-purple-300 block mb-1">
                      MULTIMODAL CAMERA ANALYSIS PIPELINE:
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-zinc-300 font-mono">
                      <span className="rounded bg-white/5 px-2 py-0.5">AVFoundation Camera</span>
                      <span>→</span>
                      <span className="rounded bg-purple-500/20 text-purple-200 border border-purple-500/30 px-2 py-0.5">Gemini 2.5 Flash AI</span>
                      <span>→</span>
                      <span className="rounded bg-white/5 px-2 py-0.5">Nutritional Analysis</span>
                      <span>→</span>
                      <span className="rounded bg-emerald-500/20 text-emerald-300 px-2 py-0.5">Personalized Insight</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-black/40 p-3">
                    <span className="text-[10px] font-mono uppercase text-cyan-300 block mb-1">
                      BIOMETRIC INTELLIGENCE PIPELINE:
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-zinc-300 font-mono">
                      <span className="rounded bg-white/5 px-2 py-0.5">HealthKit Biometrics</span>
                      <span>→</span>
                      <span className="rounded bg-white/5 px-2 py-0.5">SQLite3 Data Layer</span>
                      <span>→</span>
                      <span className="rounded bg-cyan-500/20 text-cyan-200 border border-cyan-500/30 px-2 py-0.5">Apple Intelligence (17 Intents)</span>
                      <span>→</span>
                      <span className="rounded bg-white/5 px-2 py-0.5">Adaptive UI Cards</span>
                    </div>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {["Swift", "UIKit", "Firebase", "SQLite3", "HealthKit", "AVFoundation", "PhotosUI", "PDFKit", "UserNotifications", "Apple Intelligence", "Gemini 2.5 Flash"].map((t, i) => (
                    <span key={i} className="rounded bg-white/5 px-2 py-0.5 text-[11px] font-mono text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Source Notice (Strictly Honest Rule) */}
              <div className="mt-8 flex items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-zinc-400">
                  <GitHubIcon className="h-3.5 w-3.5" />
                  <span>GitHub link coming soon</span>
                </div>
                <span className="text-xs text-zinc-500">
                  (Repository undergoing final preparation)
                </span>
              </div>
            </div>

            {/* Right Column: Visual Interactive iPhone Mockup */}
            <div className="flex flex-col items-center justify-center lg:col-span-5">
              <div className="w-full max-w-[320px] rounded-[44px] border-[5px] border-zinc-800 bg-black p-3 shadow-2xl shadow-purple-950/40 ring-1 ring-white/10">
                {/* Dynamic Island */}
                <div className="mx-auto mb-2 h-4 w-24 rounded-full bg-zinc-900 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-zinc-950" />
                </div>

                {/* Phone Screen Inside */}
                <div className="relative h-[480px] w-full overflow-hidden rounded-[32px] bg-[#0c0d16] p-4 flex flex-col justify-between text-xs font-sans">
                  
                  {/* Screen Header */}
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-medium text-zinc-400 pb-2 border-b border-white/5">
                      <span className="font-semibold text-white">Myra PMOS</span>
                      <span className="flex items-center gap-1 text-emerald-400 font-mono text-[10px]">
                        <Heart className="h-3 w-3 fill-emerald-400" /> HealthKit Synced
                      </span>
                    </div>

                    {/* Interactive Tab Switcher inside Mockup */}
                    <div className="mt-2.5 grid grid-cols-4 gap-1 rounded-lg bg-white/5 p-1 text-[10px] text-center font-medium">
                      {(["dashboard", "meal", "apple-ai", "health"] as const).map(tab => (
                        <button
                          key={tab}
                          onClick={() => {
                            soundManager.playClick();
                            setMyraScreen(tab);
                          }}
                          className={`rounded py-1 transition-all capitalize ${
                            myraScreen === tab
                              ? "bg-purple-600 text-white font-bold"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          {tab === "apple-ai" ? "AI Bot" : tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Active Screen Content */}
                  <div className="my-auto py-2">
                    {myraScreen === "dashboard" && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2.5">
                        <div className="rounded-xl border border-purple-500/30 bg-purple-950/30 p-3">
                          <span className="text-[10px] font-mono text-purple-300">DAILY WELLNESS SCORE</span>
                          <div className="text-2xl font-bold text-white mt-0.5">88 / 100</div>
                          <p className="text-[10px] text-zinc-400 mt-1">Biometric harmony optimal across 6 modules.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="rounded-lg bg-white/5 p-2.5">
                            <span className="text-[9px] text-zinc-400">Resting HR</span>
                            <p className="font-bold text-cyan-400 text-sm">62 BPM</p>
                          </div>
                          <div className="rounded-lg bg-white/5 p-2.5">
                            <span className="text-[9px] text-zinc-400">Sleep Quality</span>
                            <p className="font-bold text-emerald-400 text-sm">8h 14m</p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {myraScreen === "meal" && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
                        <div className="rounded-xl border border-cyan-500/30 bg-black/60 p-3 text-center">
                          <Camera className="h-6 w-6 text-cyan-400 mx-auto mb-1" />
                          <span className="text-[10px] font-mono text-cyan-300">GEMINI 2.5 FLASH SCAN</span>
                          <div className="mt-1 text-xs font-semibold text-white">Mediterranean Salmon Bowl</div>
                          <p className="text-[10px] text-zinc-400 mt-0.5">480 kcal • 38g Protein • Anti-inflammatory</p>
                        </div>
                        <div className="rounded-lg bg-emerald-950/30 border border-emerald-500/20 p-2 text-[10px] text-emerald-300">
                          ✓ Nutritional analysis matches target macros.
                        </div>
                      </motion.div>
                    )}

                    {myraScreen === "apple-ai" && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2 text-[11px]">
                        <div className="rounded-lg bg-purple-950/40 border border-purple-500/30 p-2.5 text-zinc-200">
                          <span className="font-mono text-[9px] text-purple-300 block mb-1">APPLE INTELLIGENCE (INTENT #12)</span>
                          &ldquo;Your recovery index is elevated today. Recommend a 20-min low-intensity session.&rdquo;
                        </div>
                        <div className="rounded-lg bg-white/5 p-2 text-[10px] text-zinc-400">
                          17 specialized on-device neural intents active.
                        </div>
                      </motion.div>
                    )}

                    {myraScreen === "health" && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2 text-[11px]">
                        <div className="rounded-lg bg-white/5 p-2.5">
                          <span className="text-[10px] text-zinc-400">Symptom &amp; Cycle Telemetry</span>
                          <p className="font-semibold text-white mt-0.5">Phase: Follicular Day 9</p>
                        </div>
                        <div className="rounded-lg bg-white/5 p-2.5">
                          <span className="text-[10px] text-zinc-400">Adaptive Routine</span>
                          <p className="font-semibold text-cyan-300 mt-0.5">Core Mobility &amp; Breathwork</p>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Phone Bottom Home Bar */}
                  <div className="mx-auto h-1 w-24 rounded-full bg-white/20 mt-2" />
                </div>
              </div>
              <span className="mt-3 text-[11px] font-mono text-zinc-500">
                Interactive iOS App Simulation
              </span>
            </div>

          </div>
        </div>


        {/* ---------------- PROJECT 3: KAVACHGO ---------------- */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-[#080a12] p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            
            <div className="flex flex-col justify-between lg:col-span-6">
              <div>
                <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-0.5 font-mono text-[11px] font-semibold text-teal-400">
                  PARAMETRIC FINTECH &amp; ML
                </span>

                <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
                  KavachGo
                </h3>
                <p className="mt-1 text-sm font-mono text-teal-300">
                  AI-Powered Income Insurance Platform
                </p>

                <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                  Parametric income insurance backend featuring automated operational triggers, instant claims processing, and a 10-feature machine learning pricing engine.
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3 text-center">
                    <span className="text-[10px] font-mono text-zinc-400">Response Latency</span>
                    <p className="text-xl font-bold font-mono text-teal-400 mt-0.5">&lt; 200ms</p>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3 text-center">
                    <span className="text-[10px] font-mono text-zinc-400">Pricing Accuracy</span>
                    <p className="text-xl font-bold font-mono text-cyan-400 mt-0.5">+28%</p>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3 text-center">
                    <span className="text-[10px] font-mono text-zinc-400">Claims Processed</span>
                    <p className="text-xl font-bold font-mono text-emerald-400 mt-0.5">500+</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-2 text-xs text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400">▸</span>
                    <span>10-feature ML pricing model yielding a 28% improvement in premium estimation over rules.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400">▸</span>
                    <span>Deterministic event trigger evaluation ensuring zero human latency during parametric events.</span>
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {["Python", "FastAPI", "Machine Learning", "Parametric Contracts", "REST APIs"].map((t, i) => (
                    <span key={i} className="rounded bg-white/5 px-2 py-0.5 text-[11px] font-mono text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="https://github.com/harshitkhanna16/kavachgo-devtrails"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-white/10 active:scale-95"
                >
                  <GitHubIcon className="h-4 w-4" />
                  <span>View Repository</span>
                  <ExternalLink className="h-3.5 w-3.5 ml-1 text-zinc-400" />
                </a>
              </div>
            </div>

            {/* Interactive Parametric Flow Stepper */}
            <div className="flex flex-col justify-center rounded-2xl border border-teal-500/20 bg-black/60 p-6 lg:col-span-6 font-mono text-xs">
              <span className="text-[11px] font-bold text-zinc-200 uppercase tracking-wider mb-4 block">
                PARAMETRIC SETTLEMENT LIFECYCLE (AUTOMATED)
              </span>

              <div className="space-y-3">
                {[
                  { title: "1. User Enrolls", desc: "User connects account & declares telemetry bounds", step: 0 },
                  { title: "2. 10-Feature ML Risk Engine", desc: "Predictive model computes dynamic premium in real-time (+28% accuracy)", step: 1 },
                  { title: "3. Trigger Event Detected", desc: "Automated environmental/operational metric threshold breached", step: 2 },
                  { title: "4. Claim Automation Triggered", desc: "Algorithmic audit completes in sub-200ms without manual review", step: 3 },
                  { title: "5. Settlement Dispatched", desc: "Funds automatically routed to user payout rails", step: 4 },
                ].map((item) => (
                  <div
                    key={item.step}
                    onClick={() => {
                      soundManager.playClick();
                      setKavachStep(item.step);
                    }}
                    className={`cursor-pointer rounded-xl border p-3 transition-all ${
                      kavachStep === item.step
                        ? "border-teal-400 bg-teal-950/30 text-teal-200"
                        : "border-white/5 bg-white/[0.01] text-zinc-400 hover:border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs">{item.title}</span>
                      {kavachStep === item.step && (
                        <span className="rounded bg-teal-400 text-black px-1.5 py-0.2 text-[9px] font-extrabold">ACTIVE STAGE</span>
                      )}
                    </div>
                    <p className="mt-1 text-[11px] text-zinc-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>


        {/* ---------------- PROJECT 4: CREDENTIAL HONEYPOT SYSTEM ---------------- */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-[#080a12] p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            
            <div className="flex flex-col justify-between lg:col-span-6">
              <div>
                <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-0.5 font-mono text-[11px] font-semibold text-red-400">
                  SECURITY DEFENSE &amp; DECEPTION
                </span>

                <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Credential Honeypot System
                </h3>
                <p className="mt-1 text-sm font-mono text-red-300">
                  Active Intrusion Detection &amp; Forensic Logging Architecture
                </p>

                <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                  A security-focused honeypot system designed to simulate authentic corporate login portals, capture unauthorized intrusion attempts, detect planted canary credentials, and alert administrators in real-time.
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3 text-center">
                    <span className="text-[10px] font-mono text-zinc-400">Lockout Policy</span>
                    <p className="text-xl font-bold font-mono text-red-400 mt-0.5">3 Strikes</p>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3 text-center">
                    <span className="text-[10px] font-mono text-zinc-400">Odd-Hour Filter</span>
                    <p className="text-xl font-bold font-mono text-amber-400 mt-0.5">&gt; 12:00 AM</p>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3 text-center">
                    <span className="text-[10px] font-mono text-zinc-400">Alert Dispatch</span>
                    <p className="text-xl font-bold font-mono text-emerald-400 mt-0.5">Nodemailer</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-2 text-xs text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">▸</span>
                    <span>Realistic decoy interface capturing IP addresses, browser headers, and penetration vectors.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">▸</span>
                    <span>Canary credential tripwires triggering immediate containment and admin email notification.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">▸</span>
                    <span>Forensic database logging via MongoDB with detailed audit entries for security incident review.</span>
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {["Node.js", "Express.js", "MongoDB", "Nodemailer", "Security Engineering", "Threat Forensics"].map((t, i) => (
                    <span key={i} className="rounded bg-white/5 px-2 py-0.5 text-[11px] font-mono text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="https://github.com/harshitkhanna16/credential_honeypot_system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-white/10 active:scale-95"
                >
                  <GitHubIcon className="h-4 w-4" />
                  <span>View Repository</span>
                  <ExternalLink className="h-3.5 w-3.5 ml-1 text-zinc-400" />
                </a>
              </div>
            </div>

            {/* Interactive Honeypot Sandbox Simulator */}
            <div className="flex flex-col rounded-2xl border border-red-500/20 bg-black/70 p-6 lg:col-span-6 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4 text-red-400" />
                  <span className="font-bold text-white uppercase">DECOY PORTAL SANDBOX TESTER</span>
                </div>
                <button
                  onClick={resetHoneypot}
                  className="flex items-center gap-1 text-[10px] text-zinc-400 hover:text-white"
                >
                  <RotateCcw className="h-3 w-3" /> Reset
                </button>
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-zinc-950 p-4 space-y-3">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-zinc-400">Failed Attempts:</span>
                  <span className="font-bold text-red-400">{honeypotAttempts} / 3 Strikes</span>
                </div>

                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-zinc-400">Time-of-Day Policy:</span>
                  <span className="text-amber-400 font-semibold">After 12:00 AM (Odd-Hours Active)</span>
                </div>

                <button
                  onClick={simulateHoneypotAttempt}
                  className="w-full rounded-lg bg-red-600/20 border border-red-500/40 py-2.5 font-bold text-red-200 transition-all hover:bg-red-600/30 active:scale-98"
                >
                  Inject Simulated Unauthorized Login Attempt
                </button>

                {honeypotAlertSent && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg border border-red-500/50 bg-red-950/40 p-3 text-[11px] text-red-200 space-y-1"
                  >
                    <div className="flex items-center gap-1.5 font-bold text-red-300">
                      <AlertTriangle className="h-3.5 w-3.5" />
                      <span>INTRUSION LOGGED &amp; CONTAINED</span>
                    </div>
                    <p className="text-[10px] text-zinc-400">
                      Attacker details (IP 192.168.1.104, timestamp 00:14:32) written to MongoDB. Email dispatch initiated via Nodemailer.
                    </p>
                  </motion.div>
                )}
              </div>

              <div className="mt-4 rounded-lg bg-zinc-950 p-3 text-[10px] text-zinc-400">
                <span className="text-zinc-500 block mb-1">// Workflow logic:</span>
                <div>1. Correct credentials → Success Page</div>
                <div>2. Wrong credentials x3 → Access Denied + Forensics + Alert Mail</div>
                <div>3. Login after 12:00 AM → Anomaly Flag + Alert Mail</div>
                <div>4. Planted canary credentials → Immediate Quarantine</div>
              </div>
            </div>

          </div>
        </div>


        {/* ---------------- PROJECT 5: SEQ2SEQ MACHINE TRANSLATION ---------------- */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-[#080a12] p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            
            <div className="flex flex-col justify-between lg:col-span-6">
              <div>
                <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-0.5 font-mono text-[11px] font-semibold text-indigo-400">
                  DEEP LEARNING &amp; ATTENTION MECHANISMS
                </span>

                <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Seq2Seq Machine Translation
                </h3>
                <p className="mt-1 text-sm font-mono text-indigo-300">
                  Encoder-Decoder Architecture with Additive Attention
                </p>

                <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                  Neural machine translation architecture built in TensorFlow/Keras utilizing recurrent encoder-decoder networks augmented with Bahdanau attention over 10,000+ sentence pairs.
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3 text-center">
                    <span className="text-[10px] font-mono text-zinc-400">Training Pairs</span>
                    <p className="text-xl font-bold font-mono text-indigo-400 mt-0.5">10K+</p>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3 text-center">
                    <span className="text-[10px] font-mono text-zinc-400">Attention Type</span>
                    <p className="text-xl font-bold font-mono text-cyan-400 mt-0.5">Bahdanau</p>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3 text-center">
                    <span className="text-[10px] font-mono text-zinc-400">Framework</span>
                    <p className="text-xl font-bold font-mono text-emerald-400 mt-0.5">TensorFlow</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {["Python", "TensorFlow", "Keras", "Seq2Seq", "Bahdanau Attention", "NLP"].map((t, i) => (
                    <span key={i} className="rounded bg-white/5 px-2 py-0.5 text-[11px] font-mono text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="https://github.com/harshitkhanna16/Translator-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-white/10 active:scale-95"
                >
                  <GitHubIcon className="h-4 w-4" />
                  <span>View Repository</span>
                  <ExternalLink className="h-3.5 w-3.5 ml-1 text-zinc-400" />
                </a>
              </div>
            </div>

            {/* Visual Encoder-Attention-Decoder Architecture Pipeline */}
            <div className="flex flex-col justify-center rounded-2xl border border-indigo-500/20 bg-black/60 p-6 lg:col-span-6 font-mono text-xs">
              <span className="text-[11px] font-bold text-zinc-200 uppercase tracking-wider mb-4 block">
                NEURAL ATTENTION PIPELINE FLOW
              </span>

              <div className="flex flex-col gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center">
                  <span className="text-zinc-400 text-[10px] block">SOURCE SENTENCE TOKENS</span>
                  <span className="font-bold text-white text-xs mt-1 block">Input Language Vector Embedding</span>
                </div>

                <div className="text-center text-zinc-600 text-sm">↓</div>

                <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/30 p-3 text-center">
                  <span className="text-cyan-300 text-[10px] block">BIDIRECTIONAL ENCODER</span>
                  <span className="font-bold text-white text-xs mt-1 block">Sequential Hidden State Computations (h₁, h₂, ..., hₙ)</span>
                </div>

                <div className="text-center text-zinc-600 text-sm">↓</div>

                <div className="rounded-xl border border-indigo-500/40 bg-indigo-950/40 p-3 text-center shadow-lg shadow-indigo-950/30">
                  <span className="text-indigo-300 text-[10px] font-bold block">BAHDANAU ADDITIVE ATTENTION</span>
                  <span className="font-bold text-white text-xs mt-1 block">Dynamic Context Vector α(sᵢ₋₁, hⱼ) Alignment Weights</span>
                </div>

                <div className="text-center text-zinc-600 text-sm">↓</div>

                <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/30 p-3 text-center">
                  <span className="text-emerald-300 text-[10px] block">RECURRENT DECODER &amp; BEAM SEARCH</span>
                  <span className="font-bold text-white text-xs mt-1 block">Target Language Output Generation</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
