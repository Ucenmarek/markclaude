"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="section-band pb-20 sm:pb-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="quiet-panel relative overflow-hidden rounded-[1.75rem] p-7 sm:p-10 lg:p-14"
        >
          <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-accent/12 blur-[90px]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="eyebrow">Kontakt</p>
              <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Máš projekt, ktorý má pôsobiť kvalitne ešte pred prvým klikom?
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-xl text-lg leading-8 text-muted">
                Napíš pár viet o cieli. Odpoviem návrhom najbližšieho kroku a realistickým smerom riešenia.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:justify-end">
                <a
                  href="mailto:hello@markclaude.sk"
                  className="rounded-full bg-accent px-7 py-3.5 text-center text-sm font-semibold text-white shadow-orange transition hover:bg-[#ff8a35]"
                >
                  hello@markclaude.sk
                </a>
                <a
                  href="mailto:hello@markclaude.sk?subject=Konzultacia projektu"
                  className="rounded-full border border-white/[0.08] px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:border-accent/50 hover:text-accent"
                >
                  Konzultácia
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
