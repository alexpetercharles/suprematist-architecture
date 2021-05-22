import { Camera, p5 } from 'p5';

const defaultSketch = (width: number, height: number) => ((p: p5): void => {
  let cam: Camera;
  const camPosition = p.createVector(-1250, -500, 1000);
  const camCenter = p.createVector(0, 0, 0);

  p.setup = () => {
    p.createCanvas(width, height, p.WEBGL);
    p.angleMode(p.DEGREES);
    // p.debugMode();

    cam = p.createCamera();
    cam.setPosition(camPosition.x, camPosition.y, camPosition.z);
    cam.lookAt(camCenter.x, camCenter.y, camCenter.z);
  };

  const createBox = (boxWidth: number, boxHeight: number, boxDepth: number) => {
    p.push();
    p.stroke(255);
    p.ambientMaterial(0, 0, 0);
    p.box(boxWidth, boxDepth, boxHeight);
    p.translate(0, 0, (boxHeight / 2) + 0.1);
    p.emissiveMaterial(255, 255, 255);
    p.plane(boxWidth, boxDepth);
    p.pop();
  };

  const boxScale = 100;
  p.draw = () => {
    p.background(0);
    // p.orbitControl();
    p.rotateX(90);
    createBox(400, boxScale, 200);
  };
});

export default defaultSketch;
