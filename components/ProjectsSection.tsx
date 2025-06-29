"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import { motion } from "framer-motion"

const projects = [
  {
    name: "QR-Generator",
    description: "This is a simple QR generator.",
    image: "/qr.png",
    github: "https://github.com/anjanass/project_QR",
    link: "https://anjanass.github.io/project_QR/",
  },
  {
    name: "2048-Game",
    description:
      "A responsive 2048 game with smooth tile animations. Combine numbers and reach 2048!",
    image: "/2048.png",
    github: "https://github.com/anjanass/project_2048",
    link: "https://anjanass.github.io/project_2048/",
  },
  {
    name: "Snake-Game",
    description:
      "Classic Snake Game using HTML/CSS/JS. Smooth movement, collision detection, and fun gameplay.",
    image: "/snk.png",
    github: "https://github.com/anjanass/project_SNAKE",
    link: "https://anjanass.github.io/project_SNAKE/",
  },
  {
    name: "Calculator",
    description: "A browser-based calculator for basic arithmetic operations.",
    image: "/calc.png",
    github: "https://github.com/anjanass/project_CALC",
    link: "https://anjanass.github.io/project_CALC/",
  },
  {
    name: "Old Portfolio",
    description: "This is my old portfolio using HTML/CSS/JS.",
    image: "/A-modified.png",
    github: "https://github.com/anjanass/my_portfolio",
    link: "https://www.anjanasilinchhe.com.np/",
  },
]

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Projects
        </h1>
        <hr className="w-16 h-1 mx-auto mb-10 bg-teal-500 rounded border-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {visibleProjects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(16, 185, 129, 0.5)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 flex flex-col items-center cursor-pointer"
            >
              <Link href={project.link} target="_blank" className="w-full block rounded-lg overflow-hidden mb-4 relative h-48">
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  priority
                />
              </Link>
              <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-center text-gray-700 dark:text-gray-300 mb-5 px-2">
                {project.description}
              </p>
              <div className="flex space-x-6">
                <Link href={project.github} target="_blank" aria-label="GitHub Repository">
                  <BsGithub className="text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400 transition-transform hover:-translate-y-1" size={26} />
                </Link>
                <Link href={project.link} target="_blank" aria-label="Live Project">
                  <BsArrowUpRightSquare className="text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400 transition-transform hover:-translate-y-1" size={26} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-700 text-white font-semibold rounded-full shadow-lg hover:from-teal-600 hover:to-teal-800 transition duration-300"
            >
              {showAll ? "Show Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectsSection
