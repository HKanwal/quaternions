import * as THREE from "three";
import { CSS2DRenderer, CSS2DObject } from "./lib/CSS2DRenderer";
import { useEffect } from "react";
import { OrbitControls } from "./lib/OrbitControls";

function MVP() {
  useEffect(() => {
    if (document.getElementsByTagName("canvas").length > 0) {
      return;
    }

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    camera.position.set(0, 0, 20);

    const scene = new THREE.Scene();

    const geometry = new THREE.SphereGeometry(1, 16, 16);
    const material = new THREE.MeshBasicMaterial({ color: "grey", wireframe: true });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const div = document.createElement("div");
    div.style.color = "grey";
    div.style.fontFamily = "sans-serif";
    div.style.padding = "2px";
    div.textContent = "Earth";
    div.style.backgroundColor = "transparent";

    const label = new CSS2DObject(div);
    label.position.set(1.5 * 1, 0, 0);
    // label.center.set(0, 1);
    mesh.add(label);

    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

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

      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
    }

    animate();
  }, []);

  return <></>;
}

export default MVP;
