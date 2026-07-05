"use client";

import { motion } from "framer-motion";

const services = [
  ["Webstránky", "Moderné prezentačné weby, ktoré pôsobia dôveryhodne a načítajú sa rýchlo."],
  ["Webové aplikácie", "Produktové rozhrania, portály a interné nástroje s čistou komponentovou logikou."],
  ["Systémy", "Praktické riešenia pre procesy, dáta a každodennú prácu tímu."],
];

export function Services() {
  return (
    <section id="services" className="section-band">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="eyebrow">Služby</p>
            <h2 className="display-title mt-6">
              Staviam digitálne produkty s pokojnou presnosťou<span className="text-accent">.</span>
            </h2>
          </div>

          <div className="border-t border-white/[0.08]">
            {services.map(([title, text], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.07, duration: 0.42 }}
                className="grid gap-6 border-b border-white/[0.08] py-8 sm:grid-cols-[9rem_1fr] sm:py-10"
              >
                <p className="text-sm text-accent">0{index + 1}</p>
                <div>
                  <h3 className="text-3xl font-semibold tracking-tight text-white">{title}</h3>
                  <p className="mt-4 max-w-2xl leading-7 text-muted">{text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
