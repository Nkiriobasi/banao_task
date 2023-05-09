import React, { useState } from 'react';
import Image from 'next/image';

import DownArrow from '../assets/down_arrow_icon.png';
import ArticleBg from '../assets/Article_bg.png';
import SarthaKamra from '../assets/sarthak_kamra.png';
import SarahWest from '../assets/sarah_west.png';
import EducationBg from '../assets/education_bg.png';
import MeetUpBg from '../assets/meetup_bg.png';
import RonalJones from '../assets/ronal_jones.png';
import CalenderVector from '../assets/calenderVector.png';
import JobVector from '../assets/JobVector.png';
import JosephGray from '../assets/joseph_gray.png';
import DownArrowIcon from '../assets/down_arrow_icon.png';

import Card from '../components/Card';
import LocationEditField from './LocationEditField';
import SignIn from './SignInModal';


const TabView = () => {
    const [toggle, setToggle] = useState(1);
    const [buttonToggler, setButtonToggler] = useState(false)


    const updateToggle = (id) => {
        setToggle(id)
    }

  return (
    <section className='max-w-[1040px] xl:px-0 sm:px-8 px-5 mx-auto'>
        <div className={`flex items-center justify-between border-b border-solid 
            border-[#E0E0E0] py-3 mb-7 overflow-y-auto sticky top-[72px] z-[70] bg-white`}
        >
            <ul className='w-auto sm:flex hidden items-center'>
                <li 
                    className={`mr-5 font-medium md:text-base text-sm cursor-pointer 
                    ${toggle === 1 ? 'text-black' : 'text-[#8A8A8A]'}`} 
                    onClick={() => updateToggle(1)}
                >
                    All Posts(32)
                </li>
                <li 
                    className={`mr-5 font-medium md:text-base text-sm cursor-pointer 
                    ${toggle === 2 ? 'text-black' : 'text-[#8A8A8A]'}`} 
                    onClick={() => updateToggle(2)}
                >
                    Article
                </li>
                <li 
                    className={`mr-5 font-medium md:text-base text-sm cursor-pointer 
                    ${toggle === 3 ? 'text-black' : 'text-[#8A8A8A]'}`} 
                    onClick={() => updateToggle(3)}
                >
                    Event
                </li>
                <li 
                    className={`mr-5 font-medium md:text-base text-sm cursor-pointer 
                    ${toggle === 4 ? 'text-black' : 'text-[#8A8A8A]'}`} 
                    onClick={() => updateToggle(4)}
                >
                    Education
                </li>
                <li 
                    className={`mr-5 font-medium md:text-base text-sm cursor-pointer 
                    ${toggle === 5 ? 'text-black' : 'text-[#8A8A8A]'}`} 
                    onClick={() => updateToggle(5)}
                >
                    Job
                </li>
            </ul>

            <p className='sm:hidden block text-sm text-black font-medium'>Posts(32)</p>

            <div className="flex items-center">
                <button className={`md:flex hidden items-center py-2 px-3 bg-[#EDEEF0] mr-4 rounded cursor-pointer`}>
                    <p className='mr-2 text-black font-medium text-sm'>Write a Post</p>
                    <Image
                        src={DownArrow}
                        alt="/"
                        width={9.17}
                        height={4.58}
                    />
                </button>

                <SignIn />

                <span className="inline-block relative">
                    <button 
                        onClick={() => setButtonToggler(!buttonToggler)}
                        className={`sm:hidden flex items-center justify-between py-2 px-2 bg-[#F1F3F5] space-x-3 rounded cursor-pointer`} 
                        type="button"
                    > 
                        <p className='text-sm text-[#212529] font-medium'>Filter: All</p>

                        <Image
                            src={DownArrowIcon}
                            alt="/"
                            width={8.33}
                            height={4.17}
                        />
                    </button>

                    <div 
                        className={`z-10 bg-white divide-y divide-gray-100 rounded-[4px] shadow w-auto 
                        ${buttonToggler ? 'block' : 'hidden'} absolute right-0`}
                    >
                        <ul className="py-2">
                            <li className="block px-4 py-2 text-black text-sm"> 
                                Posts(32)
                            </li>
                            <li className="block px-4 py-2 text-black text-sm"> 
                                Article
                            </li>
                            <li className="block px-4 py-2 text-black text-sm"> 
                                Event
                            </li>
                            <li className="block px-4 py-2 text-black text-sm"> 
                                Education
                            </li>
                            <li className="block px-4 py-2 text-black text-sm"> 
                                Job
                            </li>
                        </ul>
                    </div>
                </span>
            </div>
        </div>
        
        <div className="w-full relative">
            <div>
                <div className={toggle === 1 ? 'block' : 'hidden'}>
                    <Card 
                        bgImg={ArticleBg} 
                        contentType={'Article'}
                        contentHeading={'What if famous brands had regular fonts? Meet RegulaBrands!'}
                        mainContent={'I’ve worked in UX for the better part of a decade. From now on, I plan to rei'}
                        ownerImg={SarthaKamra}
                        ownerName={'Sarthak Kamra'}
                    />

                    <Card 
                        bgImg={EducationBg} 
                        contentType={'Education'}
                        contentHeading={'Tax Benefits for Investment under National Pension Scheme launched by Government'}
                        mainContent={'I’ve worked in UX for the better part of a decade. From now on, I plan to rei'}
                        ownerImg={SarahWest}
                        ownerName={'Sarah West'}
                    />

                    <Card 
                        bgImg={MeetUpBg} 
                        contentType={'Meetup'}
                        contentHeading={'Finance & Investment Elite Social Mixer @Lujiazui'}
                        GenericVector={CalenderVector}
                        genericText={'Fri, 12 Oct, 2018'}
                        locationText={'Ahmedabad, India'}
                        buttonColor={'text-[#E56135]'}
                        buttonText={'Visit Website'}
                        ownerImg={RonalJones}
                        ownerName={'Ronal Jones'}
                    />

                    <Card 
                        contentType={'Job'}
                        contentHeading={'Software Developer'}
                        GenericVector={JobVector}
                        genericText={'Innovaccer Analytics Private Ltd.'}
                        locationText={'Noida, India'}
                        buttonColor={'text-[#02B875]'}
                        buttonText={'Apply on Timesjobs'}
                        ownerImg={JosephGray}
                        ownerName={'Joseph Gray'}
                    />
                </div>

                <div className={toggle === 2 ? 'block' : 'hidden'}>
                    <Card 
                        bgImg={ArticleBg} 
                        contentType={'Article'}
                        contentHeading={'What if famous brands had regular fonts? Meet RegulaBrands!'}
                        mainContent={'I’ve worked in UX for the better part of a decade. From now on, I plan to rei'}
                        ownerImg={SarthaKamra}
                        ownerName={'Sarthak Kamra'}
                    />
                    <Card 
                        bgImg={ArticleBg} 
                        contentType={'Article'}
                        contentHeading={'What if famous brands had regular fonts? Meet RegulaBrands!'}
                        mainContent={'I’ve worked in UX for the better part of a decade. From now on, I plan to rei'}
                        ownerImg={SarthaKamra}
                        ownerName={'Sarthak Kamra'}
                    />
                    <Card 
                        bgImg={ArticleBg} 
                        contentType={'Article'}
                        contentHeading={'What if famous brands had regular fonts? Meet RegulaBrands!'}
                        mainContent={'I’ve worked in UX for the better part of a decade. From now on, I plan to rei'}
                        ownerImg={SarthaKamra}
                        ownerName={'Sarthak Kamra'}
                    />
                </div>

                <div className={toggle === 3 ? 'block' : 'hidden'}>
                    <Card 
                        bgImg={MeetUpBg} 
                        contentType={'Meetup'}
                        contentHeading={'Finance & Investment Elite Social Mixer @Lujiazui'}
                        GenericVector={CalenderVector}
                        genericText={'Fri, 12 Oct, 2018'}
                        locationText={'Ahmedabad, India'}
                        buttonColor={'text-[#E56135]'}
                        buttonText={'Visit Website'}
                        ownerImg={RonalJones}
                        ownerName={'Ronal Jones'}
                    />
                    <Card 
                        bgImg={MeetUpBg} 
                        contentType={'Meetup'}
                        contentHeading={'Finance & Investment Elite Social Mixer @Lujiazui'}
                        GenericVector={CalenderVector}
                        genericText={'Fri, 12 Oct, 2018'}
                        locationText={'Ahmedabad, India'}
                        buttonColor={'text-[#E56135]'}
                        buttonText={'Visit Website'}
                        ownerImg={RonalJones}
                        ownerName={'Ronal Jones'}
                    />
                    <Card 
                        bgImg={MeetUpBg} 
                        contentType={'Meetup'}
                        contentHeading={'Finance & Investment Elite Social Mixer @Lujiazui'}
                        GenericVector={CalenderVector}
                        genericText={'Fri, 12 Oct, 2018'}
                        locationText={'Ahmedabad, India'}
                        buttonColor={'text-[#E56135]'}
                        buttonText={'Visit Website'}
                        ownerImg={RonalJones}
                        ownerName={'Ronal Jones'}
                    />
                </div>

                <div className={toggle === 4 ? 'block' : 'hidden'}>
                    <Card 
                        bgImg={EducationBg} 
                        contentType={'Education'}
                        contentHeading={'Tax Benefits for Investment under National Pension Scheme launched by Government'}
                        mainContent={'I’ve worked in UX for the better part of a decade. From now on, I plan to rei'}
                        ownerImg={SarahWest}
                        ownerName={'Sarah West'}
                    />
                    <Card 
                        bgImg={EducationBg} 
                        contentType={'Education'}
                        contentHeading={'Tax Benefits for Investment under National Pension Scheme launched by Government'}
                        mainContent={'I’ve worked in UX for the better part of a decade. From now on, I plan to rei'}
                        ownerImg={SarahWest}
                        ownerName={'Sarah West'}
                    />

                    <Card 
                        bgImg={EducationBg} 
                        contentType={'Education'}
                        contentHeading={'Tax Benefits for Investment under National Pension Scheme launched by Government'}
                        mainContent={'I’ve worked in UX for the better part of a decade. From now on, I plan to rei'}
                        ownerImg={SarahWest}
                        ownerName={'Sarah West'}
                    />
                </div>

                <div className={toggle === 5 ? 'block' : 'hidden'}>
                    <Card 
                        contentType={'Job'}
                        contentHeading={'Software Developer'}
                        GenericVector={JobVector}
                        genericText={'Innovaccer Analytics Private Ltd.'}
                        locationText={'Noida, India'}
                        buttonColor={'text-[#02B875]'}
                        buttonText={'Apply on Timesjobs'}
                        ownerImg={JosephGray}
                        ownerName={'Joseph Gray'}
                    />

                    <Card 
                        contentType={'Job'}
                        contentHeading={'Software Developer'}
                        GenericVector={JobVector}
                        genericText={'Innovaccer Analytics Private Ltd.'}
                        locationText={'Noida, India'}
                        buttonColor={'text-[#02B875]'}
                        buttonText={'Apply on Timesjobs'}
                        ownerImg={JosephGray}
                        ownerName={'Joseph Gray'}
                    />

                    <Card 
                        contentType={'Job'}
                        contentHeading={'Software Developer'}
                        GenericVector={JobVector}
                        genericText={'Innovaccer Analytics Private Ltd.'}
                        locationText={'Noida, India'}
                        buttonColor={'text-[#02B875]'}
                        buttonText={'Apply on Timesjobs'}
                        ownerImg={JosephGray}
                        ownerName={'Joseph Gray'}
                    />
                </div>
            </div>

            <LocationEditField />
        </div>
    </section>
  )
}

export default TabView