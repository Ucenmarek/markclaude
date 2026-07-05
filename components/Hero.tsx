"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { Button } from "@/components/Button";
import { CodeWindow } from "@/components/CodeWindow";
import { Glow } from "@/components/Glow";
import { MarkClaudeLogo } from "@/components/MarkClaudeLogo";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { TechStack } from "@/components/TechStack";
import { useIntroPlaying } from "@/components/IntroContext";

const headlineLines = ["Moderné weby,", "ktoré majú", "charakter."];

export function Hero() {
  const playIntro = useIntroPlaying();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 26, mass: 0.45 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 26, mass: 0.45 });
  const editorX = useTransform(smoothX, [-1, 1], [-8, 8]);
  const editorY = useTransform(smoothY, [-1, 1], [8, -8]);
  const glowX = useTransform(smoothX, [-1, 1], [-30, 30]);
  const glowY = useTransform(smoothY, [-1, 1], [30, -30]);
  const logoX = useTransform(smoothX, [-1, 1], [-10, 10]);
  const logoY = useTransform(smoothY, [-1, 1], [8, -8]);

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#09090B] pt-[100px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pointer-events-none absolute inset-0 text-white/[0.02]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="hero-grid" width="84" height="84" patternUnits="userSpaceOnUse">
              <path d="M 84 0 L 0 0 0 84" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <motion.div
        className="pointer-events-none absolute left-2 top-24 z-[1] h-44 w-44 opacity-50 sm:left-8 sm:top-28 sm:h-56 sm:w-56 lg:left-[7%] lg:top-[17%] lg:h-60 lg:w-60"
        style={{ x: logoX, y: logoY }}
        aria-hidden="true"
      >
        <MarkClaudeLogo
          tone="orange"
          className="h-full w-full opacity-30 drop-shadow-[0_0_42px_rgba(255,122,26,0.28)]"
        />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute right-[-12rem] top-[23%] hidden h-[52rem] w-[52rem] opacity-100 sm:block lg:right-[1%]"
        style={{ x: glowX, y: glowY }}
      >
        <Glow className="inset-0" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-[7%] top-[11%] hidden h-32 w-32 rounded-full bg-accent/22 blur-[54px] sm:block"
        style={{ x: glowX, y: glowY }}
        aria-hidden="true"
      />
      <NoiseOverlay />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_48%,rgba(255,122,26,0.15),transparent_40rem),radial-gradient(circle_at_15%_28%,rgba(255,122,26,0.075),transparent_18rem),linear-gradient(180deg,rgba(9,9,11,0.04),rgba(9,9,11,0.9)_95%)]" />

      <div className="section-shell relative z-10 grid min-h-[calc(100vh-8rem)] items-center gap-20 pb-24 sm:pb-28 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24 lg:pb-32">
        <div className="relative max-w-[42rem] lg:pl-8 xl:pl-14">
          <h1 className="mt-8 text-[clamp(2.35rem,9.5vw,3.95rem)] font-light leading-[0.96] tracking-tight text-white sm:text-[4.65rem] lg:text-[5rem] xl:text-[5.45rem]">
            {headlineLines.map((line, index) => (
              <motion.span
                key={line}
                className="block whitespace-nowrap"
                initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: playIntro ? 2.24 + index * 0.12 : index * 0.06,
                  duration: 0.72,
                  ease: "easeOut",
                }}
              >
                {index === headlineLines.length - 1 ? (
                  <>
                    charakter<span className="text-accent">.</span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(7px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: playIntro ? 2.6 : 0.12, duration: 0.62, ease: "easeOut" }}
            className="mt-7 max-w-[40rem] text-base leading-7 text-muted sm:text-lg sm:leading-8"
          >
            Od prvého návrhu až po posledný riadok kódu tvorím rýchle webové stránky, aplikácie a interné systémy, ktoré pomáhajú firmám rásť.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(7px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: playIntro ? 2.9 : 0.22, duration: 0.58, ease: "easeOut" }}
            className="mt-11 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#projects">Pozrieť projekty</Button>
            <Button href="#contact" variant="secondary">
              Kontaktovať
            </Button>
          </motion.div>

          <TechStack />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 42, scale: 0.96, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ delay: playIntro ? 3.0 : 0.28, duration: 0.82, ease: "easeOut" }}
          style={{ x: editorX, y: editorY }}
          className="relative hidden justify-self-end [perspective:1200px] lg:block lg:w-full lg:max-w-[47rem]"
        >
          <div className="origin-center" style={{ transform: "rotateY(-7deg) rotateZ(1.4deg) scale(1.04)" }}>
            <CodeWindow />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.98, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ delay: playIntro ? 3.0 : 0.28, duration: 0.72, ease: "easeOut" }}
          className="relative lg:hidden"
        >
          <CodeWindow compact />
        </motion.div>
      </div>
    </section>
  );
}
