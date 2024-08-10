import React from 'react'
import Nav from '@/components/Header/Nav'
import Address from '@/components/contact-us/Address'
import Footer from '@/components/footer/Footer'
import ContactHero from '@/components/contact-us/ContactHero'

const page = () => {
    return ( 
        <>
            <Nav />
            <ContactHero />
            <Address />
            <Footer/>
        </>
  )
}

export default page