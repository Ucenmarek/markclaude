"use client";

import { motion } from "framer-motion";

type MCMonogramProps = {
  className?: string;
  draw?: boolean;
  tone?: "default" | "orange";
};

export function MCMonogram({ className, draw = false, tone = "default" }: MCMonogramProps) {
  const lineTransition = { duration: 0.54, ease: "easeOut" as const };
  const secondaryStroke = tone === "orange" ? "#FF7A1A" : "white";

  return (
    <motion.svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      aria-hidden="true"
      initial={draw ? { opacity: 0, scale: 0.96 } : false}
      animate={draw ? { opacity: 1, scale: 1 } : undefined}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <motion.path
        d="M32 86V34L60 64L88 34V86"
        stroke="#FF7A1A"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={draw ? { pathLength: 0, opacity: 0 } : false}
        animate={draw ? { pathLength: 1, opacity: 1 } : undefined}
        transition={lineTransition}
      />
      <motion.path
        d="M82 25C69 15 49 15 35 27C18 42 17 75 35 91C49 104 70 104 84 92"
        stroke={secondaryStroke}
        strokeWidth="8"
        strokeLinecap="round"
        initial={draw ? { pathLength: 0, opacity: 0 } : false}
        animate={draw ? { pathLength: 1, opacity: 1 } : undefined}
        transition={{ ...lineTransition, delay: draw ? 0.28 : 0 }}
      />
      <motion.circle
        cx="95"
        cy="88"
        r="5"
        fill="#FF7A1A"
        initial={draw ? { opacity: 0, scale: 0.2 } : false}
        animate={draw ? { opacity: 1, scale: 1 } : undefined}
        transition={{ duration: 0.22, delay: draw ? 0.68 : 0, ease: "easeOut" }}
      />
    </motion.svg>
  );
}
