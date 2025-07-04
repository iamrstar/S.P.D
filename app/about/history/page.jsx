import Image from "next/image"
import Link from "next/link"
import { Calendar, Award, Users, BookOpen } from "lucide-react"

export default function CollegeHistory() {
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
                <span className="text-gray-500">College History</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="relative h-64 md:h-96">
          <Image src="/college-history.jpg" alt="S.P.D College History" fill className="object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
              Our Journey Through Time
            </h1>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-10 h-1 bg-primary mr-3"></span>
              The History of S.P.D College
            </h2>

            <div className="prose max-w-none text-gray-700">
              <p className="mb-6">
                S.P.D College has a rich and inspiring history that spans over two decades. The college was established
                in 2005 with a vision to provide quality education to students from all sections of society. Named after
                the renowned educationist Shri P.D. Pandey, the college has grown from a small institution to one of the
                leading educational establishments in the region.
              </p>

              <div className="relative border-l-2 border-primary pl-8 ml-4 space-y-10 my-10">
                <div className="relative">
                  <div className="absolute -left-10 top-0 bg-primary text-white rounded-full p-2">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">2005: Foundation</h3>
                  <p className="text-gray-700">
                    S.P.D College was established with just three departments - Arts, Science, and Commerce. The college
                    started with a modest infrastructure and a small team of dedicated faculty members. The first batch
                    consisted of 120 students.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-10 top-0 bg-primary text-white rounded-full p-2">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">2008: Expansion of Programs</h3>
                  <p className="text-gray-700">
                    The college expanded its academic offerings by introducing honors programs in various disciplines.
                    New laboratories were set up, and the library was expanded to include a wider collection of books
                    and journals.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-10 top-0 bg-primary text-white rounded-full p-2">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">2012: Recognition and Accreditation</h3>
                  <p className="text-gray-700">
                    The college received recognition from the University Grants Commission (UGC) and was accredited by
                    the National Assessment and Accreditation Council (NAAC) with a 'B+' grade. This was a significant
                    milestone in the college's journey towards excellence.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-10 top-0 bg-primary text-white rounded-full p-2">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">2015: Campus Development</h3>
                  <p className="text-gray-700">
                    The college campus underwent a major transformation with the construction of new buildings,
                    including a modern library, computer labs, and sports facilities. The student strength grew to over
                    1,000, and the faculty strength increased to 50.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-10 top-0 bg-primary text-white rounded-full p-2">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">2018: Academic Excellence</h3>
                  <p className="text-gray-700">
                    The college was re-accredited by NAAC with an 'A' grade, reflecting its commitment to academic
                    excellence. The college also established research centers in various disciplines and started
                    collaborating with industry partners for internships and placements.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-10 top-0 bg-primary text-white rounded-full p-2">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">2020: Digital Transformation</h3>
                  <p className="text-gray-700">
                    The college embraced digital technology by implementing a comprehensive Learning Management System
                    (LMS), digital library, and online admission process. This transformation helped the college
                    continue its educational activities seamlessly during the COVID-19 pandemic.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-10 top-0 bg-primary text-white rounded-full p-2">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">2023: Present Day</h3>
                  <p className="text-gray-700">
                    Today, S.P.D College stands as a premier educational institution with over 2,000 students, 100
                    faculty members, and state-of-the-art infrastructure. The college continues to evolve and adapt to
                    the changing educational landscape while staying true to its founding principles.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-10 h-1 bg-primary mr-3"></span>
                Our Founders
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex flex-col items-center mb-4">
                    <div className="relative h-40 w-40 rounded-full overflow-hidden mb-4">
                      <Image src="/founder.jpg" alt="Shri P.D. Pandey" fill className="object-cover" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Shri P.D. Pandey</h3>
                    <p className="text-gray-600">Founder (1945-2010)</p>
                  </div>
                  <p className="text-gray-700 text-center">
                    A visionary educationist who dedicated his life to the cause of education. His dream was to
                    establish an institution that would provide quality education to students from all sections of
                    society.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex flex-col items-center mb-4">
                    <div className="relative h-40 w-40 rounded-full overflow-hidden mb-4">
                      <Image src="/co-founder.jpg" alt="Dr. Anand Kumar" fill className="object-cover" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Dr. Anand Kumar</h3>
                    <p className="text-gray-600">Co-Founder & First Principal</p>
                  </div>
                  <p className="text-gray-700 text-center">
                    An eminent academician who played a crucial role in establishing the college and shaping its
                    academic programs. Under his leadership, the college laid a strong foundation for academic
                    excellence.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Looking Ahead</h2>
                <p className="text-gray-700 mb-4">
                  As we move forward, we remain committed to our founding principles and vision. We continue to strive
                  for excellence in education, research, and community service. Our goal is to prepare students for the
                  challenges of the future and empower them to make a positive impact on society.
                </p>
                <p className="text-gray-700">
                  We invite you to be a part of our journey and contribute to the legacy of S.P.D College.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
