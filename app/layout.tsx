import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Kostya Shilkrot | Senior Software Engineer & AI Architect",
  description:
    "20+ years building enterprise systems. Senior Software Engineer specializing in Python, GenAI, AI Agents, C# .NET, Cybersecurity, and Distributed Systems.",
  keywords: [
    "Kostya Shilkrot",
    "Senior Software Engineer",
    "AI Agent",
    "GenAI",
    "Python",
    "C# .NET",
    "Cybersecurity",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} noise`}>
        {children}
      </body>
    </html>
  );
}
