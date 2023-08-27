import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  return (
    <div className='hero'>Her
        <div className=' flex-1 pt-36 px-0'>
            <h1 className='hero__title'>
                Find, book, or rent a car - quickly and easily!
            </h1>

            <p className='hero__subtitle'>
                Streamline your car rental experience with  our booking procces.
            </p>

            <CustomButton/>
        </div>
        </div>
  )
}

export default Hero