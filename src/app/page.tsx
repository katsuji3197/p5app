"use client";
import CloudyComponent from "../../components/CloudyComponent";
import RainComponent from "../../components/RainComponent"
import SnowComponent from "../../components/SnowComponent";
import SunnyComponent from "../../components/SunnyComponent";
import ThunderComponent from "../../components/ThunderComponent";

export default function Home() {
  return (
    <div id="min-w-screen">
      <span className="w-screen -z-50">
        {/* <SunnyComponent /> */}
        {/* <RainComponent /> */}
        {/* <CloudyComponent/> */}
        {/* <ThunderComponent/> */}
        <SnowComponent/>
      </span>
    </div>
  )
}
