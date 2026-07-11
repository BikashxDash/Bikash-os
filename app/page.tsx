"use client";

import { useState } from "react";
import BootScreen from "@/components/boot/BootScreen";
import Hero from "@/components/hero/Hero";

export default function Home() {
  const [booted, setBooted] = useState(false);

  if (!booted) {
    return <BootScreen onComplete={() => setBooted(true)} />;
  }

  return <Hero />;
}