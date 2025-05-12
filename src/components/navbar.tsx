'use client';

import React, { useState } from 'react'
import Logo from '../app/logo.svg'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const navbar = () => {
    return (
        <div className='px-0 sm:px-6 md:px-10 lg:px-20 xl:px-60 py-4'>
            <Card className='py-3'>
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
                        <Button className='cursor-pointer'><h3 className='text-xs sm:text-sm font-semibold'>Join waitlist</h3></Button>
                        <Drawer>
                            <DrawerTrigger asChild>
                                <Button variant='outline' size='icon' className='flex sm:hidden'>
                                    <Menu />
                                </Button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <div className='flex flex-col gap-1 sm:hidden'>
                                    <Button variant="ghost" className='text-base font-normal hover:bg-transparent hover:shadow-none cursor-pointer justify-start'>About us</Button>
                                    <Button variant="ghost" className='text-base font-normal hover:bg-transparent hover:shadow-none cursor-pointer justify-start'>Features</Button>
                                    <Button variant="ghost" className='text-base font-normal hover:bg-transparent hover:shadow-none cursor-pointer justify-start'>Pricing</Button>
                                    <Button variant="ghost" className='text-base font-normal hover:bg-transparent hover:shadow-none cursor-pointer justify-start '>Blogs</Button>
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