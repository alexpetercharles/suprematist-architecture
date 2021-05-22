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

  let mouseInitialY: number;
  let mouseDeltaY = 0;
  p.mousePressed = () => { mouseInitialY = p.mouseY; };
  p.mouseDragged = () => { mouseDeltaY = mouseInitialY - p.mouseY; };

  const drawBuilding = (
    boxWidth: number,
    boxHeight: number,
    boxDepth: number,
    x: number,
    y: number,
  ) => {
    p.push();
    p.translate(x, y, mouseDeltaY / 2);
    p.stroke(255);
    p.ambientMaterial(0, 0, 0);
    p.box(boxWidth, boxDepth, boxHeight + mouseDeltaY);
    p.translate(0, 0, ((boxHeight + mouseDeltaY) / 2) + 0.1);
    p.emissiveMaterial(255, 255, 255);
    p.plane(boxWidth, boxDepth);
    p.pop();
  };

  const boxScale = 100;
  p.draw = () => {
    p.background(0);
    // p.orbitControl();
    p.rotateX(90);
    drawBuilding(400, boxScale, 200, 0, 0);
  };
});

export default defaultSketch;
