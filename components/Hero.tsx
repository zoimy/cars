"use client"
import React from 'react'
import CustomButton from './CustomButton'
import Image  from 'next/image'
import '../app/global.css'

const Hero = () => {
    const handleScroll = () => {
			console.log('scroll');
			
    }

  return (
    <div className='hero'>
        <div className=' flex-1 pt-36'>
                <h1 className='hero__title'>
                    Find, book, or rent a car - quickly and easily!
                </h1>

                <p className='hero__subtitle'>
                    Streamline your car rental experience with  our booking procces.
                </p>

            <CustomButton
						btnType='button'
            title='Explore cars'
            containerStyles='bg-primary-blue text-white rounded-full mt-10'
            handleClick={handleScroll}
            />
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src='/hero.png' alt='hero' fill className=' object-contain'/>

                <div className='hero__image-overlay' />
            </div>
        </div>
        </div>
  )
}

export default Hero