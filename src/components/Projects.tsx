'use client'
import Link from 'next/link'
import React from 'react'
import { ExternalLink, Github } from 'lucide-react';
import projects from "@/data/projects.json"
import { motion } from 'framer-motion';
import VideoPlayer from './VideoPlayer';
interface Projects {
  "id": number,
  "name": string,
  "desc": string,
  "tags": Array<string>,
  "Link": string,
  "image": string,
  "gitLink": string,
  "videoSrc": string
}
function Projects() {
  return (
    <section id='projects' className='w-screen  bg-[#101010]  pb-24  md:pb-28 pt-20  '>
      <motion.div initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.7,
          ease: "easeInOut",
        }}>
        <div className=' flex px-5 justify-center items-center flex-col pb-5 sm:pb-7 lg:pb-9'>
          <span className=" font-customFont text-3xl lg:text-5xl text-center text-gray-200 xl:text-6xl font-bold mb-7">FEATURED PROJECTS</span>
          <div className="w-40 sm:w-60 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto "></div>
        </div>
        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto text-center">
          Here are some of my recent projects that showcase my skills and passion for development
        </p>
      </motion.div>
      <div>
        <div className="flex flex-col gap-10 space-y-7 mt-10 sm:mt-20 px-14 sm:px-32 px-50 md:px-48 lg:px-60  ">
          {projects.projects.map((project: Projects) => (
            <motion.div
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.0,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className={`flex items-center gap-10 max-[885px]:flex-col 
              ${project.id % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              key={project.id}
            >
              <div className="relative flex-[0.9] group">
                <VideoPlayer videoSrc={project.videoSrc} thumbnail={project.image} />
              </div>
              <div
                className={`flex-[1] ${project.id % 2 === 0 ? "text-right" : "text-left"
                  }`}
              >
                <p className="relative  text-xl  sm:text-2xl lg:text-3xl antialiased font-semibold mb-6">
                  {project.name}
                </p>
                <p
                  className="text-slate-300 text-sm sm:text-base lg:text-lg  antialiased"
                  dangerouslySetInnerHTML={{
                    __html: project?.desc,
                  }}
                />
                <div
                  className={`list-none flex items-center  flex-wrap font-mono antialiased gap-3 rounded-lg text-sm sm:text-base lg:text-lg ${project.id % 2 === 0 ? "justify-end" : "justify-start"
                    } mt-5`}
                >
                  {project.tags.map(
                    (tech: string, techIndex: number) => (
                      <li  key={techIndex} className=' border border-slate-800  py-[2px]  px-3  bg-gradient-to-r from-purple-500/20 to-blue-500/20  border-purple-500/30 text-purple-300 transition-transform hover:scale-110 cursor-context-menu ease-in delay-100 text-xs sm:text-sm rounded-full'>
                        {tech}
                      </li>
                    )
                  )}
                </div>
                <div
                  className={`flex items-center gap-5 sm:gap-10 mt-5 ${project.id % 2 === 0 ? "justify-end" : "justify-start"
                    }`}
                >
                  <Link href={project.Link} target="_blank">

                    <p className=" text-xs sm:text-sm antialiased  cursor-pointer flex items-center gap-2   text-purple-400 hover:text-white bg-transparent border border-purple-500 px-2 sm:px-3 py-2 rounded-[7px] transition-all duration-300 transform hover:scale-105">
                      Live Demo{" "}
                      <span>
                        <ExternalLink size={18} />
                      </span>
                    </p>
                  </Link>
                  <Link href={project.gitLink} target="_blank">
                    <p className="text-xs sm:text-sm antialiased flex items-center gap-2 hover:bg-gray-500 hover:text-white bg-transparent border border-gray-500/30 px-2 sm:px-3 py-2 rounded-[7px] transition-all duration-300 transform hover:scale-105">
                      GitHub{" "}
                      <span>
                        <Github size={18} />
                      </span>

                    </p>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


    </section>
  )
}

export default Projects
