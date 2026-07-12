"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Tata Forage",
    role: "GenAI Powered Data Analytics",
    duration: "2026",
    description:
      "Completed practical tasks on AI-powered analytics, data interpretation, and business insights.",
  },
  {
    title: "Deloitte Forage",
    role: "Technology Job Simulation",
    duration: "2026",
    description:
      "Worked on real-world consulting scenarios involving technology and problem solving.",
  },
  {
    title: "Pravaah Hackathon",
    role: "Frontend Developer",
    duration: "2026",
    description:
      "Developed Cosmic Watch using Next.js, Flask, Oracle and Socket.IO.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-500">
        Experience
      </p>

      <h2 className="mb-12 text-5xl font-bold">
        Practical Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">{exp.title}</h3>
              <span className="text-blue-500">{exp.duration}</span>
            </div>

            <p className="mt-2 text-lg text-zinc-300">{exp.role}</p>

            <p className="mt-4 text-zinc-400">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}