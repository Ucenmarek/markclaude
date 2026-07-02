"use client";

import { motion } from "framer-motion";

type MCMonogramProps = {
  className?: string;
  draw?: boolean;
};

export function MCMonogram({ className, draw = false }: MCMonogramProps) {
  const lineTransition = { duration: 0.9, ease: "easeOut" as const };

  return (
    <motion.svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      aria-hidden="true"
      initial={draw ? { opacity: 0, scale: 0.96 } : false}
      animate={draw ? { opacity: 1, scale: 1 } : undefined}
      transition={{ duration: 0.45, ease: "easeOut" }}
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
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        initial={draw ? { pathLength: 0, opacity: 0 } : false}
        animate={draw ? { pathLength: 1, opacity: 1 } : undefined}
        transition={{ ...lineTransition, delay: draw ? 0.52 : 0 }}
      />
      <motion.circle
        cx="95"
        cy="88"
        r="5"
        fill="#FF7A1A"
        initial={draw ? { opacity: 0, scale: 0.2 } : false}
        animate={draw ? { opacity: 1, scale: 1 } : undefined}
        transition={{ duration: 0.35, delay: draw ? 1.18 : 0, ease: "easeOut" }}
      />
    </motion.svg>
  );
}
