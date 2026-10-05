"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Zap, 
  Cpu, 
  Database, 
  GraduationCap, 
  TrendingDown, 
  Sparkles,
  Layers,
  ShieldAlert
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

function AnimatedCounter({ targetValue, suffix = "", isDecimal = false }: { targetValue: number; suffix?: string; isDecimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const steps = 60;
    const increment = targetValue / steps;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(start.toFixed(2)) : Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [inView, targetValue, isDecimal]);

  return (
    <span ref={ref} className="font-mono font-bold tracking-tight">
      {isDecimal ? count.toFixed(2) : count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={containerRef} className="relative w-full bg-[#07080e] py-24 sm:py-32">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-25" />
      <div className="pointer-events-none absolute -top-40 right-1/4 h-80 w-80 rounded-full bg-blue-600/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-[11px] tracking-wider text-cyan-300 uppercase">
            <Sparkles className="h-3 w-3" />
            <span>Profile & Ethos</span>
          </div>
          
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            ENGINEER. BUILDER. <span className="text-zinc-500">PROBLEM SOLVER.</span>
          </h2>
        </div>

        {/* Bio Text & Pillars Grid */}
        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Main Editorial Text */}
          <div className="space-y-6 text-base leading-relaxed text-zinc-300 lg:col-span-7 sm:text-lg">
            <p className="font-medium text-white">
              I’m <span className="text-cyan-400 font-semibold">Harshit Khanna</span>, a final-year Computer Science Engineering student at Graphic Era University, graduating in 2027 with a CGPA of 8.45.
            </p>
            <p>
              I enjoy building software at the intersection of backend engineering, AI, infrastructure, and product development. My work ranges from high-performance REST APIs and database optimization to reinforcement-learning simulations, AI-powered applications, cloud infrastructure, and native iOS experiences.
            </p>
            <p className="border-l-2 border-cyan-500/60 pl-4 italic text-zinc-400">
              &ldquo;I care about writing software that is not only functional, but scalable, measurable, secure, and thoughtfully designed.&rdquo;
            </p>

            {/* Core Values Cards */}
            <div className="mt-8 grid grid-cols-2 gap-3 pt-4 sm:grid-cols-4">
              {[
                { title: "Scalability", desc: "Designed for high concurrency", icon: Layers },
                { title: "Measurability", desc: "Benchmarked latency & throughput", icon: TrendingDown },
                { title: "Security", desc: "Defensive by design", icon: ShieldAlert },
                { title: "Polish", desc: "Apple & Linear level UX", icon: Sparkles },
              ].map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-left">
                    <Icon className="h-4 w-4 text-cyan-400 mb-1.5" />
                    <h3 className="text-xs font-semibold text-white">{val.title}</h3>
                    <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Animated Statistics Panel */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 lg:col-span-5 backdrop-blur-sm">
            <div className="border-b border-white/10 pb-4">
              <span className="font-mono text-xs tracking-wider text-zinc-400 uppercase">
                MEASURABLE ENGINEERING EVIDENCE
              </span>
            </div>

            <div className="mt-6 space-y-5">
              {/* Stat 1: 8.45 CGPA */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-zinc-400">Academic Standing</span>
                  <p className="text-sm font-semibold text-white">Graphic Era University</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-cyan-400 sm:text-3xl">
                    <AnimatedCounter targetValue={8.45} isDecimal={true} />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400">CGPA (Graduating 2027)</span>
                </div>
              </div>

              {/* Stat 2: 40% P95 Latency Reduction */}
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div>
                  <span className="text-xs text-zinc-400">Bluestock Internship</span>
                  <p className="text-sm font-semibold text-white">P95 Latency Reduction</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-emerald-400 sm:text-3xl">
                    <AnimatedCounter targetValue={40} suffix="% ↓" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400">Under 500ms P95 Target</span>
                </div>
              </div>

              {/* Stat 3: 35% DB Performance Improvement */}
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div>
                  <span className="text-xs text-zinc-400">Relational Optimization</span>
                  <p className="text-sm font-semibold text-white">Database Query Speedup</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-teal-300 sm:text-3xl">
                    <AnimatedCounter targetValue={35} suffix="% ↓" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400">6-Table Schema Normalization</span>
                </div>
              </div>

              {/* Stat 4: 93% ML Accuracy */}
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div>
                  <span className="text-xs text-zinc-400">Data Pipeline Refinement</span>
                  <p className="text-sm font-semibold text-white">Model Classification Accuracy</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-indigo-400 sm:text-3xl">
                    <AnimatedCounter targetValue={93} suffix="%" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400">Elevated from 71% Baseline</span>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-white/5 bg-black/40 p-3.5 text-xs text-zinc-400">
              <span className="font-mono text-cyan-400 font-semibold">2027 Graduate</span> • Actively seeking Software Development Engineer (SDE) roles across distributed backend systems, AI platforms, and cloud infrastructure.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
