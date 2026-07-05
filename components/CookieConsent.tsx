"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { COOKIE_CONSENT_KEY, type CookieConsentValue } from "@/lib/cookieConsent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  function respond(value: CookieConsentValue) {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-0 z-[70] p-4"
        >
          <div className="quiet-panel mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border-white/[0.1] bg-[#111114]/95 p-5 shadow-2xl backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <p className="text-sm leading-6 text-white/70">
              Táto stránka ukladá do prehliadača iba nevyhnutné lokálne dáta (napr. počet prehratí úvodnej
              animácie). Žiadne sledovacie cookies momentálne nepoužívame — ak by sme v budúcnosti pridali
              analytiku, spustí sa až po tvojom súhlase.{" "}
              <Link
                href="/cookies"
                className="text-white/85 underline decoration-white/25 underline-offset-4 transition hover:text-accent hover:decoration-accent/50"
              >
                Viac info
              </Link>
              .
            </p>
            <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row">
              <button
                type="button"
                onClick={() => respond("declined")}
                className="rounded-full border border-white/[0.12] px-5 py-2.5 text-center text-sm font-medium text-white/70 transition hover:border-white/25 hover:text-white"
              >
                Odmietnuť
              </button>
              <button
                type="button"
                onClick={() => respond("accepted")}
                className="rounded-full bg-accent px-5 py-2.5 text-center text-sm font-semibold text-white shadow-orange transition hover:bg-[#ff8a35]"
              >
                Prijať všetky
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
