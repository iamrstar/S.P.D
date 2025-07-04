import Link from "next/link"
import { Target, Compass, Award, Users, BookOpen, Lightbulb } from "lucide-react"

export default function VisionMission() {
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
                <span className="text-gray-500">Vision & Mission</span>
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
              Vision & Mission
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
                </div>
                <p className="text-gray-700">
                  To be a premier educational institution that nurtures excellence, fosters innovation, and empowers
                  students to become responsible global citizens who contribute positively to society.
                </p>
              </div>

              <div className="bg-secondary/20 p-6 rounded-lg border-l-4 border-secondary-foreground">
                <div className="flex items-center mb-4">
                  <div className="bg-secondary/30 p-3 rounded-full mr-4">
                    <Compass className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
                </div>
                <p className="text-gray-700">
                  To provide quality education that is accessible and affordable, to foster critical thinking and
                  creativity, to promote research and academic excellence, and to develop socially responsible and
                  ethically sound individuals.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-10 h-1 bg-primary mr-3"></span>
              Core Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Excellence</h3>
                </div>
                <p className="text-gray-700">
                  We strive for excellence in all our endeavors, be it academics, research, or extracurricular
                  activities. We encourage our students and faculty to pursue the highest standards of performance and
                  achievement.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Innovation</h3>
                </div>
                <p className="text-gray-700">
                  We foster a culture of innovation and creativity, encouraging our students and faculty to think
                  outside the box, explore new ideas, and develop innovative solutions to real-world problems.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Inclusivity</h3>
                </div>
                <p className="text-gray-700">
                  We believe in creating an inclusive learning environment where diversity is celebrated and every
                  individual is treated with respect and dignity, regardless of their background, beliefs, or abilities.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-10 h-1 bg-primary mr-3"></span>
              Strategic Objectives
            </h2>

            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4 mt-1">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Academic Excellence</h3>
                  <p className="text-gray-700">
                    To provide high-quality education through innovative teaching methodologies, comprehensive
                    curriculum, and continuous assessment. We aim to create a learning environment that stimulates
                    intellectual curiosity and fosters academic growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4 mt-1">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Student Development</h3>
                  <p className="text-gray-700">
                    To focus on the holistic development of students by providing opportunities for personal growth,
                    leadership development, and character building. We encourage participation in extracurricular
                    activities, community service, and cultural events.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4 mt-1">
                  <Compass className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Research and Innovation</h3>
                  <p className="text-gray-700">
                    To promote a culture of research and innovation by providing necessary resources, infrastructure,
                    and mentorship. We encourage faculty and students to engage in research activities, publish papers,
                    and participate in conferences and seminars.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4 mt-1">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Community Engagement</h3>
                  <p className="text-gray-700">
                    To actively engage with the community through outreach programs, social initiatives, and
                    collaborative projects. We aim to create a positive impact on society and contribute to the
                    development of the region.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Our Commitment</h2>
              <p className="text-gray-700 mb-4">
                At S.P.D College, we are committed to upholding our vision, mission, and values in all our activities
                and initiatives. We continuously strive to improve our programs, facilities, and services to provide the
                best possible education and experience to our students.
              </p>
              <p className="text-gray-700">
                We invite all stakeholders - students, parents, faculty, staff, alumni, and the community - to join us
                in our journey towards excellence and contribute to the realization of our vision and mission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
