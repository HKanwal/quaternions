import { Vector2, Object3D, Scene, Camera } from "@types/three";

export declare class CSS2DObject extends Object3D {
  isCSS2DObject: boolean;
  element: HTMLDivElement;
  center: Vector2;
}

export declare class CSS2DRenderer {
  domElement: HTMLDivElement;
  getSize: () => { width: number; height: number };
  setSize: (width: number, height: number) => void;
  render: (scene: Scene, camera: Camera) => void;
}
