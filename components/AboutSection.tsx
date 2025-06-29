"use client"

import React from "react"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 md:px-16 bg-gray-100 dark:bg-stone-900">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
        About Me
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <Image
            src="/headshot.JPG"
            alt="Anjana&apos;s portrait"
            width={400}
            height={400}
            className="rounded-2xl shadow-xl mx-auto"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h5 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I&apos;m Anjana! 👋
          </h5>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            I&apos;m a <span className="font-semibold text-teal-600">Computer Engineering student</span> at Khwopa College of Engineering.
          </p>
          <p className="text-md text-gray-600 dark:text-gray-400 mb-4">
            Passionate about programming, problem-solving, and building innovative solutions that matter. I&apos;m constantly exploring new technologies and turning ideas into real-world applications.
          </p>
          <p className="italic text-teal-600 dark:text-teal-400">
            &quot;Driven by curiosity. Fueled by code.&quot;
          </p>
        </div>
      </div>
    </section>
  )
}
