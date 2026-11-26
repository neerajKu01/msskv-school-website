import Link from "next/link"
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* School Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About School</h3>
            <p className="text-sm mb-4">
              M S S K V U M V is committed to providing quality education and fostering academic excellence.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <FiMapPin className="mt-1 flex-shrink-0" size={16} />
                <span>Khwajpur, Meerpur</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about/principal" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/teachers" className="hover:text-white transition">
                  Teachers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Gallery Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Gallery</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/gallery/library" className="hover:text-white transition">
                  Library
                </Link>
              </li>
              <li>
                <Link href="/gallery/sports" className="hover:text-white transition">
                  Sports Ground
                </Link>
              </li>
              <li>
                <Link href="/gallery/events" className="hover:text-white transition">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+919456842609"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <FiPhone size={16} />
                <span>9456842609</span>
              </a>
              <a
                href="mailto:msskvumv.khwajpurmeerpur.1237@gmail.com"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <FiMail size={16} />
                <span>msskvumv@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-center md:text-left">
              &copy; {currentYear} M S S K V U M V. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <FiFacebook size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Twitter"
              >
                <FiTwitter size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
            </div>

            {/* Footer Links */}
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
