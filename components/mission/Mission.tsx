"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section
      id="mission"
      className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-500">
          Mission
        </p>

        <h2 className="mb-8 text-5xl font-bold leading-tight">
          Building software that solves real-world problems.
        </h2>

        <p className="text-lg leading-9 text-zinc-400">
          I'm a Computer Science student focused on Full Stack Development,
          Artificial Intelligence, and scalable software engineering. My goal
          is to build products that are simple, useful, and impactful.
        </p>
      </motion.div>
    </section>
  );
}