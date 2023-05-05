import React from 'react';
import Image from 'next/image';

import ProfileImg from '../assets/profileImg.png';
import DownArrow from '../assets/down_arrow_icon.png';



const ProfilePanel = () => {
  return (
    <section className='w-auto space-x-3 md:inline-flex items-center hidden'>
        <Image
            src={ProfileImg}
            alt="/"
            width={36}
            height={36}
        />
        <h4 className="font-normal text-sm text-black lg:block hidden">Siddharth Goyal</h4>
        <Image
            src={DownArrow}
            alt="/"
            width={9.17}
            height={4.58}
        />
    </section>
  )
}

export default ProfilePanel;