"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Flask",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Oracle",
  "Tailwind CSS",
  "Three.js",
  "Git",
  "GitHub",
  "Docker",
  "AI/ML",
];

export default function Lab() {
  return (
    <section
      id="lab"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-500">
        Engineering Lab
      </p>

      <h2 className="mb-12 text-5xl font-bold">
        Technologies I Build With
      </h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ y: -6, scale: 1.05 }}
            className="rounded-full border border-zinc-800 bg-zinc-950/70 px-6 py-3 text-zinc-300"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}