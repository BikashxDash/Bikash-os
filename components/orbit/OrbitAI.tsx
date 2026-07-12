"use client";

import { Bot, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function OrbitAI() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 h-[500px] w-[360px] rounded-3xl border border-zinc-800 bg-black/80 backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between border-b border-zinc-800 p-5">
              <div>
                <h2 className="font-semibold">ORBIT AI</h2>
                <p className="text-xs text-zinc-400">
                  Personal Portfolio Assistant
                </p>
              </div>

              <button onClick={() => setOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="flex h-[420px] items-center justify-center text-zinc-500">
              AI Chat Coming Soon...
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 shadow-lg"
      >
        <Bot size={30} />
      </motion.button>
    </>
  );
}