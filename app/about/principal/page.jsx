import Image from "next/image"
import Link from "next/link"

export default function PrincipalMessage() {
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
                <span className="text-gray-500">Principal's Message</span>
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
              Principal's Message
            </h1>

            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="md:w-1/3">
                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-md">
                  <Image src="/principal.jpg" alt="Dr. Rajesh Kumar, Principal" fill className="object-cover" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-gray-800">Dr. Rajesh Kumar</h3>
                  <p className="text-gray-600">Principal, S.P.D College</p>
                  <p className="text-sm text-gray-500 mt-1">Ph.D., M.Phil., M.A. (Education)</p>
                </div>
              </div>

              <div className="md:w-2/3">
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">Dear Students, Parents, and Well-wishers,</p>

                  <p className="mb-4">
                    It gives me immense pleasure to welcome you to S.P.D College, an institution committed to academic
                    excellence, character building, and holistic development of students. As the Principal, I am proud
                    to lead an institution that has established itself as a center of quality education and innovation.
                  </p>

                  <p className="mb-4">
                    At S.P.D College, we believe that education is not just about acquiring knowledge but also about
                    developing skills, values, and attitudes that prepare students for the challenges of life. Our
                    dedicated faculty, state-of-the-art infrastructure, and innovative teaching methodologies create a
                    conducive environment for learning and growth.
                  </p>

                  <p className="mb-4">
                    We offer a wide range of undergraduate programs in Arts, Science, and Commerce streams, catering to
                    the diverse educational needs and career aspirations of students. Our curriculum is designed to
                    provide a perfect blend of theoretical knowledge and practical skills, ensuring that our students
                    are well-prepared for higher education and employment.
                  </p>

                  <p className="mb-4">
                    Beyond academics, we encourage students to participate in various extracurricular activities,
                    including sports, cultural events, and community service. These activities help in developing
                    leadership qualities, teamwork, and social responsibility among students.
                  </p>

                  <p className="mb-4">
                    As we move forward, we remain committed to our vision of providing quality education that is
                    accessible and affordable. We strive to create an inclusive learning environment where every student
                    feels valued and supported.
                  </p>

                  <p className="mb-4">
                    I invite you to explore our website to learn more about our programs, facilities, and achievements.
                    If you have any questions or need further information, please do not hesitate to contact us.
                  </p>

                  <p className="mb-4">I look forward to welcoming you to our college community.</p>

                  <p className="font-medium">
                    Warm regards,
                    <br />
                    Dr. Rajesh Kumar
                    <br />
                    Principal
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Principal's Office Hours</h2>
              <p className="text-gray-700 mb-4">
                The Principal is available to meet students, parents, and visitors during the following hours:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Monday to Friday:</strong> 10:00 AM to 12:00 PM
                </li>
                <li>
                  <strong>Saturday:</strong> By appointment only
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                For appointments, please contact the Principal's Office at{" "}
                <span className="text-primary">principal@spdcollege.edu.in</span> or call{" "}
                <span className="text-primary">+91 1234567890</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
