"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
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
          className="rounded-full border border-accent/30 bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-orange transition hover:bg-[#ff8a35] sm:px-5"
        >
          Konzultácia
        </a>
      </motion.nav>
    </motion.header>
  );
}
