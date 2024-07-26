"use client"
import React from 'react'
import { ArrowDownLeft, Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from "react-scroll"
function Connect() {
    return (
        <section id='connect' className=' pt-52 pb-40'>
            <motion.div initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }} className=' font-customFont space-y-7  px-14 sm:px-32 px-50 md:px-48 lg:px-60  flex flex-col justify-center items-start lg:items-center text-gray-200 text-5xl md:text-6xl xl:text-7xl font-extrabold mb-4 uppercase text-wrap'>
                <span className="font-customFont ">Interested in </span>
                <span className='font-customFont'>
                    working with me
                </span>
                <div className='flex justify-center items-center'>
                    <span className='font-customFont border-b-2 text-nowrap border-gray-400'>
                        let&apos;s talk
                    </span>
                    <ScrollLink to='talk' duration={50}>
                        <ArrowDownLeft className='h-16 w-16 md:h-20 md:w-20 xl:h-28 xl:w-28' size={100} />
                    </ScrollLink>
                </div>
            </motion.div>
            <motion.div id='talk' initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }} className='flex flex-col  md:flex-row  px-14 sm:px-32 px-50 md:px-48 lg:px-60 justify-center  items-center pt-32 gap-x-10  '>

                <div className='flex flex-col text-center  md:text-left max-w-[100%] gap-y-5 lg:gap-y-7'>
                    <h2 className=' text-2xl sm:text-3xl lg:text-5xl xl:text-6xl  font-bold mb-0 xl:mb-5 text-gray-300 antialiased'>Let&apos;s Connect</h2>
                    <p className=' antialiased text-sm sm:text-base lg:text-lg text-wrap px-3 md:px-0  w-[100%] md:w-[80%]'>I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
                    <div className=' flex text-gray-300 justify-center md:justify-start  gap-x-3 md:gap-x-5'>
                        <Link href={'https://www.linkedin.com/in/mriganka-sarma-987317231'} target='_blank' className='logo_jump'>
                            <Linkedin size={30} className=' antialiased' />

                        </Link>
                        <Link href={'https://www.github.com/mriganka528'} target='_blank' className='logo_jump'>

                            <Github size={30} className=' antialiased' />
                        </Link>
                        <Link href={'https://x.com/Mrigank37161276'} target='_blank' className='logo_jump'>

                            <Twitter size={30} className=' antialiased' />
                        </Link>
                        <Link href={'https://www.instagram.com/.mriganka._?igsh=MTlzZ2ZxaDFuZm10dQ=='} target='_blank' className='logo_jump'>

                            <Instagram size={30} className=' antialiased' />
                        </Link>
                        <Link href={'mailto:mrigankasarma222@gmail.com'} target='_blank' className='logo_jump'>

                            <Mail size={30} className=' antialiased' />
                        </Link>
                    </div>
                </div>
                <div className='w-[100%]  pt-16 md:pt-0  '>
                    <form className="flex flex-col">
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="text-white block mb-2 text-sm sm:text-base  font-medium"
                            >
                                Your email
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm sm:text-base  rounded-xl block w-full p-2.5"
                                placeholder="jacob@google.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="subject"
                                className="text-white block text-sm sm:text-base  mb-2 font-medium "
                            >
                                Subject
                            </label>
                            <input
                                name="subject"
                                type="text"
                                id="subject"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm sm:text-base  rounded-xl block w-full p-2.5"
                                placeholder="Just saying hi"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="text-white block text-sm sm:text-base mb-2 font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm sm:text-base  rounded-xl block w-full p-2.5"
                                placeholder="Let's talk about..."
                            />
                        </div>
                        <button
                            type="submit"
                            className=" bg-purple-900 hover:bg-purple-800  text-sm sm:text-base  transition-all text-white font-medium py-4 px-5 rounded-xl w-full"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </motion.div>
        </section>
    )
}

export default Connect
