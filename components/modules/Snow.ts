'use client'
import p5 from "p5";

function random(a: number, b: number): number {
  return Math.floor(Math.random() * (b + 1 - a)) + a;
}

let snowflakes: Snowflake[] = [];

class Snowflake {
  posX: number;
  posY: number;
  initialangle: number;
  size: number;
  radius: number;

  constructor() {
    this.posX = 0;
    this.posY = random(-50, 0);
    this.initialangle = random(0, 2 * p5.prototype.PI);
    this.size = random(2, 5);
    
    this.radius = Math.sqrt(random(0, Math.pow(window.innerWidth / 2, 2)));
  }

  update(time: number, p: p5): void {
    let w: number = 0.6;
    let angle: number = w * time + this.initialangle;
    this.posX = p.windowWidth / 2 + this.radius * p.sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += p.pow(this.size, 1.2);
    
    // delete snowflake if past end of screen
    if (this.posY > p.windowHeight) {
      let index: number = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  }

  display(p: p5): void {
    p.ellipse(this.posX, this.posY, this.size);
  }
}

const Snow = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();
    p.smooth();
    p.fill(240);
  };

  p.draw = (): void => {
    p.background(70);
    let t: number = p.frameCount / 120;

    for (let i: number = 0; i < random(0, 5); i++) {
      snowflakes.push(new Snowflake());
    }

    for (let flake of snowflakes) {
      flake.update(t, p);
      flake.display(p);
    }
  };
};

export default Snow;
