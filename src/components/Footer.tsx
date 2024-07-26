"use client"
import React from 'react'
import Image from 'next/image'
import { Link as ScrollLink } from "react-scroll";

function Footer() {
    return (
        <div className='w-screen px-9 sm:px-20 flex justify-between items-center py-7 footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
            <ScrollLink duration={70} to='home' className='cursor-pointer'>
                <Image src={'/assets/logos/newLogo.png'} alt='logo' height={50} width={50}></Image>
            </ScrollLink>
            <span className=' antialiased text-gray-500 text-base sm:text-lg'>All rights reserved.</span>
        </div>
    )
}

export default Footer
