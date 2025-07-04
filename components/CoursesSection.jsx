import Link from "next/link"
import { BookOpen, Beaker, BarChart3 } from "lucide-react"

const CoursesSection = () => {
  return (
    <section className="py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-10 h-1 bg-primary mr-3"></span>
            Courses Offered
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Arts */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Bachelor of Arts</h3>
              </div>

              <p className="text-gray-600 mb-4">
                B.A. Honours programs in various disciplines to develop critical thinking and analytical skills.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  Economics
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  English
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  Geography
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  Hindi
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  History
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  Philosophy
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  Political Science
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  Psychology
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  Sanskrit
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  Sociology
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  Urdu
                </li>
              </ul>

              <Link
                href="/academics/arts"
                className="text-primary font-medium hover:underline inline-flex items-center"
              >
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>

            {/* Science */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Beaker className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Bachelor of Science</h3>
              </div>

              <p className="text-gray-600 mb-4">
                B.Sc. Honours programs focusing on scientific research, experimentation, and innovation.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600 mr-2"></span>
                  Botany
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600 mr-2"></span>
                  Chemistry
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600 mr-2"></span>
                  Geology
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600 mr-2"></span>
                  Mathematics
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600 mr-2"></span>
                  Physics
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600 mr-2"></span>
                  Zoology
                </li>
              </ul>

              <Link
                href="/academics/science"
                className="text-green-600 font-medium hover:underline inline-flex items-center"
              >
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>

            {/* Commerce */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <BarChart3 className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Bachelor of Commerce</h3>
              </div>

              <p className="text-gray-600 mb-4">
                B.Com. Honours program with specialization in Accounts and related subjects for future business leaders.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mr-2"></span>
                  Accounting & Finance
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mr-2"></span>
                  Business Economics
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mr-2"></span>
                  Business Law
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mr-2"></span>
                  Corporate Accounting
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mr-2"></span>
                  Cost Accounting
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mr-2"></span>
                  Financial Management
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mr-2"></span>
                  Income Tax
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mr-2"></span>
                  Marketing Management
                </li>
              </ul>

              <Link
                href="/academics/commerce"
                className="text-amber-600 font-medium hover:underline inline-flex items-center"
              >
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/academics/courses"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition duration-300 inline-block"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoursesSection
