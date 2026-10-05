"use client";

import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import WhatIBuildSection from "@/sections/WhatIBuildSection";
import CoreStackSection from "@/sections/CoreStackSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectsShowcaseSection from "@/sections/ProjectsShowcaseSection";
import EngineeringGraphSection from "@/sections/EngineeringGraphSection";
import AchievementsEducationSection from "@/sections/AchievementsEducationSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050508] text-white selection:bg-cyan-500/20 selection:text-white">
      {/* Desktop Reactive Custom Cursor */}
      <CustomCursor />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Sections Assembly */}
      <HeroSection />
      <AboutSection />
      <WhatIBuildSection />
      <CoreStackSection />
      <ExperienceSection />
      <ProjectsShowcaseSection />
      <EngineeringGraphSection />
      <AchievementsEducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
