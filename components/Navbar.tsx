"use client";

import Link from "next/link";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { MarkClaudeLogo } from "@/components/MarkClaudeLogo";
import { useIntroPlaying } from "@/components/IntroContext";

const navItems = [
  { href: "#about", label: "O mne" },
  { href: "#services", label: "Služby" },
  { href: "#projects", label: "Projekty" },
  { href: "#process", label: "Proces" },
  { href: "#contact", label: "Kontakt" },
];

export function Navbar() {
  const playIntro = useIntroPlaying();
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 120], ["rgba(9,9,11,0.42)", "rgba(9,9,11,0.72)"]);
  const borderColor = useTransform(scrollY, [0, 120], ["rgba(255,255,255,0.06)", "rgba(255,255,255,0.10)"]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, filter: "blur(6px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ delay: playIntro ? 6.2 : 0, duration: 0.32, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5"
    >
      <motion.nav
        style={{ backgroundColor: background, borderColor }}
        className="section-shell flex h-[6rem] items-center justify-between rounded-full border shadow-glass backdrop-blur-2xl"
      >
        <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label="markclaude.sk domov">
          <span
            id="navbar-logo-target"
            className="grid h-20 w-20 place-items-center rounded-full border border-white/[0.08] bg-black transition group-hover:border-accent/40"
          >
            <motion.span
              className="block h-[4.35rem] w-[3.45rem] drop-shadow-[0_0_18px_rgba(255,90,18,0.18)]"
              initial={{ opacity: 0, scale: 0.82 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: playIntro ? 6.72 : 0, duration: 0.28, ease: "easeOut" }}
              aria-hidden="true"
            >
              <MarkClaudeLogo className="h-full w-full" />
            </motion.span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/62 transition hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-accent/30 bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-orange transition hover:bg-[#ff8a35] md:inline-flex"
        >
          Konzultácia
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Zavrieť menu" : "Otvoriť menu"}
          aria-expanded={isOpen}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white transition hover:border-accent/40 hover:text-accent md:hidden"
        >
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
            <motion.path
              d="M3 5.5H17"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              animate={isOpen ? { d: "M4 4L16 16" } : { d: "M3 5.5H17" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
            <motion.path
              d="M3 14.5H17"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              animate={isOpen ? { d: "M4 16L16 4" } : { d: "M3 14.5H17" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
          </svg>
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="section-shell mt-3 md:hidden"
          >
            <div className="flex flex-col gap-1 rounded-[1.75rem] border border-white/[0.08] bg-[#111114]/95 p-4 shadow-glass backdrop-blur-2xl">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base text-white/75 transition hover:bg-white/[0.05] hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-white shadow-orange transition hover:bg-[#ff8a35]"
              >
                Konzultácia
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
