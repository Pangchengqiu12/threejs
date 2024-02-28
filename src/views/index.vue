<template>
  <div id="scene-container"></div>
</template>

<script setup>
// import { Scene, PerspectiveCamera, Color, BoxGeometry, MeshBasicMaterial, Mesh, WebGLRenderer } from 'three';
import { World } from '@/world/index_1.js';
onMounted(() => {
  const contanier = document.querySelector('#scene-container');
  const world = new World(contanier);
  world.render();
  // console.log(world.scene.children);
  console.log(world.cube.position);
  // world.render();
  // const scene = new Scene();
  // scene.background = new Color('skyblue');
  // const camera = new PerspectiveCamera(35, contanier.clientWidth / contanier.clientHeight, 0.1, 100);
  // camera.position.set(0, 0, 10);
  // const cube = new Mesh(new BoxGeometry(1, 1, 1), new MeshBasicMaterial());
  // scene.add(cube);
  // const renderer = new WebGLRenderer();
  // renderer.setSize(contanier.clientWidth, contanier.clientHeight);
  // renderer.setPixelRatio(window.devicePixelRatio);
  // contanier.append(renderer.domElement);
  // renderer.render(scene, camera);
});
</script>

<style scoped>
#scene-container {
  width: 800px;
  height: 600px;
}
</style>
