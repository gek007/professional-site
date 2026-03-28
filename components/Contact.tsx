"use client";

import { Mail, Linkedin, MapPin, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("kostya.shilkrot@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(124,58,237,0.3)] to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7c3aed] opacity-[0.05] blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="font-mono text-sm text-[#00d4ff] mb-2">05 // contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0f8]">
            Let&apos;s build something{" "}
            <span className="gradient-text">exceptional</span>
          </h2>
          <p className="text-[#9090b0] mt-4 max-w-xl mx-auto">
            Whether it&apos;s an AI architecture challenge, a distributed systems project, or you want to discuss the frontier of AI engineering — I&apos;m open to conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact card */}
          <div className="glass rounded-xl p-8 space-y-6">
            <div>
              <p className="font-mono text-xs text-[#9090b0] mb-1">// reach_me_at</p>
              <button
                onClick={copyEmail}
                className="flex items-center gap-3 group w-full text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(0,212,255,0.08)] flex items-center justify-center group-hover:bg-[rgba(0,212,255,0.15)] transition-colors">
                  <Mail size={18} className="text-[#00d4ff]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#f0f0f8] text-sm font-semibold">Email</p>
                  <p className="text-[#9090b0] text-sm font-mono">
                    kostya.shilkrot@gmail.com
                  </p>
                </div>
                {copied ? (
                  <Check size={14} className="text-[#00d4ff]" />
                ) : (
                  <Copy
                    size={14}
                    className="text-[#9090b0] group-hover:text-[#00d4ff] transition-colors"
                  />
                )}
              </button>
            </div>

            <div className="w-full h-px bg-[rgba(0,212,255,0.08)]" />

            <a
              href="https://www.linkedin.com/in/kostyashilkrot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[rgba(0,212,255,0.08)] flex items-center justify-center group-hover:bg-[rgba(0,212,255,0.15)] transition-colors">
                <Linkedin size={18} className="text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-[#f0f0f8] text-sm font-semibold">LinkedIn</p>
                <p className="text-[#9090b0] text-sm font-mono">
                  linkedin.com/in/kostyashilkrot
                </p>
              </div>
            </a>

            <div className="w-full h-px bg-[rgba(0,212,255,0.08)]" />

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[rgba(124,58,237,0.08)] flex items-center justify-center">
                <MapPin size={18} className="text-[#7c3aed]" />
              </div>
              <div>
                <p className="text-[#f0f0f8] text-sm font-semibold">Location</p>
                <p className="text-[#9090b0] text-sm">Netanya, Israel</p>
              </div>
            </div>
          </div>

          {/* Status / availability card */}
          <div className="glass rounded-xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00d4ff] animate-pulse" />
                <span className="font-mono text-sm text-[#00d4ff]">
                  Open to opportunities
                </span>
              </div>
              <h3 className="text-[#f0f0f8] font-bold text-2xl mb-4">
                Available for Senior Software Developer
              </h3>
              <ul className="space-y-2">
                {[
                  "AI / GenAI Engineering",
                  "AI Agent Architecture",
                  "Backend & Distributed Systems",
                  "Consulting & Advisory",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <span className="text-[#00d4ff]">▹</span>
                    <span className="text-[#9090b0]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="mailto:kostya.shilkrot@gmail.com"
              className="mt-8 flex items-center justify-center gap-2 px-6 py-3 bg-[#00d4ff] text-[#080810] font-semibold rounded hover:bg-[#06b6d4] transition-colors duration-200 pulse-glow"
            >
              <Mail size={16} />
              Send me an email
            </a>
          </div>
        </div>

        {/* Languages */}
        <div className="mt-6 glass rounded-xl p-5">
          <p className="font-mono text-xs text-[#9090b0] mb-3">// languages</p>
          <div className="flex flex-wrap gap-4">
            {[
              { lang: "Russian", level: "Native / Bilingual" },
              { lang: "Hebrew", level: "Full Professional" },
              { lang: "English", level: "Professional Working" },
            ].map(({ lang, level }) => (
              <div key={lang} className="flex items-center gap-2">
                <span className="text-[#f0f0f8] font-semibold text-sm">
                  {lang}
                </span>
                <span className="text-[#9090b0] text-xs">{level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
