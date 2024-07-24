"use client";
import CloudyComponent from "../../components/CloudyComponent";
import RainComponent from "../../components/RainComponent"
import SunnyComponent from "../../components/SunnyComponent";

export default function Home() {
  return (
    <div id="min-w-screen">
      <span className="w-screen -z-50">
        {/* <SunnyComponent /> */}
        {/* <RainComponent /> */}
        <CloudyComponent/>
      </span>
    </div>
  )
}
