"use client"

import { SparklesCore } from "@/components/ui/sparkles";
import About from "./about/page";
import Projects from "./projects/page";
import Head from "next/head";

console.log('hello :)')

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-[#F2F4F3]">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Optional: Add other meta tags here */}
        <title>Your Website Title</title>
      </Head>
      <div className="h-[95vh] w-full bg-black flex flex-col items-center justify-center overflow-hidden">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-[#F2F4F3] relative z-20">
          Welcome
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>

      <About />
      <Projects />

    </main>
  );
}
