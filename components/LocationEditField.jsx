import React from 'react';
import Image from 'next/image';

import LocationVector from '../assets/locationVector.png';
import AddVector from '../assets/addVector.png';
import ErrorOutline from '../assets/ErrorOutline.png';


const LocationEditField = () => {
  return (
    <div className='w-[243px] absolute top-0 right-0 lg:block hidden'>
        <div className='flex items-center border-b border-solid border-[#B8B8B8] pb-3 mb-8'>
            <Image
                src={LocationVector}
                alt="/"
                width={10.5}
                height={15}
            />
            <input 
                type="text" 
                placeholder='Noida, India' 
                className='w-full h-full font-normal flex-1 outline-0 border-none bg-white text-sm px-3 text-[#000000] placeholder:text-[#000000]'
            />
            <Image
                src={AddVector}
                alt="/"
                width={15}
                height={15}
                className='cursor-pointer'
            />
        </div>

        <div className="flex items-start">
            <Image
                src={ErrorOutline}
                alt="/"
                width={13.33}
                height={13.33}
                className='mt-[2.5px]'
            />
            <p className="ml-2 text-black opacity-50 font-normal text-xs">
                Your location will help us serve better and extend a personalised experience.
            </p>
        </div>
    </div>
  )
}

export default LocationEditField