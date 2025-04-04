import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

export function Building3D() {
  const meshRef = useRef();
  // Using a reliable public 3D model from Three.js examples
  const building = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-beech/model.gltf');

  useEffect(() => {
    gsap.to(meshRef.current.rotation, {
      y: Math.PI * 2,
      duration: 20,
      repeat: -1,
      ease: "none"
    });
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(time) * 0.1;
  });

  return (
    <primitive
      ref={meshRef}
      object={building.scene}
      scale={[0.5, 0.5, 0.5]}
      position={[0, -1, 0]}
    />
  );
}