'use client'

import { motion } from "framer-motion"

export default function Library() {
  const images = [
    { id: 1, title: "Main Library Hall", emoji: "📚" },
    { id: 2, title: "Reading Area", emoji: "🪑" },
    { id: 3, title: "Digital Resources", emoji: "💻" },
    { id: 4, title: "Reference Section", emoji: "📖" },
    { id: 5, title: "Study Corner", emoji: "✏️" },
    { id: 6, title: "Magazine Collection", emoji: "📰" },
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
            <h1 className="text-4xl font-bold mb-2">School Library</h1>
            <p className="text-gray-100">
              A hub of knowledge and learning resources
            </p>
          </motion.div>
        </div>
      </section>

      {/* Library Info */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-lg border border-blue-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About Our Library</h2>
            <p className="text-gray-700 mb-4">
              Our state-of-the-art library is a vibrant learning resource center with
              over 5000 books, digital resources, and reading materials. It serves as a
              quiet refuge for students seeking knowledge and intellectual enrichment.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Extensive collection of academic and reference books</li>
              <li>✓ Computer terminals with internet access</li>
              <li>✓ Digital library databases</li>
              <li>✓ Quiet study areas and reading nooks</li>
              <li>✓ Audio-visual materials and media resources</li>
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
                <div className="h-48 bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-teal-200 transition text-6xl">
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
