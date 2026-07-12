"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const commands: Record<string, string> = {
  help: `Available Commands

help
about
projects
skills
education
experience
contact
clear`,
  about: "I'm Bikash Dash, a Computer Science student passionate about Software Engineering and AI.",
  projects: "Cosmic Watch\nTask Manager\nBIKASH OS",
  skills:
    "Next.js • React • TypeScript • Python • Flask • Node.js • MongoDB • PostgreSQL",
  education: "B.Tech CSE • KMBB College of Engineering & Technology",
  experience: "Tata Forage • Deloitte Forage • Pravaah Hackathon",
  contact: "GitHub: github.com/BikashxDash",
};

export default function Terminal() {
  const [history, setHistory] = useState<string[]>([
    "BIKASH OS Terminal v1.0",
    "Type 'help' to begin.",
  ]);

  const [input, setInput] = useState("");

  function runCommand() {
    const cmd = input.trim().toLowerCase();

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    setHistory((prev) => [
      ...prev,
      `> ${cmd}`,
      commands[cmd] || "Command not found.",
    ]);

    setInput("");
  }

  return (
    <section
      id="terminal"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-500">
        Terminal
      </p>

      <h2 className="mb-10 text-5xl font-bold">
        BIKASH OS Console
      </h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="rounded-3xl border border-zinc-800 bg-black p-6"
      >
        <div className="mb-6 space-y-2 font-mono text-sm text-green-400">
          {history.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="font-mono text-green-400">{">"}</span>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") runCommand();
            }}
            placeholder="Enter command..."
            className="w-full bg-transparent font-mono outline-none"
          />
        </div>
      </motion.div>
    </section>
  );
}