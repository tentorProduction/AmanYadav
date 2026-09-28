"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import type { Group, Mesh } from "three";

function Sculpture() {
  const group = useRef<Group>(null);
  const shell = useRef<Mesh>(null);
  const rings = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!group.current || !shell.current || !rings.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targetX = reduced ? 0 : state.pointer.y * 0.18;
    const targetY = reduced ? 0.15 : state.pointer.x * 0.28 + state.clock.elapsedTime * 0.1;
    group.current.rotation.x += (targetX - group.current.rotation.x) * Math.min(delta * 3, 1);
    group.current.rotation.y += (targetY - group.current.rotation.y) * Math.min(delta * 2.2, 1);
    shell.current.rotation.z = reduced ? -0.12 : Math.sin(state.clock.elapsedTime * 0.34) * 0.12;
    rings.current.rotation.z = reduced ? -0.32 : -0.32 + Math.sin(state.clock.elapsedTime * 0.42) * 0.06;
  });

  return (
    <group ref={group} rotation={[0, 0.15, -0.1]}>
      <Float speed={1.15} rotationIntensity={0.16} floatIntensity={0.32} floatingRange={[-0.08, 0.08]}>
        <mesh ref={shell} castShadow scale={[1.14, 1.1, 1.08]}>
          <icosahedronGeometry args={[1.18, 20]} />
          <MeshDistortMaterial
            color="#bfc0bd"
            roughness={0.08}
            metalness={1}
            clearcoat={1}
            clearcoatRoughness={0.04}
            distort={0.22}
            speed={1.05}
          />
        </mesh>
        <group ref={rings} rotation={[1.08, -0.18, -0.32]} scale={[1.45, 1.45, 0.56]}>
          <mesh castShadow>
            <torusGeometry args={[1.12, 0.072, 24, 180]} />
            <meshStandardMaterial color="#d7d7d4" metalness={1} roughness={0.04} />
          </mesh>
          <mesh rotation={[0.08, 0.22, 0.12]} scale={1.15}>
            <torusGeometry args={[1.1, 0.035, 18, 180]} />
            <meshStandardMaterial color="#5e5f5d" metalness={1} roughness={0.06} />
          </mesh>
          <mesh rotation={[-0.12, -0.15, -0.1]} scale={0.9}>
            <torusGeometry args={[1.08, 0.026, 16, 160]} />
            <meshStandardMaterial color="#ecece8" metalness={1} roughness={0.03} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

export function ThreeBlob() {
  return (
    <div className="three-blob" role="img" aria-label="Interactive metallic abstract blob representing technology and code">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.1, 5.1], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        shadows
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[-3, 4, 5]} intensity={3.2} castShadow />
        <pointLight position={[4, 1, 3]} intensity={5} color="#ffffff" />
        <Sculpture />
        <ContactShadows position={[0, -1.72, 0]} opacity={0.34} scale={5} blur={2.8} far={4} />
        <Environment preset="studio" environmentIntensity={1.2} />
      </Canvas>
    </div>
  );
}
