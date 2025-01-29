import React from 'react'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/home/Hero'
import Section1 from '../components/home/Section1'
import { Footer } from '../components/layout/Footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Section1/>
      <Footer/>
    </div>
  )
}
