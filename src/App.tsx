import "./App.css";
import { Canvas } from "@react-three/fiber";
import WireframeSphere from "./components/WireframeSphere";
import Controls from "./components/Controls";
import { useEffect, useMemo } from "react";
import * as THREE from "three";
import { CSS2DObject, CSS2DRenderer } from "./lib/CSS2DRenderer";
import { OrbitControls } from "./lib/OrbitControls";
import { Line } from "@react-three/drei";
import Grid from "./components/Grid";

function App() {
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

    const iDiv = document.createElement("div");
    iDiv.className = "label";
    iDiv.textContent = "i";

    const iLabel = new CSS2DObject(iDiv);
    iLabel.position.set(5.2, 0, 0);
    // iLabel.center.set(0, 1);
    scene.add(iLabel);

    const jDiv = document.createElement("div");
    jDiv.className = "label";
    jDiv.textContent = "j";

    const jLabel = new CSS2DObject(jDiv);
    jLabel.position.set(0, 0, -5.2);
    scene.add(jLabel);

    const kDiv = document.createElement("div");
    kDiv.className = "label";
    kDiv.textContent = "k";

    const kLabel = new CSS2DObject(kDiv);
    kLabel.position.set(0, 4.2, 0);
    scene.add(kLabel);

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

  return (
    <>
      <div id="canvas-container">
        <Canvas camera={camera} scene={scene} style={{ background: "#343541" }}>
          <WireframeSphere />
          <Line
            points={[
              [0, -4, 0],
              [0, 4, 0],
            ]}
            color="white"
          />
          <Grid />
        </Canvas>
      </div>

      <Controls />
    </>
  );
}

export default App;
