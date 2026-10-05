"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<"default" | "hover" | "view" | "drag" | "link">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Detect touch / coarse pointer devices to gracefully disable custom cursor
    if (typeof window !== "undefined") {
      const hasTouch = window.matchMedia("(pointer: coarse)").matches;
      setIsTouchDevice(hasTouch);
      if (hasTouch) return;

      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);

        const target = e.target as HTMLElement | null;
        if (!target) return;

        const cursorType = target.closest("[data-cursor]")?.getAttribute("data-cursor");
        if (cursorType === "view") {
          setCursorState("view");
        } else if (cursorType === "drag") {
          setCursorState("drag");
        } else if (cursorType === "link" || target.closest("a, button, [role='button']")) {
          setCursorState("hover");
        } else {
          setCursorState("default");
        }
      };

      const handleMouseLeave = () => setIsVisible(false);
      const handleMouseEnter = () => setIsVisible(true);

      window.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseleave", handleMouseLeave);
        document.removeEventListener("mouseenter", handleMouseEnter);
      };
    }
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* Small center dot */}
      <motion.div
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-cyan-400"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: cursorState === "hover" ? 0 : 1,
          opacity: cursorState === "hover" ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Outer interactive ring */}
      <motion.div
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full border border-cyan-400/50 backdrop-blur-[1px] transition-colors ${
          cursorState === "view"
            ? "h-14 w-14 bg-cyan-500/20 border-cyan-400 text-[10px] font-mono tracking-widest text-cyan-200"
            : cursorState === "drag"
            ? "h-14 w-14 bg-indigo-500/20 border-indigo-400 text-[10px] font-mono tracking-widest text-indigo-200"
            : cursorState === "hover"
            ? "h-10 w-10 bg-cyan-500/10 border-cyan-400/80"
            : "h-7 w-7 bg-transparent border-white/20"
        }`}
        animate={{
          x: cursorState === "view" || cursorState === "drag"
            ? mousePosition.x - 28
            : cursorState === "hover"
            ? mousePosition.x - 20
            : mousePosition.x - 14,
          y: cursorState === "view" || cursorState === "drag"
            ? mousePosition.y - 28
            : cursorState === "hover"
            ? mousePosition.y - 20
            : mousePosition.y - 14,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.2 }}
      >
        {cursorState === "view" && <span>VIEW</span>}
        {cursorState === "drag" && <span>DRAG</span>}
      </motion.div>
    </div>
  );
}
