import Hero from "@/components/Hero"
import AboutSection from "@/components/AboutSection"
import CoursesSection from "@/components/CoursesSection"
import NewsEvents from "@/components/NewsEvents"
import Facilities from "@/components/Facilities"
import QuickLinks from "@/components/QuickLinks"

export default function Home() {
  return (
    <div className="min-h-screen mt-32 md:mt-36">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AboutSection />
            <CoursesSection />
            <Facilities />
          </div>
          <div className="lg:col-span-1">
            <QuickLinks />
            <NewsEvents />
          </div>
        </div>
      </div>
    </div>
  )
}
