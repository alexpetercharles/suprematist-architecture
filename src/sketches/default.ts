/* eslint-disable no-use-before-define */
import { Camera, p5 } from 'p5';

import addScreenPosition from '@/helpers/addScreenPosition';

import boxes from '@/works/mate.json';

type Box = {
  x: number, y: number, width: number, height: number, depth: number, hovering: boolean }

const defaultSketch = (width: number, height: number) => ((p: p5): void => {
  let cam: Camera;
  const camPosition = p.createVector(-1250, -500, 1000);
  const camCenter = p.createVector(0, 0, 0);

  p.setup = () => {
    p.createCanvas(width, height, p.WEBGL);
    p.angleMode(p.DEGREES);
    p.perspective();

    addScreenPosition(p);

    cam = p.createCamera();
    cam.setPosition(camPosition.x, camPosition.y, camPosition.z);
    cam.lookAt(camCenter.x, camCenter.y, camCenter.z);
  };

  const mouseSensitivity = 2;
  let mouseInitialY: number;
  let mouseDeltaY = 0;
  p.mousePressed = () => { mouseInitialY = p.mouseY; };
  p.mouseDragged = () => {
    boxes.forEach((box) => {
      mouseDeltaY = (mouseInitialY - p.mouseY) * mouseSensitivity;
      if (box.hovering) {
        box.height = mouseDeltaY;
      }
    });
  };

  const drawBox = (box: Box) => {
    p.push();
    p.translate(box.x, box.y, box.height / 2);
    p.stroke(255);
    p.ambientMaterial(0, 0, 0);
    p.box(box.width, box.depth, box.height);
    p.translate(0, 0, ((box.height) / 2) + 0.1);
    p.emissiveMaterial(255, 255, 255);
    p.plane(box.width, box.depth);
    p.pop();
  };

  p.draw = () => {
    p.cursor('auto');
    boxes.forEach((box) => { if (box.hovering) p.cursor('grab'); });
    p.background(0);
    // p.orbitControl();
    p.rotateX(90);

    boxes.forEach((box) => drawBox(box));
  };

  const boxHover = (box: Box): boolean => {
    const planeScreenPosition = p.screenPosition(
      box.x, box.y, box.height / 2,
    );
    return Math.abs((width / 2 + planeScreenPosition.x) - p.mouseX) < box.depth / 3
    && (Math.abs((height / 2 + planeScreenPosition.y) - p.mouseY) < box.width / 3);
  };

  p.mouseMoved = () => {
    boxes.forEach((box) => {
      box.hovering = boxHover(box);
    });
  };
});

export default defaultSketch;
