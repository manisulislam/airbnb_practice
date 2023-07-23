'use client';
import React, { useCallback, useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
const UserMenu = () => {
    const [isOpen, setIsOpen]= useState(false);
    const toggleOpen= useCallback(()=>{
        setIsOpen((value)=>!value);
    },[])
  return (
    <div className='relative'>
        <div className='flex flex-row items-center gap-3'>
        <div onClick={()=>{}} className='md: block text-sm font-semibold py-3 px-4 rounded-full transition cursor-pointer hover:bg-gray-100'>
        Airbnb your home
        </div>
        <div onClick={toggleOpen} className=' p-4 md: px-2 md:py-1 flex flex-row items-center gap-3 rounded-full hover:shadow-md border-[1px] bg-neutral-100 cursor-pointer transition'>
            <AiOutlineMenu></AiOutlineMenu>
        </div>
        <div className='md:block'>
            <Avatar></Avatar>
        </div>
        </div>
        {isOpen && (
            <div className='absolute rounded-xl shadow-md w-[40vw] md:3/4 overflow-hidden right-0 top-12 text-sm bg-white'>
                <div className='flex flex-col cursor-pointer'>
                    <>
                    <MenuItem
                    onClick={()=>{}}
                    label="LogIn"
                    ></MenuItem>
                    <MenuItem
                    onClick={()=>{}}
                    label="SignUp"
                    ></MenuItem>
                    </>
                </div>
            </div>
        )}
    </div>
  )
}

export default UserMenu