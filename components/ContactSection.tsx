"use client";
import React, { useState } from "react"
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi"

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thanks for reaching out, ${formData.name}! I will get back to you soon.`)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="max-w-5xl mx-auto py-20 px-6 md:px-12">
      <h2 className="text-5xl font-extrabold mb-10 text-gray-900 dark:text-white text-center">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row md:space-x-16">
        {/* Contact Info */}
       {/* Contact Info */}
<div className="md:w-1/3 mb-10 md:mb-0 space-y-6">
  <div className="flex items-center space-x-4">
    <HiOutlineMail className="text-teal-600 w-8 h-8" />
    <a
      href="mailto:anjanashrestha612@gmail.com"
      className="text-lg text-gray-700 dark:text-gray-300 hover:underline"
    >
      anjanashrestha612@gmail.com
    </a>
  </div>
  <div className="flex items-center space-x-4">
    <HiOutlinePhone className="text-teal-600 w-8 h-8" />
    <p className="text-lg text-gray-700 dark:text-gray-300">+977 9766893333</p>
  </div>
  <div className="flex items-center space-x-4">
    <HiOutlineLocationMarker className="text-teal-600 w-8 h-8" />
    <p className="text-lg text-gray-700 dark:text-gray-300">Bhaktapur, Nepal</p>
  </div>
</div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-2/3 space-y-6 bg-white dark:bg-stone-900 p-8 rounded-xl shadow-md"
        >
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-gray-900 dark:text-gray-100">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-stone-800 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-900 dark:text-gray-100">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-stone-800 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold text-gray-900 dark:text-gray-100">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-stone-800 text-gray-900 dark:text-gray-100 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-teal-500 to-teal-700 text-white font-semibold rounded-full shadow-lg hover:from-teal-600 hover:to-teal-800 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
