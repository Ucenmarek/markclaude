"use client";

import { motion } from "framer-motion";

const technologies = [
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 8.5V16M9 8.5L15.5 16.5V8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="currentColor" strokeWidth="1.2" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <rect x="2.5" y="2.5" width="19" height="19" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 9.5H11.5M9.25 9.5V16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M17.6 9.9C17.1 9.5 16.5 9.3 15.9 9.3C14.9 9.3 14.2 9.9 14.2 10.6C14.2 12.4 17.7 11.5 17.7 13.9C17.7 15 16.8 15.7 15.6 15.7C14.8 15.7 14.1 15.4 13.6 14.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M6 10.5C6.6 8 8 6.5 10.5 6.5C13.7 6.5 14 9 15.5 9.5C16.7 9.9 17.7 9.4 18 8C17.4 10.5 16 12 13.5 12C10.3 12 10 9.5 8.5 9C7.3 8.6 6.3 9.1 6 10.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M2 16.5C2.6 14 4 12.5 6.5 12.5C9.7 12.5 10 15 11.5 15.5C12.7 15.9 13.7 15.4 14 14C13.4 16.5 12 18 9.5 18C6.3 18 6 15.5 4.5 15C3.3 14.6 2.3 15.1 2 16.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Framer Motion",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path d="M5 3H19V11H12L19 18V21H5V13H12L5 6V3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M13 2L4 14H11.5L11 22L20 10H12.5L13 2Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function TechStack() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-9"
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/35">
        Technológie, s ktorými pracujem
      </p>
      <ul className="mt-4 flex flex-wrap items-center gap-2.5">
        {technologies.map((tech) => (
          <li key={tech.name}>
            <span
              title={tech.name}
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-white/50 transition hover:border-accent/40 hover:text-accent"
            >
              {tech.icon}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
