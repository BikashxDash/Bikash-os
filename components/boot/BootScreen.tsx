"use client";

import { useEffect, useState } from "react";

type BootScreenProps = {
  onComplete: () => void;
};

const messages = [
  "Initializing BIKASH OS...",
  "Loading Mission...",
  "Loading Projects...",
  "System Online",
];

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onComplete();
          }, 600);

          return 100;
        }

        const next = prev + 1;

        if (next >= 25 && next < 50) setMessageIndex(1);
        if (next >= 50 && next < 75) setMessageIndex(2);
        if (next >= 75) setMessageIndex(3);

        return next;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <main className="flex h-screen items-center justify-center bg-black px-6">
      <div className="w-full max-w-xl">
        <h1 className="mb-8 text-center text-3xl font-bold tracking-widest text-white">
          {messages[messageIndex]}
        </h1>

        <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-blue-500 transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-zinc-400">
          <span>Boot Sequence</span>
          <span>{progress}%</span>
        </div>
      </div>
    </main>
  );
}