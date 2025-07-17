"use client"
import React, { useState } from 'react'
import {Instagram, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
interface DATA {
    email: HTMLFormElement,
    subject: HTMLFormElement,
    message: HTMLFormElement,
}
function Connect() {
    const [emailSubmited, setEmailSubmitted] = useState(false);
    const [Loading, setLoading] = useState(false);
    const handleSubmit = async (e: any) => {
        setLoading(true)
        e.preventDefault();
        const data: DATA = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONData = JSON.stringify(data);
        const endPoint = '/api/send';
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONData,
        }

        const response = await fetch(endPoint, options);
        const resData = await JSON.stringify(response);
        if (response.status === 200) {
            console.log("Message sent. ", resData);
            setEmailSubmitted(true);
            setLoading(false);
        }
    }
    return (
        <section id='connect' className='pt-24 pb-40'>
            <motion.div initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                    duration: 0.7,
                    ease: "easeInOut",
                }} className=' font-customFont flex flex-col justify-center items-center text-gray-200 text-5xl md:text-6xl xl:text-7xl font-extrabold mb-4 uppercase text-wrap'>
                <div className=' flex flex-col justify-center items-center  pb-5 sm:pb-7 lg:pb-10'>
                    <span className=" font-customFont text-3xl lg:text-5xl text-center text-gray-200 xl:text-6xl font-bold mb-7">GET IN TOUCH</span>
                    <div className="w-40 sm:w-60 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto "></div>
                </div>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto text-center">
                    Ready to start your next project? Let's work together to create something amazing.
                </p>
            </motion.div>
            <motion.div id='talk' initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }} className='flex flex-col  md:flex-row  px-14 sm:px-32  md:px-48 lg:px-60 justify-center items-center sm:items-start pt-10 sm:pt-20 gap-x-10  '>

                <div className='flex flex-col text-center sm:mt-2  md:text-left max-w-[100%] gap-y-5 lg:gap-y-7'>
                    <h3 className="text-2xl font-bold  ">Let&apos;s Connect</h3>
                    <p className=' antialiased text-sm sm:text-base lg:text-lg text-wrap px-3 md:px-0  w-[100%] md:w-[80%]'>I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, feel free to reach out!</p>
                    
                    <div className=' flex text-gray-300 justify-center md:justify-start  gap-x-3 md:gap-x-5'>
                        <Link href={'mailto:mrigankasarma222@gmail.com'} target='_blank' className='transition-transform  hover:-translate-y-1 ease-in w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-[5px] flex items-center justify-center'>

                            <Mail size={19} className=' antialiased' />
                        </Link>
                        <Link href={'https://www.linkedin.com/in/mriganka-sarma-987317231'} target='_blank' className='transition-transform  hover:-translate-y-1 ease-in w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-[5px] flex items-center justify-center'>
                            <Linkedin size={19} className=' antialiased' />

                        </Link>
                       
                        <Link href={'https://x.com/Mrigank37161276'} target='_blank' className='transition-transform  hover:-translate-y-1 ease-in w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-[5px] flex items-center justify-center'>

                            <Twitter size={19} className=' antialiased' />
                        </Link>
                        <Link href={'https://www.instagram.com/.mriganka._?igsh=MTlzZ2ZxaDFuZm10dQ=='} target='_blank' className='transition-transform  hover:-translate-y-1 ease-in w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-[5px] flex items-center justify-center'>

                            <Instagram size={19} className=' antialiased' />
                        </Link>
                    </div>
                </div>
                <div className='w-[100%]  pt-16 md:pt-0  '>
                    {
                        Loading ? (
                            < p className='flex justify-center'><span className="loader"></span> </p>)
                            : (
                                emailSubmited ? (<p className="text-green-500 text-center text-md mt-2">
                                    Email sent successfully!
                                </p>) : (
                                    <form className="flex flex-col" onSubmit={handleSubmit}>
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
                                )
                            )

                    }
                </div>
            </motion.div>
        </section>
    )
}

export default Connect
