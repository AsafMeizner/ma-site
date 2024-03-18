import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { BoxGeometry, MeshBasicMaterial } from 'three';

const MyModel = ({ modelScale }) => {
  const modelRef = useRef();

  // Rotate the model based on scroll position
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    modelRef.current.rotation.y = time / 2; // Adjust rotation speed as needed
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
