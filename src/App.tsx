import { useLayoutEffect } from 'react';
import * as THREE from 'three';

function App() {
  useLayoutEffect(() => {
    const canvasEle = document.createElement('div');
    canvasEle.id = 'cubeCanvas';
    console.log(THREE)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.set(0, 0, 10);
    scene.add(camera);
    const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
    const cubeMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
    scene.add( cube );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    console.log(renderer);
    const cubeCanvas = document.getElementById('cubeCanvas');
    if (cubeCanvas) {
      cubeCanvas.firstChild.replaceWidth(renderer.domElement);
    } else {
        canvasEle.appendChild(renderer.domElement);

        document.body.appendChild(canvasEle);
    }
    renderer.render(scene, camera);
  }, []);
  return (
    <div></div>
  );
}

export default App;
