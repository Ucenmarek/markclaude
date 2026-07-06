"use client";

import { motion } from "framer-motion";

const facts = [
  {
    title: "Rodinné zázemie",
    text: "Som hrdým otcom dvoch dospelých detí a vďačím za veľkú podporu mojej chápavej manželke, bez ktorej by som sa svojej digitálnej tvorbe nemohol venovať s takým nadšením.",
  },
  {
    title: "Ako vyvíjam",
    text: "Pri programovaní využívam moderný stack (Next.js, Supabase) a aktívne zapájam AI nástroje. Tie mi umožňujú písať čistejší kód a rýchlejšie riešiť komplexné technické výzvy.",
  },
  {
    title: "Osobný prístup",
    text: "Nie som len programátor za monitorom. Som človek z praxe, ktorý k vášmu projektu pristúpi tak, ako by som budoval systém pre vlastnú firmu.",
  },
];

export function AboutMe() {
  return (
    <section
      id="about"
      className="scroll-mt-32 border-t border-white/[0.08] pb-14 pt-8 sm:pb-16 sm:pt-10 lg:pb-20 lg:pt-12"
    >
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow">O mne</p>
            <h2 className="display-title mt-6">
              Technik cez deň. Developer, ktorý stavia s AI<span className="text-accent">.</span>
            </h2>
            <p className="mt-6 max-w-sm leading-7 text-muted">
              Dva svety, jeden prístup: precíznosť z terénu a moderné technológie posilnené AI.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="text-lg leading-8 text-white/90 sm:text-xl">
              Volám sa Marek a môj svet sa skladá z niekoľkých častí, ktoré sa navzájom skvele dopĺňajú.
            </p>
            <p className="mt-6 leading-7 text-muted">
              Môj pracovný deň patrí technickému svetu okenných systémov. Táto práca ma naučila precíznosti,
              zodpovednosti a technickému mysleniu, ktoré musí fungovať v reálnych podmienkach. Vďaka nej
              presne rozumiem potrebám živnostníkov a malých firiem – viem, že softvér musí byť predovšetkým
              funkčný, spoľahlivý a musí šetriť čas.
            </p>
            <p className="mt-4 leading-7 text-muted">
              Keď sa skončí čas v teréne, venujem sa svojej veľkej vášni – vývoju softvéru. Tvorba webov a
              aplikácií na mieru pre malých podnikateľov ma úprimne baví a každý projekt beriem ako
              príležitosť vytvoriť niečo, čo naozaj pomáha.
            </p>

            <div className="mt-9 space-y-5 border-t border-white/[0.08] pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/70">
                Čo o mne možno neviete
              </p>
              {facts.map((item) => (
                <div key={item.title} className="flex gap-3.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <p className="leading-7 text-muted">
                    <span className="font-semibold text-white">{item.title}: </span>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 leading-7 text-white/90">
              Som developer, ktorý kombinuje dlhoročné technické skúsenosti s digitálnou precíznosťou. Ak
              hľadáte niekoho, kto vie počúvať, navrhnúť funkčné riešenie a dotiahnuť ho do konca, som tu pre
              vás.
            </p>

            <p className="mt-8 text-sm leading-7 text-white/40">
              Prvý riadok kódu som napísal pred piatimi rokmi na{" "}
              <a
                href="https://ucenmarek.github.io/WEBREBEL-PAGE/"
                target="_blank"
                rel="noreferrer"
                className="text-white/60 underline decoration-white/20 underline-offset-4 transition hover:text-accent hover:decoration-accent/50"
              >
                tejto stránke
              </a>
              . Odvtedy to niekam prešlo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
