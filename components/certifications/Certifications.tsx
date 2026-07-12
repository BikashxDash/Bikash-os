"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "Tata GenAI Powered Data Analytics",
    issuer: "Forage",
    year: "2026",
  },
  {
    title: "Deloitte Technology Job Simulation",
    issuer: "Forage",
    year: "2026",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-500">
        Certifications
      </p>

      <h2 className="mb-12 text-5xl font-bold">
        Learning Journey
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8"
          >
            <h3 className="text-2xl font-semibold">
              {cert.title}
            </h3>

            <p className="mt-3 text-zinc-400">
              {cert.issuer}
            </p>

            <p className="mt-5 text-blue-500">
              {cert.year}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}