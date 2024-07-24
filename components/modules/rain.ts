'use client'
import p5 from "p5";

function random(a: number, b: number): number {
  return Math.floor(Math.random() * (b + 1 - a)) + a;
}

const rain = (p: p5) => {
  
  let drop: Drop[] = [];

  p.setup = () => {
    p.background(70);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();
    p.smooth();
    for (let i = 0; i < 600; i++) {
      drop[i] = new Drop();
    }
  };

  p.draw = () => {
    p.background(70);
    for (let i = 0; i < 600; i++) {
      drop[i].show();
      drop[i].update();
    }
  };

  class Drop {
    x: number;
    y: number;
    speed: number;
    gravity: number;
  
    constructor() {
      this.x = random(0, p.windowWidth);
      this.y = random(0, -p.windowHeight);
      this.speed = random(5, 10);
      this.gravity = 1.35;
    }
  
    show() {
      p.noStroke();
      p.fill(130,130,220);
      p.ellipse(this.x, this.y, random(1, 5), random(1, 5));
    }
  
    update() {
      this.y += this.speed * this.gravity;
  
      if (this.y > p.windowHeight) {
        this.y = random(0, -p.windowHeight);
        this.gravity = 1.35;
      }
    }
  }
};

export default rain;
