import Link from "next/link"
import { BookOpen, ComputerIcon as Desktop, Dumbbell, FlaskRoundIcon as Flask, Library, Utensils } from "lucide-react"

const Facilities = () => {
  return (
    <section className="py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-10 h-1 bg-primary mr-3"></span>
            Campus Facilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Library className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Library</h3>
                <p className="text-gray-600">
                  Well-stocked library with a vast collection of books, journals, and digital resources.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Desktop className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Computer Labs</h3>
                <p className="text-gray-600">
                  Modern computer laboratories with high-speed internet and latest software.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <Flask className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Science Labs</h3>
                <p className="text-gray-600">Well-equipped laboratories for Physics, Chemistry, Botany, and Zoology.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Dumbbell className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Sports Facilities</h3>
                <p className="text-gray-600">
                  Indoor and outdoor sports facilities including cricket, football, and basketball.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <Utensils className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Cafeteria</h3>
                <p className="text-gray-600">
                  Spacious cafeteria serving nutritious and affordable meals to students and staff.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-teal-100 p-3 rounded-full mr-4">
                <BookOpen className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Seminar Halls</h3>
                <p className="text-gray-600">
                  Air-conditioned seminar halls equipped with modern audio-visual facilities.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/facilities"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition duration-300 inline-block"
            >
              Explore All Facilities
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Facilities
