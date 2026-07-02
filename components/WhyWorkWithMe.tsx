"use client";

import { motion } from "framer-motion";

const reasons = [
  ["01", "Vizuál aj kód riešim ako jeden produkt.", "Stránka nemá iba vyzerať dobre. Musí byť rýchla, čitateľná, udržiavateľná a pripravená na ďalšie rozhodnutia."],
  ["02", "Menej šumu, viac dôvery.", "Preferujem presnú typografiu, priestor, kontrast a detail pred lacnými efektmi, ktoré starnú po prvom týždni."],
  ["03", "Výsledok má pôsobiť ako kvalita.", "Každá sekcia má mať dôvod. Každý komponent má mať hranicu. Každá interakcia má byť pokojná."],
];

export function WhyWorkWithMe() {
  return (
    <section className="section-band" id="why">
      <div className="section-shell">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow">Prečo spolupracovať práve so mnou</p>
          <h2 className="display-title mx-auto mt-6">Web ako dôkaz remesla, nie ako vyplnená šablóna.</h2>
        </div>

        <div className="mx-auto mt-20 grid max-w-6xl gap-4 lg:grid-cols-3">
          {reasons.map(([number, title, text], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.46 }}
              className="quiet-panel rounded-2xl p-7 sm:p-8"
            >
              <p className="text-xs text-accent">{number}</p>
              <h3 className="mt-12 text-2xl font-semibold tracking-tight text-white">{title}</h3>
              <p className="mt-5 leading-7 text-muted">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
