import { useThree } from "@react-three/fiber";

function WireframeSphere() {
  useThree(({ camera }) => {
    camera.position.set(5, 5, 5);
  });

  return (
    <>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 64, 32]} />
        <meshBasicMaterial color="black" wireframe />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 64, 32]} />
        <meshBasicMaterial color="grey" />
      </mesh>
    </>
  );
}

export default WireframeSphere;
