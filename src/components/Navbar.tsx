"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
function Navbar() {
    return (
        <div className=' max-[700px]:hidden fixed border rounded border-gray-700 w-screen bg min-h-20 flex justify-between items-center px-5 text-lg'>
            {/* logo */}
            <div className=' '>
                <Link href={'/'} >
                    <Image src={'/assets/3.png'} height={90} width={90} alt='Logo'>

                    </Image>
                </Link>
            </div>
            {/* Menu */}
            <div className=' bg-[#1b1a1a]   px-8 rounded-xl min-h-14 flex justify-center items-center' >
                <ul className=" min-h-15  list-none flex space-x-10 hover:text-white ">
                    <li className=' hover:text-red-500'>
                        <Link href={'/'} >About</Link>
                    </li >
                    <li className=' hover:text-red-500'>
                        <Link href={'/'}>Project</Link>
                    </li>
                    <li className=' hover:text-red-500' >
                        <Link href={'/'}>Contact</Link>
                    </li>
                </ul>


            </div>
            {/* Contact Us */}
            <div className=' '>
                <Link href={'/'}> Contact Us</Link>
            </div>
        </div>

    )
}

export default Navbar
