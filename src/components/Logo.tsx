import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='flex'>
        <span className='hover:rotate-45 ease-in-out duration-300'><Image src={'/assets/logo.png'} alt={'logo'} height={50} width={50} /></span> <span className="mt-2 pl-2 firaCode logo ">Games Heaven</span> 
    </div>
  )
}

export default Logo