"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function SiteBackground() {
  const mouseX = useMotionValue(58);
  const mouseY = useMotionValue(22);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 28, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 28, mass: 0.5 });
  const glow = useMotionTemplate`radial-gradient(circle at ${smoothX}% ${smoothY}%, rgba(255, 122, 26, 0.18), transparent 34rem)`;

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      mouseX.set((event.clientX / window.innerWidth) * 100);
      mouseY.set((event.clientY / window.innerHeight) * 100);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-technical-grid opacity-40" />
      <motion.div className="absolute inset-0" style={{ background: glow }} />
      <div className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[150px]" />
      <div className="noise-overlay absolute inset-0 opacity-[0.035]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,9,11,0.74)_76%)]" />
    </div>
  );
}
