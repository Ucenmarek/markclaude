export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-background py-8">
      <div className="section-shell flex flex-col justify-between gap-4 text-sm text-white/45 sm:flex-row">
        <p>© {new Date().getFullYear()} markclaude.sk</p>
        <p>Moderné weby, čistý kód, vlastná identita.</p>
      </div>
    </footer>
  );
}
