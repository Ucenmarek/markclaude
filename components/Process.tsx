"use client";

import { motion } from "framer-motion";

const steps = [
  ["01", "Smer", "Cieľ, obsah, publikum a technické rozhodnutia."],
  ["02", "Rozhranie", "Štruktúra, typografia, komponenty a pokojný vizuálny systém."],
  ["03", "Vývoj", "Rýchly frontend, čistý kód, responzivita a detailné ladenie."],
  ["04", "Spustenie", "Finálne testy, výkon, nasadenie a odporúčania pre ďalší rast."],
];

export function Process() {
  return (
    <section id="process" className="section-band">
      <div className="section-shell">
        <p className="eyebrow">Proces spolupráce</p>
        <h2 className="display-title mt-6">
          Menej krokov.
          <br />
          Viac jasnosti v každom z nich<span className="text-accent">.</span>
        </h2>

        <div className="mt-20 border-t border-white/[0.08]">
          {steps.map(([number, title, text], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.06, duration: 0.42 }}
              className="grid gap-5 border-b border-white/[0.08] py-8 md:grid-cols-[7rem_1fr_1.3fr] md:py-11"
            >
              <p className="text-sm text-accent">{number}</p>
              <h3 className="text-3xl font-semibold tracking-tight text-white">{title}</h3>
              <p className="leading-7 text-muted">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
