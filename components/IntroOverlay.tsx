"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { markClaudeLogoPaths } from "@/components/MarkClaudeLogo";
import { useIntroPlaying } from "@/components/IntroContext";

const { orangeC, orangeM, whiteC } = markClaudeLogoPaths;

export function IntroOverlay() {
  const playIntro = useIntroPlaying();
  const [dock, setDock] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const target = document.getElementById("navbar-logo-target");
    if (!target) return;

    const measure = () => {
      const rect = target.getBoundingClientRect();
      setDock({
        x: rect.left + rect.width / 2 - window.innerWidth / 2,
        y: rect.top + rect.height / 2 - window.innerHeight / 2,
      });
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const dockX = dock ? `${dock.x}px` : "calc(-50vw + 72px)";
  const dockY = dock ? `${dock.y}px` : "calc(-50vh + 68px)";

  if (!playIntro) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 6.75, duration: 0.4, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0 bg-technical-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 0.45 }}
      />
      <motion.div
        className="absolute h-[30rem] w-[30rem] rounded-full bg-accent/14 blur-[130px]"
        initial={{ opacity: 0, scale: 0.78 }}
        animate={{ opacity: [0, 1, 0.7], scale: [0.78, 1, 0.92] }}
        transition={{ duration: 4.55, times: [0, 0.45, 1], ease: "easeOut" }}
      />

      <motion.div
        className="relative h-[20rem] w-[15.6rem] sm:h-[24rem] sm:w-[18.7rem]"
        initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        animate={{
          scale: [1, 1, 1, 0.23],
          x: ["0px", "0px", "0px", dockX],
          y: ["0px", "0px", "0px", dockY],
        }}
        transition={{ duration: 6.62, times: [0, 0.84, 0.91, 1], ease: [0.72, 0, 0.2, 1] }}
      >
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 330 423" fill="none">
          <defs>
            <filter id="introOrangeGlow" x="-80" y="-80" width="500" height="590" filterUnits="userSpaceOnUse">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="1 0 0 0 1  0 0.35 0 0 0.32  0 0 0.04 0 0  0 0 0 0.9 0"
              />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="introWhiteGlow" x="-80" y="-80" width="500" height="590" filterUnits="userSpaceOnUse">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feColorMatrix in="blur" type="matrix" values="1 0 0 0 1  0 1 0 0 1  0 0 1 0 1  0 0 0 0.8 0" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <clipPath id="orangeCReveal">
              <motion.rect
                y="0"
                height="423"
                initial={{ x: -10, width: 0 }}
                animate={{ x: -10, width: 340 }}
                transition={{ delay: 4.9, duration: 0.72, ease: "easeOut" }}
              />
            </clipPath>
            <clipPath id="orangeMReveal">
              <motion.rect
                x="95"
                width="190"
                initial={{ y: 325, height: 0 }}
                animate={{ y: 130, height: 195 }}
                transition={{ delay: 5.02, duration: 0.66, ease: "easeOut" }}
              />
            </clipPath>
            <clipPath id="whiteCReveal">
              <motion.rect
                y="220"
                height="195"
                initial={{ x: 135, width: 0 }}
                animate={{ x: 135, width: 160 }}
                transition={{ delay: 5.14, duration: 0.62, ease: "easeOut" }}
              />
            </clipPath>
          </defs>

          <motion.g
            filter="url(#introOrangeGlow)"
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: [0, 1, 0.9, 0], scale: [0.2, 1, 1.08, 0.55] }}
            transition={{ delay: 0.08, duration: 0.72, times: [0, 0.28, 0.72, 1], ease: "easeOut" }}
            style={{ transformOrigin: "286px 79px" }}
          >
            <path
              d="M286 59L291 73L306 79L291 85L286 100L280 85L265 79L280 73L286 59Z"
              fill="#FF7A1A"
            />
          </motion.g>

          <motion.path
            d={orangeC}
            fill="#FF7A1A"
            stroke="#000000"
            strokeWidth={6}
            strokeLinejoin="round"
            clipPath="url(#orangeCReveal)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1] }}
            transition={{ delay: 5.42, duration: 0.42, times: [0, 0.45, 1] }}
          />
          <motion.path
            d={orangeM}
            fill="#FF7A1A"
            stroke="#000000"
            strokeWidth={6}
            strokeLinejoin="round"
            clipPath="url(#orangeMReveal)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1] }}
            transition={{ delay: 5.52, duration: 0.38, times: [0, 0.45, 1] }}
          />
          <motion.path
            d={whiteC}
            fill="#F4F4F4"
            stroke="#000000"
            strokeWidth={6}
            strokeLinejoin="round"
            clipPath="url(#whiteCReveal)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1] }}
            transition={{ delay: 5.66, duration: 0.36, times: [0, 0.45, 1] }}
          />

          <motion.path
            d={orangeC}
            stroke="#FF7A1A"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            filter="url(#introOrangeGlow)"
            fill="none"
            initial={{ pathLength: 0, opacity: 1 }}
            animate={{ pathLength: 1, opacity: [1, 1, 0] }}
            transition={{
              pathLength: { delay: 0.48, duration: 1.72, ease: "easeInOut" },
              opacity: { delay: 5.42, duration: 0.34, ease: "easeOut" },
            }}
          />

          <motion.path
            d={orangeM}
            stroke="#FF7A1A"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            filter="url(#introOrangeGlow)"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
            transition={{
              pathLength: { delay: 2.22, duration: 1.32, ease: "easeInOut" },
              opacity: { delay: 2.08, duration: 3.02, times: [0, 0.12, 0.92, 1], ease: "easeOut" },
            }}
          />

          <motion.path
            d={whiteC}
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            filter="url(#introWhiteGlow)"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
            transition={{
              pathLength: { delay: 3.72, duration: 1.06, ease: "easeInOut" },
              opacity: { delay: 3.58, duration: 1.52, times: [0, 0.14, 0.92, 1], ease: "easeOut" },
            }}
          />

          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1] }}
            transition={{ delay: 5.98, duration: 0.42, times: [0, 0.65, 1], ease: "easeOut" }}
          >
            <path d={orangeC} fill="#FF7A1A" stroke="#000000" strokeWidth={6} strokeLinejoin="round" />
            <path d={orangeM} fill="#FF7A1A" stroke="#000000" strokeWidth={6} strokeLinejoin="round" />
            <path d={whiteC} fill="#F4F4F4" stroke="#000000" strokeWidth={6} strokeLinejoin="round" />
          </motion.g>
        </svg>

        <motion.div
          className="absolute -bottom-7 left-1/2 h-8 w-52 -translate-x-1/2 rounded-full bg-accent/28 blur-2xl"
          initial={{ opacity: 0, scaleX: 0.35 }}
          animate={{ opacity: [0, 0, 1, 0], scaleX: [0.35, 0.35, 1, 0.55] }}
          transition={{ duration: 6.24, times: [0, 0.82, 0.92, 1], ease: "easeOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
