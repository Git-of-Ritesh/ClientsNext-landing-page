import React from 'react'
import { Button } from './ui/button'
import { MoveRight } from 'lucide-react'
import Shnapshot from "../app/UI frontshot.png"
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Hero = () => {
    return (
        <div className='flex flex-col pt-10 sm:pt-40 justify-center items-center'>
            <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold'>Your Clients. Your Control.</h1>
            <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold'>One Powerful CRM.</h1>
            <h2 className='mt-6 text-sm sm:text-lg md:text-base lg:text-lg  text-center'>Built for freelancers, SaaS developers, and growing businesses — ClientsNext helps you manage leads, </h2>
            <h2 className='sm:text-lg md:text-base lg:text-lg text-sm text-center '>automate workflows, and scale your client relationships without the chaos.</h2>
            <Button size='xl' className='mt-10 group'>Join waitlist<MoveRight className='ml-1 group-hover:ml-3' /></Button>
            <div className='flex flex-col mt-10 gap-3 sm:gap-5 sm:flex-row justify-center items-center sm:border-2 sm:p-2 sm:rounded-4xl'>
                <div className='flex -space-x-2 justify-center items-center'>
                    <Avatar className='ring-2 ring-white'>
                        <AvatarImage src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?ga=GA1.1.1437547889.1747198823&semt=ais_hybrid&w=740" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className='ring-2 ring-white'>
                        <AvatarImage src="https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869153.jpg?ga=GA1.1.1437547889.1747198823&semt=ais_hybrid&w=740" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className='ring-2 ring-white'>
                        <AvatarImage src="https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?ga=GA1.1.1437547889.1747198823&semt=ais_hybrid&w=740" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className='ring-2 ring-white'>
                        <AvatarImage src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?ga=GA1.1.1437547889.1747198823&semt=ais_hybrid&w=740" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <h1 className='sm:text-xl font-normal text-muted-foreground sm:mr-1'>Join 10+ people on the waitlist</h1>
            </div>

            <div className='mt-10 sm:mt-28'>
                <Image src={Shnapshot} alt="Shnapshot" width={1200} height={1200} className='rounded-xl sm:rounded-3xl' />
            </div>
        </div>
    )
}

export default Hero