"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Cosmic Watch",
    description:
      "Real-time Near Earth Object monitoring with interactive visualization.",
    stack: ["Next.js", "Flask", "Oracle", "Socket.IO"],
  },
  {
    id: "02",
    title: "Task Manager",
    description:
      "A modern productivity platform with authentication and task management.",
    stack: ["React", "Node.js", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-500">
        Projects
      </p>

      <h2 className="mb-12 text-5xl font-bold">
        Featured Missions
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8"
          >
            <p className="mb-3 text-blue-500">
              Mission {project.id}
            </p>

            <h3 className="mb-4 text-3xl font-semibold">
              {project.title}
            </h3>

            <p className="mb-6 text-zinc-400">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-700 px-4 py-2 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}