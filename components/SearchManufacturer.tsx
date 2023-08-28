"use client"
import { ISearchManufacturer } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import '../app/global.css'


const SearchManufacturer = ({manufacturer, setManufacturer}: ISearchManufacturer) => {
  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className='relative w-full visible '>
                <Combobox.Button className='relative top-[-5px]'>
                    <Image src='/car-logo.svg' width={20} height={20} className='ml-4' alt='car logo'/>
                </Combobox.Button>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer