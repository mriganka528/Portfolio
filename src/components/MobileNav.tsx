"use client"
import React from 'react'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'
import { motion } from "framer-motion"
import Sidebar from './Sidebar'
function MobileNav() {
    return (
        <motion.div initial={{ opacity: 0.0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }} className=' fixed  min-[768px]:hidden  border-l border-r border-b rounded border-gray-700 w-screen  flex justify-between items-center text-base backdrop-blur-sm px-5 py-2.5'>
            <div>
                <ScrollLink to='home' duration={70}>
                    <Image src={'/assets/logos/newLogo.png'} height={42} width={42} alt='Logo'></Image>
                </ScrollLink>
            </div>
            
            <Sidebar />
        </motion.div>
    )
}

export default MobileNav
