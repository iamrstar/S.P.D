import Link from "next/link"
import Image from "next/image"
import { Calendar, FileText, Clock, HelpCircle, CheckCircle } from "lucide-react"

export default function Admissions() {
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
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-500">Admissions</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="relative h-64 md:h-96">
          <Image
            src="/admissions-banner.jpg"
            alt="SPD Pandey Degree College Admissions"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center max-w-3xl px-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Admissions Open for 2023-24
              </h1>
              <p className="text-lg md:text-xl text-white mb-6">
                Join SPD Pandey Degree College for a transformative educational experience
              </p>
              <Link
                href="/admissions/apply"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition duration-300 inline-block"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-primary/10 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Calendar className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-xl font-bold text-gray-800">Important Dates</h2>
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Application Start Date:</span>
                    <span className="font-medium text-gray-800">May 15, 2023</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Application End Date:</span>
                    <span className="font-medium text-gray-800">June 30, 2023</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Entrance Test Date:</span>
                    <span className="font-medium text-gray-800">July 10, 2023</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Result Declaration:</span>
                    <span className="font-medium text-gray-800">July 20, 2023</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Counseling Starts:</span>
                    <span className="font-medium text-gray-800">July 25, 2023</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Classes Begin:</span>
                    <span className="font-medium text-gray-800">August 1, 2023</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/20 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <FileText className="h-8 w-8 text-secondary-foreground mr-3" />
                  <h2 className="text-xl font-bold text-gray-800">Required Documents</h2>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary-foreground mr-2 mt-0.5 shrink-0" />
                    <span className="text-gray-700">10th Mark Sheet & Certificate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary-foreground mr-2 mt-0.5 shrink-0" />
                    <span className="text-gray-700">12th Mark Sheet & Certificate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary-foreground mr-2 mt-0.5 shrink-0" />
                    <span className="text-gray-700">Transfer Certificate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary-foreground mr-2 mt-0.5 shrink-0" />
                    <span className="text-gray-700">Character Certificate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary-foreground mr-2 mt-0.5 shrink-0" />
                    <span className="text-gray-700">Migration Certificate (if applicable)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary-foreground mr-2 mt-0.5 shrink-0" />
                    <span className="text-gray-700">Passport Size Photographs (5 copies)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary-foreground mr-2 mt-0.5 shrink-0" />
                    <span className="text-gray-700">Aadhar Card</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary-foreground mr-2 mt-0.5 shrink-0" />
                    <span className="text-gray-700">Category Certificate (if applicable)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Clock className="h-8 w-8 text-gray-700 mr-3" />
                  <h2 className="text-xl font-bold text-gray-800">Admission Office</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Visit our admission office for any queries related to the admission process.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Location:</strong> Administrative Block, Ground Floor
                  </li>
                  <li>
                    <strong>Timing:</strong> Monday to Saturday, 9:00 AM to 5:00 PM
                  </li>
                  <li>
                    <strong>Contact:</strong> +91 1234567890
                  </li>
                  <li>
                    <strong>Email:</strong> admissions@spdpandey.edu.in
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-10 h-1 bg-primary mr-3"></span>
              Admission Process
            </h2>

            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Online Application</h3>
                  <p className="text-gray-700">
                    Fill out the online application form with accurate information. Upload the required documents as
                    specified in the application form. Pay the application fee online.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Entrance Test</h3>
                  <p className="text-gray-700">
                    Appear for the entrance test on the scheduled date. The test will assess your knowledge and aptitude
                    in the relevant subjects. The syllabus and pattern of the entrance test will be available on the
                    college website.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Merit List</h3>
                  <p className="text-gray-700">
                    The merit list will be prepared based on the entrance test score and academic performance in the
                    qualifying examination. The merit list will be published on the college website and notice board.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 shrink-0 mt-1">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Counseling</h3>
                  <p className="text-gray-700">
                    Attend the counseling session on the scheduled date with all original documents. Choose your
                    preferred course and subjects during the counseling session. The allotment of courses will be based
                    on merit and availability of seats.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 shrink-0 mt-1">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Fee Payment</h3>
                  <p className="text-gray-700">
                    Pay the admission fee and first semester fee as per the fee structure. The fee can be paid online or
                    at the college fee counter. After fee payment, collect the fee receipt and admission letter.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 shrink-0 mt-1">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Orientation Program</h3>
                  <p className="text-gray-700">
                    Attend the orientation program to get familiar with the college rules, regulations, facilities, and
                    faculty members. The orientation program will also provide information about the academic calendar,
                    examination system, and extracurricular activities.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-10 h-1 bg-primary mr-3"></span>
              Fee Structure
            </h2>

            <div className="overflow-x-auto mb-12">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                  <tr>
                    <th className="py-3 px-4 bg-gray-50 text-left text-gray-700 font-semibold border-b">Program</th>
                    <th className="py-3 px-4 bg-gray-50 text-left text-gray-700 font-semibold border-b">
                      Tuition Fee (Per Semester)
                    </th>
                    <th className="py-3 px-4 bg-gray-50 text-left text-gray-700 font-semibold border-b">
                      Development Fee
                    </th>
                    <th className="py-3 px-4 bg-gray-50 text-left text-gray-700 font-semibold border-b">
                      Examination Fee
                    </th>
                    <th className="py-3 px-4 bg-gray-50 text-left text-gray-700 font-semibold border-b">
                      Total (Per Semester)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">B.A. (Honours)</td>
                    <td className="py-3 px-4 border-b">₹15,000</td>
                    <td className="py-3 px-4 border-b">₹5,000</td>
                    <td className="py-3 px-4 border-b">₹2,000</td>
                    <td className="py-3 px-4 border-b font-medium">₹22,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">B.Sc. (Honours)</td>
                    <td className="py-3 px-4 border-b">₹18,000</td>
                    <td className="py-3 px-4 border-b">₹6,000</td>
                    <td className="py-3 px-4 border-b">₹2,500</td>
                    <td className="py-3 px-4 border-b font-medium">₹26,500</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">B.Com. (Honours)</td>
                    <td className="py-3 px-4 border-b">₹16,000</td>
                    <td className="py-3 px-4 border-b">₹5,500</td>
                    <td className="py-3 px-4 border-b">₹2,000</td>
                    <td className="py-3 px-4 border-b font-medium">₹23,500</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-12">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <HelpCircle className="h-6 w-6 text-primary mr-2" />
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Can I apply for multiple courses?</h3>
                  <p className="text-gray-700">
                    Yes, you can apply for multiple courses by selecting the courses in the application form. However,
                    you need to pay the application fee for each course separately.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Is there any hostel facility available?</h3>
                  <p className="text-gray-700">
                    Yes, the college provides hostel facilities for both boys and girls. The hostel fee is separate from
                    the college fee. For more information about hostel facilities, please contact the hostel warden.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Are there any scholarships available?</h3>
                  <p className="text-gray-700">
                    Yes, the college offers various scholarships to meritorious students, economically weaker students,
                    and students with outstanding achievements in sports and cultural activities. For more information
                    about scholarships, please visit the scholarship section on the college website.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">How can I pay the application fee?</h3>
                  <p className="text-gray-700">
                    You can pay the application fee online through credit card, debit card, or net banking. You can also
                    pay the fee offline at the college fee counter through cash, demand draft, or cheque.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Admission Office</h2>
              <p className="text-gray-700 mb-4">
                If you have any queries regarding the admission process, please feel free to contact our admission
                office. Our admission team will be happy to assist you.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition duration-300 inline-block"
                >
                  Contact Us
                </Link>
                <Link
                  href="/admissions/apply"
                  className="bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-md transition duration-300 inline-block"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
