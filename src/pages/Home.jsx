import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import RideCategories from '../components/RideCategories'
import SafetySection from '../components/SafetySection'
import DriverSection from '../components/DriverSection'
import BusinessSection from '../components/BusinessSection'
import Testimonials from '../components/Testimonials'
import DownloadApp from '../components/DownloadApp'

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <RideCategories />
      <SafetySection />
      <DriverSection />
      <BusinessSection />
      <Testimonials />
      <DownloadApp />
    </>
  )
}
