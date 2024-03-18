import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const MyModel = ({ modelScale }) => {
  const modelRef = useRef();

  const rotationSpeed = 0.001; // Adjust the value to control the rotation speed

  // Rotate the model based on scroll position
  useFrame(({ clock }) => {
    const scrollPosition = window.scrollY;
    const time = clock.getElapsedTime();
    modelRef.current.rotation.y = (scrollPosition * rotationSpeed) + (time / 10);
  });

  return (
    <mesh ref={modelRef} scale={modelScale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
};

const ThreeDModel = () => {
  const modelScale = [3, 3, 3]; // Adjust scale as needed

  return (
    <div className="three-d-model" style={{ width: '100%', height: '70vh' }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MyModel modelScale={modelScale} />
      </Canvas>
    </div>
  );
};

export default ThreeDModel;
