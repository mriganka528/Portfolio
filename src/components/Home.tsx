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
            }} className='w-screen h-svh flex justify-center items-center pt-32 bg-gradient-to-r from-blue-200/5 via-transparent to-blue-400/5'>

            <div className=' flex flex-col  justify-center items-center  '>
                <div className=' flex- justify-center items-center'>
                    <h1 className="text-5xl md:text-7xl text-center font-bold text-white mb-6 animate-fade-in">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Mriganka Sarma</span>
                    </h1>
                    <p className="text-xl text-center md:text-2xl text-gray-300 mb-8  animate-fade-in-delay">
                        Full Stack Developer from India
                    </p>
                    <p className="text-lg text-center  text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
                       I craft elegant, user-centric digital experiences that are both visually engaging and functionally impactful.
                    </p>
                </div>
                <div className='flex flex-col w-full sm:flex-row justify-center items-center  space-y-5  sm:space-y-0 sm:space-x-5 mt-8 sm:mt-5'>
                    <Link href={'mailto:mrigankasarma222@gmail.com'} target='_blank' className=' w-[90%] sm:w-auto rounded-[8px] bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-2  px-8  flex justify-center items-center text-lg font-medium transition-all duration-300 transform hover:scale-105' >
                        Hire Me
                    </Link>

                    <Link href={'/'} onClick={handleDownload} className='w-[90%] sm:w-auto border-2 bg-gray-100 rounded-[8px] border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white flex justify-center items-center px-8 py-2 text-lg font-medium transition-all duration-300 transform hover:scale-105'  >
                        Download CV
                    </Link>

                </div>
            </div>

        </motion.div>
    )
}

export default HomeComp
