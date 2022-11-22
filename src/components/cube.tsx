import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const Cube: React.FC<{
  cubeColor: string;
  cubeSize: number;
  cameraFov: number;
}> = (props): JSX.Element => {
  const { cubeColor, cubeSize, cameraFov } = props;
  console.log(cubeColor, cubeSize)
  useEffect(() => {
    const canvasEle = document.createElement("div");
    canvasEle.id = "cubeCanvas";
    console.log(THREE);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        cameraFov,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 10);
    scene.add(camera);
    console.log('cubeSize', cubeSize)
    const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: cubeColor });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    // cube.position.set(5, 5, 0);
    // cube.position.x = 3;
    // cube.scale.set(3, 2, 1);
    // cube.scale.x = 5;
    // cube.rotation.set(Math.PI / 4, 0, 0, "XZY");
    scene.add(cube);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    console.log(renderer);
    const cubeCanvas = document.getElementById("cubeCanvas");
    if (cubeCanvas) {
      cubeCanvas.firstChild.replaceWith(renderer.domElement);
    } else {
      canvasEle.appendChild(renderer.domElement);

      document.body.appendChild(canvasEle);
    }
    // renderer.render(scene, camera);
    const controls = new OrbitControls(camera, renderer.domElement);
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);
    let animateId = null;
    function animate() {
      cube.position.x += 0.01;
      cube.rotation.x += 0.01;
      if (cube.position.x > 5) {
        cube.position.x = 0;
      }
      renderer.render(scene, camera);
      animateId = requestAnimationFrame(animate);
    }
    if (animateId) {
      window.cancelAnimationFrame(animateId);
    }
    animate();
  }, [cubeColor, cubeSize, cameraFov]);
  return <div></div>;
};

export default Cube;
