import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { MarkClaudeLogo } from "@/components/MarkClaudeLogo";

export const metadata: Metadata = {
  title: "Cookies a súkromie | markclaude.sk",
  description: "Prehľad toho, aké dáta stránka markclaude.sk ukladá a prečo.",
};

export default function CookiesPage() {
  return (
    <main className="relative min-h-screen bg-background text-white">
      <div className="section-shell flex items-center gap-3 pt-8 sm:pt-10">
        <Link href="/" className="flex items-center gap-3" aria-label="markclaude.sk domov">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-white/[0.08] bg-black">
            <span className="block h-8 w-6">
              <MarkClaudeLogo className="h-full w-full" />
            </span>
          </span>
          <span className="text-sm text-white/50 transition hover:text-white">Späť na markclaude.sk</span>
        </Link>
      </div>

      <div className="section-shell max-w-3xl py-16 sm:py-20">
        <p className="eyebrow">Súkromie</p>
        <h1 className="display-title mt-6 text-3xl sm:text-4xl">
          Cookies a lokálne dáta<span className="text-accent">.</span>
        </h1>
        <p className="mt-6 max-w-2xl leading-7 text-muted">
          Krátky a úprimný prehľad toho, čo táto stránka ukladá do tvojho prehliadača a prečo — bez
          právnického balastu.
        </p>

        <div className="mt-12 space-y-10 border-t border-white/[0.08] pt-10">
          <section>
            <h2 className="text-xl font-semibold text-white">Čo momentálne ukladáme</h2>
            <ul className="mt-4 space-y-3 leading-7 text-muted">
              <li>
                <span className="font-medium text-white">Počet prehratí úvodnej animácie</span> — jedna
                hodnota v localStorage, aby sa ti úvodná animácia po pár návštevách prestala zobrazovať.
                Nesúvisí so sledovaním, nič sa neposiela na server.
              </li>
              <li>
                <span className="font-medium text-white">Tvoja voľba v cookie banneri</span> — aby sme sa ťa
                nepýtali na súhlas znova pri každej návšteve.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Čo momentálne nepoužívame</h2>
            <p className="mt-4 leading-7 text-muted">
              Žiadne analytické ani reklamné sledovacie cookies (napr. Google Analytics, Meta Pixel a
              podobne) tu momentálne nebežia. Ak sa to v budúcnosti zmení, nový skript sa spustí až po tom, čo
              v banneri vyberieš „Prijať všetky“ — voľba „Iba nutné“ ho nebude aktivovať.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Kontaktný formulár</h2>
            <p className="mt-4 leading-7 text-muted">
              Formulár v sekcii Kontakt odošle meno, email a text správy bezpečne cez server priamo na náš
              email. Dáta sa nikde trvalo neukladajú do databázy ani sa nezdieľajú s tretími stranami — slúžia
              výhradne na to, aby sme ti mohli odpovedať.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Otázky</h2>
            <p className="mt-4 leading-7 text-muted">
              Ak máš k tomuto čokoľvek, napíš na{" "}
              <a
                href="mailto:devucenmarek@gmail.com"
                className="text-white/80 underline decoration-white/25 underline-offset-4 transition hover:text-accent hover:decoration-accent/50"
              >
                devucenmarek@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
