"use client";

import { useEffect, useRef } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const TYPING_TEXTS = [
  "Senior Software Engineer",
  "AI Agent Architect",
  "GenAI Engineer",
  "Distributed Systems Expert",
  "Cybersecurity Engineer",
];

export default function Hero() {
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let idx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    function type() {
      const current = TYPING_TEXTS[idx];
      const el = typingRef.current;
      if (!el) return;

      if (!deleting) {
        el.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        el.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          idx = (idx + 1) % TYPING_TEXTS.length;
        }
      }
      timeout = setTimeout(type, deleting ? 40 : 70);
    }

    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#7c3aed] opacity-[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#00d4ff] opacity-[0.06] blur-[120px] pointer-events-none" />

      {/* Scan line effect */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent opacity-20 pointer-events-none"
        style={{ animation: "scan-line 8s linear infinite", top: 0 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.05)] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
            <span className="font-mono text-xs text-[#00d4ff]">Available for opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-none mb-4">
            <span className="block text-[#f0f0f8]">Kostya</span>
            <span className="block gradient-text glow-text">Shilkrot</span>
          </h1>

          <div className="h-10 mb-6">
            <p className="font-mono text-xl text-[#9090b0]">
              <span ref={typingRef} className="text-[#00d4ff]" />
              <span className="animate-pulse text-[#00d4ff]">_</span>
            </p>
          </div>

          <p className="text-[#9090b0] text-lg leading-relaxed mb-8 max-w-lg">
            20+ years engineering{" "}
            <span className="text-[#f0f0f8]">enterprise systems</span>. Now
            building the future with{" "}
            <span className="text-[#00d4ff]">AI Agents</span>,{" "}
            <span className="text-[#7c3aed]">GenAI architectures</span>, and
            production-grade intelligent systems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#career"
              className="px-6 py-3 bg-[#00d4ff] text-[#080810] font-semibold rounded hover:bg-[#06b6d4] transition-colors duration-200 pulse-glow"
            >
              View My Journey
            </a>
            <a
              href="#contact"
              className="px-6 py-3 glass border border-[rgba(0,212,255,0.3)] text-[#f0f0f8] font-semibold rounded hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 mt-8">
            <a
              href="https://www.linkedin.com/in/kostyashilkrot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9090b0] hover:text-[#00d4ff] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:kostya.shilkrot@gmail.com"
              className="text-[#9090b0] hover:text-[#00d4ff] transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9090b0] hover:text-[#00d4ff] transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <div className="w-px h-5 bg-[rgba(0,212,255,0.2)]" />
            <span className="font-mono text-xs text-[#9090b0]">Netanya, Israel</span>
          </div>
        </div>

        {/* Right: stat cards */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: "20+", label: "Years Engineering", accent: "#00d4ff", delay: "0s" },
            { value: "11yr", label: "@ Varonis", accent: "#7c3aed", delay: "0.5s" },
            { value: "AI", label: "Agent Architect", accent: "#06b6d4", delay: "1s" },
            { value: "∞", label: "Systems Built", accent: "#00d4ff", delay: "1.5s" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-xl p-6 floating"
              style={{ animationDelay: stat.delay }}
            >
              <div
                className="text-4xl font-bold mb-1"
                style={{ color: stat.accent }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-[#9090b0]">{stat.label}</div>
            </div>
          ))}

          {/* Tech stack tags */}
          <div className="col-span-2 glass rounded-xl p-4">
            <p className="font-mono text-xs text-[#9090b0] mb-3">// core stack</p>
            <div className="flex flex-wrap gap-2">
              {["Python", "C# .NET", "GenAI", "LangChain", "Azure", "Docker", "K8s", "FastAPI"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded font-mono text-xs bg-[rgba(0,212,255,0.08)] text-[#00d4ff] border border-[rgba(0,212,255,0.15)]"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#9090b0] hover:text-[#00d4ff] transition-colors animate-bounce"
      >
        <span className="font-mono text-xs">scroll</span>
        <ChevronDown size={16} />
      </a>
    </section>
  );
}
