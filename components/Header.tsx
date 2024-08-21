import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "@/public/logo.png";
import IconButton from './IconButton';
import { Grip } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import Sidebar from './Sidebar';

function Header() {
  return (
    <header className='sticky top-0 flex justify-between gap-x-4 px-4 py-2.5 bg-white z-50 max-w-screen-2xl mx-auto'>
        <div className="flex items-centre space-x-2">
        <Sidebar/>
        <Link href={"/"} className='flex items-center space-x-1'>
        <Image src={logo} alt='Logo' className='w-10 h-10'/>
        <p className="text-xl text-neutral-500">Forms</p>
        </Link>
        </div>
        <div className="flex items-center md:justify-between md:flex-1 max-w-lg lg:max-w-4xl xl:max-w-5xl">
            <div className="flex items-centre">
                <IconButton Icon={Grip} className='mr-3'/>
                <UserButton>
                    <button >

                    </button>
                </UserButton>
            </div>
        </div>
    </header>
  )
}

export default Header