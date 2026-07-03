"use client";

import { motion } from "framer-motion";

const lines: Array<{
  indent: number;
  tokens: Array<[string, string]>;
}> = [
  {
    indent: 0,
    tokens: [
      ["const", "text-[#C586C0]"],
      [" developer ", "text-[#9CDCFE]"],
      ["= ", "text-white/55"],
      ["{", "text-white/70"],
    ],
  },
  {
    indent: 1,
    tokens: [
      ["name", "text-[#9CDCFE]"],
      [": ", "text-white/55"],
      ['"Marek"', "text-[#CE9178]"],
      [",", "text-white/45"],
    ],
  },
  {
    indent: 1,
    tokens: [
      ["brand", "text-[#9CDCFE]"],
      [": ", "text-white/55"],
      ['"markclaude.sk"', "text-[#CE9178]"],
      [",", "text-white/45"],
    ],
  },
  {
    indent: 1,
    tokens: [
      ["focus", "text-[#9CDCFE]"],
      [": ", "text-white/55"],
      ["[", "text-white/60"],
      ['"Weby"', "text-[#CE9178]"],
      [", ", "text-white/45"],
      ['"Aplikácie"', "text-[#CE9178]"],
      [", ", "text-white/45"],
      ['"Systémy"', "text-[#CE9178]"],
      ["],", "text-white/60"],
    ],
  },
  {
    indent: 1,
    tokens: [
      ["style", "text-[#9CDCFE]"],
      [": ", "text-white/55"],
      ['"clean & fast"', "text-[#CE9178]"],
    ],
  },
  {
    indent: 0,
    tokens: [["}", "text-white/70"]],
  },
];

type CodeWindowProps = {
  compact?: boolean;
};

export function CodeWindow({ compact = false }: CodeWindowProps) {
  return (
    <div data-code-window="true" className="relative mx-auto w-full lg:mx-0">
      <div className="pointer-events-none absolute inset-[-5rem] rounded-full bg-[radial-gradient(circle,rgba(255,122,26,0.3),transparent_64%)] blur-3xl" />
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="group relative overflow-hidden rounded-[2rem] border border-white/[0.06] bg-[#121317]/88 shadow-[0_42px_150px_rgba(0,0,0,0.68)] backdrop-blur-2xl transition-colors duration-300 hover:border-accent/30"
      >
        <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.018] px-5 py-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="rounded-full border border-white/[0.06] bg-white/[0.025] px-3 py-1 text-[11px] text-white/42">
            developer.ts
          </div>
        </div>

        <div className="flex">
          <div className="hidden w-12 shrink-0 border-r border-white/[0.05] bg-black/10 sm:block" aria-hidden="true">
            <div className="mx-auto mt-6 h-4 w-4 rounded border border-white/[0.08]" />
            <div className="mx-auto mt-4 h-4 w-4 rounded border border-accent/22 bg-accent/10" />
            <div className="mx-auto mt-4 h-4 w-4 rounded border border-white/[0.08]" />
          </div>
          <div className={compact ? "relative min-w-0 flex-1 p-5 sm:p-6" : "relative min-w-0 flex-1 p-6 sm:p-8 lg:p-10"}>
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.018)_1px,transparent_1px)] bg-[length:100%_2rem]" />
            <div className="relative space-y-4 overflow-x-auto font-mono text-[11px] leading-6 sm:text-[14px] lg:text-[15px]">
              {lines.map((line, index) => (
                <motion.div
                  key={line.tokens.map(([text]) => text).join("")}
                  initial={{ opacity: 0, y: 8, filter: "blur(5px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.34 }}
                  className="grid min-w-max grid-cols-[1.65rem_1fr] gap-3 sm:grid-cols-[2rem_1fr] sm:gap-4"
                >
                  <span className="select-none text-right text-white/18">{String(index + 1).padStart(2, "0")}</span>
                  <span style={{ paddingLeft: line.indent * 18 }}>
                    {line.tokens.map(([text, className], tokenIndex) => (
                      <span key={`${text}-${tokenIndex}`} className={className}>
                        {text}
                      </span>
                    ))}
                    {index === lines.length - 1 ? (
                      <motion.span
                        aria-hidden="true"
                        className="ml-1 inline-block h-5 w-[2px] translate-y-1 bg-accent/90"
                        animate={{ opacity: [1, 1, 0, 0] }}
                        transition={{ duration: 1.05, repeat: Infinity, ease: "linear" }}
                      />
                    ) : null}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] bg-black/10 px-5 py-4 sm:px-6">
          <div className="flex items-center justify-between text-xs text-white/34">
            <span>TypeScript</span>
            <span className="text-accent/90">ready</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
