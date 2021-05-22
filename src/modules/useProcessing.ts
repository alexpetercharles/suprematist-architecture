import P5 from 'p5';
import defaultSketch from '@/sketches/default';

// new P5 initiates the p5 with 2 Parameters. One is the sketch the other the container
const useSketches = (container: HTMLElement): P5 => new P5(
  defaultSketch(container.offsetWidth, container.offsetHeight), container,
);

// add p5 to window for libraries
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).p5 = P5;
export default useSketches;
