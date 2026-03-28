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
            Full-stack{" "}
            <span className="gradient-text">technical depth</span>
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
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {[
            {
              name: "AI Meeting Intelligence Platform",
              desc: "Event-driven pipeline: video/audio → Whisper transcription → LLM extraction of decisions & action items. Microservices via RabbitMQ. Supports RAG + MCP integration.",
              tags: ["Python", "LangChain", "Whisper", "RabbitMQ", "Docker", "K8s"],
            },
            {
              name: "GenAI News Aggregator",
              desc: "Automated pipeline collecting, summarizing, ranking, and emailing AI news from OpenAI, Anthropic & YouTube using GPT-4.1 Mini for structured personalization.",
              tags: ["Python 3.12", "PostgreSQL", "OpenAI API", "Docker", "Render"],
            },
            {
              name: "RAG-Powered Video Intelligence Agent",
              desc: "Full-stack RAG system ingesting video/transcripts, generating embeddings, indexed in Supabase pgvector. Pydantic-AI agent over streaming FastAPI for conversational search with timestamped answers.",
              tags: ["Pydantic-AI", "FastAPI", "Supabase", "pgvector", "Python"],
            },
          ].map((proj) => (
            <div
              key={proj.name}
              className="glass rounded-xl p-5 border-t-2"
              style={{ borderTopColor: "#00d4ff" }}
            >
              <p className="font-mono text-xs text-[#00d4ff] mb-1">// recent project</p>
              <h3 className="text-[#f0f0f8] font-semibold mb-2">{proj.name}</h3>
              <p className="text-[#9090b0] text-sm leading-relaxed mb-3">
                {proj.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded font-mono text-xs bg-[rgba(124,58,237,0.1)] text-[#7c3aed] border border-[rgba(124,58,237,0.2)]"
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
