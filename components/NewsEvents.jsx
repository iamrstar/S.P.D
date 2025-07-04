import Link from "next/link"
import { Calendar, Bell, FileText } from "lucide-react"

const NewsEvents = () => {
  return (
    <section className="py-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-8 h-1 bg-primary mr-3"></span>
            News & Events
          </h2>

          <div className="space-y-6">
            {/* Notice Board - New Component */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-primary" />
                Notice Board
              </h3>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-secondary p-3 border-b border-gray-200">
                  <h4 className="font-medium text-secondary-foreground">Important Announcements</h4>
                </div>

                <div className="divide-y divide-gray-200">
                  <div className="p-3 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <h5 className="font-medium text-gray-800">Semester Examination Schedule Released</h5>
                      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Important</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      The examination schedule for the current semester has been released. Students are advised to check
                      the timetable.
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-gray-500">Posted on: May 18, 2023</span>
                      <Link href="/notices/exam-schedule" className="text-primary text-sm hover:underline">
                        View Details
                      </Link>
                    </div>
                  </div>

                  <div className="p-3 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <h5 className="font-medium text-gray-800">Fee Payment Last Date Extended</h5>
                      <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">Fees</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      The last date for fee payment has been extended to June 15, 2023. Students are requested to pay
                      their fees before the deadline.
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-gray-500">Posted on: May 12, 2023</span>
                      <Link href="/notices/fee-extension" className="text-primary text-sm hover:underline">
                        View Details
                      </Link>
                    </div>
                  </div>

                  <div className="p-3 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <h5 className="font-medium text-gray-800">Library Book Return Notice</h5>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Library</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      All students are requested to return library books before May 30, 2023. Late returns will incur
                      fines as per library rules.
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-gray-500">Posted on: May 10, 2023</span>
                      <Link href="/notices/library-return" className="text-primary text-sm hover:underline">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 text-center border-t border-gray-200">
                  <Link href="/notices" className="text-primary font-medium hover:underline text-sm">
                    View All Notices
                  </Link>
                </div>
              </div>
            </div>

            {/* News section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <Bell className="h-5 w-5 mr-2 text-primary" />
                Latest News
              </h3>

              <ul className="space-y-4">
                <li>
                  <div className="flex">
                    <div className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium mr-3 h-fit">
                      NEW
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 hover:text-primary">
                        <Link href="/news/admission-2023">Admissions for Academic Year 2023-24 Now Open</Link>
                      </h4>
                      <p className="text-sm text-gray-500">May 15, 2023</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex">
                    <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium mr-3 h-fit">
                      NEWS
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 hover:text-primary">
                        <Link href="/news/scholarship-program">
                          New Scholarship Program Announced for Meritorious Students
                        </Link>
                      </h4>
                      <p className="text-sm text-gray-500">May 10, 2023</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex">
                    <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium mr-3 h-fit">
                      NEWS
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 hover:text-primary">
                        <Link href="/news/faculty-achievement">
                          Dr. Sharma Receives National Award for Research Excellence
                        </Link>
                      </h4>
                      <p className="text-sm text-gray-500">May 5, 2023</p>
                    </div>
                  </div>
                </li>
              </ul>

              <div className="mt-4">
                <Link
                  href="/news"
                  className="text-primary font-medium hover:underline text-sm inline-flex items-center"
                >
                  View All News <span className="ml-1">→</span>
                </Link>
              </div>
            </div>

            {/* Events section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                Upcoming Events
              </h3>

              <ul className="space-y-4">
                <li className="flex">
                  <div className="bg-primary/10 text-center rounded-lg p-2 mr-4 w-14">
                    <span className="block text-lg font-bold text-primary">20</span>
                    <span className="block text-xs text-gray-600">May</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 hover:text-primary">
                      <Link href="/events/orientation-day">Orientation Day for New Students</Link>
                    </h4>
                    <p className="text-sm text-gray-500">10:00 AM - Main Auditorium</p>
                  </div>
                </li>

                <li className="flex">
                  <div className="bg-primary/10 text-center rounded-lg p-2 mr-4 w-14">
                    <span className="block text-lg font-bold text-primary">25</span>
                    <span className="block text-xs text-gray-600">May</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 hover:text-primary">
                      <Link href="/events/science-exhibition">Annual Science Exhibition</Link>
                    </h4>
                    <p className="text-sm text-gray-500">9:00 AM - Science Block</p>
                  </div>
                </li>

                <li className="flex">
                  <div className="bg-primary/10 text-center rounded-lg p-2 mr-4 w-14">
                    <span className="block text-lg font-bold text-primary">02</span>
                    <span className="block text-xs text-gray-600">Jun</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 hover:text-primary">
                      <Link href="/events/alumni-meet">Alumni Meet 2023</Link>
                    </h4>
                    <p className="text-sm text-gray-500">5:00 PM - College Grounds</p>
                  </div>
                </li>
              </ul>

              <div className="mt-4">
                <Link
                  href="/events"
                  className="text-primary font-medium hover:underline text-sm inline-flex items-center"
                >
                  View All Events <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsEvents
