"use client";
import SketchComponent from "../../components/RainComponent"

export default function Home() {
  return (
    <div id="min-w-screen min-h-screen">
      <span className="fixed h-screen w-screen -z-50">
        <SketchComponent />
      </span>
    </div>
  )
}
