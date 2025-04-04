import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Building3D } from './Building3D';

export function Scene3D() {
  return (
    <div className="h-screen w-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[5, 2, 5]} />
        <OrbitControls enableZoom={false} />
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Building3D />
      </Canvas>
    </div>
  );
}