import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8 mt-32 md:mt-36">
      <div className="mb-6">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-700 hover:text-primary">
                Home
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-500">Contact Us</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6 md:p-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-10 h-1 bg-primary mr-3"></span>
              Contact Us
            </h1>

            <p className="text-gray-700 mb-8">
              We are here to help you with any questions or concerns you may have. Feel free to reach out to us using
              any of the contact methods below, or visit our campus during office hours.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">Address</h3>
                      <p className="text-gray-700">
                      Beside NH-75, At- Chetna, Garhwa, Dist, Garhwa, Jharkhand 822114, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">Phone</h3>
                      <p className="text-gray-700">
                        Main Office: +91 9162486419
                        <br />
                        Admission Helpline: +91 9162486419
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-700">
                        General Inquiries: spdc.npu2015@gmail.com
                        <br />
                        Admissions: spdc.npu2015@gmail.com
                        <br />
                        Principal's Office: spdc.npu2015@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">Office Hours</h3>
                      <p className="text-gray-700">
                        Monday - Saturday: 9:00 AM - 5:00 PM
                        <br />
                        Sunday: Closed
                        <br />
                        Holidays: As per academic calendar
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition duration-300 inline-flex items-center"
                  >
                    Send Message
                    <Send className="h-4 w-4 ml-2" />
                  </button>
                </form>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Us on Map</h2>
              <div className="h-96 w-full rounded-lg overflow-hidden shadow-md">
                <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14694.18340421976!2d83.829157!3d24.173216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398c0e662e402257%3A0x856f35f5bc1caa0!2sSurat%20Pandey%20Degree%20College!5e0!3m2!1sen!2sin!4v1720595184797!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Admission Inquiries</h3>
                <p className="text-gray-700 mb-4">
                  For any queries related to admission process, eligibility criteria, fee structure, or scholarship
                  programs, please contact our admission office.
                </p>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">+91 9162486419</span>
                </div>
                <div className="flex items-center mt-2">
                  <Mail className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">spdc.npu2015@gmail.com</span>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Academic Inquiries</h3>
                <p className="text-gray-700 mb-4">
                  For queries related to courses, curriculum, examinations, results, or academic activities, please
                  contact our academic office.
                </p>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">+91 9162486419</span>
                </div>
                <div className="flex items-center mt-2">
                  <Mail className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">spdc.npu2015@gmail.com</span>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Administrative Inquiries</h3>
                <p className="text-gray-700 mb-4">
                  For administrative matters, certificates, transcripts, or any other general inquiries, please contact
                  our administrative office.
                </p>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">+91 9162486419</span>
                </div>
                <div className="flex items-center mt-2">
                  <Mail className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">spdc.npu2015@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
