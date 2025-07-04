import Image from "next/image"
import Link from "next/link"

const AboutSection = () => {
  return (
    <section className="py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-10 h-1 bg-primary mr-3"></span>
            About Surat Pandey College
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <Image src="/college-building.jpg" alt="S.P.D College Building" fill className="object-cover" />
              </div>
            </div>

            <div className="md:w-2/3">
              <p className="text-gray-700 mb-4">
               Surat Pandey Degree College was established in the year 1983 and is a leading college of the N.P. University. It is a co-education college and offers education in Arts and Humanities, Commerce, and Science.
              </p>

              <p className="text-gray-700 mb-4">
               he college was named after an enlightened social worker of this area, named Surat Pandey. He emerged as an intelligent and very kind person embodying the spirit of inquiry just supported with faith as shown in his service to society. Surat Pandey seems to represent the intellectual potential of the race of Homo sapiens, which continues to manifest it itself in quest of ever-widening fields of knowledge.

Our college has achieved the scholarly excellence, fearless acuteness, relentless ability to deliver answers to everyday questions. We cherish the tradition and encourage our students to challenge themselves, be skeptical, and ask questions in this fast pacing and ever-evolving world.   
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <Link
                  href="/about/vision"
                  className="inline-flex items-center text-primary hover:underline font-medium"
                >
                  Vision & Mission <span className="ml-1">→</span>
                </Link>

                <Link
                  href="/about/principal"
                  className="inline-flex items-center text-primary hover:underline font-medium"
                >
                  Principal's Message <span className="ml-1">→</span>
                </Link>

                <Link
                  href="/about/history"
                  className="inline-flex items-center text-primary hover:underline font-medium"
                >
                  College History <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
