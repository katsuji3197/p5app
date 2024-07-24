'use client'
import p5 from "p5";

function random(a: number, b: number): number {
  return Math.floor(Math.random() * (b + 1 - a)) + a;
}

const Cloudy = (p: p5) => {

  const t: number = 60;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();
    p.smooth();
  };

  p.draw = () => {
    p.background(90,120,255);

    for (let j = 0; j < 40; j++) {
      const seed: number = (j - p.frameCount) * 0.05;
      let pre_y: number = p.noise(seed) * t - t / 2 + p.windowHeight / 4 * p.sin(240) + p.windowHeight + 100;
      p.stroke(200);
      for (let i = 0; i < p.windowWidth; i += 3) {
        const y: number = p.noise(seed + 0.01 * (i + 1)) * t - t / 2 + p.windowHeight / 4 *p.sin(p.TWO_PI / 360 * (i - p.frameCount * 2) * 0.1) + p.windowHeight +100;
        p.line(i, pre_y + 400 , i + 3, y - p.windowHeight/2 - 20 );
        pre_y = y;
      }
    }
  };

  
};

export default Cloudy;
