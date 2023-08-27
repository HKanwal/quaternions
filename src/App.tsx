import { OrbitControls } from "@react-three/drei";
import "./App.css";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />

        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1, 64, 32]} />
          <meshBasicMaterial color="black" wireframe />
        </mesh>

        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1, 64, 32]} />
          <meshBasicMaterial color="grey" />
        </mesh>

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
