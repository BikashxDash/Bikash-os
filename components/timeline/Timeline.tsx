"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2023",
    title: "B.Tech Started",
    description: "Started Computer Science & Engineering at KMBB College.",
  },
  {
    year: "2024",
    title: "Web Development",
    description: "Built full-stack projects using React, Node.js and databases.",
  },
  {
    year: "2025",
    title: "Hackathons & AI",
    description: "Worked on AI, real-time applications and national hackathons.",
  },
  {
    year: "2026",
    title: "Building BIKASH OS",
    description: "Creating premium software products and portfolio.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-500">
        Timeline
      </p>

      <h2 className="mb-16 text-5xl font-bold">
        Engineering Journey
      </h2>

      <div className="relative border-l border-zinc-800 pl-10">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mb-16"
          >
            <div className="absolute -left-12.25 h-5 w-5 rounded-full border-4 border-blue-500 bg-black" />

            <p className="text-blue-500">{item.year}</p>

            <h3 className="mt-2 text-2xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-3 text-zinc-400">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
