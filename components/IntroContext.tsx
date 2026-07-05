"use client";

import { createContext, useContext, useLayoutEffect, useState, type ReactNode } from "react";

const STORAGE_KEY = "markclaude-intro-plays";
const MAX_PLAYS = 3;

// Module-level flag: survives client-side route changes within the same
// page load (e.g. navigating to /cookies and back), since the JS module
// stays loaded in memory. It only resets on an actual hard reload / fresh
// page load, when the module re-initializes from scratch.
let hasEvaluatedThisPageLoad = false;

const IntroContext = createContext(true);

export function IntroProvider({ children }: { children: ReactNode }) {
  const [playIntro, setPlayIntro] = useState(true);

  useLayoutEffect(() => {
    if (hasEvaluatedThisPageLoad) {
      // Already decided during this page load — returning to this route
      // via client-side navigation shouldn't replay the intro again.
      setPlayIntro(false);
      return;
    }
    hasEvaluatedThisPageLoad = true;

    try {
      const [entry] = window.performance.getEntriesByType(
        "navigation"
      ) as PerformanceNavigationTiming[];
      const isPageReload = entry?.type === "reload";

      // A page reload (F5 / hard refresh) always replays the intro —
      // the play-count cap only limits repeats across normal navigation.
      if (isPageReload) {
        setPlayIntro(true);
        return;
      }

      const count = parseInt(window.localStorage.getItem(STORAGE_KEY) ?? "0", 10);
      if (count >= MAX_PLAYS) {
        setPlayIntro(false);
      } else {
        window.localStorage.setItem(STORAGE_KEY, String(count + 1));
      }
    } catch {
      // localStorage/Performance API unavailable — default to playing the intro.
    }
  }, []);

  return <IntroContext.Provider value={playIntro}>{children}</IntroContext.Provider>;
}

export function useIntroPlaying() {
  return useContext(IntroContext);
}
