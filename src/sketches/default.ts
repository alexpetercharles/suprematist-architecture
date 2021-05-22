import { p5 } from 'p5';

const defaultSketch = (width: number, height: number) => ((p: p5): void => {
  p.setup = () => {
    p.createCanvas(width, height, p.WEBGL);
  };

  p.draw = () => {
    p.background(0);
    p.translate(0, 0, 0);
    p.push();
    p.rotateZ(p.frameCount * 0.01);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.box(100, 100, 100);
    p.pop();
  };
});

export default defaultSketch;
