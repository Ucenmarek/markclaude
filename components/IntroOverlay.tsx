"use client";

import { motion } from "framer-motion";
import { MCMonogram } from "@/components/MCMonogram";

export function IntroOverlay() {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[100] grid place-items-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.25, duration: 0.42, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0 bg-technical-grid opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 0.36 }}
      />
      <motion.div
        className="absolute h-72 w-72 rounded-full bg-accent/12 blur-[90px]"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.48, ease: "easeOut" }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.72, ease: "easeOut" }}
        className="relative"
      >
        <MCMonogram draw className="h-28 w-28 drop-shadow-[0_0_36px_rgba(255,122,26,0.24)]" />
      </motion.div>
    </motion.div>
  );
}
