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
                delay: 0.1,
                duration: 0.7,
                ease: "easeInOut",
            }} className=' fixed z-50  min-[768px]:hidden  border-l border-r border-b rounded border-gray-700 w-screen  flex justify-between items-center text-base backdrop-blur-sm px-5 py-1'>
            <div>
                <ScrollLink to='home' smooth={true} duration={65}>
                    <Image src={'/assets/logos/nLogo.png'}  height={70} width={70} alt='Logo'></Image>
                </ScrollLink>
            </div>
            <Sidebar />
        </motion.div>
    )
}

export default MobileNav
