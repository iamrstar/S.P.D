import Link from "next/link"
import { BookOpen, Beaker, BarChart3, ArrowRight } from "lucide-react"

export default function Courses() {
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
                <span className="text-gray-500">Academics</span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-500">Courses</span>
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
              Courses Offered
            </h1>

            <p className="text-gray-700 mb-8">
              SPD Pandey Degree College offers a wide range of undergraduate programs in Arts, Science, and Commerce
              streams. Our curriculum is designed to provide a perfect blend of theoretical knowledge and practical
              skills, ensuring that our students are well-prepared for higher education and employment.
            </p>

            <div className="grid grid-cols-1 gap-8 mb-12">
              {/* Bachelor of Arts */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="bg-primary/10 p-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Bachelor of Arts (B.A.)</h2>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    The Bachelor of Arts program offers a comprehensive study of humanities and social sciences.
                    Students can choose from a variety of subjects and specialize in their area of interest. The program
                    aims to develop critical thinking, analytical skills, and effective communication.
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">Subjects Offered</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Economics</h4>
                      <p className="text-gray-600 text-sm">
                        Study of production, distribution, and consumption of goods and services.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">English</h4>
                      <p className="text-gray-600 text-sm">
                        Study of English literature, language, and communication skills.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Geography</h4>
                      <p className="text-gray-600 text-sm">
                        Study of places and the relationships between people and their environments.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Hindi</h4>
                      <p className="text-gray-600 text-sm">
                        Study of Hindi literature, language, and cultural aspects.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">History</h4>
                      <p className="text-gray-600 text-sm">Study of past events, particularly in human affairs.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Philosophy</h4>
                      <p className="text-gray-600 text-sm">
                        Study of fundamental questions about existence, knowledge, values, reason, and language.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Political Science</h4>
                      <p className="text-gray-600 text-sm">
                        Study of systems of government, political activities, and political behavior.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Psychology</h4>
                      <p className="text-gray-600 text-sm">
                        Study of mind and behavior in relation to a particular field of knowledge or activity.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Sanskrit</h4>
                      <p className="text-gray-600 text-sm">
                        Study of ancient Indian language, literature, and culture.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Sociology</h4>
                      <p className="text-gray-600 text-sm">
                        Study of social life, social change, and the social causes and consequences of human behavior.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Urdu</h4>
                      <p className="text-gray-600 text-sm">Study of Urdu language, literature, and cultural aspects.</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">Program Details</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Duration:</span> 3 years (6 semesters)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Eligibility:</span> 10+2 or equivalent from a recognized board
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Admission Process:</span> Merit-based admission through entrance
                        test
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Career Opportunities:</span> Teaching, Civil Services, Journalism,
                        Research, NGOs, etc.
                      </div>
                    </li>
                  </ul>

                  <div className="text-center">
                    <Link
                      href="/admissions/apply"
                      className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition duration-300 inline-block"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bachelor of Science */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="bg-green-100 p-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                      <Beaker className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Bachelor of Science (B.Sc.)</h2>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    The Bachelor of Science program offers a comprehensive study of natural sciences and mathematics.
                    The program emphasizes practical knowledge, laboratory work, and research skills. Students can
                    specialize in various scientific disciplines and pursue careers in research, industry, and academia.
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">Subjects Offered</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Botany</h4>
                      <p className="text-gray-600 text-sm">
                        Study of plants, including their structure, properties, and biochemical processes.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Chemistry</h4>
                      <p className="text-gray-600 text-sm">
                        Study of the composition, structure, properties, and change of matter.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Geology</h4>
                      <p className="text-gray-600 text-sm">
                        Study of the Earth, the materials of which it is made, and the processes acting upon them.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Mathematics</h4>
                      <p className="text-gray-600 text-sm">Study of numbers, quantity, structure, space, and change.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Physics</h4>
                      <p className="text-gray-600 text-sm">
                        Study of matter, its motion, and behavior through space and time.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Zoology</h4>
                      <p className="text-gray-600 text-sm">
                        Study of animals, including their structure, physiology, development, and classification.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">Program Details</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Duration:</span> 3 years (6 semesters)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Eligibility:</span> 10+2 with Science or equivalent from a
                        recognized board
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Admission Process:</span> Merit-based admission through entrance
                        test
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Career Opportunities:</span> Research, Industry, Healthcare,
                        Environmental Agencies, Teaching, etc.
                      </div>
                    </li>
                  </ul>

                  <div className="text-center">
                    <Link
                      href="/admissions/apply"
                      className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md transition duration-300 inline-block"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bachelor of Commerce */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="bg-amber-100 p-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                      <BarChart3 className="h-8 w-8 text-amber-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Bachelor of Commerce (B.Com.)</h2>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    The Bachelor of Commerce program offers a comprehensive study of business, finance, accounting, and
                    economics. The program prepares students for careers in business, banking, finance, and
                    entrepreneurship. Students can specialize in various areas of commerce and develop skills relevant
                    to the business world.
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">Subjects Offered</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Accounting & Finance</h4>
                      <p className="text-gray-600 text-sm">
                        Study of financial accounting, management accounting, and corporate finance.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Business Economics</h4>
                      <p className="text-gray-600 text-sm">
                        Application of economic theory and methods to business and management decision making.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Business Law</h4>
                      <p className="text-gray-600 text-sm">
                        Study of laws and regulations governing business operations and transactions.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Corporate Accounting</h4>
                      <p className="text-gray-600 text-sm">
                        Study of accounting principles and practices specific to corporations.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Cost Accounting</h4>
                      <p className="text-gray-600 text-sm">
                        Study of cost classification, allocation, and control for management decision making.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Financial Management</h4>
                      <p className="text-gray-600 text-sm">
                        Study of financial planning, analysis, and decision making in organizations.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Income Tax</h4>
                      <p className="text-gray-600 text-sm">
                        Study of tax laws, regulations, and procedures for individuals and businesses.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Marketing Management</h4>
                      <p className="text-gray-600 text-sm">
                        Study of marketing principles, strategies, and practices for products and services.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">Program Details</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Duration:</span> 3 years (6 semesters)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Eligibility:</span> 10+2 or equivalent from a recognized board
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Admission Process:</span> Merit-based admission through entrance
                        test
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Career Opportunities:</span> Banking, Finance, Accounting,
                        Management, Entrepreneurship, etc.
                      </div>
                    </li>
                  </ul>

                  <div className="text-center">
                    <Link
                      href="/admissions/apply"
                      className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-md transition duration-300 inline-block"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Admission Information</h2>
              <p className="text-gray-700 mb-4">
                Admissions for the academic year 2023-24 are now open. Interested candidates can apply online or visit
                the college admission office for more information. The last date for submission of application forms is
                June 30, 2023.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/admissions"
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition duration-300 inline-block"
                >
                  Admission Process
                </Link>
                <Link
                  href="/academics/departments"
                  className="bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-md transition duration-300 inline-block"
                >
                  View Departments
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
