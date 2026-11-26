'use client'

import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-pattern"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            variants={variants}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Welcome to M S S K V U M V
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-100">
              Nurturing minds, building futures. Excellence in education is our commitment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about/principal" className="btn-primary">
                Learn More
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Quick Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={variants}
            className="grid grid-cols-2 gap-4"
          >
            <StatCard number="500+" label="Students" />
            <StatCard number="30+" label="Teachers" />
            <StatCard number="20+" label="Years" />
            <StatCard number="98%" label="Success Rate" />
          </motion.div>
        </div>
      </div>

      {/* Wave SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="white"
        />
      </svg>
    </section>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 md:p-6 text-center hover:bg-opacity-20 transition">
      <div className="text-2xl md:text-3xl font-bold mb-2">{number}</div>
      <div className="text-sm md:text-base text-gray-100">{label}</div>
    </div>
  )
}
