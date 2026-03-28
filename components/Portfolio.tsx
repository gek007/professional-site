"use client";

import { Lock, ArrowUpRight } from "lucide-react";

const placeholders = [
  {
    title: "AI Meeting Intelligence Platform",
    category: "AI / GenAI",
    status: "In Progress",
    description:
      "End-to-end AI microservice platform: video/audio → Whisper → LLM decisions extraction. Event-driven via RabbitMQ. RAG + MCP integration.",
    tags: ["Python", "LangChain", "Whisper", "RabbitMQ", "K8s"],
    color: "#00d4ff",
  },
  {
    title: "GenAI News Intelligence",
    category: "AI / Automation",
    status: "Deployed",
    description:
      "Automated AI news pipeline: collection, GPT-4.1 Mini summarization, ranking, personalized email delivery. PostgreSQL backend.",
    tags: ["Python", "OpenAI", "PostgreSQL", "Docker"],
    color: "#7c3aed",
  },
  {
    title: "RAG-Powered Video Intelligence Agent",
    category: "AI / RAG",
    status: "Complete",
    description:
      "Full-stack RAG system: ingests video/transcripts, chunks content, generates embeddings in Supabase pgvector. Pydantic-AI agent over streaming FastAPI for conversational search with timestamped answers.",
    tags: ["Pydantic-AI", "FastAPI", "Supabase", "pgvector", "Python"],
    color: "#06b6d4",
  },
  {
    title: "RAG Audio Knowledge Assistant",
    category: "AI / RAG",
    status: "Complete",
    description:
      "Web app: audio → transcription → contextual Q&A. Full RAG pipeline with document ingestion, embedding, vector search, re-ranking, and event-triggered notifications.",
    tags: ["RAG", "FastAPI", "ChromaDB", "LLM"],
    color: "#00d4ff",
  },
  {
    title: "Enterprise Patch Management",
    category: "Distributed Systems",
    status: "Enterprise",
    description:
      "Designed and implemented a Patch Management System for deploying across a large distributed system at Varonis.",
    tags: ["C# .NET", "Distributed", "Azure DevOps"],
    color: "#00d4ff",
  },
  {
    title: "Network Security Proxy",
    category: "Cybersecurity",
    status: "Legacy",
    description:
      "High-performance content security proxy server for HTTP, FTP, SMTP with content filter engine — built in C/C++.",
    tags: ["C/C++", "Networking", "Security"],
    color: "#7c3aed",
  },
  {
    title: "More Projects",
    category: "Future",
    status: "Coming Soon",
    description:
      "New AI agent projects and open-source tools are on the way. Watch this space.",
    tags: ["AI Agents", "Open Source"],
    color: "#9090b0",
    locked: true,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.2)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-sm text-[#00d4ff] mb-2">04 // portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0f8]">
            Selected{" "}
            <span className="gradient-text">projects & work</span>
          </h2>
          <p className="text-[#9090b0] mt-4 max-w-xl">
            A snapshot of recent AI systems and enterprise solutions. More projects
            arriving as open-source work grows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {placeholders.map((project) => (
            <div
              key={project.title}
              className={`glass rounded-xl p-5 flex flex-col transition-all duration-300 ${
                project.locked
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:border-[rgba(0,212,255,0.25)] hover:-translate-y-1 cursor-pointer"
              }`}
            >
              {/* Card header */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span
                    className="font-mono text-xs px-2 py-0.5 rounded"
                    style={{
                      color: project.color,
                      backgroundColor: `${project.color}15`,
                      border: `1px solid ${project.color}30`,
                    }}
                  >
                    {project.category}
                  </span>
                  <span
                    className="ml-2 font-mono text-xs text-[#9090b0]"
                  >
                    [{project.status}]
                  </span>
                </div>
                {project.locked ? (
                  <Lock size={14} className="text-[#9090b0]" />
                ) : (
                  <ArrowUpRight
                    size={14}
                    className="text-[#9090b0] hover:text-[#00d4ff] transition-colors"
                  />
                )}
              </div>

              <h3 className="text-[#f0f0f8] font-semibold text-lg mb-2">
                {project.title}
              </h3>
              <p className="text-[#9090b0] text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded font-mono text-xs text-[#9090b0] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-[#9090b0] mb-4">
            More open-source work and detailed case studies coming soon.
          </p>
          <a
            href="https://www.linkedin.com/in/kostyashilkrot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass border border-[rgba(0,212,255,0.3)] text-[#00d4ff] font-semibold rounded hover:bg-[rgba(0,212,255,0.08)] transition-all duration-200"
          >
            See Full Profile on LinkedIn
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
