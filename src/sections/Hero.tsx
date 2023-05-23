import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-2 hero-bg min-h-[400px] mt-10">
        <div className='pl-10 pr-10 mt-20 mb-20 firaCode'>
          <div className="hero-text mt-20">
            Games Heaven  
          </div>        
          <div className="hero-subtext">
            Unleash the Thrill: Games Galore at Unbeatable Prices!
          </div>        
          <div className="hero-subtext mt-4">
            <b>Chat & Pay</b>: 
            Boost your confidence! Engage in direct conversation with our agents before payment. Clear doubts, address concerns, and evaluate our stellar service. Say goodbye to uncertainty and hello to transparency. Enhance your shopping experience, make informed decisions, and enjoy ultimate satisfaction.
          </div>
        </div>
        <div className='relative hidden sm:flex'>
            {/* <Image src={'/assets/hero.png'} alt={'hero-image'} className='hero-image' fill /> */}
        </div>
    </div>
  )
}

export default Hero