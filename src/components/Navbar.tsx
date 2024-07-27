"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import { Link as ScrollLink } from "react-scroll";
function Navbar() {

    return (
        <motion.div  initial={{ opacity: 0.0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.1,
            duration: 0.7,
            ease: "easeInOut",
        }}  className=' z-50  max-[768px]:hidden fixed border-l border-r border-b rounded border-gray-700 w-screen min-h-20 flex justify-between items-center px-5 text-base backdrop-blur-sm '>
            {/* logo */}
            <div className='font-customFont'>
                <ScrollLink duration={60} to='home' className='cursor-pointer' >
                    <Image src={'/assets/logos/newLogo.png'} alt='Logo' height={50} width={50}></Image>
                </ScrollLink>
            </div>
            {/* Menu */}
            <div className=' bg-[#161616] backdrop-blur-sm px-8 rounded py-3 flex justify-center items-center' >
                <ul className="list-none flex gap-x-16 hover:text-white ">
                    <li className=' hover:text-[#bbc1c0] logo_jump' >
                        <ScrollLink to="home" smooth={true} duration={65} className='cursor-pointer'>
                            HOME
                        </ScrollLink>
                    </li>
                    <li className=' hover:text-[#bbc1c0] logo_jump' >
                        <ScrollLink to="about" smooth={true} duration={65} className='cursor-pointer'>
                            ABOUT
                        </ScrollLink>
                    </li>
                    <li className=' hover:text-[#bbc1c0] logo_jump' >
                        <ScrollLink to="projects" smooth={true} duration={65} className='cursor-pointer'>
                            PROJECTS
                        </ScrollLink>
                    </li>
                    <li className=' hover:text-[#bbc1c0] logo_jump' >
                        <ScrollLink to="connect" smooth={true} duration={65} className='cursor-pointer'>
                            CONNECT
                        </ScrollLink>
                    </li>
                </ul>


            </div>
            {/* Contact Us */}
            <div className=' rounded mr-6'>
                <Link target='_blank' href={'https://www.linkedin.com/in/mriganka-sarma-987317231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} className='logo_jump' >
                    <Linkedin size={35} className=' antialiased' />
                </Link>
            </div>
        </motion.div>

    )
}

export default Navbar
