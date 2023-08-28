import { OrbitControls } from "@react-three/drei";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import WireframeSphere from "./components/WireframeSphere";
import Controls from "./components/Controls";

function App() {
  return (
    <>
      <div id="canvas-container">
        <Canvas>
          <WireframeSphere />

          <gridHelper args={[20, 20]} />
          <OrbitControls />
        </Canvas>
      </div>

      <Controls />
    </>
  );
}

export default App;
