"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { inSphere } from "maath/random";
import { useRef, useState } from "react";
import * as THREE from "three";

function Stars() {
  const ref = useRef<THREE.Points>(null!);

  const [sphere] = useState(
    () => inSphere(new Float32Array(18000), { radius: 220 }) as Float32Array
  );

  useFrame((_, delta) => {
    ref.current.rotation.x -= delta * 0.003;
    ref.current.rotation.y -= delta * 0.005;
  });

  return (
    <Points ref={ref} positions={sphere} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function StarField() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <color attach="background" args={["#02030A"]} />
        <ambientLight intensity={0.25} />
        <fog attach="fog" args={["#02030A", 180, 600]} />
        <Stars />
      </Canvas>
    </div>
  );
}