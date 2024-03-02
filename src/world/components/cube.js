import { BoxGeometry, Mesh, MeshStandardMaterial, MathUtils } from 'three';

function createCube() {
  const cube = new Mesh(
    new BoxGeometry(1, 1, 1),
    new MeshStandardMaterial({
      color: 'purple',
    }),
  );
  cube.rotation.set(-0.5, -0.1, 0.8);
  /*30度转换为弧度*/
  const radiansPerSecond = MathUtils.degToRad(30);
  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };
  return cube;
}

export { createCube };
