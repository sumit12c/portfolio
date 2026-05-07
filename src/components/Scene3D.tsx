import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float, Environment } from '@react-three/drei';

export default function Scene3D() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const targetX = (state.pointer.x * Math.PI) / 8;
    const targetY = (state.pointer.y * Math.PI) / 8;
    // Smooth lerp towards pointer position
    groupRef.current.rotation.y += 0.03 * (targetX - groupRef.current.rotation.y);
    groupRef.current.rotation.x += 0.03 * (targetY - groupRef.current.rotation.x);
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* City environment for base reflections */}
      <Environment preset="city" />
      
      {/* Vibrant directional lights painting the white material */}
      <directionalLight position={[5, 10, 5]} color="#ec4899" intensity={4} />
      <directionalLight position={[-5, -10, 5]} color="#06b6d4" intensity={4} />
      <directionalLight position={[0, 0, -5]} color="#f97316" intensity={3} />
      <ambientLight intensity={0.2} />

      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <GenerativeShape />
      </Float>
    </group>
  );
}

function GenerativeShape() {
  const groupRef = useRef<THREE.Group>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.x = time * 0.1;
      groupRef.current.rotation.y = time * 0.15;
    }
    if (ring1.current) {
      ring1.current.rotation.z = time * 0.2;
    }
    if (ring2.current) {
      ring2.current.rotation.z = -time * 0.25;
    }
  });

  return (
    <group ref={groupRef} scale={1.8}>
      {/* Outer Sleek Ring */}
      <mesh ref={ring1}>
        <torusGeometry args={[1.5, 0.4, 128, 128]} />
        <meshPhysicalMaterial 
          color="#0a3d91"
          emissive="#021133"
          emissiveIntensity={0.2}
          roughness={0.1}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      
      {/* Inner Pink/Orange Vibrant Layer (intertwining) */}
      <mesh ref={ring2} position={[0,0, 0.1]} scale={1.05}>
        {/* We can use a torus knot with slight variation to make it look like an inner ribbon */}
        <torusKnotGeometry args={[1.4, 0.3, 256, 64, 1, 1]} />
        <meshPhysicalMaterial 
          color="#ff2a5f"
          emissive="#ff0055"
          emissiveIntensity={0.5}
          roughness={0.05}
          metalness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Floating inner core */}
      <mesh>
        <sphereGeometry args={[0.5, 64, 64]} />
        <meshPhysicalMaterial 
          color="#ff7b00"
          emissive="#ff5500"
          emissiveIntensity={0.5}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
}

