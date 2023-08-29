import { useEffect, useRef } from "react";
import * as THREE from "three";

const WIDTH_SEGMENTS = 24;
const HEIGHT_SEGMENTS = 12;

interface WireframeSphereProps {
  quaternion?: THREE.Quaternion;
}

function WireframeSphere({ quaternion }: WireframeSphereProps) {
  const sphereRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (quaternion) {
      sphereRef.current?.setRotationFromQuaternion(quaternion);
      wireframeRef.current?.setRotationFromQuaternion(quaternion);
    }
  }, [quaternion]);

  return (
    <>
      <mesh position={[0, 0, 0]} ref={wireframeRef}>
        <sphereGeometry args={[1, WIDTH_SEGMENTS, HEIGHT_SEGMENTS]} />
        <meshBasicMaterial color="black" wireframe />
      </mesh>

      <mesh position={[0, 0, 0]} ref={sphereRef}>
        <sphereGeometry args={[1, WIDTH_SEGMENTS, HEIGHT_SEGMENTS]} />
        <meshBasicMaterial color="grey" />
      </mesh>
    </>
  );
}

export default WireframeSphere;
