import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="relative h-12 w-12 mr-3">
                <Image src="/logo_college.png" alt="S.P.D College Logo" width={48} height={48} className="object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-bold">surat Pandey Degree College</h3>
                <p className="text-xs text-gray-400">Excellence in Education</p>
              </div>
            </div>

            <p className="text-gray-400 mb-4">
              S.P.D College is committed to providing quality education and fostering academic excellence in a
              supportive learning environment.
            </p>

            <div className="flex space-x-3">
              <Link
                href="https://facebook.com"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition duration-300"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com"
                className="bg-sky-500 p-2 rounded-full hover:bg-sky-600 transition duration-300"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://instagram.com"
                className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition duration-300"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://linkedin.com"
                className="bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition duration-300"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://youtube.com"
                className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition duration-300"
              >
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-300">123 College Road, University Area, City - 123456, State, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span className="text-gray-300">+91 9162486419</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span className="text-gray-300">info@spdcollege.edu.in</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Monday - Saturday: 9:00 AM - 5:00 PM
                  <br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics/courses" className="text-gray-300 hover:text-primary transition duration-300">
                  Courses Offered
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-gray-300 hover:text-primary transition duration-300">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="text-gray-300 hover:text-primary transition duration-300">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/academics/faculty" className="text-gray-300 hover:text-primary transition duration-300">
                  Faculty
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-primary transition duration-300">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-primary transition duration-300">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to receive updates on college news, events, and announcements.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2 rounded-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} S.P.D College. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="text-gray-400 hover:text-white text-sm transition duration-300">
              Terms of Use
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition duration-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
