"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { TypeAnimation } from "react-type-animation";
import { saveAs } from 'file-saver';
function HomeComp() {
    const handleDownload = () => {
        let dwURL = '/assets/CV.pdf'
        saveAs(dwURL, 'CV');
    }
    return (
        <motion.div id='home' initial={{ opacity: 0.0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.1,
                duration: 0.7,
                ease: "easeInOut",
            }} className='pl-14  md:pl-32 lg:px-20 w-screen h-svh flex justify-center items-center pt-32 '>
            <div className=' flex flex-col  justify-center border-l-2 border-gray-500  '>
                <span className='h-[.1rem]  w-[10%] bg-gray-500'></span>
                <div className='pl-10 md:pl-16 py-14'>
                    <h1 className="heading antialiased">Hello I&apos;m,</h1>
                    <TypeAnimation className='heading antialiased'
                        sequence={[
                            "Mriganka Sarma ",
                            1000,
                            "Web Developer ",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                    <p className='text-left w-[70%] text-gray-300 pt-5 lg:pt-0 text-wrap antialiased text-sm lg:text-lg max-w-[50rem upp'>Hello myself, Mriganka Sarma: Versatile full-stack developer proficient in front-end and back-end technologies.</p>
                    <div className='flex pt-8  space-x-5'>
                        <Link href={'mailto:mrigankasarma222@gmail.com'} target='_blank' className='button' >
                            <span className="buttonContent">Hire Me</span>
                        </Link>

                        <Link href={'/'} onClick={handleDownload} className='button border border-[rgb(117, 3, 117)]'  >
                            <span className='buttonContent'>Download CV</span>
                        </Link>
                    </div>
                </div>
                <span className='h-[.1rem] w-[10%] bg-gray-500'></span>
            </div>
            <div className="image hidden lg:flex   ">
                <Image src={'/assets/profile/me2.png'} className='photo rounded-full ' height={400} width={400} alt='My image'></Image>
            </div>

        </motion.div>
    )
}

export default HomeComp
