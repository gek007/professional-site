"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "What's your current tech stack?",
  "Tell me about your AI projects",
  "What did you do at Varonis?",
  "Are you available for hire?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Kostya's Digital Twin. Ask me anything about his career, skills, or experience.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMsg: Message = { role: "user", content: trimmed };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });
      const data = await res.json();
      setMessages([...updated, { role: "assistant", content: data.reply ?? data.error ?? "Something went wrong." }]);
    } catch {
      setMessages([...updated, { role: "assistant", content: "Network error. Please try again." }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  const showSuggestions = messages.length === 1;

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open Digital Twin chat"}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 pulse-glow"
        style={{
          background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
        }}
      >
        {open ? (
          <X size={22} className="text-white" />
        ) : (
          <MessageCircle size={22} className="text-white" />
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-1.5rem)] flex flex-col rounded-2xl overflow-hidden shadow-2xl"
          style={{
            background: "rgba(8,8,16,0.96)",
            border: "1px solid rgba(0,212,255,0.18)",
            backdropFilter: "blur(16px)",
            maxHeight: "520px",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
            style={{
              background: "rgba(0,212,255,0.05)",
              borderBottom: "1px solid rgba(0,212,255,0.12)",
            }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)" }}
            >
              <Bot size={18} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[#f0f0f8] font-semibold text-sm leading-none">Kostya&apos;s Digital Twin</p>
              <p className="text-[#9090b0] font-mono text-xs mt-0.5">AI · Ask me anything</p>
            </div>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
              <span className="font-mono text-xs text-[#00d4ff]">online</span>
            </span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4" style={{ minHeight: 0 }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-start gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                {/* Avatar */}
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background:
                      msg.role === "assistant"
                        ? "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)"
                        : "rgba(124,58,237,0.3)",
                    border: msg.role === "user" ? "1px solid rgba(124,58,237,0.5)" : "none",
                  }}
                >
                  {msg.role === "assistant" ? (
                    <Bot size={14} className="text-white" />
                  ) : (
                    <User size={14} className="text-[#7c3aed]" />
                  )}
                </div>

                {/* Bubble */}
                <div
                  className="rounded-xl px-3 py-2 text-sm leading-relaxed max-w-[80%]"
                  style={{
                    background:
                      msg.role === "assistant"
                        ? "rgba(0,212,255,0.06)"
                        : "rgba(124,58,237,0.15)",
                    border:
                      msg.role === "assistant"
                        ? "1px solid rgba(0,212,255,0.1)"
                        : "1px solid rgba(124,58,237,0.25)",
                    color: "#f0f0f8",
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Suggested questions */}
            {showSuggestions && (
              <div className="space-y-2 pt-1">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="w-full text-left text-xs px-3 py-2 rounded-lg transition-all duration-200"
                    style={{
                      background: "rgba(0,212,255,0.04)",
                      border: "1px solid rgba(0,212,255,0.12)",
                      color: "#9090b0",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)";
                      e.currentTarget.style.color = "#00d4ff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,212,255,0.12)";
                      e.currentTarget.style.color = "#9090b0";
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Loading indicator */}
            {loading && (
              <div className="flex items-start gap-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)" }}
                >
                  <Bot size={14} className="text-white" />
                </div>
                <div
                  className="rounded-xl px-3 py-2.5"
                  style={{
                    background: "rgba(0,212,255,0.06)",
                    border: "1px solid rgba(0,212,255,0.1)",
                  }}
                >
                  <Loader2 size={16} className="text-[#00d4ff] animate-spin" />
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            className="flex items-center gap-2 px-3 py-3 flex-shrink-0"
            style={{ borderTop: "1px solid rgba(0,212,255,0.1)" }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Kostya's career..."
              disabled={loading}
              className="flex-1 bg-transparent outline-none text-sm text-[#f0f0f8] placeholder-[#505070] disabled:opacity-50"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || loading}
              aria-label="Send message"
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 disabled:opacity-40"
              style={{ background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)" }}
            >
              <Send size={14} className="text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
