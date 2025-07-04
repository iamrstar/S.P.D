import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, BookOpen, Users, Target } from "lucide-react"

export default function AboutCollege() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-700 hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-500">About</span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-500">About College</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="relative h-64 md:h-96">
          <Image src="/college-building.jpg" alt="S.P.D College Campus" fill className="object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">About Surat Pandey Degree College</h1>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-10 h-1 bg-primary mr-3"></span>
              Our Story
            </h2>

            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
Surat Pandey Degree College was established in the year 1983 and is a leading college of the N.P. University. It is a co-education college and offers education in Arts and Humanities, Commerce, and Science.

.
              </p>

              <p className="mb-4">
               The college was named after an enlightened social worker of this area, named Surat Pandey. He emerged as an intelligent and very kind person embodying the spirit of inquiry just supported with faith as shown in his service to society. Surat Pandey seems to represent the intellectual potential of the race of Homo sapiens, which continues to manifest it itself in quest of ever-widening fields of knowledge.


              </p>

              <p className="mb-6">
 Our college has achieved the scholarly excellence, fearless acuteness, relentless ability to deliver answers to everyday questions. We cherish the tradition and encourage our students to challenge themselves, be skeptical, and ask questions in this fast pacing and ever-evolving world.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Award className="h-6 w-6 text-primary mr-2" />
                    Our Achievements
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                      <span>Ranked among the top 50 colleges in the state for academic excellence</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                      <span>Received 'A' grade accreditation from NAAC</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                      <span>Recognized for outstanding performance in sports and cultural activities</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                      <span>Awarded for best practices in environmental sustainability</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Target className="h-6 w-6 text-primary mr-2" />
                    Our Objectives
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                      <span>Provide quality education that is accessible and affordable</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                      <span>Foster critical thinking, creativity, and innovation among students</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                      <span>Promote research and academic excellence</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                      <span>Develop socially responsible and ethically sound individuals</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-10 h-1 bg-primary mr-3"></span>
                Our Campus
              </h2>

              <p className="mb-4">
                Spread over 10 acres of lush green land, our campus provides a serene and inspiring environment for
                learning. The college building is a perfect blend of traditional architecture and modern amenities,
                creating a unique ambiance that reflects our values and vision.
              </p>

              <p className="mb-6">
                The campus houses well-equipped classrooms, laboratories, library, sports facilities, cafeteria, and
                other essential infrastructure to support academic and extracurricular activities. We also have
                dedicated spaces for cultural events, seminars, and workshops.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <BookOpen className="h-6 w-6 text-primary mr-2" />
                    Academic Excellence
                  </h3>
                  <p className="text-gray-700">
                    We are committed to maintaining high academic standards through innovative teaching methodologies,
                    regular assessments, and continuous improvement. Our faculty members are experts in their respective
                    fields and are dedicated to providing quality education to students.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Users className="h-6 w-6 text-primary mr-2" />
                    Student Support
                  </h3>
                  <p className="text-gray-700">
                    We believe in providing comprehensive support to our students to help them achieve their full
                    potential. From academic guidance and career counseling to financial assistance and personal
                    development, we ensure that our students receive all the support they need during their academic
                    journey.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition duration-300 inline-block"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
