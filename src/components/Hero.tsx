import React from 'react'
import { Button } from './ui/button'
import { MoveRight } from 'lucide-react'
import Shnapshot from "../app/UI frontshot.png"
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='flex flex-col pt-10 sm:pt-40 justify-center items-center'>
            <h1 className='text-3xl sm:text-4xl md:text-7xl font-semibold'>Your Clients. Your Control.</h1>
            <h1 className='text-3xl sm:text-4xl md:text-7xl font-semibold'>One Powerful CRM.</h1>
            <h2 className='mt-6 text-sm sm:text-lg text-center'>Built for freelancers, SaaS developers, and growing businesses — ClientsNext helps you manage leads, </h2>
            <h2 className='sm:text-lg text-sm text-center'>automate workflows, and scale your client relationships without the chaos.</h2>
            <Button size='xl' className='mt-10 group'>Join waitlist<MoveRight className='ml-1 group-hover:ml-3'/></Button>
            <div className='mt-24 sm:m-30'>
            <Image src={Shnapshot} alt="Shnapshot" className='rounded-xl sm:rounded-3xl'/>
            </div> 
        </div>
    )
}

export default Hero