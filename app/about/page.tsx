import React from 'react'
import Nav from '@/components/Header/Nav'
import Hero from '@/components/hero/Hero'
import About2 from '@/components/about/About2'
import BusinessDivision from '@/components/mission/BusinessDivision'
import Values from '@/components/about/Values'
import VisionMission from '@/components/about/VisionMission'

const page = () => {
  return (
      <>
         <Nav />
        <Hero />
      <About2 />
      <BusinessDivision />
      <Values />
      <VisionMission/>
      </>
  )
}

export default page