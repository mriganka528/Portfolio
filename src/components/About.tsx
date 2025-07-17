"use client"
import React from 'react'
import Image from 'next/image'
import { Award, Code2, Zap } from 'lucide-react'
import techSkills from "@/data/skills.json"
import { motion } from 'framer-motion'
interface Skills {
    id: number,
    name: string,
    image: string,
}
function About() {
    return (
        <section id="about" className="py-20 ">
            <motion.div initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                    duration: 0.7,
                    ease: "easeInOut",
                }} className="container mx-auto px-6">
                <div className="sm:max-w-4xl md:max-w-6xl mx-auto ">
                    <div className="text-center mb-16">
                        <div className=' flex flex-col justify-center items-center  pb-5 sm:pb-7 lg:pb-10'>
                            <span className=" font-customFont text-3xl lg:text-5xl text-center text-gray-200 xl:text-6xl font-bold mb-7">ABOUT ME</span>
                            <div className="w-24 sm:w-48 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto "></div>
                        </div>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto text-center">
                            Passionate developer crafting digital experiences that bridge creativity and technology
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-sm sm:text-base lg:text-lg text-center antialiased leading-relaxed">
                                I&apos;m a full stack web developer with a passion for creating
                                interactive and responsive web applications. I have experience
                                working with <span className=' bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400'>  JavaScript, React, Redux, Node.js, Express, PostgreSQL,
                                    mongoDB, Next.js, HTML, CSS, and Git</span>.
                                <span className='py-3 inline-block'>
                                    Currently I&apos;m studying in <span className=' bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400'> Cotton University  </span>pursuing <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400'> BCA</span> degree.
                                </span>
                                I am a quick learner and I am always
                                looking to expand my knowledge and skill set. I am a team player and
                                I am excited to work with others to create amazing applications.
                            </p>

                        </div>

                        <div className="relative">
                            <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl overflow-hidden">
                                <img src="/assets/profile/Profile.jpg" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full"></div>
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-16 sm:mt-32 px-5 sm:px-20">
                    <h3 className="text-2xl sm:text-3xl font-bold  mb-12">What I Bring to the Table</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Code2 className="" size={28} />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">Clean Code</h4>
                            <p className="text-gray-400">
                                Writing maintainable, scalable, and efficient code that stands the test of time.
                            </p>
                        </div>
                        <div className="group">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Zap className="" size={28} />
                            </div>
                            <h4 className="text-xl font-bold  mb-4">Performance</h4>
                            <p className="text-gray-400">
                                Optimizing applications for speed, efficiency, and exceptional user experience.
                            </p>
                        </div>
                        <div className="group">
                            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Award className="" size={28} />
                            </div>
                            <h4 className="text-xl font-bold  mb-4">Quality</h4>
                            <p className="text-gray-400">
                                Delivering pixel-perfect designs with attention to detail and best practices.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-16 sm:mt-32 border-t border-gray-500  py-16 sm:py-24">
                    <div className=' flex flex-col justify-center items-center  pb-5 sm:pb-7 lg:pb-10'>
                        <span className=" font-customFont text-3xl lg:text-5xl text-center text-gray-200 xl:text-6xl font-bold mb-7">SKILLS & EXPERTISE</span>
                        <div className="w-24 sm:w-48 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto "></div>
                    </div>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto text-center">
                        A comprehensive toolkit of modern technologies and methodologies to bring your ideas to life
                    </p>
                    <div className='flex flex-wrap px-20 sm:px-32 md:px-60 pt-3 sm:pt-10 justify-center items-center gap-6 '>
                        {
                            techSkills.techSkills.map((skills: Skills) => {
                                return (
                                    <motion.div initial={{ opacity: 0.0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        whileHover={{ scale: 1.08 }}
                                        transition={{
                                            delay: 0.1,
                                            duration: 0.6,
                                            ease: "easeInOut",
                                        }} className=' h-12 w-12 sm:h-16 sm:w-16  md:h-20 md:w-20 lg:h-24 lg:w-24 p-2 rounded-xl border shadow shadow-white flex justify-center items-center bg-slate-300 border-gray-700  ' key={skills.id}>
                                        <Image src={skills.image} alt={skills.name} height={100} width={100}></Image>
                                    </motion.div>
                                )

                            })
                        }
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default About
