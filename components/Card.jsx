import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import Visibility from '../assets/visibility.png';
import ViewVector from '../assets/viewVector.png';
import LocationVector from '../assets/locationVector.png';



const Card = (props) => {
    const [menuToggler, setMenuToggler] = useState(false)

    const {
        bgImg,
        contentType,
        contentHeading,
        mainContent,
        ownerImg,
        ownerName,
        GenericVector,
        genericText,
        locationText,
        buttonText,
        buttonColor,
    } = props

  return (
    <div className='bg-white border border-[#E0E0E0] border-solid rounded lg:max-w-[692px] max-w-full h-auto mb-4'>
        {bgImg 
        ?    
            <Image src={bgImg} alt="/" className="w-full min-h-[220px]" width={'auto'} height={'auto'}/>
        :    
            null
        }

        <div className="p-5">
            <p className="ml-4 mb-[10px] font-medium sm:text-lg text-sm text-black inline-block">{contentType}</p>

            <span className="w-full flex justify-between items-start mb-3">
                <p className="md:max-w-[580px] sm:max-w-[460px] max-w-[280px] font-semibold sm:text-[22px] text-base">{contentHeading}</p>
                <span className="inline-block relative">
                    <button 
                        onClick={() => setMenuToggler(!menuToggler)}
                        className="inline-flex items-center p-2 mb-1 text-sm font-medium text-center bg-white rounded-[4px] hover:bg-[#BFC0C0] text-black" type="button"
                    > 
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                    </button>

                    <div 
                        className={`z-10 bg-white divide-y divide-gray-100 rounded-[4px] shadow w-[160px] 
                        ${menuToggler ? 'block' : 'hidden'} absolute right-0`}
                    >
                        <ul className="py-2">
                            <li>
                                <Link href="#" className="block px-4 py-2 text-black text-sm">
                                    Edit
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="block px-4 py-2 text-black text-sm">
                                    Report
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="block px-4 py-2 text-black text-sm">
                                    Option 3
                                </Link>
                            </li>
                        </ul>
                    </div>
                </span>
            </span>

            {mainContent 
            ?
               <p className="w-full truncate ... sm:mb-8 mb-5 sm:text-base text-sm">{mainContent}</p> 
            : 
                <div className='flex flex-col items-start justify-start mt-3 mb-8'>
                    <div className="sm:inline-flex flex sm:flex-row flex-col sm:items-center items-start justify-start sm:space-x-10 space-x-0 sm:space-y-0 space-y-2 mb-4">
                        <span className="inline-flex items-center justify-start space-x-3">
                            <Image
                                src={GenericVector}
                                alt="/"
                                width={15}
                                height={15}
                            />
                            <p className="font-medium text-sm text-black">{genericText}</p>
                        </span>

                        <span className="inline-flex items-center justify-start space-x-3">
                            <Image
                                src={LocationVector}
                                alt="/"
                                width={10.5}
                                height={15}
                            />
                            <p className="font-medium text-sm text-black">{locationText}</p>
                        </span>
                    </div>

                    <div className="w-full border-[#A9AEB8] border-solid border-[0.7px] rounded-lg flex items-center justify-center py-[10px] px-4 cursor-pointer">
                        <p className={`font-semibold text-sm text-center ${buttonColor}`}>{buttonText}</p>
                    </div>
                </div>
            }


            <span className="w-full flex justify-between items-center">
                <span className="flex justify-start items-center">
                    <Image
                        src={ownerImg}
                        alt="/"
                        width={48}
                        height={48}
                        className="sm:w-[48px] w-[37px] sm:h-[48px] h-[37px] rounded-3xl"
                    />
                    <span className="ml-[10px] flex flex-col items-start justify-start">
                        <p className="font-semibold text-black sm:text-lg text-xs mb-1">{ownerName}</p>

                        <span className="sm:hidden flex justify-start items-center">
                            <Image
                                src={Visibility}
                                alt="/"
                                width={16.5}
                                height={11.25}
                            />
                            <p className="font-medium text-xs ml-[6px]">1.4k views</p>
                        </span>
                    </span>
                </span>

                <span className="flex justify-end items-center">
                    <span className="sm:flex hidden justify-start items-center mr-10">
                        <Image
                            src={Visibility}
                            alt="/"
                            width={16.5}
                            height={11.25}
                        />
                        <p className="font-medium text-sm ml-[6px]">1.4k views</p>
                    </span>

                    <span className="inline-flex items-center justify-center bg-[#EDEEF0] rounded-sm w-[42px] h-[36px]">
                        <Image
                            src={ViewVector}
                            alt="/"
                            width={13.5}
                            height={14.94}
                            className='cursor-pointer'
                        />
                    </span>
                </span>
            </span>
        </div>
    </div>
  )
}

export default Card