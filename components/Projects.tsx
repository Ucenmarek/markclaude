"use client";

import { motion } from "framer-motion";

const projects = [
  ["Firemný web", "Značka, ponuka a dôveryhodnosť v rýchlom modernom webe."],
  ["Klientsky portál", "Jasný priestor pre dokumenty, stav projektu a komunikáciu."],
  ["Interný dashboard", "Prehľad pre tím, ktorý potrebuje konať rýchlo a bez chaosu."],
];

export function Projects() {
  return (
    <section id="projects" className="section-band">
      <div className="section-shell">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow">Projekty</p>
          <h2 className="display-title mx-auto mt-6">Nie ukážky pre galériu. Dôkaz, že detail rozhoduje.</h2>
        </div>

        <div className="mx-auto mt-20 grid max-w-6xl gap-5 lg:grid-cols-3">
          {projects.map(([title, text], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.46 }}
              className="quiet-panel group rounded-2xl p-5 sm:p-6"
            >
              <div className="aspect-[1.35] rounded-xl border border-white/[0.08] bg-background p-5">
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <span className="h-2 w-16 bg-white/12" />
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <div className="space-y-3">
                    <span className="block h-3 w-3/4 bg-white/14" />
                    <span className="block h-3 w-1/2 bg-white/8" />
                    <span className="block h-3 w-2/3 bg-accent/45" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <span className="h-12 border border-white/[0.08]" />
                    <span className="h-12 border border-white/[0.08]" />
                    <span className="h-12 border border-white/[0.08]" />
                  </div>
                </div>
              </div>
              <h3 className="mt-7 text-2xl font-semibold tracking-tight text-white">{title}</h3>
              <p className="mt-4 leading-7 text-muted">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
