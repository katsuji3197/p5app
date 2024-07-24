"use client";
import dynamic from "next/dynamic";
import React from "react";
import { P5WrapperProps } from "react-p5-wrapper";
import Image from "next/image";
import Thunder from "./modules/Thunder";

const ReactP5Wrapper = dynamic(
  () => import("react-p5-wrapper").then((mod) => mod.ReactP5Wrapper as any),
  {
    ssr: false,
  }
) as unknown as React.NamedExoticComponent<P5WrapperProps>;

export default function ThunderComponent() {
  return (
    <main className="w-screen h-screen flex">
      <span className="fixed h-screen w-screen -z-50">
        <ReactP5Wrapper sketch={Thunder} />
      </span>
      <div className="w-screen h-screen flex justify-center items-center gap-12">
        <Image src='/lightning.svg' height={400} width={400} alt={"アイコン"} className="drop-shadow-xl hover:scale-75 duration-300"/>
        <div className="flex flex-col items-center gap-8">
        <p className="text-3xl drop-shadow-md hover:scale-50 duration-300">現在の金沢市の天気</p>
        <p className="text-8xl font-bold drop-shadow-lg hover:scale-50 duration-300">雷</p>
        </div>
      </div>
    </main>
  );
}
