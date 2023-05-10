import Card from "./Card";

import ArticleBg from '../assets/Article_bg.png';
import SarthaKamra from '../assets/sarthak_kamra.png';
import SarahWest from '../assets/sarah_west.png';
import EducationBg from '../assets/education_bg.png';
import MeetUpBg from '../assets/meetup_bg.png';
import RonalJones from '../assets/ronal_jones.png';
import CalenderVector from '../assets/calenderVector.png';
import JobVector from '../assets/JobVector.png';
import JosephGray from '../assets/joseph_gray.png';


export const allPosts = [
    <Card 
        key={1}
        bgImg={ArticleBg} 
        contentType={'Article'}
        contentHeading={'What if famous brands had regular fonts? Meet RegulaBrands!'}
        mainContent={'I’ve worked in UX for the better part of a decade. From now on, I plan to rei'}
        ownerImg={SarthaKamra}
        ownerName={'Sarthak Kamra'}
    />,
    <Card 
        key={2}
        bgImg={EducationBg} 
        contentType={'Education'}
        contentHeading={'Tax Benefits for Investment under National Pension Scheme launched by Government'}
        mainContent={'I’ve worked in UX for the better part of a decade. From now on, I plan to rei'}
        ownerImg={SarahWest}
        ownerName={'Sarah West'}
    />,
    <Card 
        key={3}
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
    />,
    <Card 
        key={4}
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
]


export const articles = [
    <Card 
        key={1}
        bgImg={ArticleBg} 
        contentType={'Article'}
        contentHeading={'What if famous brands had regular fonts? Meet RegulaBrands!'}
        mainContent={'I’ve worked in UX for the better part of a decade. From now on, I plan to rei'}
        ownerImg={SarthaKamra}
        ownerName={'Sarthak Kamra'}
    />,
    <Card 
        key={2}
        bgImg={ArticleBg} 
        contentType={'Article'}
        contentHeading={'What if famous brands had regular fonts? Meet RegulaBrands!'}
        mainContent={'I’ve worked in UX for the better part of a decade. From now on, I plan to rei'}
        ownerImg={SarthaKamra}
        ownerName={'Sarthak Kamra'}
    />,
    <Card 
        key={3}
        bgImg={ArticleBg} 
        contentType={'Article'}
        contentHeading={'What if famous brands had regular fonts? Meet RegulaBrands!'}
        mainContent={'I’ve worked in UX for the better part of a decade. From now on, I plan to rei'}
        ownerImg={SarthaKamra}
        ownerName={'Sarthak Kamra'}
    />
]


export const events = [
    <Card 
        key={1}
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
    />,
    <Card 
        key={2}
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
    />,
    <Card 
        key={3}
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
]


export const education = [
    <Card 
        key={1}
        bgImg={EducationBg} 
        contentType={'Education'}
        contentHeading={'Tax Benefits for Investment under National Pension Scheme launched by Government'}
        mainContent={'I’ve worked in UX for the better part of a decade. From now on, I plan to rei'}
        ownerImg={SarahWest}
        ownerName={'Sarah West'}
    />,
    <Card 
        key={2}
        bgImg={EducationBg} 
        contentType={'Education'}
        contentHeading={'Tax Benefits for Investment under National Pension Scheme launched by Government'}
        mainContent={'I’ve worked in UX for the better part of a decade. From now on, I plan to rei'}
        ownerImg={SarahWest}
        ownerName={'Sarah West'}
    />,
    <Card 
        key={3}
        bgImg={EducationBg} 
        contentType={'Education'}
        contentHeading={'Tax Benefits for Investment under National Pension Scheme launched by Government'}
        mainContent={'I’ve worked in UX for the better part of a decade. From now on, I plan to rei'}
        ownerImg={SarahWest}
        ownerName={'Sarah West'}
    />
]

export const jobs = [
    <Card  
        key={1}
        contentType={'Job'}
        contentHeading={'Software Developer'}
        GenericVector={JobVector}
        genericText={'Innovaccer Analytics Private Ltd.'}
        locationText={'Noida, India'}
        buttonColor={'text-[#02B875]'}
        buttonText={'Apply on Timesjobs'}
        ownerImg={JosephGray}
        ownerName={'Joseph Gray'}
    />,
    <Card 
        key={2}
        contentType={'Job'}
        contentHeading={'Software Developer'}
        GenericVector={JobVector}
        genericText={'Innovaccer Analytics Private Ltd.'}
        locationText={'Noida, India'}
        buttonColor={'text-[#02B875]'}
        buttonText={'Apply on Timesjobs'}
        ownerImg={JosephGray}
        ownerName={'Joseph Gray'}
    />,
    <Card
        key={3} 
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
]