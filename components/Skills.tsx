"use client"

import React, { useState } from "react"
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaPython,
} from "react-icons/fa"
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiGithub, SiJupyter,
} from "react-icons/si"

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-[#E44D26]" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
  { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: "GitHub", icon: <SiGithub className="text-[#181717]" /> },
  { name: "Jupyter", icon: <SiJupyter className="text-[#F37626]" /> },
]

export default function SkillsSection() {
  const [showAll, setShowAll] = useState(false)
  const visibleSkills = showAll ? skills : skills.slice(0, 6)

  return (
    <section id="skills" className="bg-white dark:bg-black py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My Skills 🛠️
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {visibleSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-5 bg-gray-100 dark:bg-stone-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">{skill.name}</p>
            </div>
          ))}
        </div>

        {skills.length > 6 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
