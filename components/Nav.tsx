"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Career", href: "#career" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#080810]/90 backdrop-blur-md border-b border-[rgba(0,212,255,0.1)]"
          : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded border border-[#00d4ff] flex items-center justify-center text-[#00d4ff] font-mono text-sm font-bold group-hover:bg-[#00d4ff] group-hover:text-[#080810] transition-all duration-200">
            KS
          </div>
          <span className="font-mono text-sm text-[#9090b0] group-hover:text-[#00d4ff] transition-colors">
            kostya.dev
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-[#9090b0] hover:text-[#00d4ff] transition-colors duration-200 relative group"
              >
                <span className="text-[#00d4ff] opacity-50 group-hover:opacity-100">/</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://www.linkedin.com/in/kostyashilkrot"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 border border-[#00d4ff] text-[#00d4ff] font-mono text-sm rounded hover:bg-[#00d4ff] hover:text-[#080810] transition-all duration-200"
        >
          LinkedIn
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#9090b0] hover:text-[#00d4ff] transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 mx-6 glass rounded-lg p-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-sm text-[#9090b0] hover:text-[#00d4ff] transition-colors block"
                >
                  <span className="text-[#00d4ff]">/</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
