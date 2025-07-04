import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="relative">
      {/* Main slider/banner */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image src="/campus.jpg" alt="S.P.D College Campus" fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-6 md:px-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Welcome to Surat Pandey Degree College</h1>
            <p className="text-lg md:text-xl text-white mb-6">
            A permanent Affiliated unit of Nilamber-Pitamber University 
            <br />
            Medininagar,Palamu,Jharkhand
            <br />
            
            ACCREDITED BY NAAC & UGC
            
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition duration-300"
              >
                Apply Now
              </Link>
              <Link
                href="/about"
                className="bg-white hover:bg-gray-100 text-primary font-medium px-6 py-3 rounded-md transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick info cards */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-primary mb-2">Admissions Open</h3>
            <p className="text-gray-600 mb-4">
              Applications for the 2023-24 academic year are now open. Apply before the deadline.
            </p>
            <Link href="/admissions" className="text-primary font-medium hover:underline inline-flex items-center">
              Apply Now <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-primary mb-2">Upcoming Events</h3>
            <p className="text-gray-600 mb-4">
              Check out our calendar for academic and cultural events happening this month.
            </p>
            <Link href="/events" className="text-primary font-medium hover:underline inline-flex items-center">
              View Calendar <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-primary mb-2">Virtual Tour</h3>
            <p className="text-gray-600 mb-4">
              Explore our campus facilities and infrastructure through our virtual tour.
            </p>
            <Link href="/virtual-tour" className="text-primary font-medium hover:underline inline-flex items-center">
              Start Tour <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
