"use client";

import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute h-97.5 w-97.5 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative rounded-full border border-zinc-700 p-2">
        <div className="rounded-full border border-blue-500/40 p-2">
          <Image
            src="/images/profile.png"
            alt="Profile"
            width={340}
            height={340}
            priority
            className="rounded-full object-cover"
          />
        </div>
      </div>

      <div className="absolute -bottom-2 rounded-full border border-zinc-700 bg-black/70 px-4 py-2 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-zinc-300">
            SYSTEM ONLINE
          </span>
        </div>
      </div>
    </div>
  );
}