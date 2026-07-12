"use client";

import { useState } from "react";
import BootScreen from "@/components/boot/BootScreen";
import Hero from "@/components/hero/Hero";
import Mission from "@/components/mission/Mission";
import Projects from "@/components/projects/Projects";
import Lab from "@/components/lab/Lab";
import Timeline from "@/components/timeline/Timeline";

export default function Home() {
  const [booted, setBooted] = useState(false);

  if (!booted) {
    return <BootScreen onComplete={() => setBooted(true)} />;
  }

  return(
  <>
  <Hero />
  <Mission />
  <Projects />
  <Lab />
  <Timeline />
  </>
  );
}