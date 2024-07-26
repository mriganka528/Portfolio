"use client"
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Image from 'next/image'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignRight } from 'lucide-react'
function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className='border border-gray-400 antialiased p-[.3rem] rounded-full'>
          <AlignRight size={25} className=' text-gray-400 antialiased ' />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader >
          <SheetTitle className='flex justify-center pt-14'>
            <ScrollLink to='home' >
              <Image src={'/assets/newLogo.png'} alt='logo' height={40} width={40}></Image>
            </ScrollLink>
          </SheetTitle>
        </SheetHeader>
        <div className='flex justify-center'>
          <ul className="list-none flex flex-col text-center gap-y-9 pt-10 hover:text-white ">
            <li className=' hover:text-[#bbc1c0] logo_jump' >
              <SheetClose>
                <ScrollLink to="home" smooth={true} duration={60} className='cursor-pointer'>
                  HOME
                </ScrollLink>
              </SheetClose>
            </li>
            <li className=' hover:text-[#bbc1c0] logo_jump' >
              <ScrollLink to="about" smooth={true} duration={70} className='cursor-pointer'>
                ABOUT
              </ScrollLink>
            </li>
            <li className=' hover:text-[#bbc1c0] logo_jump' >
              <ScrollLink to="projects" smooth={true} duration={60} className='cursor-pointer'>
                PROJECTS
              </ScrollLink>
            </li>
            <li className=' hover:text-[#bbc1c0] logo_jump' >
              <ScrollLink to="connect" smooth={true} duration={70} className='cursor-pointer'>
                CONNECT
              </ScrollLink>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>

  )
}

export default Sidebar
