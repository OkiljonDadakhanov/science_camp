import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import AcademicSection from "@/components/academic-section"
import ActivitiesSlider from "@/components/activities-slider"
import NonAcademicSection from "@/components/non-academic-section"
// import FAQSection from "@/components/faq-section"
import StaticMap from "@/components/static-map"
import CountdownTimer from "@/components/countdown-timer"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <HeroSection />
      <CountdownTimer />
      <AboutSection />
      <AcademicSection />
      <ActivitiesSlider />
      <NonAcademicSection />
      {/* <FAQSection /> */}
      <StaticMap />
      <Footer />
    </main>
  )
}
