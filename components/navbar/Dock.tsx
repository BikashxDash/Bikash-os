"use client";

import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const navItems = [
  "Mission",
  "Projects",
  "Lab",
  "Timeline",
  "Contact",
];

function DockItem({
  title,
  mouseX,
}: {
  title: string;
  mouseX: MotionValue<number>;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const distance = useTransform(mouseX, (value) => {
    const bounds = ref.current?.getBoundingClientRect();

    if (!bounds) return 0;

    return value - (bounds.x + bounds.width / 2);
  });

  const width = useSpring(
    useTransform(distance, [-180, 0, 180], [115, 145, 115]),
    {
      stiffness: 260,
      damping: 22,
    }
  );

  const scale = useSpring(
    useTransform(distance, [-180, 0, 180], [1, 1.18, 1]),
    {
      stiffness: 260,
      damping: 22,
    }
  );

  return (
    <motion.button
      ref={ref}
      style={{
        width,
        scale,
      }}
      className="flex h-14 items-center justify-center rounded-2xl text-[15px] font-medium text-zinc-300 transition-colors duration-300 hover:text-white"
    >
      {title}
    </motion.button>
  );
}

export default function Dock() {
  const mouseX = useMotionValue(-9999);

  return (
    <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(-9999)}
        className="
          flex
          h-18
          w-190
          items-center
          justify-evenly
          rounded-full
          border
          border-white/10
          bg-black/45
          px-5
          backdrop-blur-2xl
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        "
      >
        {navItems.map((item) => (
          <DockItem
            key={item}
            title={item}
            mouseX={mouseX}
          />
        ))}
      </motion.div>
    </div>
  );
}