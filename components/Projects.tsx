"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  name: string;
  url: string | null;
  category: string;
  description: string;
  tech: string[];
  image: string;
};

const projects: Project[] = [
  {
    name: "BookNest",
    url: "https://booknest.sk",
    category: "Webová aplikácia",
    description:
      "Komunitná platforma pre slovenských čitateľov — správa domácej knižnice, recenzie, komunitný antikvariát a knižné podujatia na jednom mieste.",
    tech: ["Next.js", "TypeScript"],
    image: "/images/projects/booknest.png",
  },
  {
    name: "ORSAG S.R.O.",
    url: "https://orsagsro.sk",
    category: "Firemný web",
    description:
      "Prezentačný web pre firmu zaoberajúcu sa oknami, dverami, tieniacou technikou a bránami v Poprade — produkty, realizácie a kontaktný formulár.",
    tech: ["Web", "Kontaktný formulár"],
    image: "/images/projects/orsagsro.png",
  },
  {
    name: "Okno Flow",
    url: null,
    category: "Interný dashboard",
    description:
      "CRM a pipeline systém pre firmu ORSAG s.r.o. — správa zákazníkov, cenových ponúk, zamerania, zákaziek, montáží, fakturácie a skladu na jednom mieste.",
    tech: ["React", "Dashboard", "CRM"],
    image: "/images/projects/oknoflow.png",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-band">
      <div className="section-shell">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow">Projekty</p>
          <h2 className="display-title mx-auto mt-6">
            Nie ukážky pre galériu.
            <br />
            Dôkaz, že detail rozhoduje<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="mx-auto mt-20 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const isLinked = Boolean(project.url);
            const Wrapper = isLinked ? motion.a : motion.div;

            return (
              <Wrapper
                key={project.name}
                {...(isLinked ? { href: project.url!, target: "_blank", rel: "noreferrer" } : {})}
                initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08, duration: 0.46 }}
                className="quiet-panel group flex flex-col overflow-hidden rounded-2xl transition hover:border-accent/30"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.08] bg-white/[0.02]">
                  <Image
                    src={project.image}
                    alt={`Náhľad projektu ${project.name}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                      {project.category}
                    </p>
                    {isLinked ? (
                      <span className="grid h-8 w-8 place-items-center rounded-full border border-white/[0.08] text-white/45 transition group-hover:border-accent/40 group-hover:text-accent">
                        <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                          <path
                            d="M7 17L17 7M17 7H9M17 7V15"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    ) : (
                      <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-white/35">
                        Súkromný projekt
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">{project.name}</h3>
                  <p className="mt-4 leading-7 text-muted">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-white/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.url ? (
                    <p className="mt-6 text-sm text-white/40 transition group-hover:text-white/70">
                      {project.url.replace("https://", "")}
                    </p>
                  ) : null}
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
