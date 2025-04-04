// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
// import { Building3D } from './Building3D';

import { memo, useState } from "react";

// Custom loading component (you can style this however you like)
const LoadingIndicator = () => (
  <div className="h-screen w-full flex items-center justify-center bg-gray-200">
  </div>
);

const Scene3D = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="h-screen w-full">
      {/* {!isLoaded && <LoadingIndicator />} */}
      <iframe
        src="https://skybox.blockadelabs.com/e/52568c1efc576509ae58f5f3735aba1e"
        className={`w-full h-full ${isLoaded ? "block" : "hidden"}`}
        allow="fullscreen"
        loading="lazy"
        onLoad={handleLoad} // Triggered when iframe content finishes loading
      />
    </div>
  );
});

export default Scene3D;


{ /* <Canvas>
  <PerspectiveCamera makeDefault position={[5, 2, 5]} />
  <OrbitControls enableZoom={false} />
  <Environment preset="city" />
  <ambientLight intensity={0.5} />
  <directionalLight position={[10, 10, 5]} intensity={1} />
  <Building3D />
</Canvas> */ }