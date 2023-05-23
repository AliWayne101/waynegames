import { WebDetails } from '@/Details'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="mt-10 text-center justify-center w-full bg-secondary p-5 firaCode">
        Created and Hosted by&nbsp;<Link className='link' target='_blank' href={WebDetails.devLink}>WayneDev</Link> <br />
        Copyright © 2023 {WebDetails.websiteName}. All rights reserved.
    </div>
  )
}

export default Footer