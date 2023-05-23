import { EntrySchema, WebDetails } from '@/Details'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

const Entry = ({data, index}: {data: EntrySchema, index: number}) => {
    return (
        <div className='w-full mb-10 bg-secondary pb-5 relative' key={index}>
            <span className="absolute top-6 right-0 bg-red-500 text-white px-2 py-1 rounded rotate-45 z-10">
                {
                    data.quantity === 0
                        ? (`Sold Out`)
                        : (`${(data.originalPrice - data.price) / data.originalPrice * 100}% Off`)
                }
            </span>
            <div className="m-10 relative">
                <Image src={data.image} alt={data.name} className='entryImage hover:scale-105 rounded duration-300' fill />
            </div>
            <div className="text-center">Title: <span className="link">{data.name}</span></div>
            <div className="text-center">Platform: <span className="link">{data.platform}</span></div>
            <div className="text-center">Price: <span className="link">{data.price} PKR</span></div>
            <div className="text-center justify-center mt-4 block sm:flex">
                <div className='pt-0 sm:pt-2'>
                    Chat & Pay:
                </div>
                <div className="text-center justify-center flex align-middle">
                    <Link href={`https://wa.me/${WebDetails.whatsappContact}`} target='_blank' title='Whatsapp' className='text-center justify-center inline-block align-middle'>
                        <FaWhatsapp size={40} className='color-theme ml-2' />
                    </Link>
                    <Link href={`https://instagram.com/${WebDetails.instagramContact}`} target='_blank' title='Whatsapp' className='text-center justify-center inline-block align-middle'>
                        <FaInstagram size={40} className='color-theme ml-2' />
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default Entry