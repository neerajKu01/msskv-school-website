'use client'

import { motion } from "framer-motion"
import { FiZap, FiTrendingUp, FiShield, FiAirplay } from "react-icons/fi"

export default function Features() {
  const features = [
    {
      icon: FiZap,
      title: "Modern Curriculum",
      description: "Updated and comprehensive curriculum aligned with national standards",
    },
    {
      icon: FiTrendingUp,
      title: "Experienced Teachers",
      description: "Highly qualified and dedicated educators committed to student success",
    },
    {
      icon: FiShield,
      title: "Safe Environment",
      description: "Secure campus with modern facilities and comprehensive security measures",
    },
    {
      icon: FiAirplay,
      title: "Technology Enabled",
      description: "Smart classrooms equipped with latest educational technology",
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive education with modern facilities and experienced
            faculty to ensure the best learning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-blue-600 mb-4 text-5xl group-hover:text-teal-600 transition">
                  <Icon size={40} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
