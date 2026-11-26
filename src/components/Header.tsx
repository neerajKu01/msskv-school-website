'use client'

import Link from "next/link"
import { useState } from "react"
import { FiMenu, FiX, FiPhone, FiMail } from "react-icons/fi"
import { ChevronDown } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2 text-sm">
        <div className="container-custom flex flex-col sm:flex-row gap-4 justify-between">
          <a
            href="tel:+919456842609"
            className="flex items-center gap-2 hover:text-gray-200 transition"
          >
            <FiPhone size={16} />
            <span>9456842609</span>
          </a>
          <a
            href="mailto:msskvumv.khwajpurmeerpur.1237@gmail.com"
            className="flex items-center gap-2 hover:text-gray-200 transition"
          >
            <FiMail size={16} />
            <span>msskvumv.khwajpurmeerpur.1237@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition"
          >
            M S S K V U M V
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink href="/">Home</NavLink>

            {/* About Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-gray-700 hover:text-blue-600 transition flex items-center gap-1">
                About
                <ChevronDown size={16} className="group-hover:rotate-180 transition" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                <Link
                  href="/about/principal"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  Principal's Message
                </Link>
                <Link
                  href="/about/manager"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  Manager's Message
                </Link>
              </div>
            </div>

            <NavLink href="/teachers">Teachers</NavLink>

            {/* Gallery Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-gray-700 hover:text-blue-600 transition flex items-center gap-1">
                Gallery
                <ChevronDown size={16} className="group-hover:rotate-180 transition" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                <Link
                  href="/gallery/library"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  Library
                </Link>
                <Link
                  href="/gallery/sports"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  Sports Ground
                </Link>
                <Link
                  href="/gallery/events"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  Events
                </Link>
              </div>
            </div>

            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-gray-100 rounded transition"
          >
            {isOpen ? (
              <FiX size={24} className="text-blue-600" />
            ) : (
              <FiMenu size={24} className="text-blue-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t pt-4">
            <MobileNavLink href="/" onClick={() => setIsOpen(false)}>
              Home
            </MobileNavLink>

            <div>
              <button
                onClick={() => toggleDropdown("about")}
                className="w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition rounded flex items-center justify-between"
              >
                About
                <ChevronDown
                  size={16}
                  className={`transition ${
                    openDropdown === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "about" && (
                <div className="ml-4 space-y-1">
                  <MobileNavLink
                    href="/about/principal"
                    onClick={() => setIsOpen(false)}
                  >
                    Principal's Message
                  </MobileNavLink>
                  <MobileNavLink
                    href="/about/manager"
                    onClick={() => setIsOpen(false)}
                  >
                    Manager's Message
                  </MobileNavLink>
                </div>
              )}
            </div>

            <MobileNavLink href="/teachers" onClick={() => setIsOpen(false)}>
              Teachers
            </MobileNavLink>

            <div>
              <button
                onClick={() => toggleDropdown("gallery")}
                className="w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition rounded flex items-center justify-between"
              >
                Gallery
                <ChevronDown
                  size={16}
                  className={`transition ${
                    openDropdown === "gallery" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "gallery" && (
                <div className="ml-4 space-y-1">
                  <MobileNavLink
                    href="/gallery/library"
                    onClick={() => setIsOpen(false)}
                  >
                    Library
                  </MobileNavLink>
                  <MobileNavLink
                    href="/gallery/sports"
                    onClick={() => setIsOpen(false)}
                  >
                    Sports Ground
                  </MobileNavLink>
                  <MobileNavLink
                    href="/gallery/events"
                    onClick={() => setIsOpen(false)}
                  >
                    Events
                  </MobileNavLink>
                </div>
              )}
            </div>

            <MobileNavLink href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </MobileNavLink>
          </div>
        )}
      </nav>
    </header>
  )
}

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="px-3 py-2 text-gray-700 hover:text-blue-600 transition rounded hover:bg-gray-50"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition rounded"
    >
      {children}
    </Link>
  )
}
