import * as React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';

const Blob: React.FC = () => {
    return (
        <Float
            speed={4}
            rotationIntensity={1}
            floatIntensity={2}
        >
            <Sphere args={[1, 64, 64]} scale={2}>
                <MeshDistortMaterial
                    color="#7C7CFF"
                    speed={3}
                    distort={0.4}
                    radius={1}
                    metalness={0.6}
                    roughness={0.2}
                    transparent
                    opacity={0.15}
                />
            </Sphere>
        </Float>
    );
};

const Background3D: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-40">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Suspense fallback={null}>
                    <Blob />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Background3D;
