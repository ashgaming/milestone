
import { memo, useEffect, useState } from "react";


const Scene3D = memo(() => {

  return (
    <div className="h-screen w-full -z-10">
      <iframe
        src="https://skybox.blockadelabs.com/e/52568c1efc576509ae58f5f3735aba1e"
        className={`w-full h-full `}
        allow="fullscreen"
        loading="lazy"
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