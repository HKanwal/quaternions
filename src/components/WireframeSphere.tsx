import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const WIDTH_SEGMENTS = 24;
const HEIGHT_SEGMENTS = 12;

const POINT_WIDTH_SEGMENTS = 32;
const POINT_HEIGHT_SEGMENTS = 16;

interface WireframeSphereProps {
  quaternion?: THREE.Quaternion;
}

function WireframeSphere({ quaternion }: WireframeSphereProps) {
  const groupRef = useRef<THREE.Group>(null);
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

        <mesh position={[1, 0, 0]}>
          <sphereGeometry args={[0.1, POINT_WIDTH_SEGMENTS, POINT_HEIGHT_SEGMENTS]} />
          <meshBasicMaterial color="#FF0000" />
        </mesh>

        <mesh position={[0, 0, -1]}>
          <sphereGeometry args={[0.1, POINT_WIDTH_SEGMENTS, POINT_HEIGHT_SEGMENTS]} />
          <meshBasicMaterial color="#00FF00" />
        </mesh>

        <mesh position={[0, 1, 0]}>
          <sphereGeometry args={[0.1, POINT_WIDTH_SEGMENTS, POINT_HEIGHT_SEGMENTS]} />
          <meshBasicMaterial color="#489fe5" />
        </mesh>
      </group>
    </>
  );
}

export default WireframeSphere;
