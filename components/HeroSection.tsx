"use client"

import React from "react"
import Image from "next/image"
import { Link } from "react-scroll"
import { HiArrowDown } from "react-icons/hi"
import { Typewriter } from "react-simple-typewriter"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col md:flex-row items-center justify-center px-6 py-16 md:py-32 max-w-7xl mx-auto mt-11">
        {/* Profile Image */}
        
        {/* Typewriter Text */}
        <div className="text-center md:text-left md:w-3/5">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <Typewriter
              words={["Hi, I'm Anjana!"]}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed min-h-[5rem]">
            <Typewriter
              words={[
                "I'm a Computer Engineering student at Khwopa College of Engineering, passionate about programming, problem-solving, and building meaningful tech solutions.",
              ]}
              cursor
              cursorStyle="_"
              typeSpeed={40}
              delaySpeed={3000}
              deleteSpeed={20}
              loop={false}
            />
          </p>

          <Link
            to="projects"
            smooth={true}
            offset={-100}
            duration={500}
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all duration-200 cursor-pointer"
          >
            View Projects
          </Link>
         
        </div>
        <div className="w-48 h-48 md:w-80 md:h-80 relative rounded-full overflow-hidden shadow-2xl mb-6 md:mb-0 md:mr-10">
          <Image
            src="/headshot.JPG"
            alt="Portrait of Anjana Silinchhe Shrestha"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            priority
          />
        </div>

      </div>

      {/* Arrow Down */}
      <div className="flex justify-center mt-4">
        <Link to="about" smooth={true} offset={-100} duration={500}>
          <HiArrowDown
            size={32}
            className="text-teal-600 dark:text-teal-400 animate-bounce"
          />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
