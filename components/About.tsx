"use client";

import { Shield, Cpu, Zap, Globe } from "lucide-react";

const traits = [
  {
    icon: Cpu,
    title: "Software Architecture",
    description:
      "Designed and built large-scale distributed systems across enterprise environments for over two decades.",
  },
  {
    icon: Zap,
    title: "Agentic AI",
    description:
      "Building production AI agents, RAG pipelines, and LLM-powered microservices with cutting-edge open and frontier models.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Deep background in cybersecurity — from kernel-level network filtering at Check Point to enterprise data protection at Varonis.",
  },
  {
    icon: Globe,
    title: "Multilingual",
    description:
      "Fluent in Russian, Hebrew, and English. Worked across international teams and markets throughout my career.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-[#00d4ff] mb-2">01 // about_me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0f8]">
            Engineering at the{" "}
            <span className="gradient-text">intersection</span>
            <br />
            of AI and Enterprise
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: bio text */}
          <div className="space-y-6">
            <p className="text-[#9090b0] text-lg leading-relaxed">
              I&apos;m a{" "}
              <span className="text-[#f0f0f8] font-semibold">
                Senior Software Engineer
              </span>{" "}
              with more than{" "}
              <span className="text-[#00d4ff] font-semibold">
                20 years of hands-on experience
              </span>{" "}
              designing and building complex enterprise systems — from kernel-mode
              security software to cloud-native microservices.
            </p>

            <p className="text-[#9090b0] text-lg leading-relaxed">
              Over the last 3 years, I&apos;ve gone deep into{" "}
              <span className="text-[#7c3aed] font-semibold">
                LLM &amp; AI technologies
              </span>
              , engineering full-stack AI agents, RAG architectures, and
              intelligent automation pipelines. I&apos;m passionate about taking
              AI from prototype to production.
            </p>

            <p className="text-[#9090b0] text-lg leading-relaxed">
              My career spans{" "}
              <span className="text-[#f0f0f8] font-semibold">Check Point</span>,{" "}
              <span className="text-[#f0f0f8] font-semibold">Varonis</span>, and
              multiple enterprise product companies — giving me a rare combination
              of security depth, architectural thinking, and modern AI engineering.
            </p>

            {/* Education callout */}
            <div className="glass rounded-xl p-5 mt-4">
              <p className="font-mono text-xs text-[#00d4ff] mb-3">// education</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-[#00d4ff] font-mono text-sm mt-0.5">▹</span>
                  <div>
                    <p className="text-[#f0f0f8] text-sm font-semibold">
                      AI Engineer — The Hebrew University of Jerusalem
                    </p>
                    <p className="text-[#9090b0] text-xs">2025 – 2026</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00d4ff] font-mono text-sm mt-0.5">▹</span>
                  <div>
                    <p className="text-[#f0f0f8] text-sm font-semibold">
                      B.Sc. Computer Science — Tel Aviv University
                    </p>
                    <p className="text-[#9090b0] text-xs">1999 – 2002</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: trait cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {traits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="glass rounded-xl p-5 hover:border-[rgba(0,212,255,0.3)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(0,212,255,0.08)] flex items-center justify-center mb-3 group-hover:bg-[rgba(0,212,255,0.15)] transition-colors">
                  <Icon size={20} className="text-[#00d4ff]" />
                </div>
                <h3 className="text-[#f0f0f8] font-semibold mb-2">{title}</h3>
                <p className="text-[#9090b0] text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}

            {/* Certifications */}
            <div className="sm:col-span-2 glass rounded-xl p-5">
              <p className="font-mono text-xs text-[#00d4ff] mb-3">// certifications</p>
              <ul className="space-y-1.5">
                {[
                  "AI Engineer Agentic Track: The Complete Agent & MCP Course",
                  "AI Coder: Vibe Coder to Agentic Engineer",
                  "AI Coding Agents with GitHub Copilot and Cursor",
                  "AI For Developers With GitHub Copilot, Cursor AI & ChatGPT",
                  "Introduction to AWS — Understanding AWS Basics",
                  "Software Architecture & Design of Modern Large Scale Systems",
                ].map((cert) => (
                  <li key={cert} className="flex items-start gap-2 text-sm">
                    <span className="text-[#7c3aed] mt-0.5">✓</span>
                    <span className="text-[#9090b0]">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
