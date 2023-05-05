import React, { useState } from 'react';
import Image from 'next/image';
import JoinGroup from '../assets/joinGroupVector.png';
import CancelVector from '../assets/timesVector.png';
import FacebookIcon from '../assets/facebook_icon.png';
import GoogleIcon from '../assets/google_icon.png';
import ModalImg from '../assets/modal_Img.png';


function SignIn() {
    const [showModal, setShowModal] = useState(false)

    // Prevents child element from inheriting parent element's onClick
    const handleChildElementClick = (e) => {
        e.stopPropagation()
    }

  return (
    <>
        <div className='w-auto'>
            <button 
                className={`flex items-center py-2 px-3 bg-[#2F6CE5] rounded`}
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
        </div>

      {showModal ? (
        <>
            <div
                onClick={(e) => handleChildElementClick(e)}
                className='overflow-auto fixed inset-0 z-[60] outline-none focus:outline-none'
            >
                <div
                    className='relative max-w-[736px] mb-6 mt-44 mx-auto'
                >
                    {/*content*/}
                    <div className='border-0 rounded-lg shadow-xl relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                        {/*header*/}
                        <div className='flex items-center justify-between py-[17px] px-12 rounded-t-lg bg-[#EFFFF4]'>
                            <p
                                className='font-medium text-sm text-center text-[#008A45] w-full'
                            >
                                Let&apos;s learn, share & inspire each other with our passion for computer engineering. Sign up now
                            </p>
                            <span
                                className='w-auto h-auto inline-block hover:cursor-pointer absolute top-[-20px] right-[-30px]'
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
                        <div className='relative py-6 px-[30px] flex-auto flex items-start justify-between'>
                            <div className="flex flex-col items-start justify-start w-[50%]">
                                <p className="font-bold text-black text-2xl pb-6">Sign In</p>

                                <form className='max-w-[320px]'>
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

                                    <button type='submit' className='bg-[#2F6CE5] rounded-[20px] w-full p-3 my-5'>
                                        <p className="font-semibold text-white text-sm text-center">Sign In</p>
                                    </button>

                                    <div className="border-solid border-[0.6px] border-[#D9D9DB] w-full rounded-sm p-3 mb-2 flex items-center justify-center">
                                        <Image
                                            src={FacebookIcon}
                                            alt="/"
                                            width={16}
                                            height={16}
                                        />
                                        <p className="pl-[10px] font-normal text-sm">Sign up with Facebook</p>
                                    </div>
                                    <div className="border-solid border-[0.6px] border-[#D9D9DB] w-full rounded-sm p-3 flex items-center justify-center">
                                        <Image
                                            src={GoogleIcon}
                                            alt="/"
                                            width={16}
                                            height={16}
                                        />
                                        <p className="pl-[10px] font-normal text-sm">Sign up with Google</p>
                                    </div>
                                    <div className="w-full flex items-center justify-center mt-6">
                                        <p className="font-normal text-sm">Forgot Password?</p>
                                    </div>
                                </form>
                            </div>

                            <div className="flex flex-col items-center justify-start w-[50%]">
                                <p className="text-sm font-semibold w-full text-right text-[#3D3D3D]">
                                    Don’t have an account yet? 
                                    <span className="text-[#2F6CE5] pl-1">Create new for free!</span> 
                                </p>

                                <div className="my-[50px] max-w-[258.16px] min-h-[260.84px]">
                                    <Image
                                        src={ModalImg}
                                        alt="/"
                                        className='w-full h-auto'
                                        width={'auto'}
                                        height={'auto'}
                                    />
                                </div>
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

export default SignIn;
