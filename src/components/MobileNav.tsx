"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Sidebar from './Sidebar'
function MobileNav() {
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
            transition={{ duration: 0.35, ease: "easeInOut" }} className=' fixed z-50  min-[768px]:hidden  border-l border-r border-b rounded border-gray-700 w-screen  flex justify-between items-center text-base backdrop-blur-sm px-5 py-[1.2rem]'>
            <div>
                <ScrollLink to='home' smooth={true} duration={65}>
                    <Image src={'/assets/logos/Logo.png'} height={45} width={55} alt='Logo'></Image>
                </ScrollLink>
            </div>
            <Sidebar />
        </motion.div>
    )
}

export default MobileNav
