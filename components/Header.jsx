import React from 'react';


const Header = () => {
  return (
    <header 
        className='sm:min-h-[440px] min-h-[236px] mb-8 bg'
    >
        <div className="max-w-[1040px] xl:px-0 sm:px-8 px-5 mx-auto sm:pt-[260px] pt-[140px] flex flex-col items-start justify-end">
            <h1 className='lg:text-[36px] sm:text-3xl text-[20px] font-bold text-white inline-block'>Computer Engineering </h1>
            <p className='mt-1 lg:text-lg sm:text-base text-sm text-white inline-block'>142,765 Computer Engineers follow this</p>
        </div>
    </header>
  )
}

export default Header;