'use client'

import { motion } from "framer-motion"

export default function Teachers() {
  const teachers = [
    {
      id: 1,
      name: "Mr. Rajesh Kumar",
      subject: "Mathematics",
      experience: "12 years",
      bio: "Specialist in calculus and competitive exam preparation",
    },
    {
      id: 2,
      name: "Mrs. Priya Sharma",
      subject: "English",
      experience: "10 years",
      bio: "Expertise in literature and language skills development",
    },
    {
      id: 3,
      name: "Dr. Amit Patel",
      subject: "Science",
      experience: "15 years",
      bio: "PhD in Physics with focus on experimental learning",
    },
    {
      id: 4,
      name: "Ms. Neha Singh",
      subject: "History & Social Studies",
      experience: "8 years",
      bio: "Passionate about interactive and engaging classroom sessions",
    },
    {
      id: 5,
      name: "Mr. Vikram Verma",
      subject: "Computer Science",
      experience: "7 years",
      bio: "Professional developer with hands-on coding experience",
    },
    {
      id: 6,
      name: "Mrs. Anjali Desai",
      subject: "Physical Education",
      experience: "9 years",
      bio: "Certified fitness instructor and sports coach",
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
            <h1 className="text-4xl font-bold mb-2">Our Teachers</h1>
            <p className="text-gray-100">
              Meet our experienced and dedicated teaching staff
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Faculty Members
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of qualified and experienced educators are committed to
              providing exceptional education and mentorship to our students.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                {/* Avatar */}
                <div className="h-40 bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <div className="text-6xl">👨‍🏫</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {teacher.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">{teacher.subject}</p>
                  <p className="text-sm text-gray-500 mb-3">
                    Experience: {teacher.experience}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {teacher.bio}
                  </p>
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
              Join Our School Community
            </h2>
            <p className="text-gray-600 mb-6">
              Our dedicated teachers are ready to guide your child's academic journey.
              Enroll today and be part of our growing family of learners.
            </p>
            <a href="/contact" className="btn-primary inline-block">
              Contact Us for Admission
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
