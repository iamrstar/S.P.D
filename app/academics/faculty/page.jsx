import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Award, BookOpen, FileText } from "lucide-react"

export default function Faculty() {
  const facultyMembers = [
    {
      id: 1,
      name: "Prof. R.K Dwivedi" ,
      position: "Principal & Professor of Physics",
      department: "Administration",
      image: "/principal.jpg",
      education: "Ph.D. in Physics, M.Sc. in Physics",
      experience: "25+ years",
      specialization: "Quantum Physics, Material Science",
    
      publications: 45,
      awards: 12,
    },
    {
      id: 2,
      name: "Dr. Pankaj  Kumar Dubey",
      position: "Asst. Professor",
      department: "Department of Botany",
      image: "/faculty-arts.jpg",
      education: "Ph.D. in Botany, M.Sc. in Botany",
      experience: "20+ years",
      
     
      publications: 35,
      awards: 8,
    },
    {
      id: 3,
      name: "Dr. Satyadev Kumar",
      position: "Asst. Professor",
      department: "Department of Chemistry",
      image: "/faculty-commerce.jpg",
      education: "M.sc in Chemistry",
      experience: "18+ years",
      specialization: "Organic Chemistry, Biochemistry",
    
      publications: 30,
      awards: 6,
    },
    {
      id: 4,
      name: "Dr. B.K Dwivedi",
      position: "Asst. Professor",
      department: "Department of Commerce",
      image: "/faculty-science.jpg",
      education: "M.com , Ph.D in Commerce",
      experience: "15+ years",
      specialization: "Organic Chemistry, Biochemistry",
    
      publications: 25,
      awards: 5,
    },
    {
      id: 5,
      name: "Dr. Arjun Prasad",
      position: "Asst. Professor",
      department: "Department of Economics",
      image: "/faculty-history.jpg",
      education: "M.A. in economics",
      experience: "16+ years",
      specialization: "Microeconomics, Development Economics",
     
    },
    {
      id: 6,
      name: "Dr. Niklesh Chaubey",
      position: "Assistant Professor",
      department: "Department of English",
      image: "/faculty-economics.jpg",
      education: " M.A. in English",
      experience: "10+ years",
      specialization: "Literature, Creative Writing",
      
      publications: 18,
      awards: 3,
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
                <span className="text-gray-500">Faculty</span>
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
              Our Faculty
            </h1>

            <p className="text-gray-700 mb-8">
              S.P.D College has a team of highly qualified and experienced faculty members who are dedicated to
              providing quality education to students. Our faculty members are experts in their respective fields and
              are actively engaged in research and academic activities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {facultyMembers.map((faculty) => (
                <div
                  key={faculty.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition duration-300"
                >
                  <div className="relative h-64 w-full">
                    <Image src={faculty.image || "/placeholder.svg"} alt={faculty.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-1">{faculty.name}</h2>
                    <p className="text-primary font-medium mb-2">{faculty.position}</p>
                    <p className="text-gray-600 text-sm mb-4">{faculty.department}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <BookOpen className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium text-gray-700">Education:</span>
                          <span className="text-gray-600 ml-1">{faculty.education}</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium text-gray-700">Specialization:</span>
                          <span className="text-gray-600 ml-1">{faculty.specialization}</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FileText className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium text-gray-700">Publications:</span>
                          <span className="text-gray-600 ml-1">{faculty.publications}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 space-y-2">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-gray-500 mr-2" />
                        <a href={`mailto:${faculty.email}`} className="text-primary text-sm hover:underline">
                          {faculty.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-gray-500 mr-2" />
                        <span className="text-gray-600 text-sm">{faculty.phone}</span>
                      </div>
                    </div>

                    <div className="mt-6 text-center">
                      <Link
                        href={`/academics/faculty/${faculty.id}`}
                        className="bg-primary/10 hover:bg-primary/20 text-primary font-medium px-4 py-2 rounded-md transition duration-300 inline-block text-sm"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Faculty Development</h2>
              <p className="text-gray-700 mb-4">
                We believe in continuous learning and professional development of our faculty members. The college
                regularly organizes faculty development programs, workshops, and training sessions to enhance the
                teaching skills and subject knowledge of our faculty members. We also encourage our faculty members to
                participate in conferences, seminars, and research activities.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/academics/research"
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition duration-300 inline-block"
                >
                  Research & Publications
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
