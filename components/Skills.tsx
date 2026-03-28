"use client";

const skillCategories = [
  {
    label: "AI & GenAI",
    color: "#00d4ff",
    skills: [
      "LLM Engineering",
      "AI Agents",
      "RAG Architectures",
      "Fine-Tuning",
      "LangChain",
      "LangGraph",
      "LangSmith",
      "Pydantic-AI",
      "CrewAI",
      "LlamaIndex",
      "OpenAI SDK",
      "OpenAI Codex",
      "MCP",
      "Vector Embeddings",
      "ChromaDB",
      "Hugging Face",
      "Whisper",
      "Gradio",
    ],
  },
  {
    label: "Languages",
    color: "#7c3aed",
    skills: [
      "Python 3.12+",
      "C# / .NET 6–8",
      "C / C++",
      "TypeScript",
      "SQL",
    ],
  },
  {
    label: "Backend & Infra",
    color: "#06b6d4",
    skills: [
      "FastAPI",
      "ASP.NET Core",
      "Node.js",
      "Flask",
      "RabbitMQ",
      "Celery",
      "Docker",
      "Kubernetes",
      "K9s",
      "CI/CD",
    ],
  },
  {
    label: "Cloud & DevOps",
    color: "#00d4ff",
    skills: [
      "Microsoft Azure",
      "AWS",
      "Azure DevOps",
      "GitHub Actions",
      "GitLab CI",
      "Grafana",
      "KQL",
    ],
  },
  {
    label: "Databases",
    color: "#7c3aed",
    skills: [
      "PostgreSQL",
      "SQL Server",
      "MongoDB",
      "Redis",
      "SQLite",
      "MySQL",
      "SQLAlchemy",
      "EF Core",
      "Supabase pgvector",
      "Pinecone",
    ],
  },
  {
    label: "Architecture",
    color: "#06b6d4",
    skills: [
      "Microservices",
      "Distributed Systems",
      "Event-Driven",
      "SOLID",
      "MVVM / MVP",
      "REST / WebAPI",
      "WPF / WCF",
    ],
  },
  {
    label: "Security",
    color: "#00d4ff",
    skills: [
      "SSL/TLS & PKI",
      "Cryptography",
      "Network Security",
      "VPN / NAT",
      "Auth & AuthZ",
      "Kernel Filtering",
    ],
  },
  {
    label: "Networking & OS",
    color: "#7c3aed",
    skills: [
      "TCP/IP",
      "HTTP/FTP/SMTP",
      "SSH/LDAP",
      "GSM/PSTN",
      "Windows",
      "Linux",
      "Unix",
      "VMware",
      "Hyper-V",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Subtle separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.2)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-sm text-[#00d4ff] mb-2">02 // skills_matrix</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0f8]">
            Backend{" "}
            <span className="gradient-text">tech stack</span>
          </h2>
          <p className="text-[#9090b0] mt-4 max-w-xl">
            Across AI, backend systems, cloud infrastructure, and security — a
            comprehensive toolkit built over two decades.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((cat) => (
            <div
              key={cat.label}
              className="glass rounded-xl p-5 hover:border-[rgba(0,212,255,0.25)] transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-2 h-5 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
                <h3
                  className="font-mono text-sm font-semibold"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded text-xs text-[#9090b0] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] hover:text-[#f0f0f8] hover:border-[rgba(0,212,255,0.2)] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured projects row */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            {
              name: "AI Meeting Intelligence Platform",
              desc: "Event-driven pipeline: video/audio → Whisper → LLM extraction of decisions & action items via RabbitMQ. RAG + MCP integration.",
              tags: ["Python", "LangChain", "Whisper", "RabbitMQ", "K8s"],
            },
            {
              name: "GenAI News Aggregator",
              desc: "Automated pipeline collecting, summarizing, ranking, and emailing AI news using GPT-4.1 Mini. PostgreSQL backend.",
              tags: ["Python", "OpenAI API", "PostgreSQL", "Docker"],
            },
            {
              name: "RAG Video Intelligence Agent",
              desc: "Full-stack RAG system: video/transcripts → embeddings → Supabase pgvector. Pydantic-AI agent over streaming FastAPI for timestamped conversational search.",
              tags: ["Pydantic-AI", "FastAPI", "Supabase", "pgvector"],
            },
            {
              name: "RAG Audio Knowledge Assistant",
              desc: "Web app: audio → transcription → contextual Q&A. Document ingestion, vector search, re-ranking, LLM answers, event-triggered notifications.",
              tags: ["RAG", "FastAPI", "ChromaDB", "LLM"],
            },
            {
              name: "Enterprise Patch Management",
              desc: "Designed and implemented a Patch Management System for deploying patches across a large distributed system at Varonis.",
              tags: ["C# .NET", "Distributed", "Azure DevOps"],
            },
          ].map((proj) => (
            <div
              key={proj.name}
              className="glass rounded-xl p-4 border-t-2 flex flex-col"
              style={{ borderTopColor: "#00d4ff" }}
            >
              <p className="font-mono text-xs text-[#00d4ff] mb-1">// recent project</p>
              <h3 className="text-[#f0f0f8] font-semibold text-sm mb-2">{proj.name}</h3>
              <p className="text-[#9090b0] text-xs leading-relaxed mb-3 flex-1">
                {proj.desc}
              </p>
              <div className="flex flex-wrap gap-1">
                {proj.tags.map((t) => (
                  <span
                    key={t}
                    className="px-1.5 py-0.5 rounded font-mono text-xs bg-[rgba(124,58,237,0.1)] text-[#7c3aed] border border-[rgba(124,58,237,0.2)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
