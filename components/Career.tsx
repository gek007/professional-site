"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const jobs = [
  {
    company: "Freelance / Self-Employed",
    role: "Senior Software Engineer | Python GenAI · AI Agent Architecture",
    period: "Jul 2025 – Present",
    duration: "Current",
    location: "Remote",
    color: "#00d4ff",
    current: true,
    bullets: [
      "Designing and deploying multiple AI-powered apps end-to-end: architecture, data pipelines, Docker, Kubernetes, and production delivery.",
      "Built AI Meeting Intelligence Platform: event-driven pipeline (video/audio → Whisper → LLM extraction) orchestrated via RabbitMQ with RAG + MCP integration.",
      "Built GenAI news aggregator pipeline using GPT-4.1 Mini for structured summarization; deployed on Render with PostgreSQL.",
      "Built RAG-Powered Video Intelligence Agent: full-stack RAG system ingesting video/transcripts, generating embeddings, and indexing in Supabase pgvector. Pydantic-AI agent over streaming FastAPI backend for conversational search with timestamped answers.",
      "Built RAG audio web knowledge assistant with document ingestion, vector search, re-ranking, LLM answer generation, and event-triggered notifications.",
      "Stack: Python, LangChain, LangGraph, Pydantic-AI, Gradio, async/multithreading, Docker, K8s, Frontier & Open-Source LLMs.",
    ],
  },
  {
    company: "Varonis",
    role: "Senior Backend Software Developer | Distributed Data Protection",
    period: "Sep 2014 – Jul 2025",
    duration: "10 yrs 11 mos",
    location: "Herzliya, Israel",
    color: "#7c3aed",
    current: false,
    bullets: [
      "Backend development of Management Console web app monitoring external storages.",
      "Designed and implemented Patch Management System for patch deploying across distributed system.",
      "Long-term maintenance and modernization of on-prem services collecting data from external storages.",
      "Investigated and resolved complex production issues; supported Tier 3 and advanced support teams.",
      "Analyzed crash dumps and memory-related issues; refactored legacy code per SOLID principles.",
    ],
  },
  {
    company: "RISCO Group",
    role: "Senior Software Developer | C# .NET Framework WPF",
    period: "Sep 2010 – 2014",
    duration: "4 yrs",
    location: "Rishon, Israel",
    color: "#06b6d4",
    current: false,
    bullets: [
      "Led team design, architecture, and development of UI-rich product for configuring and monitoring remote devices.",
      "Communication channels: TCP/IP, PSTN, GSM, GPRS, RS232.",
      "Implemented Management Tool for downloading configurations across multi-device environments.",
      "Investigated, debugged, and resolved customer-facing issues; wrote automated tests.",
    ],
  },
  {
    company: "SYNEL MLL PayWay Ltd.",
    role: "Tech Lead, Senior Software Developer | C# .NET",
    period: "Jan 2009 – Sep 2010",
    duration: "1 yr 9 mos",
    location: "Israel",
    color: "#00d4ff",
    current: false,
    bullets: [
      "Migrated legacy payroll systems to a new platform using .NET technologies (WPF, WCF).",
      "Developed multi-tier architecture with DAL using C# ADO.NET and Entity Framework.",
      "Improved application performance and optimized database queries.",
    ],
  },
  {
    company: "Safend",
    role: "Software Engineer | C# .NET",
    period: "Jan 2008 – Jun 2010",
    duration: "2 yrs 6 mos",
    location: "Israel",
    color: "#7c3aed",
    current: false,
    bullets: [
      "Developed enterprise data security solutions on .NET platform.",
      "Built multi-tier architecture with performance-optimized data access layer.",
    ],
  },
  {
    company: "Protegrity",
    role: "R&D Senior Software Developer",
    period: "Jan 2006 – Nov 2007",
    duration: "1 yr 11 mos",
    location: "Israel",
    color: "#06b6d4",
    current: false,
    bullets: [
      "Designed and developed a rapid proxy-server with content security system.",
      "Created plug-in manager for asynchronous communication between .NET and C++.",
      "Investigated and resolved complex customer issues.",
    ],
  },
  {
    company: "Aliroo Security Solutions",
    role: "R&D Software Engineer | C/C++, WinForms",
    period: "Jan 2002 – Dec 2006",
    duration: "5 yrs",
    location: "Israel",
    color: "#00d4ff",
    current: false,
    bullets: [
      "Developed rapid proxy servers for HTTP, FTP, SMTP and a content filter engine.",
      "Resolved complex customer issues, providing technical solutions in production environments.",
    ],
  },
  {
    company: "Check Point Software Technologies",
    role: "Escalation Programmer Engineer, Team Lead",
    period: "Jan 1999 – Nov 2002",
    duration: "3 yrs 11 mos",
    location: "Israel",
    color: "#7c3aed",
    current: false,
    bullets: [
      "Led development of cross-platform kernel and user-mode code for network security filtering (VPN, NAT).",
      "Troubleshot complex network issues; performed lab testing and simulations.",
      "Designed and developed internal tools to simulate multi-connections, TCP traffic and load.",
    ],
  },
];

function JobCard({ job }: { job: (typeof jobs)[0] }) {
  const [expanded, setExpanded] = useState(job.current);

  return (
    <div className="relative pl-8 md:pl-12">
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 z-10"
        style={{
          borderColor: job.color,
          backgroundColor: job.current ? job.color : "transparent",
          boxShadow: job.current ? `0 0 12px ${job.color}` : undefined,
        }}
      />

      <div
        className="glass rounded-xl p-5 hover:border-[rgba(0,212,255,0.2)] transition-all duration-300 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-0.5">
              <span
                className="font-mono text-xs px-2 py-0.5 rounded"
                style={{
                  color: job.color,
                  backgroundColor: `${job.color}15`,
                  border: `1px solid ${job.color}30`,
                }}
              >
                {job.current ? "● Now" : job.duration}
              </span>
              <span className="text-[#9090b0] font-mono text-xs">{job.period}</span>
            </div>
            <h3 className="text-[#f0f0f8] font-semibold text-lg">{job.company}</h3>
            <p className="text-[#9090b0] text-sm mt-0.5">{job.role}</p>
          </div>
          <ChevronDown
            size={16}
            className="text-[#9090b0] flex-shrink-0 mt-1 transition-transform duration-200"
            style={{ transform: expanded ? "rotate(180deg)" : "rotate(0)" }}
          />
        </div>

        {expanded && (
          <ul className="mt-4 space-y-2 border-t border-[rgba(0,212,255,0.08)] pt-4">
            {job.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span style={{ color: job.color }} className="mt-0.5 flex-shrink-0">
                  ▹
                </span>
                <span className="text-[#9090b0]">{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Career() {
  return (
    <section id="career" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(124,58,237,0.3)] to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-sm text-[#00d4ff] mb-2">03 // career_journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0f8]">
            25 years of{" "}
            <span className="gradient-text">building things</span>
            <br />
            that matter
          </h2>
          <p className="text-[#9090b0] mt-4">
            From kernel-level security at Check Point to AI agents at the frontier — a career defined by engineering excellence.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff] via-[#7c3aed] to-transparent opacity-30" />

          <div className="space-y-6">
            {jobs.map((job) => (
              <JobCard key={job.company + job.period} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
