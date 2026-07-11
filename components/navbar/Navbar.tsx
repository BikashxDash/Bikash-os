"use client";

import { useEffect, useState } from "react";

const links = [
  "Mission",
  "Projects",
  "Lab",
  "Timeline",
  "Contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-full border transition-all duration-300 ${
        scrolled
          ? "border-zinc-700 bg-black/70 backdrop-blur-xl"
          : "border-zinc-800 bg-black/40 backdrop-blur-md"
      }`}
    >
      <nav className="flex items-center gap-8 px-8 py-4">
        {links.map((link) => (
          <button
            key={link}
            className="text-sm text-zinc-300 transition hover:text-blue-400"
          >
            {link}
          </button>
        ))}
      </nav>
    </header>
  );
}