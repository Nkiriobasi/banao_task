import Image from 'next/image';
import Logo from '../assets/logo.png';
import SearchIcon from '../assets/input_icon.png';
import DownArrow from '../assets/down_arrow_icon.png';

const Navbar = () => {
  return (
    <nav className='bg-white w-full h-[72px] xl:px-20 px-8 py-2.5 flex items-center justify-between'>
        <div className='w-auto h-auto'>
            <Image
                src={Logo}
                alt="Logo"
                width={162.58}
                height={24.01}
            />
        </div>

        <div className="bg-[#F2F2F2] w-[360px] h-[42px] rounded-3xl flex items-center pr-2 pl-3 py-2">
            <Image
                src={SearchIcon}
                alt="search"
                width={16.03}
                height={16.03}
            />
            <input 
                type="text" 
                placeholder='Search for your favorite groups in ATG' 
                className='w-full h-full flex-1 outline-0 border-none bg-inherit ml-4 placeholder:text-[#5C5C5C] text-sm text-[#5C5C5C]'
            />
        </div>

        <div className="flex items-center">
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
        </div>
    </nav>
  )
}

export default Navbar;