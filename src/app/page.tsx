import React from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/problemsection'
import Features from '@/components/features'
import JoinWaitlistCTA from '@/components/joinWaitlistCta'
import Footer from '@/components/footer'

const page = () => {
  return (
    <div className='px-4'>
      <Navbar/>
      <Hero/>
      <ProblemSection/>
      <Features/>
      <JoinWaitlistCTA/>
      <Footer/>
      </div>
  )
}

export default page