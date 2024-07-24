import p5 from "p5";

function random(a: number, b: number): number {
  return Math.floor(Math.random() * (b + 1 - a)) + a;
}

const Sunny = (p: p5) => {

  let startColor: number = 255;
  let speedAnimate: number = 10;
  
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();
    p.smooth();
  };

  p.draw = () => {
    p.background(200);

    if(startColor > p.windowWidth + 255 || startColor < 255){
      speedAnimate *= -1;
    }
    startColor += speedAnimate;

    const gap: number = 0;
    const numRectangles : number = 20;
    const rectWidth: number = p.windowWidth / numRectangles;

    for (let x: number = 0; x < p.windowWidth; x += gap + rectWidth) {
      const green: number = startColor - x;
      const red: number = 255;
      p.fill(red, green, 0);
      p.rect(x, 0, rectWidth, p.windowHeight);
    }

  };

  
};

export default Sunny;
