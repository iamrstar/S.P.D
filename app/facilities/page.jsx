import Link from "next/link"
import Image from "next/image"
import {
  Library,
  ComputerIcon as Desktop,
  FlaskRoundIcon as Flask,
  Dumbbell,
  Utensils,
  Wifi,
  Home,
  Microscope,
  Music,
  Bus,
  HeartPulse,
  Landmark,
} from "lucide-react"

export default function Facilities() {
  const facilities = [
    {
      id: "library",
      name: "Central Library",
      icon: <Library className="h-8 w-8 text-primary" />,
      image: "/library.jpg",
      description:
        "Our state-of-the-art library is a knowledge hub with a vast collection of books, journals, magazines, and digital resources. It provides a quiet and conducive environment for reading and research.",
      features: [
        "Over 50,000 books covering various disciplines",
        "Subscription to 100+ national and international journals",
        "Digital library with access to e-books and online journals",
        "Reading rooms with seating capacity of 200 students",
        "Photocopying and printing facilities",
        "Extended hours during examination period",
      ],
    },
    {
      id: "computer-labs",
      name: "Computer Laboratories",
      icon: <Desktop className="h-8 w-8 text-primary" />,
      image: "/computer-lab.jpg",
      description:
        "Our computer laboratories are equipped with the latest hardware and software to provide students with hands-on experience in various computer applications. The labs are connected to high-speed internet and are maintained by experienced technical staff.",
      features: [
        "Multiple labs with a total of 200 computers",
        "Latest software and hardware configurations",
        "High-speed internet connectivity",
        "Projectors and interactive boards for teaching",
        "Technical support staff available during lab hours",
        "Regular upgrades to keep pace with technological advancements",
      ],
    },
    {
      id: "science-labs",
      name: "Science Laboratories",
      icon: <Flask className="h-8 w-8 text-primary" />,
      image: "/science-lab.jpg",
      description:
        "Our science laboratories for Physics, Chemistry, Botany, and Zoology are well-equipped with modern equipment and apparatus. The labs provide students with practical knowledge and hands-on experience in scientific experiments and research.",
      features: [
        "Separate labs for Physics, Chemistry, Botany, and Zoology",
        "Modern equipment and apparatus for experiments",
        "Safety measures and protocols in place",
        "Qualified lab assistants to guide students",
        "Regular upgrades to incorporate latest scientific advancements",
        "Research facilities for advanced studies",
      ],
    },
    {
      id: "research-center",
      name: "Research Center",
      icon: <Microscope className="h-8 w-8 text-primary" />,
      image: "/research-center.jpg",
      description:
        "Our dedicated research center provides facilities and resources for faculty members and students to conduct research in various fields. The center promotes a culture of research and innovation.",
      features: [
        "Advanced research equipment and tools",
        "Collaboration spaces for research teams",
        "Access to research databases and journals",
        "Support for research project development",
        "Regular research seminars and workshops",
        "Funding opportunities for promising research projects",
      ],
    },
    {
      id: "sports",
      name: "Sports Facilities",
      icon: <Dumbbell className="h-8 w-8 text-primary" />,
      image: "/sports.jpg",
      description:
        "We offer excellent sports facilities for various indoor and outdoor games. Our sports complex includes a playground, gymnasium, and facilities for games like cricket, football, basketball, volleyball, badminton, table tennis, and chess.",
      features: [
        "Spacious playground for outdoor games",
        "Modern gymnasium with fitness equipment",
        "Indoor sports facilities for badminton, table tennis, etc.",
        "Qualified sports coaches and trainers",
        "Regular sports events and competitions",
        "Opportunities to participate in inter-college tournaments",
      ],
    },
    {
      id: "auditorium",
      name: "Auditorium & Seminar Halls",
      icon: <Landmark className="h-8 w-8 text-primary" />,
      image: "/auditorium.jpg",
      description:
        "Our college has a spacious auditorium and multiple seminar halls equipped with modern audio-visual facilities. These venues host various academic and cultural events throughout the year.",
      features: [
        "Main auditorium with seating capacity of 500",
        "Multiple seminar halls for smaller gatherings",
        "State-of-the-art sound and lighting systems",
        "Projection facilities and large screens",
        "Comfortable seating arrangements",
        "Air-conditioned environment",
      ],
    },
    {
      id: "cafeteria",
      name: "Cafeteria",
      icon: <Utensils className="h-8 w-8 text-primary" />,
      image: "/cafeteria.jpg",
      description:
        "Our cafeteria serves nutritious and affordable meals to students and staff. It provides a clean and hygienic environment for dining and socializing. The menu includes a variety of food items catering to different tastes and preferences.",
      features: [
        "Spacious seating area with capacity for 150 people",
        "Hygienic food preparation and serving",
        "Variety of food items at affordable prices",
        "Special dietary options available",
        "Clean drinking water facilities",
        "Regular quality checks and feedback system",
      ],
    },
    {
      id: "cultural-center",
      name: "Cultural Center",
      icon: <Music className="h-8 w-8 text-primary" />,
      image: "/cultural-center.jpg",
      description:
        "Our cultural center provides a platform for students to showcase their talents in various cultural activities like music, dance, drama, and fine arts. The center organizes cultural events and competitions throughout the year.",
      features: [
        "Music room with instruments and practice space",
        "Dance studio with mirrors and sound system",
        "Art room for painting and sculpture",
        "Drama and theater workshop area",
        "Regular cultural workshops and training sessions",
        "Annual cultural festival and competitions",
      ],
    },
    {
      id: "wifi",
      name: "Wi-Fi Campus",
      icon: <Wifi className="h-8 w-8 text-primary" />,
      image: "/wifi.jpg",
      description:
        "Our campus is equipped with high-speed Wi-Fi connectivity, providing students and staff with internet access for academic and research purposes. The Wi-Fi network covers all buildings, including classrooms, laboratories, library, and common areas.",
      features: [
        "High-speed internet connectivity throughout the campus",
        "Secure network with authentication system",
        "Technical support for connectivity issues",
        "Regular upgrades to improve speed and coverage",
        "Usage policies to ensure fair access for all",
        "Monitoring system to prevent misuse",
      ],
    },
    {
      id: "hostel",
      name: "Hostel Facilities",
      icon: <Home className="h-8 w-8 text-primary" />,
      image: "/hostel.jpg",
      description:
        "We provide separate hostel facilities for boys and girls with comfortable accommodation, nutritious food, and a safe environment. The hostels are located within the campus and are managed by experienced wardens and support staff.",
      features: [
        "Separate hostels for boys and girls",
        "Furnished rooms with basic amenities",
        "Mess facility with nutritious meals",
        "24/7 security and CCTV surveillance",
        "Common rooms with recreational facilities",
        "Regular maintenance and cleanliness",
        "Wi-Fi connectivity for academic purposes",
      ],
    },
    {
      id: "transport",
      name: "Transportation",
      icon: <Bus className="h-8 w-8 text-primary" />,
      image: "/transport.jpg",
      description:
        "The college provides transportation facilities for students and staff from various parts of the city. Our fleet of buses operates on multiple routes, ensuring safe and comfortable travel to and from the college.",
      features: [
        "Fleet of buses covering major routes in the city",
        "Experienced and trained drivers",
        "Regular maintenance of vehicles",
        "GPS tracking system for safety",
        "Comfortable seating arrangements",
        "Reasonable transportation fees",
        "Special arrangements for college events",
      ],
    },
    {
      id: "medical",
      name: "Medical Center",
      icon: <HeartPulse className="h-8 w-8 text-primary" />,
      image: "/medical.jpg",
      description:
        "Our on-campus medical center provides basic healthcare services to students and staff. The center is equipped with essential medical facilities and is staffed by qualified healthcare professionals.",
      features: [
        "Basic medical check-ups and first aid",
        "Qualified doctor and nursing staff",
        "Essential medicines and medical supplies",
        "Regular health check-up camps",
        "Ambulance service for emergencies",
        "Health awareness programs",
        "Tie-ups with nearby hospitals for advanced care",
      ],
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
                <span className="text-gray-500">Facilities</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="relative h-64 md:h-80">
          <Image
            src="/facilities-banner.jpg"
            alt="SPD Pandey Degree College Facilities"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center max-w-3xl px-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Campus Facilities</h1>
              <p className="text-lg md:text-xl text-white">
                State-of-the-art infrastructure for a conducive learning environment
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-gray-700 mb-8 text-lg">
              SPD Pandey Degree College is committed to providing excellent infrastructure and facilities to support the
              academic and extracurricular activities of students. Our campus is equipped with modern amenities and
              resources to create a conducive environment for learning, research, and overall development.
            </p>

            {/* Facilities Overview Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {facilities.map((facility) => (
                <a
                  key={facility.id}
                  href={`#${facility.id}`}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-300 flex flex-col items-center text-center"
                >
                  <div className="bg-primary/10 p-3 rounded-full mb-3">{facility.icon}</div>
                  <h3 className="font-medium text-gray-800">{facility.name}</h3>
                </a>
              ))}
            </div>

            {/* Detailed Facility Sections */}
            <div className="space-y-16">
              {facilities.map((facility) => (
                <section key={facility.id} id={facility.id} className="scroll-mt-40">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                    <div className="relative h-64 md:h-80 lg:h-96">
                      <Image
                        src={facility.image || "/placeholder.svg"}
                        alt={facility.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex items-center mb-6">
                        <div className="bg-primary/10 p-3 rounded-full mr-4">{facility.icon}</div>
                        <h2 className="text-2xl font-bold text-gray-800">{facility.name}</h2>
                      </div>

                      <p className="text-gray-700 mb-6">{facility.description}</p>

                      <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {facility.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                              <div className="h-2 w-2 bg-primary rounded-full"></div>
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            {/* Virtual Tour Section */}
            <div className="bg-secondary/30 p-6 md:p-8 rounded-lg mt-16">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Take a Virtual Tour</h2>
                <p className="text-gray-700 mb-6">
                  Explore our campus facilities through our interactive virtual tour. Get a 360-degree view of our
                  classrooms, laboratories, library, sports facilities, and more.
                </p>
                <Link
                  href="/virtual-tour"
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition duration-300 inline-block"
                >
                  Start Virtual Tour
                </Link>
              </div>
            </div>

            {/* Feedback Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-10 h-1 bg-primary mr-3"></span>
                Facility Feedback
              </h2>
              <p className="text-gray-700 mb-6">
                We are constantly working to improve our facilities and services. If you have any suggestions or
                feedback regarding our campus facilities, please share them with us.
              </p>
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="facility" className="block text-sm font-medium text-gray-700 mb-1">
                      Facility
                    </label>
                    <select
                      id="facility"
                      name="facility"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select Facility</option>
                      {facilities.map((facility) => (
                        <option key={facility.id} value={facility.id}>
                          {facility.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Feedback
                    </label>
                    <textarea
                      id="feedback"
                      name="feedback"
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    ></textarea>
                  </div>
                  <div className="text-right">
                    <button
                      type="submit"
                      className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-md transition duration-300"
                    >
                      Submit Feedback
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
