"use client";

import { motion } from "framer-motion";
import { CodeWindow } from "@/components/CodeWindow";
import { MCMonogram } from "@/components/MCMonogram";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      <div className="pointer-events-none absolute left-1/2 top-24 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[150px] sm:h-[44rem] sm:w-[44rem]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />

      <div className="section-shell relative flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 2.45, duration: 0.72, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="grid h-14 w-14 place-items-center rounded-full border border-white/[0.08] bg-white/[0.03] shadow-[0_0_60px_rgba(255,122,26,0.14)] backdrop-blur-xl">
            <MCMonogram className="h-9 w-9" />
          </div>
          <p className="eyebrow mt-8">markclaude.sk</p>
          <h1 className="mt-7 max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-7xl lg:text-[5.45rem]">
            Moderné weby,<br /> ktoré majú charakter.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Od prvého návrhu až po posledný riadok kódu tvorím rýchle, spoľahlivé a moderné digitálne riešenia.
          </p>

          <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-accent px-7 py-3.5 text-center text-sm font-semibold text-white shadow-orange transition hover:bg-[#ff8a35]"
            >
              Pozrieť projekty
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:border-accent/50 hover:text-accent"
            >
              Kontaktovať
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ delay: 2.78, duration: 0.72, ease: "easeOut" }}
          className="mt-14 w-full max-w-3xl lg:max-w-2xl lg:self-end lg:pr-10"
        >
          <CodeWindow compact />
        </motion.div>
      </div>
    </section>
  );
}
