import "./App.css";
import { Canvas } from "@react-three/fiber";
import WireframeSphere from "./components/WireframeSphere";
import Controls from "./components/Controls";
import { useEffect, useMemo, useState } from "react";
import * as THREE from "three";
import { CSS2DObject, CSS2DRenderer } from "./lib/CSS2DRenderer";
import { OrbitControls } from "./lib/OrbitControls";
import { Line } from "@react-three/drei";
import Grid from "./components/Grid";
import Source from "./components/Source";

const origin = new THREE.Vector3(0, 0, 0);

function App() {
  const [axis, setAxis] = useState<THREE.Vector3>(new THREE.Vector3(1, 0, 0));
  const [quaternion, setQuaternion] = useState<THREE.Quaternion | null>(null);

  const camera = useMemo(() => {
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    camera.position.set(8, 8, 8);

    return camera;
  }, []);

  const scene = useMemo(() => {
    return new THREE.Scene();
  }, []);

  useEffect(() => {
    if (document.getElementsByClassName("label").length > 0) {
      return;
    }

    const xDiv = document.createElement("div");
    xDiv.className = "label";
    xDiv.textContent = "x";

    const xLabel = new CSS2DObject(xDiv);
    xLabel.position.set(5.2, 0, 0);
    // iLabel.center.set(0, 1);
    scene.add(xLabel);

    const yDiv = document.createElement("div");
    yDiv.className = "label";
    yDiv.textContent = "y";

    const yLabel = new CSS2DObject(yDiv);
    yLabel.position.set(0, 0, -5.2);
    scene.add(yLabel);

    const zDiv = document.createElement("div");
    zDiv.className = "label";
    zDiv.textContent = "z";

    const zLabel = new CSS2DObject(zDiv);
    zLabel.position.set(0, 4.2, 0);
    scene.add(zLabel);

    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.domElement.style.position = "absolute";
    labelRenderer.domElement.style.top = "0px";
    document.body.appendChild(labelRenderer.domElement);

    const controls = new OrbitControls(camera, labelRenderer.domElement);
    controls.minDistance = 5;
    controls.maxDistance = 100;

    function animate() {
      requestAnimationFrame(animate);
      labelRenderer.render(scene, camera);
    }

    animate();
  }, [camera, scene]);

  const handleDirectionChange = (newDir: [number, number, number]) => {
    const newVector = new THREE.Vector3(newDir[0], newDir[2], -newDir[1]);
    setAxis(newVector);
  };

  const handleQuaternionChange = (quaternion: THREE.Quaternion) => {
    setQuaternion(quaternion);
  };

  return (
    <>
      <div id="canvas-container">
        <Canvas camera={camera} scene={scene} style={{ background: "#343541" }}>
          <WireframeSphere quaternion={quaternion ?? undefined} />
          <Line
            points={[
              [0, -4, 0],
              [0, 4, 0],
            ]}
            color="white"
          />
          <Grid />
          <arrowHelper args={[axis, origin, 3, "#8A2BE2"]} />
        </Canvas>
      </div>

      <Controls
        onDirectionChange={handleDirectionChange}
        onQuaternionChange={handleQuaternionChange}
      />
      <Source />
    </>
  );
}

export default App;
