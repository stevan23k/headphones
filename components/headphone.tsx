"use client";

import { useEffect, useState } from "react";
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

export default function ModeloObj() {
  const [obj, setObj] = useState<Group | null>(null);

  useEffect(() => {
    const loader = new OBJLoader();
    loader.load("/Headphones.obj", (group) => {
      centerAndMaterial(group);
      setObj(group);
    });
  }, []);

  if (!obj) return null;

  return <primitive object={obj} scale={1.1} />;
}
