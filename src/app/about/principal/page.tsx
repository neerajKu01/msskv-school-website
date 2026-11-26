'use client'

import { motion } from "framer-motion"

export default function PrincipalMessage() {
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
            <h1 className="text-4xl font-bold mb-2">Principal's Message</h1>
            <p className="text-gray-100">Words of wisdom and vision from our principal</p>
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
            className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-lg border border-blue-200 mb-8"
          >
            <div className="text-6xl mb-4">👨‍🎓</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              A Word from Our Principal
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Dear Parents, Students, and Well-wishers,
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-gray-700 leading-relaxed mb-4">
              It is with great pride and joy that I welcome you to M S S K V U M V. Our institution has been a beacon of
              educational excellence for over two decades, dedicated to nurturing the talents and character of our
              students.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              In today's dynamic world, education transcends mere academics. We believe in fostering holistic development
              that encompasses intellectual growth, moral values, physical fitness, and social responsibility. Every
              student at our school is encouraged to explore their potential and discover their unique talents.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Our faculty comprises dedicated and experienced educators who go beyond textbooks to inspire and guide our
              students. We employ modern teaching methodologies integrated with technology, ensuring that our curriculum
              remains relevant and engaging.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              We are committed to maintaining the highest standards of discipline, ethics, and academic rigor. Our
              state-of-the-art facilities, coupled with our nurturing environment, provide the perfect platform for young
              minds to flourish and achieve excellence.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              I encourage parents to be active partners in their child's educational journey. Together, let us create an
              environment where every child can thrive and become a responsible citizen of our nation.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Thank you for entrusting us with your child's education.
            </p>

            <p className="text-gray-700 font-semibold">
              With warm regards,<br />
              <span className="text-lg">Principal, M S S K V U M V</span>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
