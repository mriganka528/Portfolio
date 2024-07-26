'use client'
import { MoveDownLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { ExternalLink, Github } from 'lucide-react';
import projects from "@/data/projects.json"
import { motion } from 'framer-motion';
import { ArrowDownLeft } from 'lucide-react';
import Image from 'next/image';
interface Projects {
  "id": number,
  "name": string,
  "desc": string,
  "tags": Array<string>,
  "Link": string,
  "image": string,
  "gitLink": string

}
function Projects() {
  return (
    <section id='projects' className='  w-screen px-60'>
      <motion.div initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }} className='pt-52 pb-7 '>
        <div className='flex  justify-end'>
          <span className=" font-customFont  text-gray-200 text-6xl font-bold mb-4">PROJECTS</span>
          <MoveDownLeft size={55} />
        </div>
      </motion.div>
      <div>
        <div className="flex flex-col gap-10 space-y-6 ">
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
                <Image
                  src={project.image}
                  alt={project.name}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover rounded-[4px]"
                />
                <button
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50 text-white p-2 rounded-md"
                >
                  Watch Video
                </button>
              </div>
              <div
                className={`flex-[1] ${project.id % 2 === 0 ? "text-right" : "text-left"
                  }`}
              >
                <p className="relative text-3xl antialiased font-semibold mb-6">
                  {project.name}
                </p>
                <p
                  className="text-slate-300 text-lg antialiased"
                  dangerouslySetInnerHTML={{
                    __html: project?.desc,
                  }}
                />
                <div
                  className={`list-none flex items-center  flex-wrap font-mono antialiased gap-3 rounded-lg text-base ${project.id % 2 === 0 ? "justify-end" : "justify-start"
                    } mt-5`}
                >
                  {project.tags.map(
                    (tech: string, techIndex: number) => (
                      <li key={techIndex} style={{ wordSpacing: "-3px", color: "#64ffda" }}>
                        {tech}
                      </li>
                    )
                  )}
                </div>
                <div
                  className={`flex items-center gap-10 mt-5 ${project.id % 2 === 0 ? "justify-end" : "justify-start"
                    }`}
                >
                  <Link href={project.Link} target="_blank">
                    <p className="flex items-center text-base antialiased gap-2 cursor-pointer">
                      Live Demo{" "}
                      <span>
                        <ExternalLink size={18} />
                      </span>
                    </p>
                  </Link>
                  <Link href={project.gitLink} target="_blank">
                    <p className="flex items-center gap-2 cursor-pointer text-base antialiased">
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
