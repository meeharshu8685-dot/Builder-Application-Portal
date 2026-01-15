import * as React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';

const Blob: React.FC = () => {
    const [scale, setScale] = React.useState(2);

    React.useEffect(() => {
        const handleResize = () => {
            setScale(window.innerWidth < 768 ? 1.2 : 2);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Float
            speed={4}
            rotationIntensity={1}
            floatIntensity={2}
        >
            <Sphere args={[1, 32, 32]} scale={scale}>
                <MeshDistortMaterial
                    color="#7C7CFF"
                    speed={2}
                    distort={0.3}
                    radius={1}
                    metalness={0.4}
                    roughness={0.3}
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
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
            >
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
