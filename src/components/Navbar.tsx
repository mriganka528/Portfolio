"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Image from 'next/image'

function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 90) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.div variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" },
        }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }} className='z-50 fixed max-[768px]:hidden rounded-b-[1rem]  bg-[#0b0909]/95  w-svw py-4  sm:px-5 md:px-14 lg:px-20 text-base flex justify-between items-center'>
            <div>
                <Image src={'/assets/logos/nLogo.png'} alt='Logo' height={80} width={80}/>
            </div>
            <div className='flex items-center justify-center space-x-5'>

                <Link className='bg-[#1c1c1c] rounded-full text-sm lg:text-base px-4 md:px-8 py-2.5 hover:scale-110 transition-transform delay-100 ' href={'#home'}>Home</Link>
                <Link className='bg-[#1c1c1c] rounded-full text-sm lg:text-base px-4 md:px-8 py-2.5 hover:scale-110 transition-transform delay-100 ' href={'#about'}>About</Link>
                <Link className='bg-[#1c1c1c] rounded-full text-sm lg:text-base px-4 md:px-8 py-2.5 hover:scale-110 transition-transform delay-100 ' href={'#projects'}>Projects</Link>
            </div>
            <div className='flex items-center justify-center'>
               <Link href={'#connect'} className='bg-[#1c1c1c] rounded-full px-4 lg:px-6 py-2.5 border border-gray-300 hover:scale-110 transition-transform delay-100'>
                     Connect me
               </Link>
            </div>
        </motion.div>

    )
}

export default Navbar
