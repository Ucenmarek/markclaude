"use client";

import { MCLogo } from "@/components/MCLogo";

export function IntroAnimation() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden place-items-center bg-background" aria-hidden="true">
      <MCLogo className="h-24 w-24" />
    </div>
  );
}
