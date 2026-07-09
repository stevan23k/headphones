"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import {
  type Mesh,
  MeshStandardMaterial,
  type Group,
  Box3,
  Vector3,
  DoubleSide,
} from "three";

function centerAndMaterial(obj: Group) {
  const material = new MeshStandardMaterial({
    color: "#999999",
    metalness: 0.7,
    roughness: 0.2,
    side: DoubleSide,
  });

  obj.traverse((child) => {
    const mesh = child as Mesh;
    if (mesh.isMesh) {
      mesh.material = material;
    }
  });

  obj.rotateX(-Math.PI / 2);
  obj.rotateY(Math.PI / 2);

  const box = new Box3().setFromObject(obj);
  const center = box.getCenter(new Vector3());
  obj.position.sub(center);
}

function StaticModel() {
  const [obj, setObj] = useState<Group | null>(null);

  useEffect(() => {
    const loader = new OBJLoader();
    loader.load("/Headphones.obj", (group) => {
      centerAndMaterial(group);
      group.scale.set(0.44, 0.44, 0.44);
      group.rotation.y = Math.PI * 4;
      group.rotation.z = 0.15;
      setObj(group);
    });
  }, []);

  if (!obj) return null;

  return <primitive object={obj} />;
}

export default function ProductCardModel() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 35 }}
      className="pointer-events-none h-full w-full"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 20, 10]} intensity={3} />
      <directionalLight position={[-10, 5, -10]} intensity={1.5} />
      <directionalLight position={[0, -10, 0]} intensity={0.5} />
      <StaticModel />
    </Canvas>
  );
}
