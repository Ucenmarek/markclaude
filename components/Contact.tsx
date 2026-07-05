"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "devucenmarek@gmail.com";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error ?? "Nepodarilo sa odoslať správu.");
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Nepodarilo sa odoslať správu.");
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 transition focus:border-accent/50 focus:outline-none focus:ring-0";

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
          <div className="relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="eyebrow">Kontakt</p>
              <h2 className="mt-6 max-w-xl text-4xl font-light tracking-tight text-white sm:text-5xl">
                Máš projekt, ktorý má pôsobiť kvalitne ešte pred prvým klikom
                <span className="text-accent">?</span>
              </h2>
              <p className="mt-6 max-w-md text-lg leading-8 text-muted">
                Napíš pár viet o cieli. Odpoviem návrhom najbližšieho kroku a realistickým smerom riešenia.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="rounded-full bg-accent px-7 py-3.5 text-center text-sm font-semibold text-white shadow-orange transition hover:bg-[#ff8a35]"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="lg:mt-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  required
                  placeholder="Meno"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className={inputClasses}
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className={inputClasses}
                />
              </div>
              <textarea
                required
                placeholder="Správa"
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className={`${inputClasses} mt-4 resize-none`}
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-[65px] w-full rounded-full bg-accent px-7 py-3.5 text-center text-sm font-semibold text-white shadow-orange transition hover:bg-[#ff8a35] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? "Odosielam…" : "Odoslať správu"}
              </button>
              {status === "sent" ? (
                <p className="mt-3 text-sm text-white/60">Správa bola odoslaná, ozvem sa čo najskôr.</p>
              ) : null}
              {status === "error" ? (
                <p className="mt-3 text-sm text-red-400/80">
                  {errorMessage || "Nepodarilo sa odoslať správu."} Skús to prosím znova alebo napíš priamo na{" "}
                  {CONTACT_EMAIL}.
                </p>
              ) : null}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
