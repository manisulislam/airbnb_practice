'use client';
import React from 'react'
import{BiSearch} from 'react-icons/bi'

const Search = () => {
  return (
    <div className='border-[1px] rounded-full cursor-pointer w-full md:w-auto shadow-sm py-2 hover: shadow-md transition'>
        <div className='flex flex-row items-center justify-between'>
            <div className='text-sm font-semibold px-6'>
                Anywhere
            </div>
            <div className=' sm: block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
            Any Week</div>
            <div className='flex flex-row items-center pl-6 pr-2 text-sm text-gray-500 gap-3'>
                <div className='sm: block'>Add guests</div>
                <div className='p-2 bg-rose-500 text-white rounded-full'><BiSearch size={18}></BiSearch></div>
            </div>

        </div>
    </div>
  )
}

export default Search