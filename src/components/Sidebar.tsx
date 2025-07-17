"use client"
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Image from 'next/image'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignRight, HomeIcon } from 'lucide-react'
import Link from 'next/link'
function Sidebar() {
  return (
    <Sheet >
      <SheetTrigger className='scale_logo'>
        <div className='  border  border-gray-400 antialiased p-[.3rem] rounded-full'>
          <AlignRight size={25} className=' text-gray-400 antialiased ' />
        </div>
      </SheetTrigger>
      <SheetContent side={'left'} className='bg-[#0b0909]/95 rounded-r-[1rem] border-r-gray-700 '  >
        <SheetHeader >
          <SheetTitle className='flex justify-center pt-14'>
            <ScrollLink to='home' smooth={true} duration={65} >
              <SheetClose>
                <Image src={'/assets/logos/nLogo.png'} priority={true} alt='logo' height={80} width={80}></Image>
              </SheetClose>
            </ScrollLink>
          </SheetTitle>
        </SheetHeader>
        <div className='flex items-center flex-col justify-center  space-y-7 mt-14'>

          <Link className='bg-[#1c1c1c] rounded-xl w-full text-center px-6 py-4 border-x-2 border-gray-600 hover:scale-105 transition-transform delay-100 ' href={'#home'}><SheetClose className='w-full'> <span className='text-lg'>Home</span> </SheetClose></Link>
          <Link className='bg-[#1c1c1c] rounded-xl w-full text-center px-6 py-4 border-x-2 border-gray-600 hover:scale-105 transition-transform delay-100 ' href={'#about'}><SheetClose className='w-full'><span className='text-lg'>About</span></SheetClose></Link>
          <Link className='bg-[#1c1c1c] rounded-xl w-full text-center px-6 py-4 border-x-2 border-gray-600 hover:scale-105 transition-transform delay-100 ' href={'#projects'}><SheetClose className='w-full'><span className='text-lg'>Projects</span></SheetClose></Link>
          <Link className='bg-[#1c1c1c] rounded-xl w-full text-center px-6 py-4 border-x-2 border-gray-600 hover:scale-105 transition-transform delay-100 ' href={'#connect'}><SheetClose className='w-full'><span className='text-lg'>Connect</span></SheetClose></Link>
        </div>
        {/* <SheetFooter><span className='text-lg'></span>
        <div className='flex w-full items-center justify-center'>
          <Link href={'/'} className='bg-[#1c1c1c] rounded-full px-6 py-2.5 border border-gray-300 hover:scale-110 transition-transform'>
            Connect me
          </Link>
        </div>
      </SheetFooter> */}
      </SheetContent>
    </Sheet>

  )
}
export default Sidebar
