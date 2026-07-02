import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "markclaude.sk | Moderné weby a digitálne riešenia",
  description:
    "Prémiový developerský web pre tvorbu moderných, rýchlych a rozšíriteľných digitálnych riešení.",
  metadataBase: new URL("https://markclaude.sk"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
