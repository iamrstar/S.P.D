import Link from "next/link"
import Image from "next/image"
import { Users, Calendar, MapPin, Award, Mail, Phone, Clock } from "lucide-react"

export default function Alumni() {
  const alumniTestimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      batch: "2015-18",
      course: "B.Sc. Physics",
      image: "/alumni1.jpg",
      position: "Research Scientist at ISRO",
      testimonial:
        "My time at SPD Pandey Degree College laid a strong foundation for my career in space research. The knowledge and skills I gained during my undergraduate studies have been invaluable in my professional journey.",
    },
    {
      id: 2,
      name: "Priya Patel",
      batch: "2016-19",
      course: "B.A. Economics",
      image: "/alumni2.jpg",
      position: "Financial Analyst at HDFC Bank",
      testimonial:
        "The economics program at SPD Pandey Degree College provided me with a comprehensive understanding of economic principles and their real-world applications. The faculty's guidance and support helped me secure a position at a leading bank.",
    },
    {
      id: 3,
      name: "Amit Kumar",
      batch: "2014-17",
      course: "B.Com. Accounting",
      image: "/alumni3.jpg",
      position: "Chartered Accountant",
      testimonial:
        "The commerce program at SPD Pandey Degree College gave me a strong foundation in accounting and finance. The practical knowledge and analytical skills I developed during my studies have been crucial in my career as a Chartered Accountant.",
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Alumni Meet 2023",
      date: "June 15, 2023",
      time: "5:00 PM onwards",
      venue: "College Auditorium",
      description:
        "Join us for the Annual Alumni Meet 2023, a celebration of the bond between alumni and their alma mater. The event will feature cultural performances, awards ceremony, and networking dinner.",
    },
    {
      id: 2,
      title: "Alumni Career Guidance Workshop",
      date: "July 10, 2023",
      time: "10:00 AM - 2:00 PM",
      venue: "Seminar Hall",
      description:
        "Alumni from various industries will conduct a career guidance workshop for current students, sharing their experiences and insights about different career paths and opportunities.",
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
                <span className="text-gray-500">Alumni</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="relative h-64 md:h-96">
          <Image src="/alumni-banner.jpg" alt="SPD Pandey Degree College Alumni" fill className="object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center max-w-3xl px-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Alumni Association</h1>
              <p className="text-lg md:text-xl text-white mb-6">
                Connecting graduates, building networks, and fostering lifelong relationships
              </p>
              <Link
                href="/alumni/register"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition duration-300 inline-block"
              >
                Join Alumni Network
              </Link>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-10 h-1 bg-primary mr-3"></span>
              About Alumni Association
            </h2>

            <p className="text-gray-700 mb-6">
              The Alumni Association of SPD Pandey Degree College was established with the aim of fostering a lifelong
              connection between the college and its graduates. The association serves as a platform for alumni to
              reconnect with their alma mater, network with fellow graduates, and contribute to the growth and
              development of the college.
            </p>

            <p className="text-gray-700 mb-8">
              Our alumni are our brand ambassadors who carry forward the legacy of SPD Pandey Degree College in various
              fields and professions across the globe. We take pride in their achievements and contributions to society.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-primary/10 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Networking</h3>
                </div>
                <p className="text-gray-700">
                  Connect with fellow alumni, build professional networks, and explore collaboration opportunities. The
                  association organizes regular meetups, reunions, and networking events.
                </p>
              </div>

              <div className="bg-secondary/20 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-secondary-foreground mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Mentorship</h3>
                </div>
                <p className="text-gray-700">
                  Share your knowledge and experience with current students through mentorship programs, guest lectures,
                  workshops, and career guidance sessions. Help shape the future of young minds.
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Calendar className="h-8 w-8 text-gray-700 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Events</h3>
                </div>
                <p className="text-gray-700">
                  Participate in various alumni events including annual meets, reunions, cultural programs, sports
                  competitions, and professional development workshops organized throughout the year.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-10 h-1 bg-primary mr-3"></span>
              Alumni Testimonials
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {alumniTestimonials.map((alumni) => (
                <div
                  key={alumni.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition duration-300"
                >
                  <div className="relative h-64 w-full">
                    <Image src={alumni.image || "/placeholder.svg"} alt={alumni.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{alumni.name}</h3>
                    <p className="text-primary font-medium mb-2">{alumni.position}</p>
                    <p className="text-gray-600 text-sm mb-4">
                      {alumni.course} | Batch: {alumni.batch}
                    </p>
                    <p className="text-gray-700 italic">"{alumni.testimonial}"</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-10 h-1 bg-primary mr-3"></span>
              Upcoming Alumni Events
            </h2>

            <div className="space-y-6 mb-12">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-primary mr-2" />
                      <span className="text-gray-700">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      <span className="text-gray-700">{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-primary mr-2" />
                      <span className="text-gray-700">{event.venue}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <Link
                    href={`/alumni/events/${event.id}`}
                    className="text-primary font-medium hover:underline inline-flex items-center"
                  >
                    Learn More <span className="ml-1">→</span>
                  </Link>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-10 h-1 bg-primary mr-3"></span>
              Join Alumni Network
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-12">
              <p className="text-gray-700 mb-6">
                If you are a graduate of SPD Pandey Degree College, we invite you to join our alumni network. By
                registering with the Alumni Association, you can stay connected with your alma mater, receive updates
                about college events and activities, connect with fellow alumni, and contribute to the growth and
                development of the college.
              </p>
              <div className="text-center">
                <Link
                  href="/alumni/register"
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition duration-300 inline-block"
                >
                  Register Now
                </Link>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-10 h-1 bg-primary mr-3"></span>
              Contact Alumni Association
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Alumni Office</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    <span className="text-gray-700">Administrative Block, First Floor, Room No. 105</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-2" />
                    <span className="text-gray-700">+91 9876543210</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-2" />
                    <span className="text-gray-700">alumni@spdpandey.edu.in</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Alumni Association Office Bearers</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-800">Dr. Anand Kumar</p>
                    <p className="text-gray-600">President, Alumni Association</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Mr. Rajiv Singh</p>
                    <p className="text-gray-600">Secretary, Alumni Association</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Ms. Priya Sharma</p>
                    <p className="text-gray-600">Treasurer, Alumni Association</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
