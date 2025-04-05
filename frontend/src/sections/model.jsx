import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ModelViewer = () => {
  const [loading, setLoading] = useState(true);
  const [modelInfo, setModelInfo] = useState({
    title: "3D Spacecraft Model",
    description: "This is a detailed 3D model of a futuristic spacecraft designed for deep space exploration. The model features intricate details including thrusters, communication arrays, and solar panels. The spacecraft is designed with both aesthetic appeal and functional considerations in mind, representing a balance between form and function.",
    specifications: [
      "Polygon count: 75,000",
      "Textures: 4K PBR materials",
      "Animation: Rotating thrusters",
      "Scale: 1:100"
    ]
  });

  const mountRef = useRef(null);
  const controlsRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111827);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth / 2, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    mountRef.current.appendChild(renderer.domElement);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 2);
    scene.add(directionalLight);
    
    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controlsRef.current = controls;
    
    // Sample geometry (while the model loads)
    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0x6366f1 });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);
    
    // Model loading
    const loader = new GLTFLoader();
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth / 2, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Load actual model (this would be replaced with your model path)
    // For this example, we'll simulate the loading
    setTimeout(() => {
      setLoading(false);
      // In a real implementation, you would load an actual model:
      // loader.load('path/to/model.gltf', (gltf) => {
      //   scene.remove(torusKnot);
      //   scene.add(gltf.scene);
      //   gltf.scene.scale.set(0.5, 0.5, 0.5);
      //   gltf.scene.position.set(0, -1, 0);
      //   setLoading(false);
      // });
    }, 2000);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);
  
  return (
    <div className="relative h-screen bg-gradient-to-r from-gray-100 to-gray-900 overflow-hidden">
      {/* Background gradient overlay for smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
      
      {/* Content container with overlapping sections */}
      <div className="flex h-full relative">
        {/* Left side - Description */}
        <div className="w-3/5 p-8 overflow-y-auto z-20 bg-gradient-to-r from-white to-transparent">
          <div className="max-w-lg">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">{modelInfo.title}</h1>
            <p className="text-gray-700 mb-6">{modelInfo.description}</p>
            
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Specifications</h2>
            <ul className="list-disc pl-5 mb-6 text-gray-700">
              {modelInfo.specifications.map((spec, index) => (
                <li key={index} className="mb-2">{spec}</li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Model Controls</h2>
              <p className="text-gray-700 mb-4">
                <strong>Rotate:</strong> Click and drag to rotate the model<br />
                <strong>Zoom:</strong> Use scroll wheel to zoom in/out<br />
                <strong>Pan:</strong> Right-click and drag to pan
              </p>
            </div>
          </div>
        </div>
        
        {/* Right side - 3D Viewer (with increased width and positioned to overlap) */}
        <div className="absolute right-0 w-3/5 h-full">
          {loading && (
            <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-30">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="mt-4 text-white">Loading 3D Model...</p>
              </div>
            </div>
          )}
          <div ref={mountRef} className="h-full w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ModelViewer;