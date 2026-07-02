"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { Button } from "@/components/Button";
import { CodeWindow } from "@/components/CodeWindow";
import { Glow } from "@/components/Glow";
import { NoiseOverlay } from "@/components/NoiseOverlay";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 24, mass: 0.4 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 24, mass: 0.4 });
  const editorX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const editorY = useTransform(smoothY, [-1, 1], [10, -10]);
  const glowX = useTransform(smoothX, [-1, 1], [-28, 28]);
  const glowY = useTransform(smoothY, [-1, 1], [20, -20]);

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
      className="relative h-screen overflow-hidden bg-background pt-24 sm:pt-28 lg:pt-32"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pointer-events-none absolute inset-0 text-white/[0.045]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="hero-grid" width="72" height="72" patternUnits="userSpaceOnUse">
              <path d="M 72 0 L 0 0 0 72" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <motion.div className="pointer-events-none absolute right-[8%] top-[22%] h-[34rem] w-[34rem]" style={{ x: glowX, y: glowY }}>
        <Glow className="inset-0" />
      </motion.div>
      <NoiseOverlay />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_48%,rgba(255,122,26,0.12),transparent_34rem),radial-gradient(circle_at_center,transparent_0%,rgba(9,9,11,0.78)_78%)]" />

      <div className="section-shell relative z-10 grid h-full items-center gap-12 pb-10 lg:grid-cols-[46fr_54fr] lg:gap-16 lg:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 2.32, duration: 0.72, ease: "easeOut" }}
          className="max-w-[34rem]"
        >
          <p className="eyebrow">markclaude.sk</p>
          <h1 className="mt-7 text-[3.35rem] font-semibold leading-[0.94] tracking-tight text-white sm:text-7xl lg:text-[5.8rem] xl:text-[6rem]">
            Moderné weby,<br />
            ktoré majú<br />
            charakter.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8 lg:max-w-[38rem]">
            Od prvého návrhu až po posledný riadok kódu tvorím rýchle, spoľahlivé a moderné digitálne riešenia.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#projects">Pozrieť projekty</Button>
            <Button href="#contact" variant="secondary">
              Kontaktovať
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.99, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ delay: 2.5, duration: 0.78, ease: "easeOut" }}
          style={{ x: editorX, y: editorY }}
          className="relative hidden justify-self-end lg:block lg:w-full lg:max-w-[43rem]"
        >
          <CodeWindow />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 2.5, duration: 0.68, ease: "easeOut" }}
          className="relative lg:hidden"
        >
          <CodeWindow compact />
        </motion.div>
      </div>
    </section>
  );
}
