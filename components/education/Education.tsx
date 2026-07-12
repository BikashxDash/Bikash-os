"use client";

import { motion } from "framer-motion";

const education = [
  {
    year: "2023 – 2027",
    institute: "KMBB College of Engineering and Technology",
    degree: "B.Tech in Computer Science & Engineering",
    details: "BPUT • Khordha, Odisha",
  },
  {
    year: "2021 – 2023",
    institute: "Divine Higher Secondary School",
    degree: "CHSE",
    details: "Nayagarh, Odisha",
  },
  {
    year: "2020 – 2021",
    institute: "Government UP High School",
    degree: "BSE",
    details: "Nayagarh, Odisha",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-500">
        Education
      </p>

      <h2 className="mb-12 text-5xl font-bold">
        Academic Journey
      </h2>

      <div className="space-y-8">
        {education.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">
                {item.institute}
              </h3>

              <span className="text-blue-500">
                {item.year}
              </span>
            </div>

            <p className="mt-2 text-lg text-zinc-300">
              {item.degree}
            </p>

            <p className="mt-3 text-zinc-400">
              {item.details}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}