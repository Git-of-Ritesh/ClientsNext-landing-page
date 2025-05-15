import React from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/problemsection'
import Features from '@/components/features'

const page = () => {
  return (
    <div className='px-4'>
      <Navbar/>
      <Hero/>
      <ProblemSection/>
      <Features/>
      </div>
  )
}

export default page