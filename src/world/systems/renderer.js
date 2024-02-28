import { WebGLRenderer } from 'three';

function createRenderer() {
  /*{ antialias: true }打开抗锯齿*/
  const renderer = new WebGLRenderer({ antialias: true });
  /*启用物理上正确的光照*/
  renderer.physicallyCorrectLights = true;
  return renderer;
}

export { createRenderer };
