import { useThree } from "@react-three/fiber";

const widthSegments = 24;
const heightSegments = 12;

function WireframeSphere() {
  useThree(({ camera }) => {
    camera.position.set(5, 5, 5);
  });

  return (
    <>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, widthSegments, heightSegments]} />
        <meshBasicMaterial color="black" wireframe />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, widthSegments, heightSegments]} />
        <meshBasicMaterial color="grey" />
      </mesh>
    </>
  );
}

export default WireframeSphere;
