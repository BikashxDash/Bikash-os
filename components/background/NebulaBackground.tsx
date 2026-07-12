"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from "three";

function Nebula() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    mesh.current.rotation.z = clock.getElapsedTime() * 0.01;
  });

  return (
    <mesh ref={mesh} position={[0, 0, -8]}>
      <planeGeometry args={[40, 40]} />
      <meshBasicMaterial
        color="#1d4ed8"
        transparent
        opacity={0.08}
      />
    </mesh>
  );
}

export default function NebulaBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}
              style={{ position: "absolute", inset: 0 }}>
        <color attach="background" args={["#050505"]} />

        <ambientLight intensity={0.2} />

        <Nebula />

        <EffectComposer>
          <Bloom
            intensity={0.15}
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}