"use client";

import { motion } from "framer-motion";
import { MCMonogram } from "@/components/MCMonogram";

export function IntroOverlay() {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[100] grid place-items-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.15, duration: 0.75, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0 bg-technical-grid opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="absolute h-72 w-72 rounded-full bg-accent/16 blur-[90px]"
        initial={{ opacity: 0, scale: 0.82 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
      <motion.div
        initial={{ y: 0, scale: 1 }}
        animate={{ y: [-2, -2, -42], scale: [1, 1, 0.34] }}
        transition={{ times: [0, 0.72, 1], duration: 2.05, ease: "easeInOut" }}
        className="relative"
      >
        <MCMonogram draw className="h-28 w-28 drop-shadow-[0_0_42px_rgba(255,122,26,0.28)]" />
      </motion.div>
    </motion.div>
  );
}
