import { Fragment } from 'react'
import Hero from '@/components/sections/Hero'
import Navigation from '@/components/ui/Navigation'
import AboutKlip from '@/components/sections/AboutKlip'
import BenefitSection from '@/components/sections/BenefitSection'
import Partnership from '@/components/sections/Partnership'

export default function Home() {
  return (
    <Fragment>
      <Navigation />

      {/* Hero section */}
      <Hero />

      {/* About Klip Section */}
      <AboutKlip />

      {/* Benefit Section with Grid Cards */}
      <BenefitSection />

      {/* PartnerShip Logos Sections */}
      <Partnership />
    </Fragment>
  )
}
