'use client'

import { motion } from "framer-motion"

export default function ManagerMessage() {
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
            <h1 className="text-4xl font-bold mb-2">Manager's Message</h1>
            <p className="text-gray-100">Administrative vision and leadership perspective</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-r from-teal-50 to-blue-50 p-8 rounded-lg border border-teal-200 mb-8"
          >
            <div className="text-6xl mb-4">👔</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              A Message from Our Manager
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Dear Community,
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-gray-700 leading-relaxed mb-4">
              The success of M S S K V U M V lies not just in our academic achievements, but in our commitment to our
              students, staff, and the broader community we serve. As Manager, I take immense pride in overseeing an
              institution that continues to grow and adapt to the evolving needs of education.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              We believe that education is the foundation of a progressive society. Our role is to ensure that every
              child receives not just quality education, but also the support and resources they need to succeed in life.
              We continuously invest in our infrastructure, faculty development, and innovative teaching practices.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Our management team is dedicated to creating policies and initiatives that foster a positive learning
              environment. We work closely with our teaching staff to implement best practices and ensure that our
              students are well-prepared for the challenges of the future.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              We are grateful to our parents for their trust and support. It is this partnership between school and
              family that makes our journey meaningful. Together, we are building a stronger, more compassionate, and
              more capable generation.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              We look forward to continuing our mission of excellence and positive impact.
            </p>

            <p className="text-gray-700 font-semibold">
              With gratitude,<br />
              <span className="text-lg">Manager, M S S K V U M V</span>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
