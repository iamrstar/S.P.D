"use client"
import Image from 'next/image'
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Search } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)
  const menuRef = useRef(null)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Close menu on window resize (to prevent menu staying open when switching to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu)
  }

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "#",
      submenu: [
        { name: "About College", path: "/about/college" },
        { name: "Principal's Message", path: "/about/principal" },
        { name: "Vision & Mission", path: "/about/vision" },
        { name: "College History", path: "/about/history" },
      ],
    },
    {
      name: "Academics",
      path: "#",
      submenu: [
        { name: "Courses", path: "/academics/courses" },
        { name: "Departments", path: "/academics/departments" },
        { name: "Faculty", path: "/academics/faculty" },
        { name: "Academic Calendar", path: "/academics/calendar" },
      ],
    },
    { name: "Admissions", path: "/admissions" },
    { name: "Facilities", path: "/facilities" },
    { name: "News & Events", path: "/news" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <span className="hidden sm:inline">Email: info@spdcollege.edu.in</span>
            <span className="hidden sm:inline">|</span>
            <span>Phone: +919162486419</span>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-sm">
            <Link href="/alumni" className="hover:underline">
              Alumni
            </Link>
            <Link href="/careers" className="hover:underline">
              Careers
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Logo and main navigation */}
      <div className="bg-white shadow-md" ref={menuRef}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
    <Link href="/" className="flex items-center space-x-3">
  <div className="flex items-center space-x-2">
    <Image src="/logo_college.png" alt="College Logo" width={170} height={170} />
    <div>
      <p className="text-xs md:text-sm text-gray-600">Excellence in Education</p>
    </div>
  </div>
</Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.submenu ? (
                    <>
                      <button
                        className="flex items-center text-gray-800 hover:text-primary font-medium py-2"
                        onClick={() => toggleSubmenu(item.name)}
                      >
                        {item.name} <ChevronDown size={16} className="ml-1" />
                      </button>
                      <div className="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-md py-2 z-10 hidden group-hover:block">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link href={item.path} className="text-gray-800 hover:text-primary font-medium py-2">
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-3 pr-10 py-1 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Search size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile menu - improved for better responsiveness */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-inner border-t border-gray-100 max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100 last:border-b-0">
                  {item.submenu ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full py-3 text-gray-800 hover:text-primary font-medium"
                        onClick={() => toggleSubmenu(item.name)}
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            activeSubmenu === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeSubmenu === item.name && (
                        <div className="pl-4 space-y-1 pb-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.path}
                              className="block py-2 text-sm text-gray-700 hover:text-primary"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className="block py-3 text-gray-800 hover:text-primary font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-2 pb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Search size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
