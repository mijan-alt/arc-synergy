import React from 'react'
import Nav from '@/components/Header/Nav'
import Hero from '@/components/hero/Hero'
import About2 from '@/components/about/About2'
import BusinessDivision from '@/components/mission/BusinessDivision'
import Values from '@/components/about/Values'

import AboutHero from '@/components/about/AboutHero'
import Vission from '@/components/about/Vission'


const page = () => {
  return (
      <>
       <Nav />
      <AboutHero />
      <About2 />
      <BusinessDivision />
      <Values />
      <Vission/>
    
      </>
  )
}

export default page