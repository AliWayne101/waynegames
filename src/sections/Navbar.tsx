import Logo from '@/components/Logo'
import React, { useState } from 'react'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { BsArrowLeft } from 'react-icons/bs'
import { FaRegUserCircle } from 'react-icons/fa'
import Link from 'next/link'

const Navbar = () => {

  const [isSearching, setIsSearching] = useState(false);
  return (
    <>
      <div className="w-full top-0 sticky bg-secondary justify-between p-5 z-20 navbar flex sm:hidden">
        {
          isSearching === false ? (
            <>
              <div><Logo /></div>
              <div className='mt-1 flex'>
                <span onClick={() => setIsSearching(true)}><RxMagnifyingGlass size={32} /></span>
                <span className="ml-2">
                  <Link href={'/signin'}><FaRegUserCircle size={32} /></Link>
                </span>
              </div>
            </>
          ) : (
            <div className='flex align-middle'>
              <span className='mt-2 mr-2' onClick={() => setIsSearching(false)}><BsArrowLeft size={24} /></span>
              <div className="border border-1 flex w-full rounded">
                <input type="text" name="" id="" className='text-white p-2 bg-transparent outline-none w-full' placeholder='Search..' />
                <span className='mt-1' onClick={() => setIsSearching(true)}><RxMagnifyingGlass size={32} /></span>
              </div>
            </div>
          )
        }
      </div>

      <div className="w-full top-0 sticky bg-secondary justify-between p-5 z-20 navbar hidden sm:flex">
        <div>
          <Logo />
        </div>
        <div className="mt-1 flex">
          <div className="border border-1 flex w-full rounded">
            <input type="text" name="" id="" className='text-white p-2 bg-transparent outline-none w-full' placeholder='Search..' />
            <span className='mt-1' onClick={() => setIsSearching(true)}><RxMagnifyingGlass size={32} /></span>
          </div>
            <span className="mt-1 ml-2">
              <Link href={'/signin'}><FaRegUserCircle size={32} /></Link>
            </span>
        </div>
      </div>
    </>
  )
}

export default Navbar