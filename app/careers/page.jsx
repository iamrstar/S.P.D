import Link from "next/link"
import { Briefcase, Mail, AlertCircle, Phone } from "lucide-react"

export default function Careers() {
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
                <span className="text-gray-500">Careers</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6 md:p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-10 h-1 bg-primary mr-3"></span>
              Careers at SPD Pandey Degree College
            </h1>

            <p className="text-gray-700 mb-8">
              SPD Pandey Degree College is committed to providing quality education and fostering academic excellence.
              We are always looking for talented and dedicated individuals to join our team and contribute to our
              mission of empowering students with knowledge and skills.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-xl font-bold text-gray-800">Current Openings</h2>
              </div>
              <div className="flex flex-col items-center justify-center py-8">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Briefcase className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No Current Openings</h3>
                <p className="text-gray-600 text-center max-w-lg">
                  We currently do not have any job openings. Please check back later or submit your resume for future
                  opportunities.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-10 h-1 bg-primary mr-3"></span>
              Why Join Us?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Academic Excellence</h3>
                <p className="text-gray-700">
                  Join a team committed to academic excellence and innovation in teaching and learning. We provide a
                  supportive environment for professional growth and development.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Research Opportunities</h3>
                <p className="text-gray-700">
                  We encourage and support research activities among our faculty members. Join us to explore research
                  opportunities and contribute to the advancement of knowledge in your field.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Professional Development</h3>
                <p className="text-gray-700">
                  We invest in the professional development of our staff through workshops, seminars, conferences, and
                  training programs. Join us to enhance your skills and advance your career.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Collaborative Environment</h3>
                <p className="text-gray-700">
                  Work in a collaborative and inclusive environment where your ideas and contributions are valued. Join
                  us to be part of a team that works together to achieve common goals.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-10 h-1 bg-primary mr-3"></span>
              Submit Your Resume
            </h2>

            <p className="text-gray-700 mb-6">
              Even if there are no current openings that match your skills and experience, we encourage you to submit
              your resume for future opportunities. We keep all resumes on file and will contact you if a suitable
              position becomes available.
            </p>

            <form className="space-y-4 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
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
                    Email Address
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                    Position of Interest
                  </label>
                  <select
                    id="position"
                    name="position"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Select Position</option>
                    <option value="Professor">Professor</option>
                    <option value="Associate Professor">Associate Professor</option>
                    <option value="Assistant Professor">Assistant Professor</option>
                    <option value="Lab Assistant">Lab Assistant</option>
                    <option value="Administrative Staff">Administrative Staff</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Cover Letter
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                  Resume/CV (PDF, DOC, DOCX)
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition duration-300 inline-flex items-center"
              >
                Submit Application
                <Mail className="h-4 w-4 ml-2" />
              </button>
            </form>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Contact HR Department</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about career opportunities at SPD Pandey Degree College, please contact our HR
                department.
              </p>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-700">hr@spdpandey.edu.in</span>
              </div>
              <div className="flex items-center mt-2">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-700">+91 1234567890</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
