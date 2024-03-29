import { WebGLRenderer } from 'three';

function createRenderer(contanier, scene, camera) {
  /*{ antialias: true }打开抗锯齿*/
  const renderer = new WebGLRenderer({ antialias: true });

  renderer.setSize(contanier.clientWidth, contanier.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  /*启用物理上正确的光照*/
  renderer.physicallyCorrectLights = true;
  return renderer;
}

export { createRenderer };
