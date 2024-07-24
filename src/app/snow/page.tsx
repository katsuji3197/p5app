'use client'
import Link from "next/link";
import SnowComponent from "../../../components/SnowComponent";

export  default function Thunder (){
    return(
        <main>
            <span className="fixed -z-50">
                <SnowComponent/>
            </span>
            <span className="w-screen h-screen flex flex-col justify-between items-center">
            <div className="flex bg-black gap-2 text-xl p-2 m-12 bg-opacity-40 px-3 rounded-full text-center opacity-90 text-white">
                <Link href="/" className="py-4 w-40 hover:bg-black rounded-full duration-300 hover:bg-opacity-30">現在の天気</Link>
                <Link href="/sunny" className="py-4 w-40 hover:bg-black rounded-full duration-300 hover:bg-opacity-30">晴れ</Link>
                <Link href="/cloudy" className="py-4 w-40 hover:bg-black rounded-full duration-300 hover:bg-opacity-30">曇り</Link>
                <Link href="/rainy" className="py-4 w-40 hover:bg-black rounded-full duration-300 hover:bg-opacity-30">雨</Link>
                <p className="bg-gray-500 py-4 w-40 rounded-full shadow-xl">雪</p>
                <Link href="/thunder" className="py-4 w-40 hover:bg-black rounded-full duration-300 hover:bg-opacity-30">雷</Link>
            </div>
            </span>
        </main>
    );
}