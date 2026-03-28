export default function Footer() {
  return (
    <footer className="py-8 border-t border-[rgba(0,212,255,0.08)]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded border border-[#00d4ff] flex items-center justify-center text-[#00d4ff] font-mono text-xs font-bold">
            KS
          </div>
          <span className="font-mono text-xs text-[#9090b0]">
            Kostya Shilkrot © {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/kostyashilkrot"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#9090b0] hover:text-[#00d4ff] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:kostya.shilkrot@gmail.com"
            className="font-mono text-xs text-[#9090b0] hover:text-[#00d4ff] transition-colors"
          >
            Email
          </a>
        </div>

        <p className="font-mono text-xs text-[#9090b0]">
          Built with Next.js & Tailwind
        </p>
      </div>
    </footer>
  );
}
