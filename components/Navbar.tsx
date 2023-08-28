import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton  from './CustomButton'


const Navbar = () => {
	return (
		<header className='z-10 w-full absolute'>
			<nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 py-4 px-6'>
				<Link href='/' className='flex justify-center items-center'>
					<Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain'/>
				</Link>

				<CustomButton btnType='button' title='Sign in' containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'/>
			</nav>
		</header>
	)
}

export default Navbar