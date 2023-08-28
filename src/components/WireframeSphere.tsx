const WIDTH_SEGMENT = 24;
const HEIGHT_SEGMENTS = 12;

function WireframeSphere() {
  return (
    <>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, WIDTH_SEGMENT, HEIGHT_SEGMENTS]} />
        <meshBasicMaterial color="black" wireframe />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, WIDTH_SEGMENT, HEIGHT_SEGMENTS]} />
        <meshBasicMaterial color="grey" />
      </mesh>
    </>
  );
}

export default WireframeSphere;
