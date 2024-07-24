'use client'
import p5 from "p5";

const Thunder = (p: p5) => {
  let xPos: number, yPos: number, pxPos: number, pyPos: number;
  const step = 5;
  let weight = 3;
  let colour = 70;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.strokeWeight(weight);
    p.frameRate(60); // フレームレートを設定
  };

  p.draw = () => {
    p.background(40); // 背景を黒に設定
    
    xPos = p.windowWidth / 2; // 稲妻の開始位置を中心に設定
    yPos = p.windowHeight / 2; // 稲妻の開始位置を中心に設定
    pxPos = xPos;
    pyPos = yPos;

    const maxIterations = 1000;
    let iterations = 0;

    while (p.dist(xPos, yPos, p.mouseX, p.mouseY) > step && iterations < maxIterations) {
      colour += p.random(-1, 1);
      colour = (colour + 100) % 100;
      
      p.strokeWeight(weight);
      p.stroke(200, 200, 250);
      p.line(xPos, yPos + 500, pxPos, pyPos +500);

      let mouseX = p.mouseX;
      let mouseY = p.mouseY;
      // マウスカーソルに向けて方向を計算
      if (p.mouseX < 0){
        mouseX = -mouseX;
      }
      let direction = p.atan2(-mouseY, -mouseX) + p.random(-p.PI / 2, p.PI / 2);
      pxPos = xPos;
      pyPos = yPos;
      xPos += p.sin(direction) * step;
      yPos += p.cos(direction) * step;

      iterations++;
    }

    p.line(pxPos, pyPos, xPos, yPos);
  };
};

export default Thunder;