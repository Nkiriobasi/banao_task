import React from 'react';
import Image from 'next/image';
import BackArrow from '../assets/arrow_back.png';
import bg from '../public/Rectangle.png';


const Header = () => {
  return (
    <header 
      className='md:min-h-[440px] sm:min-h-[336px] min-h-[236px] md:mb-8 sm:mb-6 mb-4 bg_gradient opacity-20'
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="sm:hidden px-5 pt-5 flex flex-row items-center justify-between">
        <Image
          src={BackArrow}
          alt="/"
          width={16}
          height={16}
        />

        <button 
          className={`flex items-center py-2 px-3 bg-transparent rounded border-solid border-[0.8px] border-white`}
        >
          <p className='text-sm font-medium text-white'>Join Group</p>
          </button>
      </div>
      
      <div className="max-w-[1040px] xl:px-0 sm:px-8 px-5 mx-auto md:pt-[260px] sm:pt-[200px] pt-[100px] flex flex-col items-start justify-end">
        <h1 className='lg:text-[36px] sm:text-3xl text-[20px] font-bold text-white inline-block'>Computer Engineering </h1>
        <p className='mt-1 lg:text-lg sm:text-base text-sm text-white inline-block'>142,765 Computer Engineers follow this</p>
      </div>
    </header>
  )
}

export default Header;