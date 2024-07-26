"use client"
import React from 'react'
import { ArrowDownLeft, Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from "react-scroll"
function Connect() {
    return (
        <section id='connect' className=' pt-52 pb-40 px-60'>
            <motion.div initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }} className=' font-customFont space-y-7  flex flex-col items-center text-gray-200 text-8xl font-extrabold mb-4 uppercase text-wrap'>
                <span className="font-customFont ">Interested in </span>
                <span className='font-customFont'>
                    working with me
                </span>
                <div className='flex justify-center items-center'>
                    <span className='font-customFont border-b-2 border-gray-400'>
                        let&apos;s talk
                    </span>
                    <ScrollLink to='talk' duration={50}>
                        <ArrowDownLeft size={100} />
                    </ScrollLink>
                </div>
            </motion.div>
            <motion.div id='talk' initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }} className='flex justify-between items-center pt-32 gap-x-10 '>
                <div className='flex flex-col max-w-[50%]  gap-y-7'>
                    <h2 className='text-5xl text-gray-300 antialiased'>Let&apos;s Connect</h2>
                    <p className=' antialiased text-lg text-wrap text-gray-400  w-[70%]'>I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
                    <div className=' flex text-gray-300  gap-x-5'>
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
                <div className=' w-[50%]'>
                    <form className="flex flex-col">
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="text-white block mb-2 text-base font-medium"
                            >
                                Your email
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-base rounded-xl block w-full p-2.5"
                                placeholder="jacob@google.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="subject"
                                className="text-white block text-base mb-2 font-medium"
                            >
                                Subject
                            </label>
                            <input
                                name="subject"
                                type="text"
                                id="subject"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-base rounded-xl block w-full p-2.5"
                                placeholder="Just saying hi"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="text-white block text-base mb-2 font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-base rounded-xl block w-full p-2.5"
                                placeholder="Let's talk about..."
                            />
                        </div>
                        <button
                            type="submit"
                            className=" bg-purple-900 hover:bg-purple-800  transition-all text-white font-medium py-4 px-5 rounded-xl w-full"
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
