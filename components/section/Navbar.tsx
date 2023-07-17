import React from 'react'
import Menu from '../shared/Menu'
import { SearchIcon, ShoppingCart, ShoppingCartIcon } from 'lucide-react';
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
    <div className='flex items-center justify-between h-20 px-8'>
        <Image src={"/logo.webp"} alt='logo' width={120} height={120} />
       <div className=''>
        <Menu />
    </div>
    <div className='flex gap-1 px-3 bg-white border border-black rounded-lg'>
        <SearchIcon />
        <input
        type='text'
        placeholder='What you are looking for'
        className='outline-none' />
    </div>
    <div className="flex p-2 bg-gray-300 rounded-full right-10">
        <ShoppingCartIcon className="relative colour-white" />
        <span className="absolute top-1 right-10 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
          0
        </span>
      </div>
    </div>
    </nav>
    
  )
}

export default Navbar