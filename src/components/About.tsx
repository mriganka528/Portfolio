"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function About() {
    return (
        <div className='px-10  w-screen flex justify-evenly  items-center pt-48'>
            <div className=' flex flex-col justify-center  '>
                <h1 className="heading  ">Hello I'm,</h1>
                <h1 className='Type'> Mriganka Sarma |</h1>
                <p className='text-left text-gray-400 text-wrap antialiased text-lg max-w-[50rem]'>Hello myself, Mriganka Sarma: Versatile full-stack developer proficient in front-end and back-end technologies.</p>
                <div className='flex pt-3 space-x-5'>
                    <Link href={'/'} className='button' >
                        <span className="buttonContent">Hire</span>
                    </Link>

                    <Link href={'/'} className='button border border-[rgb(117, 3, 117)]'  >
                        <span className='buttonContent'>Download CV</span>
                    </Link>
                </div>
            </div>
            <div className="image ">
                <Image src={'/assets/myImage.jpg'} className='photo rounded-full ' height={360} width={360} alt='My image'></Image>
            </div>
        </div>
    )
}

export default About
