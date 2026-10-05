"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ArrowUpRight, 
  Sparkles, 
  TrendingDown, 
  CheckCircle2, 
  Layers
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { soundManager } from "@/lib/audio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full bg-[#050508] py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-[11px] tracking-wider text-cyan-300 uppercase">
            <Sparkles className="h-3 w-3" />
            <span>Applied Engineering</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            WORK <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">EXPERIENCE</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Professional software engineering internships delivering measured latency reductions, schema normalization, and native iOS systems.
          </p>
        </div>

        {/* Timeline List */}
        <div className="mt-14 space-y-10">
          {PORTFOLIO_DATA.experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              onMouseEnter={() => soundManager.playHover()}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.03]"
            >
              {/* Top Row: Company & Date */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-5">
                <div>
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-400 font-bold text-sm font-mono">
                      {exp.company[0]}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white sm:text-2xl flex items-center gap-2">
                        <span>{exp.company}</span>
                        {exp.github && (
                          <a
                            href={exp.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-500 hover:text-cyan-400 transition-colors"
                            title="View repository"
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        )}
                      </h3>
                      <p className="text-sm font-medium text-cyan-400">
                        {exp.role}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5 rounded-full border border-white/5 bg-white/[0.03] px-3 py-1">
                    <Calendar className="h-3.5 w-3.5 text-zinc-500" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full border border-white/5 bg-white/[0.03] px-3 py-1">
                    <MapPin className="h-3.5 w-3.5 text-zinc-500" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Prominent Impact Metrics Grid */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {exp.metrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className="flex flex-col justify-center rounded-xl border border-white/5 bg-black/40 p-3.5 text-center"
                  >
                    <span className="text-[11px] font-mono text-zinc-400">{metric.label}</span>
                    <span className="mt-1 text-xl font-extrabold font-mono text-white sm:text-2xl">
                      {metric.trend === "down" ? (
                        <span className="text-emerald-400">{metric.value}</span>
                      ) : (
                        <span className="text-cyan-400">{metric.value}</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bullet Details */}
              <div className="mt-6">
                <h4 className="text-xs font-mono tracking-wider uppercase text-zinc-400 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Key Deliverables & Architecture</span>
                </h4>
                <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs leading-relaxed text-zinc-300">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 rounded-lg border border-white/5 bg-white/[0.01] p-3">
                      <span className="mt-0.5 text-cyan-400 font-mono text-xs select-none">▸</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/5 pt-4">
                <span className="text-[11px] font-mono text-zinc-400 mr-2 flex items-center gap-1">
                  <Layers className="h-3 w-3" /> Tech Stack:
                </span>
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
