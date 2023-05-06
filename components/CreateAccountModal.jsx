import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JoinGroup from '../assets/joinGroupVector.png';
import CancelVector from '../assets/timesVector.png';
import mobileCancelVector from '../assets/mobileTimesVector.png';
import FacebookIcon from '../assets/facebook_icon.png';
import GoogleIcon from '../assets/google_icon.png';
import ModalImg from '../assets/modal_Img.png';
import WhiteAddVector from '../assets/white_addVector.png';


function CreateAccount() {
    const [showModal, setShowModal] = useState(false)

    // Prevents child element from inheriting parent element's onClick
    const handleChildElementClick = (e) => {
        e.stopPropagation()
    }

  return (
    <>
        <div className='w-auto'>
            <button 
                className={`sm:flex hidden items-center py-2 px-3 bg-[#2F6CE5] rounded`}
                onClick={() => setShowModal(true)}
            >
                <Image
                    src={JoinGroup}
                    alt="/"
                    width={22}
                    height={12}
                />
                <p className='ml-2 text-sm font-medium text-white'>Join Group</p>
            </button>

            <button 
                className={`fixed_button w-[54px] h-[54px] fixed bottom-6 right-6 sm:hidden flex items-center justify-center py-2 px-3 rounded-full z-[70]`}
                onClick={() => setShowModal(true)}
            >
                <Image
                    src={WhiteAddVector}
                    alt="/"
                    width={18}
                    height={18}
                />
            </button>
        </div>

      {showModal ? (
        <>
            <div
                onClick={(e) => handleChildElementClick(e)}
                className='overflow-auto fixed sm:inset-0 bottom-0 left-0 right-0 z-[70] outline-none focus:outline-none'
            >
                <div
                    className='relative md:max-w-[736px] max-w-[600px] sm:mb-6 mb-0 mt-44 mx-auto'
                >
                    {/*content*/}
                    <div className='border-0 sm:rounded-lg rounded-t-lg shadow-xl relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                        {/*header*/}
                        <div className='md:flex hidden items-center justify-between py-[17px] px-12 rounded-t-lg bg-[#EFFFF4]'>
                            <p
                                className='font-medium text-sm text-center text-[#008A45] w-full'
                            >
                                Let&apos;s learn, share & inspire each other with our passion for computer engineering. Sign up now
                            </p>
                            <span
                                className='w-auto h-auto md:inline-block hidden hover:cursor-pointer absolute lg:top-[-20px] top-[-40px] lg:right-[-30px] right-[-10px]'
                                onClick={() => setShowModal(false)}
                            >
                                <Image
                                    src={CancelVector}
                                    alt="/"
                                    width={23.33}
                                    height={23.33}
                                />
                            </span>
                        </div>

                        {/*body*/}
                        <div className='relative py-6 px-[30px] flex-auto flex items-start justify-between md:rounded-none rounded-t-lg'>
                            <div className="flex flex-col items-start justify-start md:w-[50%] w-full">
                                <p className="font-bold text-black md:text-2xl text-lg pb-6">Create Account</p>

                                <span
                                    className='w-auto h-auto inline-block hover:cursor-pointer md:hidden absolute top-6 right-7'
                                    onClick={() => setShowModal(false)}
                                >
                                    <Image
                                        src={mobileCancelVector}
                                        alt="/"
                                        width={20}
                                        height={20}
                                    />
                                </span>

                                <form className='md:max-w-[320px] max-w-full w-full'>
                                    <span className="flex items-center w-full">
                                        <input 
                                            type="text" 
                                            placeholder='First Name' 
                                            className={`bg-[#F7F8FA] text-sm placeholder:text-sm border font-medium outline-none 
                                            border-[#D9D9DB] border-solid w-[50%] p-3 placeholder:text-[#8A8A8A] placeholder:font-medium`} 
                                        />
                                        <input 
                                            type="text" 
                                            placeholder='Last Name' 
                                            className={`bg-[#F7F8FA] text-sm placeholder:text-sm border font-medium outline-none 
                                            border-[#D9D9DB] border-solid w-[50%] p-3 placeholder:text-[#8A8A8A] placeholder:font-medium`} 
                                        />
                                    </span>
                                    <input 
                                        type="text" 
                                        placeholder='Email' 
                                        className={`bg-[#F7F8FA] text-sm placeholder:text-sm border font-medium outline-none 
                                        border-[#D9D9DB] border-solid w-full p-3 placeholder:text-[#8A8A8A] placeholder:font-medium`} 
                                    />
                                    <input 
                                        type="text" 
                                        placeholder='Password' 
                                        className={`bg-[#F7F8FA] text-sm placeholder:text-sm border font-medium outline-none 
                                        border-[#D9D9DB] border-solid w-full p-3 placeholder:text-[#8A8A8A] placeholder:font-medium`} 
                                    />
                                    <input 
                                        type="text" 
                                        placeholder='Comfirm Password' 
                                        className={`bg-[#F7F8FA] text-sm placeholder:text-sm border font-medium outline-none 
                                        border-[#D9D9DB] border-solid w-full p-3 placeholder:text-[#8A8A8A] placeholder:font-medium`} 
                                    />

                                    <div className="w-full my-5 md:block flex items-center justify-between">
                                        <button type='submit' className='bg-[#2F6CE5] rounded-[20px] md:w-full w-[48%] p-3'>
                                            <p className="font-semibold text-white text-sm text-center">Create Account</p>
                                        </button>

                                        <Link href='' className='text-[#495057] font-medium text-sm underline md:hidden inline-block'>or, Sign In</Link>
                                    </div>

                                    <div className="cursor-pointer border-solid border-[0.6px] border-[#D9D9DB] w-full rounded-sm p-3 mb-2 flex items-center justify-center">
                                        <Image
                                            src={FacebookIcon}
                                            alt="/"
                                            width={16}
                                            height={16}
                                        />
                                        <p className="pl-[10px] font-normal text-sm">Sign up with Facebook</p>
                                    </div>
                                    <div className="cursor-pointer border-solid border-[0.6px] border-[#D9D9DB] w-full rounded-sm p-3 md:mb-0 mb-3 flex items-center justify-center">
                                        <Image
                                            src={GoogleIcon}
                                            alt="/"
                                            width={16}
                                            height={16}
                                        />
                                        <p className="pl-[10px] font-normal text-sm">Sign up with Google</p>
                                    </div>

                                    <p className="max-w-[240px] mx-auto w-full text-center font-normal text-[#212529] text-xs md:hidden block">
                                        By signing up, you agree to our Terms & conditions, Privacy policy
                                    </p>
                                </form>
                            </div>

                            <div className="md:flex hidden flex-col items-center justify-start w-[50%]">
                                <p className="text-sm font-semibold w-full text-right text-[#3D3D3D]">
                                    Already have an account? 
                                    <span className="text-[#2F6CE5] pl-1">Sign In</span> 
                                </p>

                                <Image
                                    src={ModalImg}
                                    alt="/"
                                    className='w-[76%] h-full my-[50px]'
                                    // width={'auto'}
                                    // height={'auto'}
                                />

                                <p className="font-normal text-[#000000] opacity-60 text-xs">
                                    By signing up, you agree to our Terms & conditions, Privacy policy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          <div className='opacity-40 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  )
}

export default CreateAccount;
