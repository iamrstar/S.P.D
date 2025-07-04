import Link from "next/link"
import Image from "next/image"
import { BookOpen, Users, Award, ArrowRight } from "lucide-react"

export default function Departments() {
  const departments = [
    {
      id: "arts",
      name: "Department of Arts & Humanities",
      image: "/dept-arts.jpg",
      description:
        "The Department of Arts & Humanities offers programs in various disciplines including Economics, English, Geography, Hindi, History, Philosophy, Political Science, Psychology, Sanskrit, Sociology, and Urdu.",
      established: "2005",
      faculty: "25",
      programs: [
        "B.A. Honours in Economics",
        "B.A. Honours in English",
        "B.A. Honours in Geography",
        "B.A. Honours in Hindi",
        "B.A. Honours in History",
        "B.A. Honours in Philosophy",
        "B.A. Honours in Political Science",
        "B.A. Honours in Psychology",
        "B.A. Honours in Sanskrit",
        "B.A. Honours in Sociology",
        "B.A. Honours in Urdu",
      ],
      hod: "Dr. Priya Sharma",
      color: "primary",
    },
    {
      id: "science",
      name: "Department of Science",
      image: "/dept-science.jpg",
      description:
        "The Department of Science offers programs in various disciplines including Botany, Chemistry, Geology, Mathematics, Physics, and Zoology. The department has well-equipped laboratories and experienced faculty members.",
      established: "2005",
      faculty: "20",
      programs: [
        "B.Sc. Honours in Botany",
        "B.Sc. Honours in Chemistry",
        "B.Sc. Honours in Geology",
        "B.Sc. Honours in Mathematics",
        "B.Sc. Honours in Physics",
        "B.Sc. Honours in Zoology",
      ],
      hod: "Dr. Rajesh Kumar",
      color: "green-600",
    },
    {
      id: "commerce",
      name: "Department of Commerce",
      image: "/dept-commerce.jpg",
      description:
        "The Department of Commerce offers programs in various areas of commerce and business studies. The department focuses on developing practical skills and theoretical knowledge relevant to the business world.",
      established: "2005",
      faculty: "15",
      programs: [
        "B.Com. Honours in Accounting & Finance",
        "B.Com. Honours in Business Economics",
        "B.Com. Honours in Corporate Accounting",
        "B.Com. Honours in Financial Management",
      ],
      hod: "Dr. Anand Verma",
      color: "amber-600",
    },
  ]

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
                <span className="text-gray-500">Departments</span>
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
              Academic Departments
            </h1>

            <p className="text-gray-700 mb-8">
              S.P.D College has several academic departments offering undergraduate programs in various disciplines.
              Each department is headed by experienced faculty members and equipped with modern facilities to provide
              quality education to students.
            </p>

            <div className="space-y-12">
              {departments.map((dept, index) => (
                <div key={dept.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                  <div className={`bg-${dept.color}/10 p-6 border-b border-gray-200`}>
                    <div className="flex items-center">
                      <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                        <BookOpen className={`h-8 w-8 text-${dept.color}`} />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800">{dept.name}</h2>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-col md:flex-row gap-8 mb-8">
                      <div className="md:w-1/3">
                        <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
                          <Image src={dept.image || "/placeholder.svg"} alt={dept.name} fill className="object-cover" />
                        </div>
                      </div>

                      <div className="md:w-2/3">
                        <p className="text-gray-700 mb-6">{dept.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <Award className={`h-5 w-5 text-${dept.color} mr-2`} />
                              <h4 className="font-medium text-gray-800">Established</h4>
                            </div>
                            <p className="text-gray-600">{dept.established}</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <Users className={`h-5 w-5 text-${dept.color} mr-2`} />
                              <h4 className="font-medium text-gray-800">Faculty Members</h4>
                            </div>
                            <p className="text-gray-600">{dept.faculty}</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <BookOpen className={`h-5 w-5 text-${dept.color} mr-2`} />
                              <h4 className="font-medium text-gray-800">Head of Department</h4>
                            </div>
                            <p className="text-gray-600">{dept.hod}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">Programs Offered</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                      {dept.programs.map((program, idx) => (
                        <div key={idx} className="flex items-start">
                          <ArrowRight className={`h-5 w-5 text-${dept.color} mr-2 mt-0.5 shrink-0`} />
                          <span className="text-gray-700">{program}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-center">
                      <Link
                        href={`/academics/departments/${dept.id}`}
                        className={`bg-${dept.color} hover:bg-${dept.color}/90 text-white font-medium px-6 py-3 rounded-md transition duration-300 inline-block`}
                      >
                        View Department Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mt-12">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Research and Innovation</h2>
              <p className="text-gray-700 mb-4">
                Our departments actively engage in research and innovation activities. Faculty members and students
                collaborate on various research projects, publish papers in reputed journals, and participate in
                conferences and seminars. The college provides necessary resources and infrastructure to support
                research activities.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/academics/research"
                  className="bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-md transition duration-300 inline-block"
                >
                  Explore Research Activities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
