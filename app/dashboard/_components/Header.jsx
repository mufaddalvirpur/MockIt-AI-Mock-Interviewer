"use client"
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {

  const path = usePathname();
  useEffect(()=>{
    console.log(path)
  },[])

  return (
    <div className='flex p-3 items-center justify-between bg-secoundary shadow-md'>
      <img src="/logo.png" width={120} height={100} alt="logo" />
      <ul className='hidden md:flex gap-6'>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path=='/dashboard'&&'text-primary font-bold'}
          `}>Dashboard</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path=='/dashboard/questions'&&'text-primary font-bold'}
          `}>Support</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path=='/dashboard/upgrade'&&'text-primary font-bold'}
          `}>How It Works?</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path=='/dashboard/how'&&'text-primary font-bold'}
          `}>About Us</li>
      </ul>
      <UserButton/>
    </div>
  )
}

export default Header