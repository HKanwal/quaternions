import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { CSS2DObject } from "../lib/CSS2DRenderer";

const WIDTH_SEGMENTS = 24;
const HEIGHT_SEGMENTS = 12;

const POINT_WIDTH_SEGMENTS = 32;
const POINT_HEIGHT_SEGMENTS = 16;

interface WireframeSphereProps {
  quaternion?: THREE.Quaternion;
}

function WireframeSphere({ quaternion }: WireframeSphereProps) {
  const groupRef = useRef<THREE.Group>(null);
  const iRef = useRef<THREE.Mesh>(null);
  const jRef = useRef<THREE.Mesh>(null);
  const kRef = useRef<THREE.Mesh>(null);
  const dynamicQuaternion = useMemo(() => {
    return new THREE.Quaternion(0, 0, 0, 1);
  }, []);

  useFrame(() => {
    if (!quaternion || !groupRef.current) {
      return;
    }

    dynamicQuaternion.slerp(quaternion, 0.05);
    groupRef.current.setRotationFromQuaternion(dynamicQuaternion);
  });

  useEffect(() => {
    const iDiv = document.createElement("div");
    iDiv.className = "point-label";
    iDiv.textContent = "i";

    const iLabel = new CSS2DObject(iDiv);
    iLabel.position.set(0, 0, 0);
    iLabel.center.set(0, 0);
    iRef.current?.add(iLabel);

    const jDiv = document.createElement("div");
    jDiv.className = "point-label";
    jDiv.textContent = "j";

    const jLabel = new CSS2DObject(jDiv);
    jLabel.position.set(0, 0, 0);
    jLabel.center.set(0, 0);
    jRef.current?.add(jLabel);

    const kDiv = document.createElement("div");
    kDiv.className = "point-label";
    kDiv.textContent = "k";

    const kLabel = new CSS2DObject(kDiv);
    kLabel.position.set(0, 0, 0);
    kLabel.center.set(0, 0);
    kRef.current?.add(kLabel);
  }, []);

  return (
    <>
      <group ref={groupRef}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1, WIDTH_SEGMENTS, HEIGHT_SEGMENTS]} />
          <meshBasicMaterial color="black" wireframe />
        </mesh>

        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1, WIDTH_SEGMENTS, HEIGHT_SEGMENTS]} />
          <meshBasicMaterial color="grey" opacity={0.5} transparent />
        </mesh>

        <mesh position={[1, 0, 0]} ref={iRef}>
          <sphereGeometry args={[0.1, POINT_WIDTH_SEGMENTS, POINT_HEIGHT_SEGMENTS]} />
          <meshBasicMaterial color="#FF0000" />
        </mesh>

        <mesh position={[0, 0, -1]} ref={jRef}>
          <sphereGeometry args={[0.1, POINT_WIDTH_SEGMENTS, POINT_HEIGHT_SEGMENTS]} />
          <meshBasicMaterial color="#00FF00" />
        </mesh>

        <mesh position={[0, 1, 0]} ref={kRef}>
          <sphereGeometry args={[0.1, POINT_WIDTH_SEGMENTS, POINT_HEIGHT_SEGMENTS]} />
          <meshBasicMaterial color="#489fe5" />
        </mesh>
      </group>
    </>
  );
}

export default WireframeSphere;
