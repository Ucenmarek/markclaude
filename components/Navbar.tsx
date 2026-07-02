"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { MCMonogram } from "@/components/MCMonogram";

const navItems = [
  { href: "#services", label: "Služby" },
  { href: "#projects", label: "Projekty" },
  { href: "#process", label: "Proces" },
  { href: "#contact", label: "Kontakt" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 120], ["rgba(9,9,11,0.42)", "rgba(9,9,11,0.72)"]);
  const borderColor = useTransform(scrollY, [0, 120], ["rgba(255,255,255,0.06)", "rgba(255,255,255,0.10)"]);

  return (
    <motion.header
      initial={{ y: -18, opacity: 0, filter: "blur(6px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ delay: 2.12, duration: 0.58, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5"
    >
      <motion.nav
        style={{ backgroundColor: background, borderColor }}
        className="section-shell flex h-[4.5rem] items-center justify-between rounded-full border shadow-glass backdrop-blur-2xl"
      >
        <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label="markclaude.sk domov">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-white/[0.08] bg-white/[0.03] transition group-hover:border-accent/40">
            <MCMonogram className="h-7 w-7" />
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-white/90 sm:block">
            markclaude<span className="text-accent">.sk</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/62 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-accent/30 bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-orange transition hover:bg-[#ff8a35] sm:px-5"
        >
          Konzultácia
        </a>
      </motion.nav>
    </motion.header>
  );
}
