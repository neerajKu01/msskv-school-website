'use client'

import { motion } from "framer-motion"

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Annual Sports Day",
      emoji: "🏅",
      description: "Celebrating athletic excellence and sportsmanship",
    },
    {
      id: 2,
      title: "Science Fair",
      emoji: "🔬",
      description: "Showcasing innovative student projects and research",
    },
    {
      id: 3,
      title: "Cultural Festival",
      emoji: "🎭",
      description: "Celebrating diverse cultures through performances and art",
    },
    {
      id: 4,
      title: "Annual Day",
      emoji: "🎉",
      description: "Grand celebration with awards and performances",
    },
    {
      id: 5,
      title: "Debate Competition",
      emoji: "🎤",
      description: "Developing communication and critical thinking skills",
    },
    {
      id: 6,
      title: "Educational Trips",
      emoji: "🚌",
      description: "Experiential learning through field visits",
    },
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
            <h1 className="text-4xl font-bold mb-2">School Events</h1>
            <p className="text-gray-100">
              Making memories through meaningful activities and celebrations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Info */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg border border-purple-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Events & Celebrations
            </h2>
            <p className="text-gray-700 mb-4">
              Throughout the academic year, we organize various events and activities
              to enrich our students' educational experience and build a vibrant school
              community. These events promote teamwork, creativity, and cultural awareness.
            </p>
            <p className="text-gray-700">
              From academic competitions to cultural programs, sports events to community
              service initiatives, our students get opportunities to shine and grow beyond
              the classroom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Events</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-32 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center group-hover:scale-105 transition text-5xl">
                  {event.emoji}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-lg border border-blue-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Be Part of Our School Community
            </h2>
            <p className="text-gray-600 mb-6">
              Join us and experience a learning environment that celebrates excellence,
              creativity, and growth.
            </p>
            <a href="/contact" className="btn-primary inline-block">
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
