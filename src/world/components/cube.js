import { BoxGeometry, Mesh, MeshStandardMaterial } from 'three';

function createCube() {
  const cube = new Mesh(
    new BoxGeometry(1, 1, 1),
    new MeshStandardMaterial({
      color: 'purple',
    }),
  );
  cube.rotation.set(-0.5, -0.1, 0.8);
  return cube;
}

export { createCube };
