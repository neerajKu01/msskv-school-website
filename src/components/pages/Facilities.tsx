'use client'

import { motion } from "framer-motion"
import Image from "next/image"

export default function Facilities() {
  const facilities = [
    {
      id: 1,
      name: "Modern Library",
      description: "Well-stocked library with digital resources and reading areas",
      icon: "📚",
    },
    {
      id: 2,
      name: "Sports Ground",
      description: "Spacious playground with facilities for cricket, football, and other sports",
      icon: "⚽",
    },
    {
      id: 3,
      name: "Smart Classrooms",
      description: "Interactive digital learning spaces equipped with multimedia facilities",
      icon: "💻",
    },
    {
      id: 4,
      name: "Science Labs",
      description: "Well-equipped laboratories for physics, chemistry, and biology experiments",
      icon: "🔬",
    },
    {
      id: 5,
      name: "Computer Lab",
      description: "Advanced computer lab for IT and coding education",
      icon: "🖥️",
    },
    {
      id: 6,
      name: "Cafeteria",
      description: "Hygienic cafeteria serving nutritious meals and refreshments",
      icon: "🍽️",
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Facilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Equipped with state-of-the-art facilities to provide a comprehensive learning
            and development environment for our students.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg border border-blue-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {facility.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {facility.name}
              </h3>
              <p className="text-gray-600 text-sm">{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
