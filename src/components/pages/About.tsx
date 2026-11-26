'use client'

import { motion } from "framer-motion"
import { FiAward, FiUsers, FiBook, FiTarget } from "react-icons/fi"

export default function About() {
  const values = [
    {
      icon: FiAward,
      title: "Excellence",
      description: "Committed to academic excellence and student achievement",
    },
    {
      icon: FiUsers,
      title: "Community",
      description: "Building a supportive and inclusive learning environment",
    },
    {
      icon: FiBook,
      title: "Innovation",
      description: "Embracing modern teaching methods and technology",
    },
    {
      icon: FiTarget,
      title: "Growth",
      description: "Fostering personal and academic development",
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Our School
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Established with a vision to provide quality education, our school has been
            serving the community with dedication and excellence.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="text-blue-600 mb-4 text-4xl">
                  <Icon size={40} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To provide quality education that empowers students to become responsible
              citizens and lifelong learners, equipped with skills and knowledge for the
              modern world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-teal-900 mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To be a leading educational institution recognized for excellence, innovation,
              and fostering the holistic development of every student.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
