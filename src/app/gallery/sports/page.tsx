'use client'

import { motion } from "framer-motion"

export default function Sports() {
  const images = [
    { id: 1, title: "Cricket Ground", emoji: "🏏" },
    { id: 2, title: "Football Field", emoji: "⚽" },
    { id: 3, title: "Basketball Court", emoji: "🏀" },
    { id: 4, title: "Athletic Track", emoji: "🏃" },
    { id: 5, title: "Tennis Courts", emoji: "🎾" },
    { id: 6, title: "Volleyball Court", emoji: "🏐" },
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-2">Sports Ground</h1>
            <p className="text-gray-100">
              Facilities for physical development and sports training
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sports Info */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-lg border border-blue-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Sports Facilities</h2>
            <p className="text-gray-700 mb-4">
              We believe in the holistic development of our students. Our expansive sports
              ground is equipped with modern facilities for various sports activities,
              fostering physical fitness, teamwork, and competitive spirit.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Full-size cricket ground</li>
              <li>✓ Professional football field</li>
              <li>✓ Basketball and volleyball courts</li>
              <li>✓ Athletic track for running</li>
              <li>✓ Qualified sports coaches</li>
              <li>✓ Training programs for various sports</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Gallery</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center group-hover:from-green-200 group-hover:to-blue-200 transition text-6xl">
                  {image.emoji}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
