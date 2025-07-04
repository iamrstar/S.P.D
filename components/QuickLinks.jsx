import Link from "next/link"
import { ExternalLink, FileText, Download, Users, Calendar, BookOpen } from "lucide-react"

const QuickLinks = () => {
  return (
    <section className="py-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-8 h-1 bg-primary mr-3"></span>
            Quick Links
          </h2>

          <ul className="space-y-3">
            <li>
              <Link
                href="/admissions/apply"
                className="flex items-center p-3 rounded-md hover:bg-gray-50 transition duration-200"
              >
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <span className="text-gray-700 font-medium">Online Application Form</span>
              </Link>
            </li>

            <li>
              <Link
                href="/academics/timetable"
                className="flex items-center p-3 rounded-md hover:bg-gray-50 transition duration-200"
              >
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <span className="text-gray-700 font-medium">Class Timetable</span>
              </Link>
            </li>

            <li>
              <Link
                href="/academics/results"
                className="flex items-center p-3 rounded-md hover:bg-gray-50 transition duration-200"
              >
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <span className="text-gray-700 font-medium">Examination Results</span>
              </Link>
            </li>

            <li>
              <Link
                href="/downloads/prospectus.pdf"
                className="flex items-center p-3 rounded-md hover:bg-gray-50 transition duration-200"
              >
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <Download className="h-5 w-5 text-primary" />
                </div>
                <span className="text-gray-700 font-medium">Download Prospectus</span>
              </Link>
            </li>

            <li>
              <Link
                href="/alumni/register"
                className="flex items-center p-3 rounded-md hover:bg-gray-50 transition duration-200"
              >
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <span className="text-gray-700 font-medium">Alumni Registration</span>
              </Link>
            </li>

            <li>
              <Link
                href="https://university.edu.in"
                className="flex items-center p-3 rounded-md hover:bg-gray-50 transition duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <ExternalLink className="h-5 w-5 text-primary" />
                </div>
                <span className="text-gray-700 font-medium">University Website</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default QuickLinks
