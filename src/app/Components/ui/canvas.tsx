"use client";
import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function CoffeMdel() {
    
    const { scene } = useGLTF("/coffe.glb");
    return (
        <primitive
            object={scene}
            dispose={null}
            position={[-0.3, -0.6, 0]}
            rotation={[0, 0, -0.5]}
        />
    );
}

const CanvasComponent: React.FC = () => {
    return (
        <Canvas
            style={{
                height: "400px",
                width: "100%",
            }}
            camera={{ position: [0, 0, 2], fov: 50 }}
            shadows
        >
            <ambientLight intensity={1} />
            <directionalLight intensity={2} position={[10, 10, 10]} castShadow />
            <CoffeMdel />
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={3}
                maxPolarAngle={Math.PI / 2} 
                minPolarAngle={Math.PI / 2} 
            />
        </Canvas>
    );
};

export default CanvasComponent;
