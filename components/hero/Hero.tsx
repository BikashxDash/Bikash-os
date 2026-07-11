"use client";

import { TypeAnimation } from "react-type-animation";
import NebulaBackground from "@/components/background/NebulaBackground";
import Dock from "@/components/navbar/Dock";
import ProfileCard from "../profile/ProfileCard";
import Mission from "../mission/Mission";


export default function Hero() {
  return (
    <>
      <Dock />
      <NebulaBackground />

      <main className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-16 lg:flex-row">
          
          <div className="max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-blue-500">
              BIKASH OS
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-7xl">
              Bikash Dash
            </h1>

            <TypeAnimation
              sequence={[
                "Software Engineer",
                1500,
                "Full Stack Developer",
                1500,
                "AI Enthusiast",
                1500,
                "Problem Solver",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl text-zinc-300"
            />

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
              Building intelligent software with clean design, scalable
              architecture, and meaningful user experiences.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500">
                Explore Mission
              </button>

              <button className="rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-blue-500">
                Resume
              </button>
            </div>
          </div>

          <ProfileCard />

        </div>
      </main>
    </>
  );
}