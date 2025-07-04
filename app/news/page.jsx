import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Search, Filter, Clock, MapPin } from "lucide-react"

export default function NewsEvents() {
  // Sample news data
  const newsItems = [
    {
      id: 1,
      title: "Admissions for Academic Year 2023-24 Now Open",
      date: "May 15, 2023",
      category: "Admissions",
      image: "/news1.jpg",
      excerpt:
        "Applications are now being accepted for all undergraduate programs for the academic year 2023-24. Prospective students can apply online or visit the admission office.",
      isNew: true,
    },
    {
      id: 2,
      title: "New Scholarship Program Announced for Meritorious Students",
      date: "May 10, 2023",
      category: "Scholarships",
      image: "/news2.jpg",
      excerpt:
        "The college has announced a new scholarship program for meritorious students. The scholarship will cover tuition fees and provide a monthly stipend.",
      isNew: false,
    },
    {
      id: 3,
      title: "Dr. Sharma Receives National Award for Research Excellence",
      date: "May 5, 2023",
      category: "Faculty Achievements",
      image: "/news3.jpg",
      excerpt:
        "Dr. Sharma from the Department of Physics has been honored with the National Award for Research Excellence for his groundbreaking work in quantum physics.",
      isNew: false,
    },
    {
      id: 4,
      title: "College Ranks Among Top 50 in National Survey",
      date: "April 28, 2023",
      category: "Achievements",
      image: "/news4.jpg",
      excerpt:
        "SPD Pandey Degree College has been ranked among the top 50 colleges in the country in a recent national survey conducted by Education Today magazine.",
      isNew: false,
    },
    {
      id: 5,
      title: "New Computer Lab Inaugurated",
      date: "April 20, 2023",
      category: "Infrastructure",
      image: "/news5.jpg",
      excerpt:
        "A state-of-the-art computer lab with 100 computers and high-speed internet connectivity has been inaugurated at the college. The lab will benefit students from all departments.",
      isNew: false,
    },
    {
      id: 6,
      title: "College Signs MoU with Industry Partners",
      date: "April 15, 2023",
      category: "Partnerships",
      image: "/news6.jpg",
      excerpt:
        "SPD Pandey Degree College has signed Memorandums of Understanding with several industry partners to provide internship and placement opportunities to students.",
      isNew: false,
    },
  ]

  // Sample events data
  const events = [
    {
      id: 1,
      title: "Orientation Day for New Students",
      date: "May 20, 2023",
      time: "10:00 AM",
      venue: "Main Auditorium",
      image: "/event1.jpg",
      description:
        "Welcome program for newly admitted students to introduce them to the college, faculty, and facilities.",
    },
    {
      id: 2,
      title: "Annual Science Exhibition",
      date: "May 25, 2023",
      time: "9:00 AM",
      venue: "Science Block",
      image: "/event2.jpg",
      description:
        "Exhibition showcasing scientific projects and innovations by students from the Department of Science.",
    },
    {
      id: 3,
      title: "Alumni Meet 2023",
      date: "June 2, 2023",
      time: "5:00 PM",
      venue: "College Grounds",
      image: "/event3.jpg",
      description: "Annual gathering of alumni to reconnect with their alma mater and network with fellow graduates.",
    },
    {
      id: 4,
      title: "Workshop on Research Methodology",
      date: "June 10, 2023",
      time: "11:00 AM",
      venue: "Seminar Hall",
      image: "/event4.jpg",
      description: "Workshop for faculty members and research scholars on advanced research methodologies and tools.",
    },
  ]

  // Sample notices data
  const notices = [
    {
      id: 1,
      title: "Semester Examination Schedule Released",
      date: "May 18, 2023",
      category: "Important",
      description:
        "The examination schedule for the current semester has been released. Students are advised to check the timetable.",
    },
    {
      id: 2,
      title: "Fee Payment Last Date Extended",
      date: "May 12, 2023",
      category: "Fees",
      description:
        "The last date for fee payment has been extended to June 15, 2023. Students are requested to pay their fees before the deadline.",
    },
    {
      id: 3,
      title: "Library Book Return Notice",
      date: "May 10, 2023",
      category: "Library",
      description:
        "All students are requested to return library books before May 30, 2023. Late returns will incur fines as per library rules.",
    },
    {
      id: 4,
      title: "Scholarship Application Deadline",
      date: "May 8, 2023",
      category: "Scholarships",
      description:
        "The last date for submitting scholarship applications is May 31, 2023. Eligible students are encouraged to apply.",
    },
    {
      id: 5,
      title: "Summer Vacation Announcement",
      date: "May 5, 2023",
      category: "General",
      description:
        "The college will remain closed for summer vacation from June 15 to July 15, 2023. Administrative office will function with limited staff.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 mt-32 md:mt-36">
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
                <span className="text-gray-500">News & Events</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="relative h-64 md:h-80">
          <Image src="/news-banner.jpg" alt="SPD Pandey Degree College News & Events" fill className="object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center max-w-3xl px-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">News & Events</h1>
              <p className="text-lg md:text-xl text-white">
                Stay updated with the latest happenings at SPD Pandey Degree College
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="max-w-6xl mx-auto">
            {/* Search and Filter Section */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search news and events..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <div className="flex gap-2">
                <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option value="">All Categories</option>
                  <option value="admissions">Admissions</option>
                  <option value="scholarships">Scholarships</option>
                  <option value="achievements">Achievements</option>
                  <option value="events">Events</option>
                  <option value="notices">Notices</option>
                </select>
                <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filter
                </button>
              </div>
            </div>

            {/* Notice Board Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-10 h-1 bg-primary mr-3"></span>
                Notice Board
              </h2>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-secondary p-4 border-b border-gray-200">
                  <h3 className="font-medium text-secondary-foreground">Important Announcements</h3>
                </div>

                <div className="divide-y divide-gray-200">
                  {notices.map((notice) => (
                    <div key={notice.id} className="p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-gray-800">{notice.title}</h4>
                        <span
                          className={`
                          ${
                            notice.category === "Important"
                              ? "bg-red-100 text-red-800"
                              : notice.category === "Fees"
                                ? "bg-amber-100 text-amber-800"
                                : notice.category === "Library"
                                  ? "bg-blue-100 text-blue-800"
                                  : notice.category === "Scholarships"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-gray-100 text-gray-800"
                          } 
                          text-xs px-2 py-1 rounded`}
                        >
                          {notice.category}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{notice.description}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500">Posted on: {notice.date}</span>
                        <Link href={`/notices/${notice.id}`} className="text-primary text-sm hover:underline">
                          View Details
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-4 text-center border-t border-gray-200">
                  <Link href="/notices" className="text-primary font-medium hover:underline text-sm">
                    View All Notices
                  </Link>
                </div>
              </div>
            </div>

            {/* Latest News Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-10 h-1 bg-primary mr-3"></span>
                Latest News
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsItems.map((news) => (
                  <div
                    key={news.id}
                    className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition duration-300"
                  >
                    <div className="relative h-48">
                      <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
                      {news.isNew && (
                        <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
                          NEW
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white text-xs px-2 py-1">
                        {news.category}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{news.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{news.excerpt}</p>
                      <Link
                        href={`/news/${news.id}`}
                        className="text-primary font-medium hover:underline inline-flex items-center text-sm"
                      >
                        Read More <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/news/archive"
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition duration-300 inline-block"
                >
                  View All News
                </Link>
              </div>
            </div>

            {/* Upcoming Events Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-10 h-1 bg-primary mr-3"></span>
                Upcoming Events
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition duration-300 flex"
                  >
                    <div className="bg-primary/10 text-center p-4 flex flex-col justify-center items-center min-w-[100px]">
                      <div className="text-2xl font-bold text-primary">{event.date.split(" ")[1].replace(",", "")}</div>
                      <div className="text-sm text-gray-600">{event.date.split(" ")[0]}</div>
                    </div>
                    <div className="p-4 flex-grow">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{event.title}</h3>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <Clock className="h-4 w-4 mr-1" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        {event.venue}
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                      <Link
                        href={`/events/${event.id}`}
                        className="text-primary font-medium hover:underline inline-flex items-center text-sm"
                      >
                        Event Details <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/events/calendar"
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition duration-300 inline-block"
                >
                  View Events Calendar
                </Link>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-secondary/50 p-6 rounded-lg">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Subscribe to Our Newsletter</h2>
                <p className="text-gray-700 mb-4">
                  Stay updated with the latest news, events, and announcements from SPD Pandey Degree College.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-md transition duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
