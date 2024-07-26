"use client"
import React from 'react'
import Image from 'next/image'
import { MoveDownLeft } from 'lucide-react'
import { MoveDownRight } from 'lucide-react'
import techSkills from "@/data/skills.json"
import { motion } from 'framer-motion'
interface Skills {
    id: number,
    name: string,
    image: string,
}
function About() {
    return (
        <div id="about" >
            <motion.div initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }} className="mt-4  pt-52 w-screen text-left flex h-full justify-evenly items-center">
                <Image className='rounded' src={'/assets/about-image.png'} alt='about image' height={500} width={500}></Image>
                <div className='max-w-[35rem] border-l-2 px-10 border-r-2 border-gray-500'>
                    <div className='flex space-x-1'>
                        <span className=" font-customFont  text-gray-200 text-6xl font-bold mb-7">ABOUT ME</span>
                        <MoveDownLeft size={55} />
                    </div>
                    <p className="text-base lg:text-lg antialiased">
                        I&apos;m a full stack web developer with a passion for creating
                        interactive and responsive web applications. I have experience
                        working with <span className=' text-[#64ffda]'>  JavaScript, React, Redux, Node.js, Express, PostgreSQL,
                            mongoDB, Next.js, HTML, CSS, and Git</span>.
                        <span className='py-3 inline-block'>
                            Currently I&apos;m studying in <span className=' text-[#64ffda]'> Cotton University  </span>pursuing <span className=' text-[#64ffda]'> BCA</span> degree.
                        </span>
                        I am a quick learner and I am always
                        looking to expand my knowledge and skill set. I am a team player and
                        I am excited to work with others to create amazing applications.
                    </p>
                </div>
            </motion.div>
            <div className='skills w-screen pt-52 '>
                <motion.div initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }} className='flex px-60'>
                    <span className=" font-customFont  text-gray-200 text-6xl font-bold mb-4">SKILLS</span>
                    <MoveDownLeft size={55} />
                </motion.div>
                <div className='flex flex-wrap px-60 pt-7 justify-center items-center gap-6 '>
                    {
                        techSkills.techSkills.map((skills: Skills) => {
                            return (
                                <motion.div initial={{ opacity: 0.0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.3,
                                        duration: 0.8,
                                        ease: "easeInOut",
                                    }} className=' h-24 w-24 p-2 rounded-xl border shadow shadow-white flex justify-center items-center bg-slate-300 border-gray-700' key={skills.id}>
                                    <Image src={skills.image} alt={skills.name} height={100} width={100}></Image>
                                </motion.div>
                            )

                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default About
