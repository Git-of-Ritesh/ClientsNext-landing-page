'use client';

import React from 'react'
import Logo from '../app/logo.svg'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
    DrawerTrigger,
} from "@/components/ui/drawer"

import {
    Card
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const navbar = () => {
    const scrollToCTA = () => {
        const CTA = document.getElementById('JoinWaitlist');
        if (CTA) {
          CTA.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div className='px-0 sm:px-6 md:px-10 lg:px-20 xl:px-60 py-4 sticky top-0 z-50'>
            <Card className='py-3 bg-transparent backdrop-blur-lg'>
                <div className='flex justify-between px-4'>
                    <div className='flex justify-center items-center gap-1'>
                        <Image src={Logo} alt="ClientsNext Logo" className="w-8 h-8" />
                        <h2 className="text-lg sm:text-2xl font-semibold">ClientsNext</h2>
                    </div>
                    <div className='hidden justify-center items-center gap-1 sm:flex'>
                        <Button variant="ghost" className='text-base font-semibold hover:bg-transparent hover:shadow-none cursor-pointer'>About us</Button>
                        <Button variant="ghost" className='text-base font-semibold hover:bg-transparent hover:shadow-none cursor-pointer'>Features</Button>
                        <Button variant="ghost" className='text-base font-semibold hover:bg-transparent hover:shadow-none cursor-pointer'>Pricing</Button>
                        <Button variant="ghost" className='text-base font-semibold hover:bg-transparent hover:shadow-none cursor-pointer '>Blogs</Button>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <Button onClick={scrollToCTA} className='cursor-pointer'><h3 className='text-xs sm:text-sm font-semibold'>Join waitlist</h3></Button>
                        <Drawer>
                            <DrawerTrigger asChild>
                                <Button variant='outline' size='icon' className='flex sm:hidden'>
                                    <Menu />
                                </Button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <DrawerHeader>
                                    <DrawerTitle></DrawerTitle>
                                    <DrawerDescription></DrawerDescription>
                                </DrawerHeader>
                                <div className='flex flex-col pb-5 sm:hidden'>
                                    <Button variant="ghost" className='text-lg font-normal hover:bg-transparent hover:shadow-none cursor-pointer justify-start'>About us</Button>
                                    <Button variant="ghost" className='text-lg font-normal hover:bg-transparent hover:shadow-none cursor-pointer justify-start'>Features</Button>
                                    <Button variant="ghost" className='text-lg font-normal hover:bg-transparent hover:shadow-none cursor-pointer justify-start'>Pricing</Button>
                                    <Button variant="ghost" className='text-lg font-normal hover:bg-transparent hover:shadow-none cursor-pointer justify-start '>Blogs</Button>
                                </div>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default navbar