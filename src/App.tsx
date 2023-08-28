import { OrbitControls } from "@react-three/drei";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import WireframeSphere from "./components/WireframeSphere";

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <WireframeSphere />

        <gridHelper args={[20, 20]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
