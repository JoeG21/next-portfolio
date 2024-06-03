"use client"

import Image from "next/image";
import React from 'react'
import { Icon } from "@/components/ui/evervault-card";

export default function About() {
  return (
    <>
      <section id="about">
        <div className="border border-white/[0.75] flex flex-col max-w-sm mx-auto relative sm:max-w-full xl:flex-row sm:mx-16">
          <Icon className="absolute h-12 w-12 -top-6 -left-6 text-white" />
          <Icon className="absolute h-12 w-12 -bottom-6 -left-6 text-white" />
          <Icon className="absolute h-12 w-12 -top-6 -right-6 text-white" />
          <Icon className="absolute h-12 w-12 -bottom-6 -right-6 text-white" />

          <div className="w-full mx-auto">
            <Image
              src="/pic.png"
              alt="Profile Pic"
              layout="responsive"
              width={500}
              height={200}
              className="object-cover"
            />
          </div>

          <div className="bg-[#252422] p-4 text-[#CCC5B9] text-lg">
            <h2 className="text-[#F2F4F3] text-2xl mt-4 mb-2 sm:text-4xl">Hi, I'm Joe</h2>
            <p>
              My passion for technology began with my first family PC, playing a weird SpongeBob game.
              I was so captivated by how everything on the screen was reactive,
              and little did I know, a seed was planted. Driven by this curiosity,
              I taught myself the basics: how things worked, why they worked,
              and how they could work better.
            </p>
            <p className="my-2">
              Then I enrolled in Flatiron School, which kicked off my tech career.
              Since then, I've been grateful for all the opportunities programming has given me.
              It has led to immense fulfillment and growth, both in my career and personally.
            </p>
            <p>
              Through this journey, the most important lesson I've learned and
              hold true to is <em>always feel comfortable being uncomfortable.</em>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
