import { DirectionalLight } from 'three';

function createLights() {
  const light = new DirectionalLight('white', 8); // TODO
  // move the light right, up, and towards us
  light.position.set(10, 10, 10);

  return light;
}

export { createLights };
