"use client";

import { motion } from "framer-motion";

const lines = [
  { code: "const developer = {", indent: 0, color: "text-white/70" },
  { code: 'name: "Marek",', indent: 1, color: "text-white" },
  { code: 'brand: "markclaude.sk",', indent: 1, color: "text-accent" },
  { code: 'focus: ["Weby", "Aplikácie", "Systémy"],', indent: 1, color: "text-white" },
  { code: 'style: "clean & fast"', indent: 1, color: "text-white" },
  { code: "}", indent: 0, color: "text-white/70" },
];

type CodeWindowProps = {
  compact?: boolean;
};

export function CodeWindow({ compact = false }: CodeWindowProps) {
  return (
    <div data-code-window="true" className="relative mx-auto w-full lg:mx-0">
      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#0b0b0d]/82 shadow-[0_32px_120px_rgba(0,0,0,0.58)] backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/22" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/14" />
          </div>
          <p className="text-xs text-white/38">developer.config.ts</p>
        </div>

        <div className={compact ? "relative p-5 sm:p-6" : "relative p-6 sm:p-8 lg:p-10"}>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px)] bg-[length:100%_2rem]" />
          <div className="relative space-y-4 font-mono text-[12px] leading-6 sm:text-[14px] lg:text-[15px]">
            {lines.map((line, index) => (
              <motion.div
                key={line.code}
                initial={{ opacity: 0, y: 8, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.34 }}
                className="grid grid-cols-[2rem_1fr] gap-4"
              >
                <span className="select-none text-right text-white/18">{String(index + 1).padStart(2, "0")}</span>
                <span className={line.color} style={{ paddingLeft: line.indent * 18 }}>
                  {line.code}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/[0.08] px-5 py-4 sm:px-6">
          <div className="flex items-center justify-between text-xs text-white/38">
            <span>clean architecture</span>
            <span className="text-accent">ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}
