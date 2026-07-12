"use client";

import { motion } from "framer-motion";
import { GitHub, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-500">
        Contact
      </p>

      <h2 className="mb-6 text-5xl font-bold">
        Let's Build Something Great
      </h2>

      <p className="mb-12 max-w-2xl text-lg text-zinc-400">
        I'm always open to internships, collaborations, hackathons and exciting software projects.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <motion.a
          whileHover={{ y: -6 }}
          href="mailto:your@email.com"
          className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8"
        >
          <Mail className="mb-4 text-blue-500" size={28} />
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="mt-3 text-zinc-400">
            your@email.com
          </p>
        </motion.a>

        <motion.a
          whileHover={{ y: -6 }}
          href="https://github.com/BikashxDash"
          target="_blank"
          className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8"
        >
          <GitHub className="mb-4 text-blue-500" size={28} />
          <h3 className="text-xl font-semibold">GitHub</h3>
          <p className="mt-3 text-zinc-400">
            github.com/BikashxDash
          </p>
        </motion.a>

        <motion.a
          whileHover={{ y: -6 }}
          href="https://linkedin.com"
          target="_blank"
          className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8"
        >
          <Linkedin className="mb-4 text-blue-500" size={28} />
          <h3 className="text-xl font-semibold">LinkedIn</h3>
          <p className="mt-3 text-zinc-400">
            Connect with me
          </p>
        </motion.a>
      </div>
    </section>
  );
}