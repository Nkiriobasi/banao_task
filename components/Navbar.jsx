import Image from 'next/image';
import Logo from '../assets/logo.png';
import SearchIcon from '../assets/input_icon.png';
import DownArrow from '../assets/down_arrow_icon.png';
import ProfilePanel from './ProfilePanel';
import MobileToggle from '../assets/nav_mobile.png';


const Navbar = () => {
  return (
    <nav className={`bg-white w-full h-[72px] xl:px-20 px-8 py-2.5 fixed right-0 left-0 
        top-0 z-30 flex items-center justify-between border-b border-solid border-[#E0E0E0]`}
    >
        <div className='w-auto h-auto'>
            <Image
                src={Logo}
                alt="Logo"
                width={162.58}
                height={24.01}
                className='lg:w-[162.58px] w-[142.58px] h-auto cursor-pointer'
            />
        </div>

        <div className="bg-[#F2F2F2] lg:w-[360px] w-[300px] h-[42px] rounded-3xl md:flex items-center hidden pr-2 pl-3 py-2">
            <Image
                src={SearchIcon}
                alt="search"
                width={'auto'}
                height={'auto'}
                className='lg:w-4 w-[14px] lg:h-4 h-[14px]'
            />
            <input 
                type="text" 
                placeholder='Search for your favorite groups in ATG' 
                className={`w-full h-full flex-1 outline-0 border-none bg-inherit ml-4 lg:text-sm text-xs
                placeholder:text-[#5C5C5C] text-[#5C5C5C] lg:placeholder:text-sm placeholder:text-xs`}
            />
        </div>

        {/* <div className="flex items-center">
            <p className="text-[#2E2E2E] text-base font-medium">
                Create account.
            </p>
            <p className="text-[#2F6CE5] pl-1 pr-2">
                It’s free!
            </p>

            <Image
                src={DownArrow}
                alt="arrow"
                width={10}
                height={5}
            />
        </div> */}
        <ProfilePanel />

        <span className='md:hidden inline-block w-[25px] h-[25px] cursor-pointer'>
            <Image
                src={MobileToggle}
                alt="/"
                className='w-full h-full'
                width={'auto'}
                height={'auto'}
            />
        </span>
    </nav>
  )
}

export default Navbar;