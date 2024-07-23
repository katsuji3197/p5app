"use client";
import SketchComponent from "../../components/SletchComponent"

export default function Home() {
  return (
    <div id="sketch-div">
      
      <span className="fixed h-screen w-screen -z-50">
        <SketchComponent />
      </span>
      <h1>My Sketch</h1>
      <p>This is my sketch!</p>
    </div>
  )
}
