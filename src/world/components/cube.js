import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';

function createCube() {
  const cube = new Mesh(new BoxGeometry(1, 1, 1), new MeshBasicMaterial());
  return cube;
}

export { createCube };
